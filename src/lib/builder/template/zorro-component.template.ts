/* without node.js */

import { firstUpperCase } from "../../utils/firstUpperCase";



export function getFormCode(opts) {
    let fileNames = generateFileName(opts.fileName);
    return {
        fileNames,
        htmlCode: opts.template,
        componentCode: getCompCode(fileNames,
            `${opts.modelName}:any = {};`,
            ``,
            ``
        )
    }
}


export function getTableCode(opts) {
    let fileNames = generateFileName(opts.fileName);
    return {
        fileNames,
        htmlCode: opts.template,
        componentCode: getCompCode(fileNames,
            `
            ${opts.modelName}:any = {};
            // table variable
            allChecked = false;
            indeterminate = false;
            displayData = [];
            selection = [];
            _columns = [];
            columns = ${JSON.stringify(opts.columns, null, 4)};
            data = ${JSON.stringify(opts.data, null, 4)};
            `,

            `this.initCloumn();`,
            `
        // table methods
        initCloumn() {
            for (let i = 0; i < this.columns.length; i++) {
                let arr = this.columns[i].split('-');
                this._columns[i] = {};
                Object.assign(this._columns[i],
                    {
                        header: arr[0],
                        field: arr[1],
                        width: arr[2]
                    });
            }
        }

        load($event){}

        currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
            this.displayData = $event;
            this.refreshStatus();
        }

        refreshStatus(): void {
            const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
            const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
            this.allChecked = allChecked;
            this.indeterminate = (!allChecked) && (!allUnChecked);
        }

        checkAll(value: boolean): void {
            this.displayData.forEach(data => {
                if (!data.disabled) {
                    data.checked = value;
                }
            });
            this.refreshStatus();
        }`
        )
    }
}

export function getCompCode(names, variableSnippet, OnInitSnippet, methodSnippet) {
    let rawCode = `
    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-template',
        templateUrl: './template.html'
     })
    export class TemplateComponent implements OnInit {

        ${variableSnippet}
        constructor(

        ) {

        }

        ngOnInit(): void {
            ${OnInitSnippet}
        }

        ${methodSnippet}

    }

    `;
    return rawCode.replace(/app-template/, names.selector).replace(/template.html/, names.htmlFileName).replace(/TemplateComponent/, names.compClassName);
}


function generateFileName(fileName = 'template') {
    let htmlFileName = fileName + '.component.html';
    let compFileName = fileName + '.component.ts';
    let compClassName = firstUpperCase(fileName) + 'Component';
    return {
        selector: 'app-' + fileName.toLowerCase(),
        htmlFileName,
        compFileName,
        compClassName
    }
}
