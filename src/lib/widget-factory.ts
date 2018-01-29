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
import { ReactiveFormsModule } from '@angular/forms';
import { setInterval, clearInterval } from 'timers';

@Injectable()
export class WidgetFactory {

  private registry: WidgetRegistry;

  constructor(registry: WidgetRegistry, private compiler: Compiler) {
    this.registry = registry;
  }


  public addWidget(container: ViewContainerRef, template: string, properties: any = {}, context: any) {

    @Component({ template })
    class TemplateComponent implements OnInit, DoCheck, OnDestroy {
      interval: any;
      _differ: any;
      constructor(
        private _differs: KeyValueDiffers,
        private changeDetectorRef: ChangeDetectorRef
      ) {

      }
      ngOnInit(): void {
        this._differ = this._differs.find(this[this['modelName']]).create();
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }

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

      _applyChanges(changes) {
        context.modelChanged.emit(this[this['modelName']]);
      }
      
      ngOnDestroy() {
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }
      }

    }

    @NgModule({ declarations: [TemplateComponent], imports: [CommonModule, ReactiveFormsModule] })
    class TemplateModule { }

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );
    const component = container.createComponent(factory);
    Object.assign(component.instance, properties);

    return component;
    // If properties are changed at a later stage, the change detection
    // may need to be triggered manually:
  }
}
