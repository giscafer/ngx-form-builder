import {
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  Injectable,
  Component,
  NgModule,
  Compiler
} from '@angular/core';

import { WidgetRegistry } from './widget-registry';

@Injectable()
export class WidgetFactory {

  private registry: WidgetRegistry;

  constructor(registry: WidgetRegistry, private compiler: Compiler) {
    this.registry = registry;
  }

  /*   createWidget(container: ViewContainerRef, type: string): ComponentRef<any> {
     
  
  
    } */

  public addWidget(container: ViewContainerRef, template: string, properties: any = {}) {

    @Component({ template })
    class TemplateComponent { }

    @NgModule({ declarations: [TemplateComponent] })
    class TemplateModule { }

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );
    const component = container.createComponent(factory);
    Object.assign(component.instance, properties);

    return component.instance;
    // If properties are changed at a later stage, the change detection
    // may need to be triggered manually:
    // component.changeDetectorRef.detectChanges();
  }
}
