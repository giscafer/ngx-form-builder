import {
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  Injectable,
  Component,
  NgModule,
  Compiler,
  OnChanges,
  ChangeDetectorRef,
  OnDestroy,
  OnInit,
  DoCheck,
  KeyValueDiffers
} from '@angular/core';

import { WidgetRegistry } from './widget-registry';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { setInterval, clearInterval } from 'timers';
import { ActionRegistry } from './model/actionregistry';

@Injectable()
export class WidgetFactory {

  private registry: WidgetRegistry;

  constructor(
    registry: WidgetRegistry,
    private compiler: Compiler) {
    this.registry = registry;
  }


  public addWidget(container: ViewContainerRef, template: string, properties: any = {}, context: any) {

    @Component({ template })
    class TemplateComponent implements OnInit, DoCheck, OnDestroy {

      formProperty: any;

      interval: any;

      _differ: any;

      action: Function;
      buttons = [];

      constructor(
        private _differs: KeyValueDiffers,
        private actionRegistry: ActionRegistry,
        private changeDetectorRef: ChangeDetectorRef
      ) {

      }

      ngOnInit(): void {
        this._differ = this._differs.find(this[this['modelName']]).create();
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }
        this._parseButtons();
      }

      ngDoCheck() {
        if (this._differ) {
          const changes = this._differ.diff(this[this['modelName']]);
          if (changes) {
            this._applyChanges(changes);
            if (this['_debug_']) {
              console.warn('model changes', this[this['modelName']]);
            }
          }
        }
      }

      _parseButtons() {
        let schema = properties.formProperty.schema;
        if (schema.buttons !== undefined) {
          this.buttons = schema.buttons;

          for (let button of this.buttons) {
            this._createButtonCallback(button);
          }
        }
      }

      _createButtonCallback(button) {
        this.action = (e, id) => {
          let action;
          if (id && (action = this.actionRegistry.get(id))) {
            if (action) {
              action(properties.formProperty, this._getBtnParameters(id));
              // TODO，临时解决方案
              if (id === 'reset') {
                this[this['modelName']] = {};
              }
            }
          }
          e.preventDefault();
        };
      }

      _applyChanges(changes) {
        context.onChange.emit({ value: this[this['modelName']] });
        context.modelChanged.emit(this[this['modelName']]);
      }

      _getBtnParameters(id) {
        for (let btn of this.buttons) {
          if (id === btn.id) {
            return btn.parameters;
          }
        }
      }

      addItem() {
        this.formProperty.addItem();
      }

      removeItem(index: number) {
        this.formProperty.removeItem(index);
      }

      ngOnDestroy() {
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }
      }

    }

    @NgModule({
      declarations: [TemplateComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      providers: [ActionRegistry]
    })
    class TemplateModule { }

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );
    const component = container.createComponent(factory);
    Object.assign(component.instance, properties);

    return component;
  }
}
