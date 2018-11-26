export interface ColumnInter {
    field: string;
    [propName: string]: any;
}

import { Injectable } from "@angular/core";

@Injectable()
export class GridUtilService {
    /**
     * 关键字数组分解成含'|'的字符串
     * @param arr 分解的数组
     */
    generateColumnKey(columns: Array<ColumnInter>): string {
        let fields = [];
        for (let column of columns) {
            fields.push(column.field);
        }
        fields.sort();
        let key = "";
        for (let field of fields) {
            if (key.length > 0) {
                key += "|";
            }
            key += field;
        }
        return key;
    }

    /**
     * 深克隆
     * @param obj 传入需要克隆的对象
     */
    cloneDeep(obj) {
        let str, newobj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object') {
            return;
        } else if ((<any>window).JSON) {
            str = JSON.stringify(obj), //序列化对象
                newobj = JSON.parse(str); //还原
        } else {
            for (var i in obj) {
                newobj[i] = typeof obj[i] === 'object' ? this.cloneDeep(obj[i]) : obj[i];
            }
        }
        return newobj;
    };

    /**
     * isEqual：判断两个对象是否键值对应相等
     * @param a 
     * @param b 
     */
    isEqual(a, b) {
        //如果a和b本来就全等
        if (a === b) {
            //判断是否为0和-0
            return a !== 0 || 1 / a === 1 / b;
        }
        //判断是否为null和undefined
        if (a == null || b == null) {
            return a === b;
        }
        //接下来判断a和b的数据类型
        var classNameA = toString.call(a),
            classNameB = toString.call(b);
        //如果数据类型不相等，则返回false
        if (classNameA !== classNameB) {
            return false;
        }
        //如果数据类型相等，再根据不同数据类型分别判断
        switch (classNameA) {
            case '[object RegExp]':
            case '[object String]':
                //进行字符串转换比较
                return '' + a === '' + b;
            case '[object Number]':
                //进行数字转换比较,判断是否为NaN
                if (+a !== +a) {
                    return +b !== +b;
                }
                //判断是否为0或-0
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        }
        //如果是对象类型
        if (classNameA == '[object Object]') {
            return this.objectIsEqual(a, b)
        }

        //如果是数组类型
        if (classNameA == '[object Array]') {
            if (a.length !== b.length) return false;
            if (a.toString() === '[object Object]' && b.toString() === '[object Object]') {
                for (let i = 0; i < a.length; i++) {
                    let item1 = a[i];
                    let item2 = b[i];
                    if (this.objectIsEqual(item1, item2)) {
                        return true;
                    }
                }
                return false;
            } else if (a.toString() == b.toString()) {
                return true;
            }
            return false;
        }
    }

    objectIsEqual(a, b) {
        //获取a和b的属性长度
        var propsA = Object.getOwnPropertyNames(a),
            propsB = Object.getOwnPropertyNames(b);
        if (propsA.length != propsB.length) {
            return false;
        }
        for (var i = 0; i < propsA.length; i++) {
            var propName = propsA[i];
            //如果对应属性对应值不相等，则返回false
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    }
}
