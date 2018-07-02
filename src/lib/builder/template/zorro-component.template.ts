
/*  */

export function getFormCode(template) {
    return {
        htmlCode: template, componentCode: getCompCode(
            ``,
            ``,
            ``
        )
    }
}


export function getTableCode(template) {
    return {
        htmlCode: template, componentCode: getCompCode(
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

export function getCompCode(variableSnippet, OnInitSnippet, methodSnippet) {
    return `
    import { Component, OnInit,  DoCheck, OnDestroy } from '@angular/core';
    
    @Component({ template:'./template.html' })
    export class TemplateComponent implements OnInit, DoCheck, OnDestroy {
        formProperty: any;
        interval: any;
        _differ: any;
        action: Function;
        buttons = [];
        ${variableSnippet}
        constructor(
           
        ) {

        }

        ngOnInit(): void {
            ${OnInitSnippet}
        }

        ${methodSnippet}
        
        ngOnDestroy() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }

    }

    `
}