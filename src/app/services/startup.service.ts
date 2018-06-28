import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { zip } from "rxjs";
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StartUpService {

    mockData = {};

    mockChanged: Subject<string>;

    constructor(private httpClient: HttpClient ) {
        this.mockChanged = new Subject();
    }

    initData() {
        return new Promise((resolve, reject) => {
            zip(
                this.httpClient.get('./mock/horizontal-layout.json'),
                this.httpClient.get('./mock/vertical-layout.json'),
                this.httpClient.get('./mock/person-info.json'),
                this.httpClient.get('./mock/person-info-grid.json'),
                this.httpClient.get('./mock/otherschema.json'),
                this.httpClient.get('./mock/sampleschema.json'),
                this.httpClient.get('./mock/zorro-grid.json'),
                this.httpClient.get('./mock/zorro-full-widget.json'),
            ).pipe(
                // 接收其他拦截器后产生的异常消息
                catchError(([langData, appData]) => {
                    resolve(null);
                    return [langData, appData];
                }),
            ).subscribe(([
                horizontalMockData,
                verticalMockData,
                personInfoMockData,
                personInfoGridMockData,
                otherschemaMockData,
                sampleschemaMockData,
                zorroGridMockData,
                zorroFullWidgetMockData
            ]) => {
                Object.assign(this.mockData, {
                    horizontalMockData,
                    verticalMockData,
                    personInfoMockData,
                    personInfoGridMockData,
                    otherschemaMockData,
                    sampleschemaMockData,
                    zorroGridMockData,
                    zorroFullWidgetMockData
                });
                console.log(this.mockData)
            },
                (err) => { reject(err) },
                () => {
                    resolve(null);
                })
        })
    }

    getData(type: string): Object {
        return this.mockData[type];
    }
}