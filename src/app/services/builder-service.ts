import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class BuilderService {
    builderChanged: Subject<string>;
    constructor() {
        this.builderChanged = new Subject();
    }
}