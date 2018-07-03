/* without node.js */

import { firstUpperCase } from "../../utils/firstUpperCase";



export function getFormCode(fileName, template) {
    let fileNames = generateFileName(fileName);
    return {
        fileNames,
        htmlCode: template,
        componentCode: getCompCode(fileNames,
            ``,
            ``,
            ``
        )
    }
}


export function getTableCode(fileName, template) {
    let fileNames = generateFileName(fileName);
    return {
        fileNames,
        htmlCode: template,
        componentCode: getCompCode(fileNames,
            `
            // table variable
            allChecked = false;
            indeterminate = false;
            displayData = [];

            _columns = [];
            columns = [];
            data = [];
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
    
    @Component({ template:'./template.html' })
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
    return rawCode.replace(/template.html/, names.htmlFileName).replace(/TemplateComponent/, names.compClassName);
}


function generateFileName(fileName = 'template') {
    let htmlFileName = fileName + '.component.html';
    let compFileName = fileName + '.component.ts';
    let compClassName = firstUpperCase(fileName) + 'Component';
    return {
        htmlFileName,
        compFileName,
        compClassName
    }
}