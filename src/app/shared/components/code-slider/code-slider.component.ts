/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2018-07-02 15:15:03
 * @description: 
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'code-slider',
  templateUrl: './code-slider.component.html',
  styleUrls: ['./code-slider.component.scss']
})
export class CodeSliderComponent implements OnInit {

  hide: boolean = false;
  _show = false;
  response: HighlightResult;

  @Output()
  showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  set show(v: boolean) {
    this._show = v;
  }
  get show(): boolean {
    return this._show;
  }

  @Input()
  fileNames = {
    selector: "",
    htmlFileName: "",
    compClassName: "",
    compFileName: ""
  };

  @Input()
  htmlCode = ` `;

  @Input()
  jsCode = ` `;

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.hide = true;
    setTimeout(() => {
      this.show = false;
      this.showChange.emit(this.show);
    }, 1000);
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }


  /** bug here https://github.com/stackblitz/core/issues/311 **/
  openOnStackBlitz() {
    sdk.openProject({
      files: {
        'angular.json': `{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "demo": {
        "root": "",
        "sourceRoot": "src",
        "projectType": "application",
        "prefix": "app",
        "schematics": {},
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
              "outputPath": "dist/demo",
              "index": "src/index.html",
              "main": "src/main.ts",
              "polyfills": "src/polyfills.ts",
              "tsConfig": "src/tsconfig.app.json",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                "node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css",
                "src/styles.css"
              ],
              "scripts": []
            },
            "configurations": {
              "production": {
                "fileReplacements": [
                  {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.prod.ts"
                  }
                ],
                "optimization": true,
                "outputHashing": "all",
                "sourceMap": false,
                "extractCss": true,
                "namedChunks": false,
                "aot": true,
                "extractLicenses": true,
                "vendorChunk": false,
                "buildOptimizer": true
              }
            }
          },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "options": {
              "browserTarget": "demo:build"
            },
            "configurations": {
              "production": {
                "browserTarget": "demo:build:production"
              }
            }
          },
          "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n",
            "options": {
              "browserTarget": "demo:build"
            }
          },
          "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
              "main": "src/test.ts",
              "polyfills": "src/polyfills.ts",
              "tsConfig": "src/tsconfig.spec.json",
              "karmaConfig": "src/karma.conf.js",
              "styles": [
                "styles.css"
              ],
              "scripts": [],
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ]
            }
          },
          "lint": {
            "builder": "@angular-devkit/build-angular:tslint",
            "options": {
              "tsConfig": [
                "src/tsconfig.app.json",
                "src/tsconfig.spec.json"
              ],
              "exclude": [
                "**/node_modules/**"
              ]
            }
          }
        }
      },
      "demo-e2e": {
        "root": "e2e/",
        "projectType": "application",
        "architect": {
          "e2e": {
            "builder": "@angular-devkit/build-angular:protractor",
            "options": {
              "protractorConfig": "e2e/protractor.conf.js",
              "devServerTarget": "demo:serve"
            }
          },
          "lint": {
            "builder": "@angular-devkit/build-angular:tslint",
            "options": {
              "tsConfig": "e2e/tsconfig.e2e.json",
              "exclude": [
                "**/node_modules/**"
              ]
            }
          }
        }
      }
    },
    "defaultProject": "demo"
  }`,
        'src/index.html': `<${this.fileNames.selector}>loading</${this.fileNames.selector}>`,
        [`src/app/${this.fileNames.htmlFileName}`]: this.htmlCode,
        'src/main.ts': `import './polyfills';
  
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
  import { AppModule } from './app/app.module';
  
  platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  
    // Otherwise, log the boot error
  }).catch(err => console.error(err));`,
        'src/polyfills.ts': `/**
   * This file includes polyfills needed by Angular and is loaded before the app.
   * You can add your own extra polyfills to this file.
   *
   * This file is divided into 2 sections:
   *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
   *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
   *      file.
   *
   * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
   * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
   * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
   *
   * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
   */
  
  /***************************************************************************************************
   * BROWSER POLYFILLS
   */
  
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
  // import 'core-js/es6/symbol';
  // import 'core-js/es6/object';
  // import 'core-js/es6/function';
  // import 'core-js/es6/parse-int';
  // import 'core-js/es6/parse-float';
  // import 'core-js/es6/number';
  // import 'core-js/es6/math';
  // import 'core-js/es6/string';
  // import 'core-js/es6/date';
  // import 'core-js/es6/array';
  // import 'core-js/es6/regexp';
  // import 'core-js/es6/map';
  // import 'core-js/es6/set';
  
  /** IE10 and IE11 requires the following for NgClass support on SVG elements */
  // import 'classlist.js';  // Run \`npm install --save classlist.js\`.
  
  /** IE10 and IE11 requires the following to support \`@angular/animation\`. */
  // import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.
  
  
  /** Evergreen browsers require these. **/
  import 'core-js/es6/reflect';
  import 'core-js/es7/reflect';
  
  
  /** ALL Firefox browsers require the following to support \`@angular/animation\`. **/
  // import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.
  
  
  
  /***************************************************************************************************
   * Zone JS is required by Angular itself.
   */
  import 'zone.js/dist/zone';  // Included with Angular CLI.
  
  
  /***************************************************************************************************
   * APPLICATION IMPORTS
   */
  
  /**
   * Date, currency, decimal and percent pipes.
   * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
   */
  // import 'intl';  // Run \`npm install --save intl\`.`,
        'src/app/app.component.ts': this.jsCode,
        'src/app/app.module.ts': `import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';
  import { NgZorroAntdModule } from 'ng-zorro-antd';
  
  import { ${this.fileNames.compClassName} } from './app.component';
  
  import { NZ_I18N, en_US } from 'ng-zorro-antd';
  import { registerLocaleData } from '@angular/common';
  import en from '@angular/common/locales/en';
  registerLocaleData(en);
  
  @NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdModule, BrowserAnimationsModule ],
    declarations: [ ${this.fileNames.compClassName} ],
    bootstrap:    [ ${this.fileNames.compClassName} ],
    providers   : [ { provide: NZ_I18N, useValue: en_US } ]
  })
  export class AppModule { }
  `,
        'src/styles.css': `/* Add application styles & imports to this file! */;`
      },

      title: 'Dynamically Generated Project',
      description: 'Created with <3 by the StackBlitz SDK!',
      template: 'angular-cli',
      dependencies: {
        'rxjs': '^6.0.0',
        '@angular/cdk': '^6.0.0',
        '@angular/core': '^6.0.0',
        '@angular/forms': '^6.0.0',
        '@angular/http': '^6.0.0',
        '@angular/language-service': '^6.0.0',
        '@angular/platform-browser': '^6.0.0',
        '@angular/platform-browser-dynamic': '^6.0.0',
        '@angular/common': '^6.0.0',
        '@angular/router': '^6.0.0',
        '@angular/animations': '^6.0.0',
        'date-fns': '^1.29.0',
        'ng-zorro-antd': '^1.1.1'
      },
      tags: ['stackblitz', 'sdk']
    });
  }

}
