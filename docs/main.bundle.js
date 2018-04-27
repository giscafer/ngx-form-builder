webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_dnd_dnd_module__ = __webpack_require__("../../../../../src/lib/dnd/dnd.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_zorro_form_zorro_form_component__ = __webpack_require__("../../../../../src/app/pages/zorro-form/zorro-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bootstrap_form_bootstrap_form_component__ = __webpack_require__("../../../../../src/app/pages/bootstrap-form/bootstrap-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dnd_form_dnd_component__ = __webpack_require__("../../../../../src/app/pages/dnd-form/dnd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'bootstrap', pathMatch: 'full' },
    { path: 'dnd', component: __WEBPACK_IMPORTED_MODULE_6__pages_dnd_form_dnd_component__["a" /* DndComponent */] },
    { path: 'bootstrap', component: __WEBPACK_IMPORTED_MODULE_5__pages_bootstrap_form_bootstrap_form_component__["a" /* BootstrapFormComponent */] },
    { path: 'zorro', component: __WEBPACK_IMPORTED_MODULE_4__pages_zorro_form_zorro_form_component__["a" /* ZorroFormComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__pages_bootstrap_form_bootstrap_form_component__["a" /* BootstrapFormComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_zorro_form_zorro_form_component__["a" /* ZorroFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dnd_form_dnd_component__["a" /* DndComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__lib_dnd_dnd_module__["a" /* DndModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\r\n  <app-nav #nav></app-nav>\r\n  <nz-content style=\"padding:0 50px;\">\r\n    <router-outlet></router-outlet>\r\n  </nz-content>\r\n</nz-layout>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nz-content {\n  padding: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_builder_service__ = __webpack_require__("../../../../../src/app/services/builder-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_nav_nav_component__ = __webpack_require__("../../../../../src/app/layout/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, titleService, builderService) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.builderService = builderService;
        builderService.builderChanged.subscribe(function (value) {
            _this.navRef._builder_type = value || 'bootstrap';
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                var title = event.url.substr(1);
                _this.titleService.setTitle(title + " builder");
                _this.builderService.builderChanged.next(title);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__layout_nav_nav_component__["a" /* NavComponent */])
    ], AppComponent.prototype, "navRef", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sf-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_builder_service__["a" /* BuilderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */], __WEBPACK_IMPORTED_MODULE_3__services_builder_service__["a" /* BuilderService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_dnd_dnd_module__ = __webpack_require__("../../../../../src/lib/dnd/dnd.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// third part libs





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__lib_dnd_dnd_module__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__layout_layout_module__["a" /* LayoutModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("../../../../../src/app/layout/nav/nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */]
];
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]],
            providers: [],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"logo\">\r\n    <!--  <img  *ngIf=\"_builder_type==='bootstrap'\" title=\"bootstrap form builder\" src=\"data:image/webp;base64,UklGRpQWAABXRUJQVlA4WAoAAAAQAAAAWwMA8QAAQUxQSKQKAAABf8egbSNJ6yx/2O8dgYjI4bfcJNcJpjWUXciaXS5yymfwdtu2adu2teXaWutjec1l27Zt27Zt27Zt27Ztm6Oh5vQjxtqac4z6ofZwzozo/wRorP/H+n+s/8f6f6z/x/p/rExD6GfpTw1hyLib3rLvlP8Q+kdCIUkTLn/hd8Df9284eU9SGfpCylLSpIsc8x7/+qfLV5m6kIoq9HkUvSBNuNg+jwDR/xyBN09afhpJvbJ/I1Q9SQvtev3v0LbRNmDjrgEeOnTF8aSyV/RlFAOSZt/5svfAdWfMv7bd1Q38csuhS0oaKPsuykKaYPNLXgGaJhrz79u4rYGPbtp3VilUob9CWun8V38D152x+S/ajk0L3Qc3bDeu+ivnOP6ln4C2Mzb/bRt3LfDHRxev2A8RwpDJdnn8T4O7aMz/1thdBP7+8Jg5wpDQrxBKSdWUG970N4BtbP73NnZk6Is7zzy+pLLoPwhlKWnqFc74FsC2MaOrjW2A+paNZh6QQhX6CoqepClXOeploIvGmNHbGLuL8NmF688qqVf1C4SqksoVD7nP0LTGZsy0cVcDz5+6weRS2Sv6AIqepIX2v/lr6OrOmDHZJjY1NA+cuKqkXhnyvkLSNHvc+j5QNwYzptu4rQ3fPHDMIpLKkPOp2vDa9wYhNtHYDIs2sW2BL+7bdwrl+eEflrjwwz+BtjM2w6hxbIH6+9s26g0JOV0RJPVmPviNDnC0McOtjWMEuu/PXnJcSSpCFleUksabafuHGGobm+HYxjZD3z9w/lGSqiJ3C1Uhhdk3ufov8D9ihm8bDwUe22WBiSX1ioyt7EmacYPT34fYRmMzAhrcdvDr9VvOJ6mqQpYWeqU08fonPwvUrbEZKW3c1YZ3Ltt+Zin0iuysqCStePxDv0Jbd7YZWW1iUwPPXbTJgFSVIScrJM1x6EOfA3VrzEhs3NURfnnm7BUlFRmZRu143xeGro3GjNQ2blvgx+ePnUM5eBgyzhrXfdUAXTQ2I7px7Azxt4d3nXRICLlWKIKkCRc+4zMAR9tm5LdxjAB/X7vOpEFSEXKsUtKoBfZ7iaG2sUlDG9sG+P7EZaeWVGZYGneh3e4AumjbmJS0se0OePXgZadSfh02ueJr6JpoTJoa3DbQ3L97kV2N8zbUrbFJVxt3deSv8bOr8hpa26SuTce9vexKp9ORxpHzQn61P52TyB0nKr/elDaZ9suwlqIljVvWzK6CZqRzErllVoXsatofiWnUMVN2JU32eiJFfpgmw5rwHrok6nhilPLrgUtok6jlmnEzLB1L4wRyy4W9HGs3alKo4Wjl10FrM5hC1GymkF0VWorGCeRBllWRYS3wq2MKtSyVYQXN9i5dAkV+nj/LmvpR2gTqeG56hQxroutoEqjljskyLKk8i8bJ44ZrJ8yydAg16VNzalCGXWo7Bp08DLKLiixrfZr08SCbqsqyVvyTmD4t66vMsAot8gld8kR+XS7TmvUF2uTpeH0uFRlW0OT3JlDLE9MrZFm9q2icOG65Z/IsS4VOpyZ1ai4JyrJ7OoRBJw6DHKUq09qNNnVcc6B6WValTf4mpk7HbplWqZW/okucyK/rqcqyCi3wVvJ0vLuoykxruqdok+e1eVRkWUHj3knrpHHLk9NlWip1JQ1p03CzQsizBnQmjdOm5jwNKM/u6XBi4jScmm1V2qUhcSKHqZdtrf8jMWkif2ypKtMqteQnyfPF8iozrUKzvEnntPl48WwraPxn0sYdb8ysItNSpQdpSdmWx1Qo1x7QDXROGLfcoYFsq6czcdJ0XJtxVTq4I2nM6eplW6W2/j1t+Hs3VRnXKt8TEyby03oqs61C83xGdLI48t1KKrKtoFHvJs6nc2ZcqvRqyhB5Q4Xy7Z4eShlHnlMv46p0BSTNA1lXqeOTBi5SlXXt3iRNu6/KjKvQen8lzeA2KjKuoIV/xU4Umz/XzbqkyX7ApMsv8yrkXEFfYicK5lsF5dyFXk4Xm09UZF1Bt0PCvJR9nZswcL1C5nVQ0hyZeUlbOmX2yb6W6xLGWyr3niFluoWzr+qPhKkHsq/wXsL8UmRfeihh3gn512UJc5vy72OJiRI5OQPblegkceSIDGzNhNk5A5ubSJpGls7AJiU6SRyZMgMb9RmJ4mbyDGz8p4lpwiejMrCB6+mSJHLnuBlYcVqidFxQZmA6gNYJ4o5TQg62KQ0p0rKv8u+gpWmcIDSsmoXNSZsibphHIQOb6TtiinTMlYVN/SpdgkS+mjEDkya+izZBOh6ZNAsb52KaBGm5fgJl4cfRODnccPE4edge1KRHzZHKwQttwKCTg0E2VpGFrUCbHh5kdZVZ2GI/EdOjZQUVWdicb9MlR+SbhbKwoGkfpU2OlqdnVMjCJrqeJkHumSILk8LZ1E4MN1w/UR4WdDiDpGbNKcrDK+3EoBPDg+ypKhPbmC45arbLxEqt+hsxNTo2zsQKLfYxXWJEvltOZSY22wu0idHx6lwqsrCgye5PjpZnZs7GimtonBRuuW8yhSxMpc6hJi1rLlVQHj6go6mdFK45QQOZWE97ExOj4fBsrNLmfxLTIrKXeplYqZU/JzohHPlhXVWZWKEF36MGJ4JNy4dLqczEgia5DWrjJDBuOp6eXkUmpqA5jvyW2GGPeDaxIZ6xsDLyIC1wNnTG9ghmjDu4aRkpZGQqgsKStwE2eISysYFn1xhXKpWXF1JvrReBaDwiGUfDhztMKJXKz4NU7vIRxGh7xLGJHXxz3Cjl7KNO/gLaiD2i2LiBn66eSVl7kGa/9DtojD1yGNqOP+9YTgpZm1RJq95YU7fgEcImDsJDW0k9Ze9FT9riPqgj9ghg4xpe3mt8VaVy+KrQqF1eh8542LPpOr49aAapp1y+J01/4I/YNvbwZWxHOGUOqQrK50MhzXxmBBs8TNnYwI3zS6FQXl9IWuAOIBo8DNk4As+uWkiF8vsgafVngc542DF0HbyzS6F8P0h7vQ5thz2s2MQGPjp+fIWMT6HUqOM/gNrYw4dxA99ePJuKQnl/Jc135nd0DXiYMHQNg1etIPWU/YcBacVLOuoIHgZsXMMdG0q9Qv2AZalivfuhNfYYZuMOXtt2QoVK/YKVNNEWb4Ft7DHH2IYf95pCqtRHGAppogN/Ahs8hhhsiKdNIxVB/YVB0pTn/AldBI8BNu6gvXkOSUH9ifPe8he0xh7djFvTPrWK+hiDtP6jka61PVrZdA28uJsU+hgUKmm3Z6CO2KOPcQ1vHzWBqqD+xrLUVIe+C7XxaGJoO747fW6FSv2PPWneY3+g6cCjgU1s6M5fRhoI6ocsKmmJi6Eztv8ntnEHd60mlaX6JUupWulhwMb+7xkbeGej8aRS/ZSFVG74NhCN/0vG0fDD3uNJRVD/5cCBX0OM4P+CTezgtzMmkRTUnznpmd9CE7H/Axs38NsNc6qPM0gLXvsrboz/LUPb0N29llT0cUg9af3boemw/4VNHIQndpJ6Qf2dRU/Vto9Dbewhxg28ecCkqkr1f1bSNHu9S+zA2MSW746eUxpQX2iopJkP+43ooRGfN79UBfWLFoU0z6UGA/cvEaRC/aSFpCUfBd5dT1KhftTNXtxf/zdrKIs+lrH+H+v/sf4f6///9yFWUDggygsAABBgAJ0BKlwD8gA+bTaaSSQjIqEiNSgYgA2JZ278fJlUDM/zO7wbN/ivxu/MDs/d6e5P5C84sgTqb/aevD9YPZv9x3uAfpL/cvzM/uvxO+u3zAfyj+Rf87/Ge6x+t3tE/UT2AP63/KvVd/svtB/z31AP2U9JP9ifgw/Yf9w/gN/n/9m/9/WAegB6q/VjtA/0mQULJ7z5QTn3dL4gOJPvN/sflO/5Hst/1v/q8on1z/6fcK/XL0lfYP6JP7QhLi5eL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxex6XfVQgTT5Upkz7Nwg6OLsYSDImHR/wK80bPECgxpr4gUGNNfECgxpr4gUGM8v1+PEltvN1odWxcdy/URbKRr4LNUynlf9y1OE34s8vF7IJ5l4vZBPMvF7IJ5ejoJEgstaucKlics6C14vZBPMvF7IJ5l4vZBPMvF7HpnI4oFPkSlBUgK+69+kCeKAOl0QIe5EO0OwLZHEoxpr4gUGNNfECgxpr4gUGNNXgAAF5i5/r7+4j21Mwl+H/DefcyCasJ5l4vZBPMvF7IJ5l4vZBPMvDmHuwrZfMGgOld3PEzybVCDsOCxeyCeZeL2QTzLxeyCeZeL2PXHhGqTO6ETiKqBIRKV/DRYcK3FuDt6pRZCx/UuqnpWtMVNBreCcvamviBQY018QKDGmviBQY0wVm0q4WmmTugNZJ9wsXFa59tUrjXpPN77nL2pr4gUGNNfECgxpr4gUGNNebAEF5eL9SAOYfFDF7IJ5l4vZBPMvF7IJ5l4vZBPMqFevxsKxxaXR9Noo90FxqCKaK8M8vF7IJ5l4vZBPMvF7IJ5l4vZA5JITufijpqtN5DqRQTYGRdxcHF4MD7SDA+0gwPtIMD7SAuviBQY018QKDGmDJxKkKxq9/4uxGd2UqecWeXi9kE8y8XsgnmXi9kE8y8XsgnmX2cWeXi9kE8y8XsgnmXi9kE8y8XsgnmXi9kE8y8XsgnmXi9kE1AAD+/43UAAAAAAB6FkKsiV5kOnLSkO6GoNmtmE0jxoNovNSwEnZR4r+LH/4v/mk+thkHZ7icYfmMhxlnA8n4V3mJ0uTCsOdyvYYrfxskmA8OlyUK8pC4byVEgyF+hds4xLPBD3MqO6a9lO4rsBMX3Mzp1Fs7Xi3PSBq9LCszPIft0/CQw1l2UKE+bkDQbeSZIkYM9Ttn0F3FvDgxkiwHRE/PYu4wWp0SU3d1D7+vyRd5oUqI3G+a1RWJHcowuTmOOpikfLeywVRtDE5M2SQG9M9wUjlYQ8txNx2kL53I8GcXIyCuxDCiPXzPY3zc6rrc7GW/smyLJAXyqCIpMevZMNEyHyojQRrH/qHAaGi/tnpkXMHGmntHztWMnnwVdlBm8ItpWdg2cYXEjbXVrIqRyWj3t1kCLG4jthF66Ez0AgAHaypN0Rk+AKd0w6/Bdx5xG4b/y2xP1D5YOTHvtO/zo4doLoFEJ5l3dYkGZwenlNa0RP/6NvvB//UeXSfgEBvy3EukLHoTsEcFLIr4dvxAJ5lbx5JnQk7DyMykjPCms3oU9QHJeQamgKyBF3UsAFpg2U7gBF6GtdMj/77SLTuIdAtr8/wOgr/mKkJYVqk4iV6/rXTXonYg4WNdIj8eoUW6peNp39/n/j7+4w1y24OL30YJYDCZ6Jg6w6RamQmcE0p7iSEQaIYKRaDewfYm8Zt3cB/S9WWLBB2G9JfN4YAio9D/reOUxZ50L2OPSPxXjaaLWw60sE01tP6xvvY6xIMmV3VeQlg+u5cuBSlqfwbMzwBS9eDdAK3odr9E15hX5uBZ9fG06wC0G47xkoMJOw8jMcrKK6bxtI0mUik0+1LS2kS4L0EHc+paQElx71EAIabov8CV5r66I4D4msMdBh6tddiYZp94grQdIGW7Imo725+IPCuECMIqOFUbGrZL80JXWNGLH4SUl5ch4IaAATj+4XwvCSgxhwb/wc90bPBeLqoDm6Lud6YWLEmFXP/ICZ7y/dwc/kPsOyBh6LZ/lDJVqXrJDGJVTB+n+0j8z3Edm0jjel0A0vO3j401B7RMiF7NR3p/o54LxTKZFIMoHpD+B0XDu4JRqfCTcawk3agjGZL0P32tGgInwGrwNrVlvNTWBf+jsS2htqxt4jjSfMdigk9Km13wg+M6GrZvJCUXFaYhT2gB9oINhV7EOiqIMogMwaWhrA8D7+/2EWWZiYQ3Xk/xkzUaYVAbOxGHlfC//ua61QADclgz9cLmF1bVMO9tynw4YV6WCi6c+QG7KYDH6XE+IoikKZMm2PRDCADO9IkCCUWSuEjlv/ElFJIJ7R1whWvNqLbgIrq7DpUKPsvtT571CS97SUV8wWP7/1bXTyFnKzLMZf9/y394zVqIp9ULKZq/51oQyxF3ckMKAFYSRD2D5EI43PjJkSr4g1cbbPUHwLjZCno4N73KCe/4Hz2xF3trOaOEb9b0+WClk/VJerI+8VT/mNgVs3hRWiGcVHMaPDxFfJ/qqHtM4wknRVylapqiiABcTyzUN991AQoEOWL/R2iiQFPDsEKl/lTJ+IgGeqIiGyx6nvf22+Ir4x70kea/wGM7Fxwyl26NIdbuGoQX//wXI7pGSY6D2NGh9ICRbE6X+vZkaOHIqn2zgSirDwmJK86TsOHL34fwTi3UCoQAQYv5LenCDTIFHJKUf73aWxqBud6xOfcaSIaXSgR8OPHmkSUUwIVaSmdxMhcjYMNExIprK3q1MMRLMLDIvbYnzZmvNLe0sCryc3ZsYMRn2zsN4rMVlOGkDTAv/ACokBAADVU+/NCndofQomrp7Epo+b9lZrrzDUwEfhVRtDx1n+4NzMtYW88kZHRBv+/hmDljIK2gGzgPHE8PAa7//GLQsNGFrR6lST7yddpVDz71zebbNDih20wJfKUP4jEu7/B318sMVV6GCeVxdMPuZCh7AJ6cP/KudtOh02Mat1qwuW3cufZpdLMY+PgoYSzywY1wvzq0trrblLPhcHGs5PSc+eByLJOQIY5gyzdmsOO0EjgM8SX0K5x++5mWTV+BSa8BPiJVYHc2ysUcEnygASli4zHWUH12usqGjhdw4SKcytVxN3S2Cc5jRZJ6Txq8XZ/X/pQ4Z16+vNXwdSsMxtvFx4wLmoM98U7Y33Id/uN8IS6sAnOy45QfLL6z4EAALgqgVmlH334EBOrPEVacDzRvv9cUpJ64Mmpvk4QlSBjzMygD+yTp2T0fepPcxv2NtWv9PCNEgIOQ6i/k/aQimcE7m6TgZLytJwrn5gtdZcB1I3NAyuiwyySp+M6N+hm554wV3FaMQ/SKzDG1xC/eWNf0btqe1CQYsOTlUNhKGvf3CgyCDz2WeTwaTSHLUiN1RrPEpSuVqDEyAlMM9mxMRt/zttWXDHJ6JlUDwoPHn0BhNdv4bCdusTtP4tSdtt3OgZWW325cICgwdfbVmsDPboUAAQk4WpgsMqOi53p4hjT410B9qHDEND8XLPuJqDgG7thHCiNwGJMWswYUN9ze4EYNGjOryvvZn3KG+iz+wUGeC52ovDYY+jpV58S9oXOKCTt9G3jW2nEurKeYaqD5U9yIwZS29wH9TKtzZ4YzX/z3YLy/RsVIIa3N5wDouVJTo5T+uxObVWvs5rm6LDvKGvc91V1viz48xfvBkAH9IHciOUPFdxef2+7XM4jh1HOC0y4pLuzsDC3/avJxszmgzuqykor09LaEzB+Mg/kVVlenz92TnwAAA5Le1IimbXscxonIXuNqf5tzO71Q98zEtmhkuNJsCuC3dklxPExW5oCggSoyxy+ij5uBYn4JU/tnlHnzNmAPW6KjabjW6qcy4A51AIKy9rB7wk1twDH8sqUkqslAeyJ2/GkWTSXGt+iH+5TRP3fMapYm1p5861lj5rUEC9NszmgzuqrPV8sRpfMasf3qDLdKf0z/WZyIF0OXP1gLfXqja9Dkzw5pZs0KWxhkGjcOgLaAAC2rq6wAAAAAAA==\"\r\n  /> -->\r\n    <img *ngIf=\"_builder_type==='bootstrap'\" style=\"margin-left: 50px;\" src=\"./assets/images/bootstrap-stack.png\" alt=\"bootstrap form builder\" />\r\n    <img *ngIf=\"_builder_type==='zorro'\" style=\"margin-left: 50px;\" title=\"zorro form builder\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\"\r\n    />\r\n</div>\r\n<div class=\"logo-title\"><a href=\"./\" title=\"ng-form-builder\">NgFormBuilder</a></div>\r\n<ul nz-menu [nzMode]=\"'horizontal'\" [nzTheme]=\"'dark'\" style=\"padding-left: 280px;\">\r\n\r\n    <li nz-submenu>\r\n        <span title>\r\n      <i class=\"anticon anticon-setting\"></i> Builder</span>\r\n        <ul>\r\n            <li nz-menu-item [nzSelected]=\"true\" [routerLink]=\"'/bootstrap'\">BootStrap Form Builder</li>\r\n            <li nz-menu-item [routerLink]=\"'/zorro'\">Zorro Form Builder (under development)</li>\r\n            <li nz-menu-item [nzDisable]=\"true\">PrimeNG Form Builder (comming soon)</li>\r\n            <li nz-menu-item [nzDisable]=\"true\">Ionic Form Builder (comming soon)</li>\r\n        </ul>\r\n    </li>\r\n    <li nz-menu-item [routerLink]=\"'/dnd'\">\r\n        <i class=\"anticon anticon-layout\"></i> Drag&Drop\r\n    </li>\r\n    <li nz-submenu>\r\n        <span title>\r\n      <i class=\"anticon anticon-folder\"></i> Document</span>\r\n        <ul>\r\n            <li nz-menu-group>\r\n                <span title>Form</span>\r\n                <ul>\r\n                    <li nz-menu-item [nzDisable]=\"true\">How-To Guide</li>\r\n                    <li nz-menu-item [nzDisable]=\"true\">Api Reference</li>\r\n                </ul>\r\n            </li>\r\n            <li nz-menu-group>\r\n                <span title>Other</span>\r\n                <ul>\r\n                    <li nz-menu-item>\r\n                        <a href=\"http://json-schema.org/specification.html\" target=\"_blank\">JSON Schema Specification</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n\r\n    <li nz-menu-item>\r\n        <i class=\"anticon anticon-github\"></i> <a href=\"https://github.com/giscafer/ng-form-builder\" style=\"display:inline;color:#fff;\" target=\"_blank\">Github</a></li>\r\n    <li nz-menu-item>\r\n        <a href=\"https://ng.ant.design\" target=\"_blank\" rel=\"noopener noreferrer\"></a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/layout/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this._builder_type = 'bootstrap';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/bootstrap-form/bootstrap-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <div id=\"code-container\">\r\n    <div id=\"control-panel\">\r\n      <div id=\"code-info\">\r\n        <span class=\"code-type\">JSON</span>\r\n        <span class=\"code-info-time\">{{builderInfo.finishTime}}</span>\r\n        <span [ngClass]=\"{'info':builderInfo.msgType=='info','error':builderInfo.msgType!=='info'}\">{{builderInfo.msg}}</span>\r\n      </div>\r\n      <div class=\"control-btn-panel\">\r\n        <nz-dropdown>\r\n          <button nz-button nz-dropdown [nzType]=\"'primary'\" class=\"btn btn-default btn-sm\">\r\n            <span>{{demoName || 'Example Schema'}}</span>\r\n            <i class=\"anticon anticon-down\"></i>\r\n          </button>\r\n          <ul nz-menu>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"简单例子\" (click)=\"toggleSchema('simple')\">Simple Example</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"其他例子\" (click)=\"toggleSchema('other')\">Simple Example2</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"栅格布局例子\" (click)=\"toggleSchema('grid')\">Grid Layout Example</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"全部 widget 例子\" (click)=\"toggleSchema('full')\">Full Widget Example</a>\r\n            </li>\r\n          </ul>\r\n        </nz-dropdown>\r\n        <!-- <a href=\"javascript:;\" (click)=\"toggleSchema()\" title=\"点击切换schema\" class=\"btn btn-default btn-sm\">Test：Toggle schema</a> -->\r\n        <a href=\"javascript:;\" (click)=\"run(editor)\" class=\"btn btn-default btn-sm\" title=\"执行代码\">RUN</a>\r\n      </div>\r\n    </div>\r\n    <div #editor id=\"code-panel\" ace-editor [text]=\"schemaString\" [mode]=\"'json'\" [theme]=\"'chrome'\" [options]=\"aceOptions\" [readOnly]=\"false\"\r\n      (textChanged)=\"onAceChange($event)\" style=\"display:block; height: 80vh; width:100%\"></div>\r\n  </div>\r\n  <div id=\"h-handler\" class=\"handler\" style=\"left: 40%;\"></div>\r\n  <div id=\"view-container\">\r\n    <div id=\"control-panel\">\r\n      <div class=\"control-btn-panel\">\r\n        <nz-dropdown>\r\n          <button nz-button nz-dropdown class=\"btn btn-default btn-sm\">\r\n            <span>Save</span>\r\n            <i class=\"anticon anticon-down\"></i>\r\n          </button>\r\n          <ul nz-menu>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"下载HTML模板\" (click)=\"copyHTMLCode(1)\">Download HTML</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"复制HTML模板代码\" (click)=\"copyHTMLCode()\">Copy HTML code</a>\r\n            </li>\r\n          </ul>\r\n        </nz-dropdown>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <bs-form-builder [schema]=\"schemaJson\" [model]=\"model\" [actions]=\"actions\" (onErrorChange)=\"logErrors($event.value)\" (onChange)=\"setValue($event.value)\"\r\n      (onBuilderFinish)=\"onBuilderFinish($event)\"></bs-form-builder>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/bootstrap-form/bootstrap-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_ace_tern__ = __webpack_require__("../../../../ng-ace-tern/ng-ace-tern.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard__ = __webpack_require__("../../../../copy-text-to-clipboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_formatTime__ = __webpack_require__("../../../../../src/app/utils/formatTime.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_setSplitPosition__ = __webpack_require__("../../../../../src/app/utils/setSplitPosition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_download__ = __webpack_require__("../../../../../src/app/utils/download.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BootstrapFormComponent = (function () {
    function BootstrapFormComponent(_message) {
        var _this = this;
        this._message = _message;
        // schema
        this.actions = {};
        this.count = 1;
        this.builderInfo = {
            msgType: 'info',
            msg: '',
            finishTime: '',
            _startTime: 0,
            _endTime: 0
        };
        // ace
        this.text = 'test';
        this.aceOptions = {
            printMargin: false,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        };
        this.createMessage = function (type, text) {
            _this._message.create(type, "" + text);
        };
        this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/person-info.json");
        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
        // 按钮事件注册
        this.actions['alert'] = function (property, options) {
            property.forEachChildRecursive(function (child) {
                console.log(child.valid, child);
            });
            alert(JSON.stringify(_this.value));
        };
        this.actions['reset'] = function (form, options) {
            form.reset();
        };
    }
    BootstrapFormComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_setSplitPosition__["a" /* initSplitEventHandler */])();
        });
    };
    BootstrapFormComponent.prototype.toggleSchema = function (type) {
        switch (type) {
            case 'simple':
                this.demoName = 'Simple Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/person-info.json");
                break;
            case 'other':
                this.demoName = 'Simple Example2';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/otherschema.json");
                break;
            case 'grid':
                this.demoName = 'Grid Layout Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/person-info-grid.json");
                break;
            case 'full':
                this.demoName = 'Full Widget Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/sampleschema.json");
                break;
        }
        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
    };
    BootstrapFormComponent.prototype.setValue = function (value) {
        this.value = value;
    };
    BootstrapFormComponent.prototype.logErrors = function (errors) {
        console.log('ERRORS', errors);
        this.log('页面构建失败，请检查再重试', 'error');
    };
    BootstrapFormComponent.prototype.log = function (text, type) {
        this.builderInfo.finishTime = Object(__WEBPACK_IMPORTED_MODULE_4__utils_formatTime__["a" /* formatTime */])(new Date());
        if (type !== 'warn' && type !== 'error') {
            this.builderInfo.msgType = 'info';
        }
        else {
            this.builderInfo.msgType = type;
        }
        this.builderInfo.msg = text;
    };
    BootstrapFormComponent.prototype.onBuilderFinish = function ($event) {
        this.htmlCode = $event.code;
        this.builderInfo._endTime = new Date().getTime();
        this.log("\u9875\u9762\u6784\u5EFA\u5B8C\u6210\uFF0C" + (this.builderInfo._endTime - this.builderInfo._startTime) + "ms", 'info');
    };
    BootstrapFormComponent.prototype.run = function (editor) {
        if (this.hasEditorError()) {
            this.log('编辑器内容有误', 'error');
            return;
        }
        var text = this.editorDirective.editor.getValue();
        this.builderInfo._startTime = new Date().getTime();
        this.schemaJson = JSON.parse(text);
    };
    BootstrapFormComponent.prototype.onAceChange = function (data) {
        console.log('~~~编辑器内容变化~~~');
    };
    BootstrapFormComponent.prototype.copyHTMLCode = function (type) {
        if (type === 1) {
            if ('download' in document.createElement('a')) {
                Object(__WEBPACK_IMPORTED_MODULE_6__utils_download__["a" /* funDownload */])(this.htmlCode);
            }
            else {
                return this.createMessage('error', '代码下载失败，请使用 Chrome 浏览器');
            }
            return this.createMessage('success', '文件下载成功！');
        }
        if (__WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard__(this.htmlCode)) {
            return this.createMessage('success', '代码已经复制到剪贴板！');
        }
        else {
            return this.createMessage('error', '代码复制失败，请使用Chrome浏览器');
        }
    };
    BootstrapFormComponent.prototype.hasEditorError = function () {
        var annotations = this.editorDirective.editor.getSession().getAnnotations();
        for (var aid = 0, alen = annotations.length; aid < alen; ++aid) {
            if (annotations[aid].type === 'error') {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ng_ace_tern__["a" /* AceEditorDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng_ace_tern__["a" /* AceEditorDirective */])
    ], BootstrapFormComponent.prototype, "editorDirective", void 0);
    BootstrapFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bootstrap-form',
            template: __webpack_require__("../../../../../src/app/pages/bootstrap-form/bootstrap-form.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["b" /* NzMessageService */]])
    ], BootstrapFormComponent);
    return BootstrapFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dnd-form/dnd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dnd-container\">\r\n    <div class=\"animated-taglines\">\r\n        <h2 class=\"tagline\">\r\n            <span>Drag</span>\r\n            <span>and</span>\r\n            <span>Drop</span>\r\n        </h2>\r\n        <h2 class=\"tagline full-featured\">\r\n            <strong>Full-featured</strong> Form Editing</h2>\r\n    </div>\r\n    <section id=\"main_content\" class=\"inner clearfix\">\r\n        <div class=\"build-form\">\r\n            <div class=\"form-wrap form-builder\">\r\n                <div class=\"stage-wrap pull-right empty\" data-content=\"Drag a field from the right to this area\" id=\"drogbox\">\r\n                    <ul class=\"frmb ui-sortable\" style=\"min-height: 508px;\" dnd-sortable-container [sortableData]=\"targetList\" (onDropSuccess)=\"addTo($event)\">\r\n                        <li dnd-sortable [sortableIndex]=\"i\" *ngFor=\"let item of targetList; let i = index\" class=\"list-group-item\">{{item.label}}</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"cb-wrap pull-left\" dnd-sortable-container [sortableData]=\"listCtrls\" [dragCopy]=\"true\" id=\"dragbox\">\r\n                    <ul class=\"frmb-control ui-sortable\">\r\n                        <li *ngFor=\"let item of listCtrls; let i = index\" dnd-sortable [sortableIndex]=\"i\" class=\"{{item.icon}} input-control ui-sortable-handle\">\r\n                            <span>{{item.label}}</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dnd-form/dnd.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_content hr,\n.build-form,\n.clearfix:after,\n.render-form {\n  clear: both; }\n\n.dnd-container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/images/dnd-background.svg\"), linear-gradient(to bottom, #000, #92278F);\n  background-size: 100% 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-attachment: fixed, scroll; }\n  .dnd-container #main_content {\n    padding: 0 0 30px;\n    margin: 20px auto;\n    max-width: 1280px; }\n  .dnd-container .animated-taglines {\n    margin: 40px auto; }\n    .dnd-container .animated-taglines .tagline {\n      color: #fff;\n      text-align: center;\n      font-weight: 100;\n      font-size: 3em; }\n\n.form-wrap.form-builder {\n  position: relative; }\n  .form-wrap.form-builder * {\n    box-sizing: border-box; }\n  .form-wrap.form-builder .frmb-control {\n    margin: 0;\n    padding: 0;\n    border-radius: 5px; }\n    .form-wrap.form-builder .frmb-control li {\n      cursor: move;\n      list-style: none;\n      margin: 0 0 -1px;\n      padding: 10px;\n      text-align: left;\n      background: #fff;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      box-shadow: inset 0 0 0 1px #c5c5c5; }\n  .form-wrap.form-builder .btn-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle; }\n  .form-wrap.form-builder .form-actions {\n    float: right;\n    margin-top: 5px; }\n  .form-wrap.form-builder .stage-wrap {\n    vertical-align: top;\n    position: relative;\n    float: left;\n    width: 74%; }\n  .form-wrap.form-builder .cb-wrap {\n    vertical-align: top;\n    float: right;\n    width: 26%;\n    transition: -webkit-transform .25s;\n    transition: transform .25s;\n    transition: transform .25s, -webkit-transform .25s; }\n  .form-wrap.form-builder .empty .frmb {\n    border: 3px dashed #ccc;\n    margin-right: 5px;\n    background-color: rgba(255, 255, 255, 0.25); }\n  .form-wrap.form-builder .frmb {\n    list-style-type: none;\n    min-height: 200px;\n    margin: 0 6px 0 0;\n    padding: 0;\n    transition: background-color .5s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dnd-form/dnd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frmb_controls__ = __webpack_require__("../../../../../src/app/pages/dnd-form/frmb-controls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DndComponent = (function () {
    function DndComponent() {
        this.transferData = { id: 1, label: 'Hello' };
        this.listCtrls = __WEBPACK_IMPORTED_MODULE_1__frmb_controls__["a" /* FRMB_CONTROL_LIST */];
        this.targetList = [];
    }
    DndComponent.prototype.ngOnInit = function () {
    };
    DndComponent.prototype.addTo = function ($event) {
        // this.targetList.push($event.dragData);
        console.log($event);
    };
    DndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dnd',
            template: __webpack_require__("../../../../../src/app/pages/dnd-form/dnd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dnd-form/dnd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DndComponent);
    return DndComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dnd-form/frmb-controls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRMB_CONTROL_LIST; });
var FRMB_CONTROL_LIST = [
    { label: 'Autocomplete', icon: 'icon-autocomplete' },
    { label: 'Button', icon: 'icon-button' },
    { label: 'Checkbox Group', icon: 'icon-checkbox' },
    { label: 'Date Field', icon: 'icon-date' },
    { label: 'File Upload', icon: 'icon-file' },
    { label: 'Header', icon: 'icon-header' },
    { label: 'Hidden Input', icon: 'icon-hidden' },
    { label: 'Paragraph', icon: 'icon-paragraph' },
    { label: 'Number', icon: 'icon-number' },
    { label: 'Radio Group', icon: 'icon-radio' },
    { label: 'Select', icon: 'icon-select' },
    { label: 'Text Field', icon: 'icon-text' },
    { label: 'Text Area', icon: 'icon-textarea' },
];


/***/ }),

/***/ "../../../../../src/app/pages/zorro-form/zorro-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <div id=\"code-container\">\r\n    <div id=\"control-panel\">\r\n      <div id=\"code-info\">\r\n        <span class=\"code-type\">JSON</span>\r\n        <span class=\"code-info-time\">{{builderInfo.finishTime}}</span>\r\n        <span [ngClass]=\"{'info':builderInfo.msgType=='info','error':builderInfo.msgType!=='info'}\">{{builderInfo.msg}}</span>\r\n      </div>\r\n      <div class=\"control-btn-panel\">\r\n        <nz-dropdown>\r\n          <button nz-button nz-dropdown [nzType]=\"'primary'\" class=\"btn btn-default btn-sm\">\r\n            <span>{{demoName}}</span>\r\n            <i class=\"anticon anticon-down\"></i>\r\n          </button>\r\n          <ul nz-menu>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"水平布局\" (click)=\"toggleSchema('horizontal-layout')\">Horizontal Layout Example</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"垂直布局\" (click)=\"toggleSchema('vertical-layout')\">Vertical Layout Example</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"栅格布局例子\" (click)=\"toggleSchema('grid')\">Grid Layout Example</a>\r\n            </li>\r\n           <!--  <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"简单例子\" (click)=\"toggleSchema('simple')\">Simple Example</a>\r\n            </li> -->\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"其他例子\" (click)=\"toggleSchema('other')\">Other Example</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"全部 widget 例子\" (click)=\"toggleSchema('full')\">Full Widget Example</a>\r\n            </li>\r\n          </ul>\r\n        </nz-dropdown>\r\n        <!-- <a href=\"javascript:;\" (click)=\"toggleSchema()\" title=\"点击切换schema\" class=\"btn btn-default btn-sm\">Test：Toggle schema</a> -->\r\n        <a href=\"javascript:;\" (click)=\"run(editor)\" class=\"btn btn-default btn-sm\" title=\"执行代码\">RUN</a>\r\n      </div>\r\n    </div>\r\n    <div #editor id=\"code-panel\" ace-editor [text]=\"schemaString\" [mode]=\"'json'\" [theme]=\"'chrome'\" [options]=\"aceOptions\" [readOnly]=\"false\"\r\n      (textChanged)=\"onAceChange($event)\" style=\"display:block; height: 80vh; width:100%\"></div>\r\n  </div>\r\n  <div id=\"h-handler\" class=\"handler\" style=\"left: 40%;\"></div>\r\n  <div id=\"view-container\">\r\n    <div id=\"control-panel\">\r\n      <div class=\"control-btn-panel\">\r\n        <nz-dropdown>\r\n          <button nz-button nz-dropdown class=\"btn btn-default btn-sm\">\r\n            <span>Save</span>\r\n            <i class=\"anticon anticon-down\"></i>\r\n          </button>\r\n          <ul nz-menu>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"下载HTML模板\" (click)=\"copyHTMLCode(1)\">Download HTML</a>\r\n            </li>\r\n            <li nz-menu-item>\r\n              <a href=\"javascript:;\" title=\"复制HTML模板代码\" (click)=\"copyHTMLCode()\">Copy HTML code</a>\r\n            </li>\r\n          </ul>\r\n        </nz-dropdown>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div style=\"padding: 24px;background: inherit;\">\r\n        <zorro-form-builder [schema]=\"schemaJson\" [model]=\"model\" [actions]=\"actions\" (onErrorChange)=\"logErrors($event.value)\" (onChange)=\"setValue($event.value)\"\r\n          (onBuilderFinish)=\"onBuilderFinish($event)\"></zorro-form-builder>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/zorro-form/zorro-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZorroFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_ace_tern__ = __webpack_require__("../../../../ng-ace-tern/ng-ace-tern.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard__ = __webpack_require__("../../../../copy-text-to-clipboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_formatTime__ = __webpack_require__("../../../../../src/app/utils/formatTime.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_setSplitPosition__ = __webpack_require__("../../../../../src/app/utils/setSplitPosition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_download__ = __webpack_require__("../../../../../src/app/utils/download.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZorroFormComponent = (function () {
    function ZorroFormComponent(_message) {
        var _this = this;
        this._message = _message;
        // schema
        this.actions = {};
        this.count = 1;
        this.builderInfo = {
            msgType: 'info',
            msg: '',
            finishTime: '',
            _startTime: 0,
            _endTime: 0
        };
        this.demoName = 'Horizontal Layout Example';
        // ace
        this.text = 'test';
        this.aceOptions = {
            printMargin: false,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        };
        this.createMessage = function (type, text) {
            _this._message.create(type, "" + text);
        };
        this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/horizontal-layout.json");
        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
        // 按钮事件注册
        this.actions['alert'] = function (property, options) {
            property.forEachChildRecursive(function (child) {
                console.log(child.valid, child);
            });
            alert(JSON.stringify(_this.value));
        };
        this.actions['reset'] = function (form, options) {
            form.reset();
        };
    }
    ZorroFormComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_setSplitPosition__["a" /* initSplitEventHandler */])();
        });
    };
    ZorroFormComponent.prototype.toggleSchema = function (type) {
        switch (type) {
            case 'horizontal-layout':
                this.demoName = 'Horizontal Layout Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/horizontal-layout.json");
                break;
            case 'vertical-layout':
                this.demoName = 'Vertical Layout Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/vertical-layout.json");
                break;
            case 'simple':
                this.demoName = 'Simple Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/person-info.json");
                break;
            case 'other':
                this.demoName = 'Simple Example2';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/otherschema.json");
                break;
            case 'grid':
                this.demoName = 'Grid Layout Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/zorro-grid.json");
                break;
            case 'full':
                this.demoName = 'Full Widget Example';
                this.schemaString = __webpack_require__("../../../../raw-loader/index.js!../../../../../src/mock/zorro-full-widget.json");
                break;
        }
        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
    };
    ZorroFormComponent.prototype.setValue = function (value) {
        this.value = value;
    };
    ZorroFormComponent.prototype.logErrors = function (errors) {
        console.log('ERRORS', errors);
        this.log('页面构建失败，请检查再重试', 'error');
    };
    ZorroFormComponent.prototype.log = function (text, type) {
        this.builderInfo.finishTime = Object(__WEBPACK_IMPORTED_MODULE_4__utils_formatTime__["a" /* formatTime */])(new Date());
        if (type !== 'warn' && type !== 'error') {
            this.builderInfo.msgType = 'info';
        }
        else {
            this.builderInfo.msgType = type;
        }
        this.builderInfo.msg = text;
    };
    ZorroFormComponent.prototype.onBuilderFinish = function ($event) {
        this.htmlCode = $event.code;
        this.builderInfo._endTime = new Date().getTime();
        this.log("\u9875\u9762\u6784\u5EFA\u5B8C\u6210\uFF0C" + (this.builderInfo._endTime - this.builderInfo._startTime) + "ms", 'info');
    };
    ZorroFormComponent.prototype.run = function (editor) {
        if (this.hasEditorError()) {
            this.log('编辑器内容有误', 'error');
            return;
        }
        var text = this.editorDirective.editor.getValue();
        this.builderInfo._startTime = new Date().getTime();
        this.schemaJson = JSON.parse(text);
    };
    ZorroFormComponent.prototype.onAceChange = function (data) {
        console.log('~~~编辑器内容变化~~~');
    };
    ZorroFormComponent.prototype.copyHTMLCode = function (type) {
        if (type === 1) {
            if ('download' in document.createElement('a')) {
                Object(__WEBPACK_IMPORTED_MODULE_6__utils_download__["a" /* funDownload */])(this.htmlCode);
            }
            else {
                return this.createMessage('error', '代码下载失败，请使用 Chrome 浏览器');
            }
            return this.createMessage('success', '文件下载成功！');
        }
        if (__WEBPACK_IMPORTED_MODULE_3_copy_text_to_clipboard__(this.htmlCode)) {
            return this.createMessage('success', '代码已经复制到剪贴板！');
        }
        else {
            return this.createMessage('error', '代码复制失败，请使用Chrome浏览器');
        }
    };
    ZorroFormComponent.prototype.hasEditorError = function () {
        var annotations = this.editorDirective.editor.getSession().getAnnotations();
        for (var aid = 0, alen = annotations.length; aid < alen; ++aid) {
            if (annotations[aid].type === 'error') {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ng_ace_tern__["a" /* AceEditorDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng_ace_tern__["a" /* AceEditorDirective */])
    ], ZorroFormComponent.prototype, "editorDirective", void 0);
    ZorroFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-zorro-form',
            template: __webpack_require__("../../../../../src/app/pages/zorro-form/zorro-form.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["b" /* NzMessageService */]])
    ], ZorroFormComponent);
    return ZorroFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/builder-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuilderService = (function () {
    function BuilderService() {
        this.builderChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    BuilderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BuilderService);
    return BuilderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_ace_tern__ = __webpack_require__("../../../../ng-ace-tern/ng-ace-tern.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_schema_form_module__ = __webpack_require__("../../../../../src/lib/schema-form.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["a" /* NgZorroAntdModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng_ace_tern__["b" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_5__lib_schema_form_module__["a" /* SchemaFormModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["a" /* NgZorroAntdModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_ace_tern__["b" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_5__lib_schema_form_module__["a" /* SchemaFormModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/utils/download.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = funDownload;
/**
 * download
 * @param content 文件内容
 * @param filename 文件名称
 */
function funDownload(content, filename) {
    if (filename === void 0) { filename = 'form.html'; }
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
}


/***/ }),

/***/ "../../../../../src/app/utils/formatTime.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatTime;
/**
 * format time to string
 * @param time
 */
function formatTime(time) {
    var digits = [time.getHours(), time.getMinutes(), time.getSeconds()];
    var timeStr = '';
    for (var i = 0, len = digits.length; i < len; ++i) {
        timeStr += (digits[i] < 10 ? '0' : '') + digits[i];
        if (i < len - 1) {
            timeStr += ':';
        }
    }
    return time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate() + ' ' + timeStr;
}


/***/ }),

/***/ "../../../../../src/app/utils/setSplitPosition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initSplitEventHandler;
function initSplitEventHandler() {
    $('#h-handler').mousedown(function () {
        window['handler_isDown'] = true;
    });
    $(window).mousemove(function (e) {
        if (window['handler_isDown']) {
            var left = e.clientX / window.innerWidth;
            setSplitPosition(left);
        }
    }).mouseup(function () {
        window['handler_isDown'] = false;
    });
    $(window).resize(function () {
    });
}
// set splitter position by percentage, left should be between 0 to 1
function setSplitPosition(percentage) {
    percentage = Math.min(0.9, Math.max(0.1, percentage));
    var left = percentage * 100;
    $('#code-container').css('width', left + '%');
    $('#view-container').css('width', (100 - left) + '%')
        .css('left', left + '%');
    $('#h-handler').css('left', left + '%');
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/lib/builder/bs-template-builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BsTmplBuilder;
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
function BsTmplBuilder(registry, formProperty) {
    var templ = "";
    var fieldsets = formProperty.schema.fieldsets;
    if (fieldsets && fieldsets.length) {
        templ = '<form><fieldset>';
        for (var _i = 0, fieldsets_1 = fieldsets; _i < fieldsets_1.length; _i++) {
            var fieldset = fieldsets_1[_i];
            templ += fieldset.title ? ('<legend>' + fieldset.title + '</legend>') : '';
            for (var _a = 0, _b = fieldset.fields; _a < _b.length; _a++) {
                var fieldId = _b[_a];
                var property = formProperty.getProperty(fieldId);
                var widgetInfo = property.schema.widget;
                var WidgetClass = registry.getWidgetType(widgetInfo.id);
                // templ += '<div  *ngIf="property.visible" [class.has-error] = "!control.valid" [class.has-success] = "control.valid">';
                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                }
                else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                // templ += '</div>';
            }
        }
    }
    if (formProperty.schema.button !== undefined) {
        var button = formProperty.schema.button;
        var WidgetClass = registry.getWidgetType('button');
        var btnHtml = '', btnWidget = null, btnGrid = button.grid || {};
        for (var _c = 0, _d = button.items; _c < _d.length; _c++) {
            var btn = _d[_c];
            btnWidget = new WidgetClass();
            btnHtml += btnWidget.getTemplate(formProperty.schema, btn);
        }
        var listOfClassName = btnWidget.getLayoutClass({ grid: btnGrid });
        templ += "\n        <div class=\"form-group\">\n            <div class=\"" + listOfClassName.join(' ') + "\">\n                " + btnHtml + "\n            </div>\n        </div>\n        ";
    }
    templ += '</fieldset></form>';
    return templ;
}


/***/ }),

/***/ "../../../../../src/lib/builder/zorro-template-builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ZorroTmplBuilder;
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
function ZorroTmplBuilder(registry, formProperty) {
    var templ = "";
    var fieldsets = formProperty.schema.fieldsets;
    var layout = formProperty.schema.layout;
    var col_num = formProperty.schema.col_num;
    var col_gutter = formProperty.schema.col_gutter || 0;
    var span = col_num ? 24 / col_num : 0;
    if (fieldsets && fieldsets.length) {
        templ = "<form nz-form " + (layout ? "[nzLayout]=\"'" + layout + "'\"" : '') + "><div nz-row [nzGutter]=\"" + col_gutter + "\">";
        for (var _i = 0, fieldsets_1 = fieldsets; _i < fieldsets_1.length; _i++) {
            var fieldset = fieldsets_1[_i];
            templ += fieldset.title ? ('<legend>' + fieldset.title + '</legend>') : '';
            for (var _a = 0, _b = fieldset.fields; _a < _b.length; _a++) {
                var fieldId = _b[_a];
                var property = formProperty.getProperty(fieldId);
                var widgetInfo = property.schema.widget;
                var WidgetClass = registry.getWidgetType(widgetInfo.id || widgetInfo);
                templ += col_num ? "<div nz-col [nzSpan]=\"" + span + "\" nz-form-item>" : '<div  nz-row nz-form-item>';
                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                }
                else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                templ += '</div>';
            }
        }
        templ += '</div>';
    }
    if (formProperty.schema.button !== undefined) {
        var button = formProperty.schema.button;
        var WidgetClass = registry.getWidgetType('button');
        var btnHtml = '', btnWidget = null, btnGrid = button.grid || {};
        for (var _c = 0, _d = button.items; _c < _d.length; _c++) {
            var btn = _d[_c];
            btnWidget = new WidgetClass();
            btnHtml += btnWidget.getTemplate(formProperty.schema, btn);
        }
        var listOfClassName = btnWidget.getLayoutClass({ grid: btnGrid, _prefixCls: 'ant-col' });
        templ += "\n        <div  nz-form-item nz-row>\n            <div  nz-col class=\"" + listOfClassName.join(' ') + "\">\n                " + btnHtml + "\n            </div>\n        </div>\n        ";
    }
    templ += '</form>';
    return templ;
}


/***/ }),

/***/ "../../../../../src/lib/components/bs-form-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsFormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__("../../../../../src/lib/model/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terminator_service__ = __webpack_require__("../../../../../src/lib/terminator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schemavalidator_factory__ = __webpack_require__("../../../../../src/lib/schemavalidator.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_factory__ = __webpack_require__("../../../../../src/lib/widget-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_bootstrap_defaultwidget_registry__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/defaultwidget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__builder_bs_template_builder__ = __webpack_require__("../../../../../src/lib/builder/bs-template-builder.ts");
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new __WEBPACK_IMPORTED_MODULE_2__model__["b" /* FormPropertyFactory */](schemaValidatorFactory, validatorRegistry);
}
;
var BsFormBuilderComponent = (function () {
    function BsFormBuilderComponent(registry, formPropertyFactory, actionRegistry, validatorRegistry, widgetFactory, cdr, terminator) {
        if (widgetFactory === void 0) { widgetFactory = null; }
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.validators = {};
        this.schema = null;
        this.actions = {};
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onErrorChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onErrorsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onBuilderFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', function () { return null; });
        this.rootProperty = null;
        this.widget = null;
        this.buttons = [];
        this.registry = registry;
    }
    BsFormBuilderComponent_1 = BsFormBuilderComponent;
    BsFormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy) {
                _this.ref.destroy();
            }
        });
    };
    BsFormBuilderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.actions) {
            this.setActions();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            this[this.schema.modelName] = {};
            this.coverProperty(this.schema);
            if (this.schema.debug) {
                console.warn('schema debugger', this.schema);
            }
            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            __WEBPACK_IMPORTED_MODULE_2__model__["c" /* SchemaPreprocessor */].preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(function (value) {
                if (_this.modelChanged.observers.length > 0) {
                    if (_this.model) {
                        Object.assign(_this.model, value);
                    }
                    else {
                        _this.model = value;
                    }
                    _this.modelChanged.emit(value);
                }
                _this.onChange.emit({ value: value });
            });
            this.rootProperty.errorsChanges.subscribe(function (value) {
                _this.onErrorChange.emit({ value: value });
                _this.isValid.emit(!(value && value.length));
            });
        }
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
        this._createForm(this.rootProperty.schema.widget);
    };
    BsFormBuilderComponent.prototype.coverProperty = function (schema) {
        var _this = this;
        Object.keys(schema.properties).forEach(function (key) {
            var p = schema.properties[key];
            p['name'] = p['name'] ? p['name'] : key;
            p['formId'] = 'field' + (BsFormBuilderComponent_1.counter++);
            p['modelName'] = schema.modelName || 'model';
            if (schema.grid) {
                Object.assign(p, { grid: schema.grid }, p.grid ? { grid: p.grid } : {});
            }
            /*  ListOfGridSizeName.forEach(name => {
                 if (schema[name]) {
                     Object.assign(p, { [name]: schema[name] }, p[name] ? { [name]: p[name] } : {});
                 }
             }); */
            if (p.items && p.properties && p.type === 'array') {
                _this.coverProperty(p.items);
            }
        });
    };
    BsFormBuilderComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    BsFormBuilderComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    BsFormBuilderComponent.prototype.onWidgetInstanciated = function (widget) {
        this.widget = widget;
        var id = 'field' + (BsFormBuilderComponent_1.counter++);
        this.widget.formProperty = this.rootProperty;
        this.widget.schema = this.rootProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    BsFormBuilderComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    BsFormBuilderComponent.prototype._createForm = function (widgetInfo) {
        var widgetTemplate = Object(__WEBPACK_IMPORTED_MODULE_8__builder_bs_template_builder__["a" /* BsTmplBuilder */])(this.registry, this.rootProperty);
        // let widgetTemplate = this.registry.getWidgetType(widgetInfo.id);
        var template = widgetTemplate;
        var properties = (_a = {
                "formProperty": this.rootProperty,
                "control": this.control,
                "property": { visible: true },
                "_debug_": this.rootProperty.schema.debug,
                "modelName": this.rootProperty.schema.modelName || 'model'
            },
            _a[this.rootProperty.schema.modelName || 'model'] = this.rootProperty.value || {},
            _a);
        this.ref = this.widgetFactory.addWidget(this.container, template, properties, this);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
        this.onBuilderFinish.emit({ code: template });
        var _a;
    };
    BsFormBuilderComponent.counter = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "widgetInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "widgetInstanciated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */])
    ], BsFormBuilderComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "validators", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "schema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "actions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "isValid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onErrorChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onErrorsChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onBuilderFinish", void 0);
    BsFormBuilderComponent = BsFormBuilderComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bs-form-builder',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            template: "<div #target></div>",
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__widget_factory__["a" /* WidgetFactory */],
                __WEBPACK_IMPORTED_MODULE_2__model__["c" /* SchemaPreprocessor */],
                __WEBPACK_IMPORTED_MODULE_2__model__["a" /* ActionRegistry */],
                __WEBPACK_IMPORTED_MODULE_2__model__["d" /* ValidatorRegistry */],
                __WEBPACK_IMPORTED_MODULE_3__terminator_service__["a" /* TerminatorService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__model__["b" /* FormPropertyFactory */],
                    useFactory: useFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__schemavalidator_factory__["a" /* SchemaValidatorFactory */], __WEBPACK_IMPORTED_MODULE_2__model__["d" /* ValidatorRegistry */]]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_6__widget_registry__["a" /* WidgetRegistry */], useClass: __WEBPACK_IMPORTED_MODULE_7__widgets_bootstrap_defaultwidget_registry__["a" /* BootStrapDefaultWidgetRegistry */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__widget_registry__["a" /* WidgetRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__model__["b" /* FormPropertyFactory */],
            __WEBPACK_IMPORTED_MODULE_2__model__["a" /* ActionRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__model__["d" /* ValidatorRegistry */],
            __WEBPACK_IMPORTED_MODULE_5__widget_factory__["a" /* WidgetFactory */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__terminator_service__["a" /* TerminatorService */]])
    ], BsFormBuilderComponent);
    return BsFormBuilderComponent;
    var BsFormBuilderComponent_1;
}());



/***/ }),

/***/ "../../../../../src/lib/components/zorro-form-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZorroFormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__("../../../../../src/lib/model/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terminator_service__ = __webpack_require__("../../../../../src/lib/terminator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schemavalidator_factory__ = __webpack_require__("../../../../../src/lib/schemavalidator.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zorro_widget_factory__ = __webpack_require__("../../../../../src/lib/zorro-widget-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__builder_zorro_template_builder__ = __webpack_require__("../../../../../src/lib/builder/zorro-template-builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index__ = __webpack_require__("../../../../../src/lib/index.ts");
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new __WEBPACK_IMPORTED_MODULE_2__model__["b" /* FormPropertyFactory */](schemaValidatorFactory, validatorRegistry);
}
;
var ZorroFormBuilderComponent = (function () {
    function ZorroFormBuilderComponent(registry, formPropertyFactory, actionRegistry, validatorRegistry, ZorroWidgetFactory, cdr, terminator) {
        if (ZorroWidgetFactory === void 0) { ZorroWidgetFactory = null; }
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.ZorroWidgetFactory = ZorroWidgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.validators = {};
        this.schema = null;
        this.actions = {};
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onErrorChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onErrorsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onBuilderFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', function () { return null; });
        this.rootProperty = null;
        this.widget = null;
        this.buttons = [];
        this.registry = registry;
    }
    ZorroFormBuilderComponent_1 = ZorroFormBuilderComponent;
    ZorroFormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy) {
                _this.ref.destroy();
            }
        });
    };
    ZorroFormBuilderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.actions) {
            this.setActions();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            this[this.schema.modelName] = {};
            this.coverProperty(this.schema);
            if (this.schema.debug) {
                console.warn('schema debugger', this.schema);
            }
            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            __WEBPACK_IMPORTED_MODULE_2__model__["c" /* SchemaPreprocessor */].preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(function (value) {
                if (_this.modelChanged.observers.length > 0) {
                    if (_this.model) {
                        Object.assign(_this.model, value);
                    }
                    else {
                        _this.model = value;
                    }
                    _this.modelChanged.emit(value);
                }
                _this.onChange.emit({ value: value });
            });
            this.rootProperty.errorsChanges.subscribe(function (value) {
                _this.onErrorChange.emit({ value: value });
                _this.isValid.emit(!(value && value.length));
            });
        }
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
        this._createForm(this.rootProperty.schema.widget);
    };
    ZorroFormBuilderComponent.prototype.coverProperty = function (schema) {
        var _this = this;
        Object.keys(schema.properties).forEach(function (key) {
            var p = schema.properties[key];
            p['name'] = p['name'] ? p['name'] : key;
            p['formId'] = 'field' + (ZorroFormBuilderComponent_1.counter++);
            p['modelName'] = schema.modelName || 'model';
            p['_prefixCls'] = 'ant-col';
            if (schema.grid) {
                Object.assign(p, { grid: schema.grid }, p.grid ? { grid: p.grid } : {});
            }
            if (p.type === 'array' && p.widget === 'checkbox') {
                if (p.items && p.items.oneOf) {
                    var options = [];
                    for (var _i = 0, _a = p.items.oneOf; _i < _a.length; _i++) {
                        var one = _a[_i];
                        options.push({
                            label: one.description,
                            value: one.enum[0],
                            checked: one['checked'] || false
                        });
                    }
                    // p['checkOptions'] = options;
                    schema['checkOptions'] = options;
                }
            }
            if (p.items && p.properties && p.type === 'array') {
                _this.coverProperty(p.items);
            }
        });
    };
    ZorroFormBuilderComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    ZorroFormBuilderComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    ZorroFormBuilderComponent.prototype.onWidgetInstanciated = function (widget) {
        this.widget = widget;
        var id = 'field' + (ZorroFormBuilderComponent_1.counter++);
        this.widget.formProperty = this.rootProperty;
        this.widget.schema = this.rootProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    ZorroFormBuilderComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    ZorroFormBuilderComponent.prototype._createForm = function (widgetInfo) {
        var widgetTemplate = Object(__WEBPACK_IMPORTED_MODULE_7__builder_zorro_template_builder__["a" /* ZorroTmplBuilder */])(this.registry, this.rootProperty);
        // let widgetTemplate = this.registry.getWidgetType(widgetInfo.id);
        var template = widgetTemplate;
        var properties = (_a = {
                "formProperty": this.rootProperty,
                "control": this.control,
                "property": { visible: true },
                "_debug_": this.rootProperty.schema.debug,
                "modelName": this.rootProperty.schema.modelName || 'model'
            },
            _a[this.rootProperty.schema.modelName || 'model'] = this.rootProperty.value || {},
            _a);
        properties[properties['modelName']]['checkOptions'] = this.rootProperty.schema.checkOptions || {}; //nz-checkbox-group
        console.log(properties[properties['modelName']]['checkOptions']);
        this.ref = this.ZorroWidgetFactory.addWidget(this.container, template, properties, this);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
        this.onBuilderFinish.emit({ code: template });
        var _a;
    };
    ZorroFormBuilderComponent.counter = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "widgetInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "widgetInstanciated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */])
    ], ZorroFormBuilderComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "validators", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "schema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "actions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "isValid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onErrorChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onErrorsChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onBuilderFinish", void 0);
    ZorroFormBuilderComponent = ZorroFormBuilderComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zorro-form-builder',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            template: "<div #target></div>",
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__zorro_widget_factory__["a" /* ZorroWidgetFactory */],
                __WEBPACK_IMPORTED_MODULE_2__model__["c" /* SchemaPreprocessor */],
                __WEBPACK_IMPORTED_MODULE_2__model__["a" /* ActionRegistry */],
                __WEBPACK_IMPORTED_MODULE_2__model__["d" /* ValidatorRegistry */],
                __WEBPACK_IMPORTED_MODULE_3__terminator_service__["a" /* TerminatorService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__model__["b" /* FormPropertyFactory */],
                    useFactory: useFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_4__schemavalidator_factory__["a" /* SchemaValidatorFactory */], __WEBPACK_IMPORTED_MODULE_2__model__["d" /* ValidatorRegistry */]]
                },
                { provide: __WEBPACK_IMPORTED_MODULE_6__widget_registry__["a" /* WidgetRegistry */], useClass: __WEBPACK_IMPORTED_MODULE_8__index__["a" /* ZorroDefaultWidgetRegistry */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__widget_registry__["a" /* WidgetRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__model__["b" /* FormPropertyFactory */],
            __WEBPACK_IMPORTED_MODULE_2__model__["a" /* ActionRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__model__["d" /* ValidatorRegistry */],
            __WEBPACK_IMPORTED_MODULE_5__zorro_widget_factory__["a" /* ZorroWidgetFactory */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__terminator_service__["a" /* TerminatorService */]])
    ], ZorroFormBuilderComponent);
    return ZorroFormBuilderComponent;
    var ZorroFormBuilderComponent_1;
}());



/***/ }),

/***/ "../../../../../src/lib/dnd/abstract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AbstractHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__("../../../../../src/lib/dnd/dnd.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_service__ = __webpack_require__("../../../../../src/lib/dnd/dnd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_utils__ = __webpack_require__("../../../../../src/lib/dnd/dnd.utils.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbstractComponent = (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(_this._target)) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isPresent */])(_this.dragImage)) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["e" /* isString */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["b" /* createImage */])(_this.dragImage));
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["c" /* isFunction */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* callFun */])(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isPresent */])(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponent.prototype.setDragHandle = function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this._cdr && !_this._cdr.destroyed) {
                _this._cdr.detectChanges();
            }
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    AbstractComponent.prototype._isDropAllowed = function (event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    AbstractComponent.prototype._preventAndStop = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    AbstractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AbstractComponent);
    return AbstractComponent;
}());

var AbstractHandleComponent = (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/dnd/dnd.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataTransferEffect */
/* unused harmony export DragImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__("../../../../../src/lib/dnd/dnd.utils.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

var DataTransferEffect = (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());

var DragImage = (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["e" /* isString */])(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());

var DragDropConfig = (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());



/***/ }),

/***/ "../../../../../src/lib/dnd/dnd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__("../../../../../src/lib/dnd/dnd.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_service__ = __webpack_require__("../../../../../src/lib/dnd/dnd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_component__ = __webpack_require__("../../../../../src/lib/dnd/draggable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__droppable_component__ = __webpack_require__("../../../../../src/lib/dnd/droppable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sortable_component__ = __webpack_require__("../../../../../src/lib/dnd/sortable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abstract_component__ = __webpack_require__("../../../../../src/lib/dnd/abstract.component.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var providers = [
    __WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__dnd_service__["a" /* DragDropService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__dnd_service__["c" /* dragDropServiceFactory */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__dnd_service__["b" /* DragDropSortableService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__dnd_service__["d" /* dragDropSortableServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */]] }
];
var DndModule = (function () {
    function DndModule() {
    }
    DndModule_1 = DndModule;
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule_1,
            providers: providers
        };
    };
    DndModule = DndModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_3__draggable_component__["b" /* DraggableHandleComponent */], __WEBPACK_IMPORTED_MODULE_4__droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__sortable_component__["b" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__sortable_component__["a" /* SortableComponent */], __WEBPACK_IMPORTED_MODULE_5__sortable_component__["c" /* SortableHandleComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_3__draggable_component__["b" /* DraggableHandleComponent */], __WEBPACK_IMPORTED_MODULE_4__droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__sortable_component__["b" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__sortable_component__["a" /* SortableComponent */], __WEBPACK_IMPORTED_MODULE_5__sortable_component__["c" /* SortableHandleComponent */]],
        })
    ], DndModule);
    return DndModule;
    var DndModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/dnd/dnd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DragDropData */
/* harmony export (immutable) */ __webpack_exports__["c"] = dragDropServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropService; });
/* harmony export (immutable) */ __webpack_exports__["d"] = dragDropSortableServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DragDropSortableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__("../../../../../src/lib/dnd/dnd.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_utils__ = __webpack_require__("../../../../../src/lib/dnd/dnd.utils.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragDropData = (function () {
    function DragDropData() {
    }
    return DragDropData;
}());

function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], DragDropService);
    return DragDropService;
}());

function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["d" /* isPresent */])(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["d" /* isPresent */])(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dnd_config__["a" /* DragDropConfig */]])
    ], DragDropSortableService);
    return DragDropSortableService;
}());



/***/ }),

/***/ "../../../../../src/lib/dnd/dnd.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = isString;
/* harmony export (immutable) */ __webpack_exports__["d"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["c"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["b"] = createImage;
/* harmony export (immutable) */ __webpack_exports__["a"] = callFun;
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}


/***/ }),

/***/ "../../../../../src/lib/dnd/draggable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DraggableHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__("../../../../../src/lib/dnd/abstract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__("../../../../../src/lib/dnd/dnd.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__("../../../../../src/lib/dnd/dnd.service.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DraggableComponent = (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DraggableComponent.prototype, "draggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DraggableComponent.prototype, "onDragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DraggableComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableComponent.prototype, "dragData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("onDragSuccess"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DraggableComponent.prototype, "dropzones", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableComponent.prototype, "effectallowed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableComponent.prototype, "effectcursor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableComponent.prototype, "dragImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DraggableComponent.prototype, "cloneItem", void 0);
    DraggableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-draggable]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DraggableComponent);
    return DraggableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

var DraggableHandleComponent = (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    DraggableHandleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-draggable-handle]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */], DraggableComponent,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DraggableHandleComponent);
    return DraggableHandleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["b" /* AbstractHandleComponent */]));



/***/ }),

/***/ "../../../../../src/lib/dnd/droppable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__("../../../../../src/lib/dnd/abstract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__("../../../../../src/lib/dnd/dnd.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__("../../../../../src/lib/dnd/dnd.service.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DroppableComponent = (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        var dataTransfer = event.dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dropEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DroppableComponent.prototype, "droppable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableComponent.prototype, "onDropSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableComponent.prototype, "onDragEnter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableComponent.prototype, "onDragOver", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableComponent.prototype, "onDragLeave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("allowDrop"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], DroppableComponent.prototype, "allowdrop", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DroppableComponent.prototype, "dropzones", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableComponent.prototype, "effectallowed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableComponent.prototype, "effectcursor", null);
    DroppableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-droppable]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["a" /* DragDropConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], DroppableComponent);
    return DroppableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));



/***/ }),

/***/ "../../../../../src/lib/dnd/sortable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SortableHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_component__ = __webpack_require__("../../../../../src/lib/dnd/abstract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_config__ = __webpack_require__("../../../../../src/lib/dnd/dnd.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dnd_service__ = __webpack_require__("../../../../../src/lib/dnd/dnd.service.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SortableContainer = (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this.elemRef = elemRef;
        _this._sortableDataService = _sortableDataService;
        _this._dragCopy = false;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dragCopy", {
        get: function () {
            return this._dragCopy;
        },
        set: function (value) {
            this._dragCopy = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            if (sortableData instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]) {
                this.sortableHandler = new SortableFormArrayHandler();
            }
            else {
                this.sortableHandler = new SortableArrayHandler();
            }
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype.getId = function () {
        return this.elemRef.nativeElement.getAttribute('id');
    };
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
            // Check does element exist in sortableData of this Container
            if (this.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list except that sourceList dragCopy is true
                if (!this._sortableDataService.sortableContainer.dragCopy) {
                    this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                }
                else {
                    if (this._sortableDataService.sortableContainer.getId() === this.getId()) {
                        return;
                    }
                }
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this.insertItemAt(item, 0);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    SortableContainer.prototype.getItemAt = function (index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.indexOf = function (item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    };
    SortableContainer.prototype.removeItemAt = function (index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.insertItemAt = function (item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableContainer.prototype, "draggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableContainer.prototype, "dragCopy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SortableContainer.prototype, "sortableData", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SortableContainer.prototype, "dropzones", null);
    SortableContainer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-sortable-container]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_3__dnd_config__["a" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__dnd_service__["b" /* DragDropSortableService */]])
    ], SortableContainer);
    return SortableContainer;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_component__["a" /* AbstractComponent */]));

var SortableArrayHandler = (function () {
    function SortableArrayHandler() {
    }
    SortableArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData[index];
    };
    SortableArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.indexOf(item);
    };
    SortableArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.splice(index, 1);
    };
    SortableArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.splice(index, 0, item);
    };
    return SortableArrayHandler;
}());
var SortableFormArrayHandler = (function () {
    function SortableFormArrayHandler() {
    }
    SortableFormArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData.at(index);
    };
    SortableFormArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    SortableFormArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.removeAt(index);
    };
    SortableFormArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());
var SortableComponent = (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragStartCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDragEndCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.onDropSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.isDragged = true;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log(this._sortableDataService.sortableContainer.getId())
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                if (!this._sortableDataService.sortableContainer.dragCopy) {
                    this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                    // console.log(this._sortableDataService.sortableContainer.getId(),this._sortableDataService.sortableContainer.dragCopy)
                }
                else {
                    if (this._sortableDataService.sortableContainer.getId() === this._sortableContainer.getId()) {
                        return;
                    }
                }
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('sortableIndex'),
        __metadata("design:type", Number)
    ], SortableComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableComponent.prototype, "draggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("dropEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableComponent.prototype, "droppable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SortableComponent.prototype, "dragData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortableComponent.prototype, "effectallowed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortableComponent.prototype, "effectcursor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("onDragSuccess"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SortableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("onDragStart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SortableComponent.prototype, "onDragStartCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("onDragOver"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SortableComponent.prototype, "onDragOverCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("onDragEnd"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SortableComponent.prototype, "onDragEndCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("onDropSuccess"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SortableComponent.prototype, "onDropSuccessCallback", void 0);
    SortableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-sortable]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_3__dnd_config__["a" /* DragDropConfig */],
            SortableContainer,
            __WEBPACK_IMPORTED_MODULE_4__dnd_service__["b" /* DragDropSortableService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SortableComponent);
    return SortableComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_component__["a" /* AbstractComponent */]));

var SortableHandleComponent = (function (_super) {
    __extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    SortableHandleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[dnd-sortable-handle]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dnd_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_3__dnd_config__["a" /* DragDropConfig */], SortableComponent,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SortableHandleComponent);
    return SortableHandleComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_component__["b" /* AbstractHandleComponent */]));



/***/ }),

/***/ "../../../../../src/lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* unused harmony reexport WidgetRegistry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_primeng__ = __webpack_require__("../../../../../src/lib/widgets/primeng/index.ts");
/* unused harmony reexport PrimengDefaultWidgetRegistry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_bootstrap__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/index.ts");
/* unused harmony reexport BootStrapDefaultWidgetRegistry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_zorro__ = __webpack_require__("../../../../../src/lib/widgets/zorro/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__widgets_zorro__["a"]; });






/***/ }),

/***/ "../../../../../src/lib/model/actionregistry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionRegistry; });
var ActionRegistry = (function () {
    function ActionRegistry() {
        this.actions = {};
    }
    ActionRegistry.prototype.clear = function () {
        this.actions = {};
    };
    ActionRegistry.prototype.register = function (actionId, action) {
        this.actions[actionId] = action;
    };
    ActionRegistry.prototype.get = function (actionId) {
        return this.actions[actionId];
    };
    return ActionRegistry;
}());



/***/ }),

/***/ "../../../../../src/lib/model/arrayproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formproperty__ = __webpack_require__("../../../../../src/lib/model/formproperty.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayProperty = (function (_super) {
    __extends(ArrayProperty, _super);
    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        return _this;
    }
    ArrayProperty.prototype.addItem = function (value) {
        if (value === void 0) { value = null; }
        var newProperty = this.addProperty();
        newProperty.reset(value, false);
        return newProperty;
    };
    ArrayProperty.prototype.addProperty = function () {
        var newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
        this.properties.push(newProperty);
        return newProperty;
    };
    ArrayProperty.prototype.removeItem = function (index) {
        this.properties.splice(index, 1);
        this.updateValueAndValidity(false, true);
    };
    ArrayProperty.prototype.setValue = function (value, onlySelf) {
        this.createProperties();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ArrayProperty.prototype._hasValue = function () {
        return true;
    };
    ArrayProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ArrayProperty.prototype.reduceValue = function () {
        var value = [];
        this.forEachChild(function (property, _) {
            if (property.visible && property._hasValue()) {
                value.push(property.value);
            }
        });
        this._value = value;
    };
    ArrayProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || [];
        this.properties = [];
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ArrayProperty.prototype.createProperties = function () {
        this.properties = [];
    };
    ArrayProperty.prototype.resetProperties = function (value) {
        for (var idx in value) {
            if (value.hasOwnProperty(idx)) {
                var property = this.addProperty();
                property.reset(value[idx], true);
            }
        }
    };
    return ArrayProperty;
}(__WEBPACK_IMPORTED_MODULE_0__formproperty__["b" /* PropertyGroup */]));



/***/ }),

/***/ "../../../../../src/lib/model/atomicproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtomicProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formproperty__ = __webpack_require__("../../../../../src/lib/model/formproperty.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AtomicProperty = (function (_super) {
    __extends(AtomicProperty, _super);
    function AtomicProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtomicProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.reset = function (value, onlySelf) {
        if (value === void 0) { value = null; }
        if (onlySelf === void 0) { onlySelf = true; }
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.resetValue = function (value) {
        if (value === null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
    };
    AtomicProperty.prototype._hasValue = function () {
        return this.fallbackValue() !== this.value;
    };
    AtomicProperty.prototype._updateValue = function () {
    };
    return AtomicProperty;
}(__WEBPACK_IMPORTED_MODULE_0__formproperty__["a" /* FormProperty */]));



/***/ }),

/***/ "../../../../../src/lib/model/booleanproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atomicproperty__ = __webpack_require__("../../../../../src/lib/model/atomicproperty.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BooleanProperty = (function (_super) {
    __extends(BooleanProperty, _super);
    function BooleanProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanProperty.prototype.fallbackValue = function () {
        return null;
    };
    return BooleanProperty;
}(__WEBPACK_IMPORTED_MODULE_0__atomicproperty__["a" /* AtomicProperty */]));



/***/ }),

/***/ "../../../../../src/lib/model/formproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PropertyGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var FormProperty = (function () {
    function FormProperty(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        this.validatorRegistry = validatorRegistry;
        this.schema = schema;
        this._value = null;
        this._errors = null;
        this._valueChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._errorsChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this._visible = true;
        this._visibilityChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = this;
        }
        this._path = path;
    }
    Object.defineProperty(FormProperty.prototype, "valueChanges", {
        get: function () {
            return this._valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "errorsChanges", {
        get: function () {
            return this._errorsChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "type", {
        get: function () {
            return this.schema.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "root", {
        get: function () {
            return this._root || this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "valid", {
        get: function () {
            return this._errors === null;
        },
        enumerable: true,
        configurable: true
    });
    FormProperty.prototype.updateValueAndValidity = function (onlySelf, emitEvent) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (emitEvent === void 0) { emitEvent = true; }
        this._updateValue();
        if (emitEvent) {
            this.valueChanges.next(this.value);
        }
        this._runValidation();
        if (this.parent && !onlySelf) {
            this.parent.updateValueAndValidity(onlySelf, emitEvent);
        }
    };
    /**
     * @internal
     */
    FormProperty.prototype._runValidation = function () {
        var errors = this.schemaValidator(this._value) || [];
        var customValidator = this.validatorRegistry.get(this.path);
        if (customValidator) {
            var customErrors = customValidator(this.value, this, this.findRoot());
            errors = this.mergeErrors(errors, customErrors);
        }
        if (errors.length === 0) {
            errors = null;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    };
    FormProperty.prototype.mergeErrors = function (errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat.apply(errors, newErrors);
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    };
    FormProperty.prototype.setErrors = function (errors) {
        this._errors = errors;
        this._errorsChanges.next(errors);
    };
    FormProperty.prototype.extendErrors = function (errors) {
        errors = this.mergeErrors(this._errors || [], errors);
        this.setErrors(errors);
    };
    FormProperty.prototype.searchProperty = function (path) {
        var prop = this;
        var base = null;
        var result = null;
        if (path[0] === '/') {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    };
    FormProperty.prototype.findRoot = function () {
        var property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return property;
    };
    FormProperty.prototype.setVisible = function (visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        this.updateValueAndValidity();
        if (this.parent) {
            this.parent.updateValueAndValidity(false, true);
        }
    };
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    FormProperty.prototype._bindVisibility = function () {
        var _this = this;
        var visibleIf = this.schema.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            var propertiesBinding = [];
            var _loop_1 = function (dependencyPath) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    var property = this_1.searchProperty(dependencyPath);
                    if (property) {
                        var valueCheck = property.valueChanges.map(function (value) {
                            if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return visibleIf[dependencyPath].indexOf(value) !== -1;
                            }
                        });
                        var visibilityCheck = property._visibilityChanges;
                        var and = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].combineLatest([valueCheck, visibilityCheck], function (v1, v2) { return v1 && v2; });
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this_1.path);
                    }
                }
            };
            var this_1 = this;
            for (var dependencyPath in visibleIf) {
                _loop_1(dependencyPath);
            }
            __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].combineLatest(propertiesBinding, function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                return values.indexOf(true) !== -1;
            }).distinctUntilChanged().subscribe(function (visible) {
                _this.setVisible(visible);
            });
        }
    };
    return FormProperty;
}());

var PropertyGroup = (function (_super) {
    __extends(PropertyGroup, _super);
    function PropertyGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = null;
        return _this;
    }
    PropertyGroup.prototype.getProperty = function (path) {
        var subPathIdx = path.indexOf('/');
        var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        var property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            var subPath = path.substr(subPathIdx + 1);
            property = property.getProperty(subPath);
        }
        return property;
    };
    PropertyGroup.prototype.forEachChild = function (fn) {
        for (var propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                var property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    };
    PropertyGroup.prototype.forEachChildRecursive = function (fn) {
        this.forEachChild(function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                child.forEachChildRecursive(fn);
            }
        });
    };
    PropertyGroup.prototype._bindVisibility = function () {
        _super.prototype._bindVisibility.call(this);
        this._bindVisibilityRecursive();
    };
    PropertyGroup.prototype._bindVisibilityRecursive = function () {
        this.forEachChildRecursive(function (property) {
            property._bindVisibility();
        });
    };
    PropertyGroup.prototype.isRoot = function () {
        return this === this.root;
    };
    return PropertyGroup;
}(FormProperty));



/***/ }),

/***/ "../../../../../src/lib/model/formpropertyfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPropertyFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formproperty__ = __webpack_require__("../../../../../src/lib/model/formproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__numberproperty__ = __webpack_require__("../../../../../src/lib/model/numberproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stringproperty__ = __webpack_require__("../../../../../src/lib/model/stringproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booleanproperty__ = __webpack_require__("../../../../../src/lib/model/booleanproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectproperty__ = __webpack_require__("../../../../../src/lib/model/objectproperty.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arrayproperty__ = __webpack_require__("../../../../../src/lib/model/arrayproperty.ts");






var FormPropertyFactory = (function () {
    function FormPropertyFactory(schemaValidatorFactory, validatorRegistry) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.validatorRegistry = validatorRegistry;
    }
    FormPropertyFactory.prototype.createProperty = function (schema, parent, propertyId) {
        if (parent === void 0) { parent = null; }
        var newProperty = null;
        var path = '';
        if (parent) {
            path += parent.path;
            if (parent.parent !== null) {
                path += '/';
            }
            if (parent.type === 'object') {
                path += propertyId;
            }
            else if (parent.type === 'array') {
                path += '*';
            }
            else {
                throw 'Instanciation of a FormProperty with an unknown parent type: ' + parent.type;
            }
        }
        else {
            path = '/';
        }
        if (schema.$ref) {
            var refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
            newProperty = this.createProperty(refSchema, parent, path);
        }
        else {
            switch (schema.type) {
                case 'integer':
                case 'number':
                    newProperty = new __WEBPACK_IMPORTED_MODULE_1__numberproperty__["a" /* NumberProperty */](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'string':
                    newProperty = new __WEBPACK_IMPORTED_MODULE_2__stringproperty__["a" /* StringProperty */](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'boolean':
                    newProperty = new __WEBPACK_IMPORTED_MODULE_3__booleanproperty__["a" /* BooleanProperty */](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'object':
                    newProperty = new __WEBPACK_IMPORTED_MODULE_4__objectproperty__["a" /* ObjectProperty */](this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'array':
                    newProperty = new __WEBPACK_IMPORTED_MODULE_5__arrayproperty__["a" /* ArrayProperty */](this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                default:
                    throw new TypeError("Undefined type " + schema.type);
            }
        }
        if (newProperty instanceof __WEBPACK_IMPORTED_MODULE_0__formproperty__["b" /* PropertyGroup */]) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    };
    FormPropertyFactory.prototype.initializeRoot = function (rootProperty) {
        rootProperty.reset(null, true);
        rootProperty._bindVisibility();
    };
    return FormPropertyFactory;
}());



/***/ }),

/***/ "../../../../../src/lib/model/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionregistry__ = __webpack_require__("../../../../../src/lib/model/actionregistry.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__actionregistry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formpropertyfactory__ = __webpack_require__("../../../../../src/lib/model/formpropertyfactory.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__formpropertyfactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formproperty__ = __webpack_require__("../../../../../src/lib/model/formproperty.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atomicproperty__ = __webpack_require__("../../../../../src/lib/model/atomicproperty.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectproperty__ = __webpack_require__("../../../../../src/lib/model/objectproperty.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arrayproperty__ = __webpack_require__("../../../../../src/lib/model/arrayproperty.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validatorregistry__ = __webpack_require__("../../../../../src/lib/model/validatorregistry.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__validatorregistry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schemapreprocessor__ = __webpack_require__("../../../../../src/lib/model/schemapreprocessor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__schemapreprocessor__["a"]; });










/***/ }),

/***/ "../../../../../src/lib/model/numberproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atomicproperty__ = __webpack_require__("../../../../../src/lib/model/atomicproperty.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NumberProperty = (function (_super) {
    __extends(NumberProperty, _super);
    function NumberProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberProperty.prototype.fallbackValue = function () {
        return null;
    };
    NumberProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (typeof value === 'string') {
            if (value.length) {
                value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
            }
            else {
                value = null;
            }
        }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    return NumberProperty;
}(__WEBPACK_IMPORTED_MODULE_0__atomicproperty__["a" /* AtomicProperty */]));



/***/ }),

/***/ "../../../../../src/lib/model/objectproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formproperty__ = __webpack_require__("../../../../../src/lib/model/formproperty.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ObjectProperty = (function (_super) {
    __extends(ObjectProperty, _super);
    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        _this.propertiesId = [];
        _this.createProperties();
        return _this;
    }
    ObjectProperty.prototype.setValue = function (value, onlySelf) {
        for (var propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || {};
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.resetProperties = function (value) {
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                this.properties[propertyId].reset(value[propertyId], true);
            }
        }
    };
    ObjectProperty.prototype.createProperties = function () {
        this.properties = {};
        this.propertiesId = [];
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                var propertySchema = this.schema.properties[propertyId];
                this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                this.propertiesId.push(propertyId);
            }
        }
    };
    ObjectProperty.prototype._hasValue = function () {
        return !!Object.keys(this.value).length;
    };
    ObjectProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ObjectProperty.prototype._runValidation = function () {
        var _this = this;
        _super.prototype._runValidation.call(this);
        if (this._errors) {
            this._errors.forEach(function (error) {
                var prop = _this.searchProperty(error.path.slice(1));
                if (prop) {
                    prop.extendErrors(error);
                }
            });
        }
    };
    ObjectProperty.prototype.reduceValue = function () {
        var value = {};
        this.forEachChild(function (property, propertyId) {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    };
    return ObjectProperty;
}(__WEBPACK_IMPORTED_MODULE_0__formproperty__["b" /* PropertyGroup */]));



/***/ }),

/***/ "../../../../../src/lib/model/schemapreprocessor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaPreprocessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../../src/lib/model/utils.ts");

function formatMessage(message, path) {
    return "Parsing error on " + path + ": " + message;
}
function schemaError(message, path) {
    var mesg = formatMessage(message, path);
    throw new Error(mesg);
}
function schemaWarning(message, path) {
    var mesg = formatMessage(message, path);
    throw new Error(mesg);
}
var SchemaPreprocessor = (function () {
    function SchemaPreprocessor() {
    }
    SchemaPreprocessor.preprocess = function (jsonSchema, path) {
        if (path === void 0) { path = '/'; }
        jsonSchema = jsonSchema || {};
        if (jsonSchema.type === 'object') {
            SchemaPreprocessor.checkProperties(jsonSchema, path);
            SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.checkItems(jsonSchema, path);
        }
        SchemaPreprocessor.normalizeWidget(jsonSchema);
        SchemaPreprocessor.recursiveCheck(jsonSchema, path);
    };
    SchemaPreprocessor.checkProperties = function (jsonSchema, path) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* isBlank */])(jsonSchema.properties)) {
            jsonSchema.properties = {};
            schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
        }
    };
    SchemaPreprocessor.checkAndCreateFieldsets = function (jsonSchema, path) {
        if (jsonSchema.fieldsets === undefined) {
            if (jsonSchema.order !== undefined) {
                SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
            }
            else {
                SchemaPreprocessor.createFieldsets(jsonSchema);
            }
        }
        SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
    };
    SchemaPreprocessor.checkFieldsUsage = function (jsonSchema, path) {
        var fieldsId = Object.keys(jsonSchema.properties);
        var usedFields = {};
        for (var _i = 0, _a = jsonSchema.fieldsets; _i < _a.length; _i++) {
            var fieldset = _a[_i];
            for (var _b = 0, _c = fieldset.fields; _b < _c.length; _b++) {
                var fieldId = _c[_b];
                if (usedFields[fieldId] === undefined) {
                    usedFields[fieldId] = [];
                }
                usedFields[fieldId].push(fieldset.id);
            }
        }
        for (var _d = 0, fieldsId_1 = fieldsId; _d < fieldsId_1.length; _d++) {
            var fieldId = fieldsId_1[_d];
            if (usedFields.hasOwnProperty(fieldId)) {
                if (usedFields[fieldId].length > 1) {
                    schemaError(fieldId + " is referenced by more than one fieldset: " + usedFields[fieldId], path);
                }
                delete usedFields[fieldId];
            }
            else if (jsonSchema.required.indexOf(fieldId) > -1) {
                schemaError(fieldId + " is a required field but it is not referenced as part of a 'order' or a 'fieldset' property", path);
            }
            else {
                delete jsonSchema[fieldId];
                schemaWarning("Removing unreferenced field " + fieldId, path);
            }
        }
        for (var remainingfieldsId in usedFields) {
            if (usedFields.hasOwnProperty(remainingfieldsId)) {
                schemaWarning("Referencing non-existent field " + remainingfieldsId + " in one or more fieldsets", path);
            }
        }
    };
    SchemaPreprocessor.createFieldsets = function (jsonSchema) {
        jsonSchema.order = Object.keys(jsonSchema.properties);
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
    };
    SchemaPreprocessor.replaceOrderByFieldsets = function (jsonSchema) {
        jsonSchema.fieldsets = [{
                id: 'fieldset-default',
                title: jsonSchema.title || '',
                description: jsonSchema.description || '',
                name: jsonSchema.name || '',
                fields: jsonSchema.order
            }];
        delete jsonSchema.order;
    };
    SchemaPreprocessor.normalizeWidget = function (fieldSchema) {
        var widget = fieldSchema.widget;
        if (widget === undefined) {
            widget = { 'id': fieldSchema.type };
        }
        else if (typeof widget === 'string') {
            widget = { 'id': widget };
        }
        fieldSchema.widget = widget;
    };
    SchemaPreprocessor.checkItems = function (jsonSchema, path) {
        if (jsonSchema.items === undefined) {
            schemaError('No \'items\' property in array', path);
        }
    };
    SchemaPreprocessor.recursiveCheck = function (jsonSchema, path) {
        if (jsonSchema.type === 'object') {
            for (var fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    var fieldSchema = jsonSchema.properties[fieldId];
                    SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                }
            }
            if (jsonSchema.hasOwnProperty('definitions')) {
                for (var fieldId in jsonSchema.definitions) {
                    if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
                        var fieldSchema = jsonSchema.definitions[fieldId];
                        SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, "#/definitions/" + fieldId);
                        SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                    }
                }
            }
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
        }
    };
    SchemaPreprocessor.removeRecursiveRefProperties = function (jsonSchema, definitionPath) {
        // to avoid infinite loop
        if (jsonSchema.type === 'object') {
            for (var fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    if (jsonSchema.properties[fieldId].$ref
                        && jsonSchema.properties[fieldId].$ref === definitionPath) {
                        delete jsonSchema.properties[fieldId];
                    }
                    else if (jsonSchema.properties[fieldId].type === 'object') {
                        SchemaPreprocessor.removeRecursiveRefProperties(jsonSchema.properties[fieldId], definitionPath);
                    }
                }
            }
        }
    };
    return SchemaPreprocessor;
}());



/***/ }),

/***/ "../../../../../src/lib/model/stringproperty.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atomicproperty__ = __webpack_require__("../../../../../src/lib/model/atomicproperty.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringProperty = (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringProperty.prototype.fallbackValue = function () {
        return '';
    };
    return StringProperty;
}(__WEBPACK_IMPORTED_MODULE_0__atomicproperty__["a" /* AtomicProperty */]));



/***/ }),

/***/ "../../../../../src/lib/model/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isPresent */
/* harmony export (immutable) */ __webpack_exports__["a"] = isBlank;
function isPresent(o) {
    return o !== null && o !== undefined;
}
function isBlank(o) {
    return o === null || o === undefined;
}


/***/ }),

/***/ "../../../../../src/lib/model/validatorregistry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorRegistry; });
var ValidatorRegistry = (function () {
    function ValidatorRegistry() {
        this.validators = [];
    }
    ValidatorRegistry.prototype.register = function (path, validator) {
        this.validators[path] = validator;
    };
    ValidatorRegistry.prototype.get = function (path) {
        return this.validators[path];
    };
    ValidatorRegistry.prototype.clear = function () {
        this.validators = [];
    };
    return ValidatorRegistry;
}());



/***/ }),

/***/ "../../../../../src/lib/schema-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bs_form_builder_component__ = __webpack_require__("../../../../../src/lib/components/bs-form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_zorro_form_builder_component__ = __webpack_require__("../../../../../src/lib/components/zorro-form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schemavalidator_factory__ = __webpack_require__("../../../../../src/lib/schemavalidator.factory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var moduleProviders = [
    {
        provide: __WEBPACK_IMPORTED_MODULE_5__schemavalidator_factory__["a" /* SchemaValidatorFactory */],
        useClass: __WEBPACK_IMPORTED_MODULE_5__schemavalidator_factory__["b" /* ZSchemaValidatorFactory */]
    }
];
var SchemaFormModule = (function () {
    function SchemaFormModule() {
    }
    SchemaFormModule_1 = SchemaFormModule;
    SchemaFormModule.forRoot = function () {
        return {
            ngModule: SchemaFormModule_1,
            providers: moduleProviders.slice()
        };
    };
    SchemaFormModule = SchemaFormModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_bs_form_builder_component__["a" /* BsFormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_zorro_form_builder_component__["a" /* ZorroFormBuilderComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__components_bs_form_builder_component__["a" /* BsFormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_zorro_form_builder_component__["a" /* ZorroFormBuilderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_bs_form_builder_component__["a" /* BsFormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_zorro_form_builder_component__["a" /* ZorroFormBuilderComponent */]
            ],
            providers: moduleProviders.slice()
        })
    ], SchemaFormModule);
    return SchemaFormModule;
    var SchemaFormModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/schema/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_type__ = __webpack_require__("../../../../../src/lib/schema/widget-type.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__widget_type__["a"]; });



/***/ }),

/***/ "../../../../../src/lib/schema/widget-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetType; });
var WidgetType;
(function (WidgetType) {
    WidgetType["PRIMENG"] = "PRIMENG";
    WidgetType["BOOTSTRAP"] = "BOOTSTRAP";
    WidgetType["ZORRO"] = "ZORRO";
})(WidgetType || (WidgetType = {}));


/***/ }),

/***/ "../../../../../src/lib/schemavalidator.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaValidatorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ZSchemaValidatorFactory; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZSchema = __webpack_require__("../../../../z-schema/src/ZSchema.js");
var SchemaValidatorFactory = (function () {
    function SchemaValidatorFactory() {
    }
    return SchemaValidatorFactory;
}());

var ZSchemaValidatorFactory = (function (_super) {
    __extends(ZSchemaValidatorFactory, _super);
    function ZSchemaValidatorFactory() {
        var _this = _super.call(this) || this;
        _this.zschema = new ZSchema({});
        return _this;
    }
    ZSchemaValidatorFactory.prototype.createValidatorFn = function (schema) {
        var _this = this;
        return function (value) {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            _this.zschema.validate(value, schema);
            var err = _this.zschema.getLastErrors();
            _this.denormalizeRequiredPropertyPaths(err);
            return err || null;
        };
    };
    ZSchemaValidatorFactory.prototype.getSchema = function (schema, ref) {
        // check definitions are valid
        var isValid = this.zschema.compileSchema(schema);
        if (isValid) {
            return this.getDefinition(schema, ref);
        }
        else {
            throw this.zschema.getLastError();
        }
    };
    ZSchemaValidatorFactory.prototype.denormalizeRequiredPropertyPaths = function (err) {
        if (err && err.length) {
            err = err.map(function (error) {
                if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
                    error.path = "" + error.path + error.params[0];
                }
                return error;
            });
        }
    };
    ZSchemaValidatorFactory.prototype.getDefinition = function (schema, ref) {
        var foundSchema = schema;
        ref.split('/').slice(1).forEach(function (ptr) {
            if (ptr) {
                foundSchema = foundSchema[ptr];
            }
        });
        return foundSchema;
    };
    return ZSchemaValidatorFactory;
}(SchemaValidatorFactory));



/***/ }),

/***/ "../../../../../src/lib/terminator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminatorService = (function () {
    function TerminatorService() {
        this.onDestroy = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    TerminatorService.prototype.destroy = function () {
        this.onDestroy.next(true);
    };
    TerminatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TerminatorService);
    return TerminatorService;
}());



/***/ }),

/***/ "../../../../../src/lib/utils/check.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNotNil;
function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}


/***/ }),

/***/ "../../../../../src/lib/utils/cls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListOfGridSizeName */
/* harmony export (immutable) */ __webpack_exports__["a"] = getClassMap;
/* unused harmony export generateClass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__check__ = __webpack_require__("../../../../../src/lib/utils/check.ts");

var ListOfGridSizeName = ['xs', 'sm', 'md', 'lg', 'xl'];
function getClassMap(widget) {
    if (!widget || typeof widget !== 'object')
        return [];
    widget._prefixCls = widget._prefixCls ? widget._prefixCls : 'col';
    var grid = widget.grid;
    if (!grid && typeof grid !== 'object') {
        return [];
    }
    var _classList = [
        Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid.span) && widget._prefixCls + "-" + grid.span,
        Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid.order) && widget._prefixCls + "-order-" + grid.order,
        Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid.offset) && widget._prefixCls + "-offset-" + grid.offset,
        Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid.pull) && widget._prefixCls + "-pull-" + grid.pull,
        Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid.push) && widget._prefixCls + "-push-" + grid.push
    ].concat(generateClass(widget));
    _classList = _classList.filter(function (item) {
        return !!item;
    });
    return _classList;
}
function generateClass(widget) {
    var listOfClassName = [];
    var grid = widget.grid;
    ListOfGridSizeName.forEach(function (name) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid[name])) {
            if ((typeof (grid[name]) === 'number') || (typeof (grid[name]) === 'string')) {
                listOfClassName.push(widget._prefixCls + "-" + name + "-" + grid[name]);
            }
            else {
                listOfClassName.push(grid[name] && Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid[name].span) && widget._prefixCls + "-" + name + "-" + grid[name].span);
                listOfClassName.push(grid[name] && Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid[name].pull) && widget._prefixCls + "-" + name + "-pull-" + grid[name].pull);
                listOfClassName.push(grid[name] && Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid[name].push) && widget._prefixCls + "-" + name + "-push-" + grid[name].push);
                listOfClassName.push(grid[name] && Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid[name].offset) && widget._prefixCls + "-" + name + "-offset-" + grid[name].offset);
                listOfClassName.push(grid[name] && Object(__WEBPACK_IMPORTED_MODULE_0__check__["a" /* isNotNil */])(grid[name].order) && widget._prefixCls + "-" + name + "-order-" + grid[name].order);
            }
        }
    });
    listOfClassName = listOfClassName.filter(function (item) {
        return !!item;
    });
    return listOfClassName;
}


/***/ }),

/***/ "../../../../../src/lib/widget-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_actionregistry__ = __webpack_require__("../../../../../src/lib/model/actionregistry.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WidgetFactory = (function () {
    function WidgetFactory(registry, compiler) {
        this.compiler = compiler;
        this.registry = registry;
    }
    WidgetFactory.prototype.addWidget = function (container, template, properties, context) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = (function () {
            function TemplateComponent(_differs, actionRegistry, changeDetectorRef) {
                this._differs = _differs;
                this.actionRegistry = actionRegistry;
                this.changeDetectorRef = changeDetectorRef;
                this.buttons = [];
            }
            TemplateComponent.prototype.ngOnInit = function () {
                this._differ = this._differs.find(this[this['modelName']]).create();
                if (this.interval) {
                    Object(__WEBPACK_IMPORTED_MODULE_4_timers__["clearInterval"])(this.interval);
                    this.interval = null;
                }
                this._parseButtons();
            };
            TemplateComponent.prototype.ngDoCheck = function () {
                if (this._differ) {
                    var changes = this._differ.diff(this[this['modelName']]);
                    if (changes) {
                        this._applyChanges(changes);
                        if (this['_debug_']) {
                            console.warn('model changes', this[this['modelName']]);
                        }
                    }
                }
            };
            TemplateComponent.prototype._parseButtons = function () {
                var schema = properties.formProperty.schema;
                if (schema.buttons !== undefined) {
                    this.buttons = schema.buttons;
                    for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        this._createButtonCallback(button);
                    }
                }
            };
            TemplateComponent.prototype._createButtonCallback = function (button) {
                var _this = this;
                this.action = function (e, id) {
                    var action;
                    if (id && (action = _this.actionRegistry.get(id))) {
                        if (action) {
                            action(properties.formProperty, _this._getBtnParameters(id));
                            // TODO，临时解决方案
                            if (id === 'reset') {
                                _this[_this['modelName']] = {};
                            }
                        }
                    }
                    e.preventDefault();
                };
            };
            TemplateComponent.prototype._applyChanges = function (changes) {
                context.onChange.emit({ value: this[this['modelName']] });
                context.modelChanged.emit(this[this['modelName']]);
            };
            TemplateComponent.prototype._getBtnParameters = function (id) {
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var btn = _a[_i];
                    if (id === btn.id) {
                        return btn.parameters;
                    }
                }
            };
            TemplateComponent.prototype.addItem = function () {
                this.formProperty.addItem();
            };
            TemplateComponent.prototype.removeItem = function (index) {
                this.formProperty.removeItem(index);
            };
            TemplateComponent.prototype.ngOnDestroy = function () {
                if (this.interval) {
                    Object(__WEBPACK_IMPORTED_MODULE_4_timers__["clearInterval"])(this.interval);
                    this.interval = null;
                }
            };
            TemplateComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ template: template }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* KeyValueDiffers */],
                    __WEBPACK_IMPORTED_MODULE_5__model_actionregistry__["a" /* ActionRegistry */],
                    __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
            ], TemplateComponent);
            return TemplateComponent;
        }());
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            TemplateModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
                    declarations: [TemplateComponent],
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_5__model_actionregistry__["a" /* ActionRegistry */]]
                })
            ], TemplateModule);
            return TemplateModule;
        }());
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        return component;
    };
    WidgetFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__widget_registry__["a" /* WidgetRegistry */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Compiler */]])
    ], WidgetFactory);
    return WidgetFactory;
}());



/***/ }),

/***/ "../../../../../src/lib/widget-registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema_index__ = __webpack_require__("../../../../../src/lib/schema/index.ts");

var WidgetRegistry = (function () {
    function WidgetRegistry() {
        this.bootstrap_widgets = {};
        this.primeng_widgets = {};
        this.zorro_widgets = {};
    }
    WidgetRegistry.prototype.setType = function (wigetType) {
        if (wigetType === void 0) { wigetType = __WEBPACK_IMPORTED_MODULE_0__schema_index__["a" /* WidgetType */].BOOTSTRAP; }
        WidgetRegistry.wigetType = wigetType;
    };
    Object.defineProperty(WidgetRegistry.prototype, "widgets", {
        get: function () {
            switch (WidgetRegistry.wigetType) {
                case __WEBPACK_IMPORTED_MODULE_0__schema_index__["a" /* WidgetType */].BOOTSTRAP:
                    return this.bootstrap_widgets;
                case __WEBPACK_IMPORTED_MODULE_0__schema_index__["a" /* WidgetType */].PRIMENG:
                    return this.primeng_widgets;
                case __WEBPACK_IMPORTED_MODULE_0__schema_index__["a" /* WidgetType */].ZORRO:
                    return this.zorro_widgets;
                default:
                    return this.bootstrap_widgets;
            }
        },
        enumerable: true,
        configurable: true
    });
    WidgetRegistry.prototype.setDefaultWidget = function (widget) {
        this.defaultWidget = widget;
    };
    WidgetRegistry.prototype.getDefaultWidget = function () {
        return this.defaultWidget;
    };
    WidgetRegistry.prototype.hasWidget = function (type) {
        return this.widgets.hasOwnProperty(type);
    };
    WidgetRegistry.prototype.register = function (type, widget) {
        this.widgets[type] = widget;
    };
    WidgetRegistry.prototype.getWidgetType = function (type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());



/***/ }),

/***/ "../../../../../src/lib/widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Widget */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ControlWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayLayoutWidget; });
/* unused harmony export ObjectLayoutWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_cls__ = __webpack_require__("../../../../../src/lib/utils/cls.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Widget = (function () {
    function Widget() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
    Widget.prototype.getLayoutClass = function (widgetSchema) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils_cls__["a" /* getClassMap */])(widgetSchema);
    };
    return Widget;
}());

var ControlWidget = (function (_super) {
    __extends(ControlWidget, _super);
    function ControlWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlWidget.prototype.ngAfterViewInit = function () {
        var _this = this;
        var control = this.control;
        this.formProperty.valueChanges.subscribe(function (newValue) {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
            var messages = (errors || [])
                .filter(function (e) {
                return e.path && e.path.slice(1) === _this.formProperty.path;
            })
                .map(function (e) { return e.message; });
            _this.errorMessages = messages.filter(function (m, i) { return messages.indexOf(m) === i; });
        });
        control.valueChanges.subscribe(function (newValue) {
            _this.formProperty.setValue(newValue, false);
        });
    };
    return ControlWidget;
}(Widget));

var ArrayLayoutWidget = (function (_super) {
    __extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayLayoutWidget.prototype.ngAfterViewInit = function () {
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ArrayLayoutWidget;
}(Widget));

var ObjectLayoutWidget = (function (_super) {
    __extends(ObjectLayoutWidget, _super);
    function ObjectLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectLayoutWidget.prototype.ngAfterViewInit = function () {
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ObjectLayoutWidget;
}(Widget));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/array/array.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayWidget = (function (_super) {
    __extends(ArrayWidget, _super);
    function ArrayWidget(_formProperty, registry) {
        var _this = _super.call(this) || this;
        _this._formProperty = _formProperty;
        _this.registry = registry;
        _this.formProperty = _formProperty;
        return _this;
    }
    ArrayWidget.prototype.getTemplate = function (schema) {
        return "\n\t\t<div class=\"widget form-group\">\n\t\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t\t" + (schema.title || '') + "\n\t\t\t\t</label>\n\t\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t\t" + this.iterateOptions(schema) + "\n\t\t\t\t\n\t\t\t\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t";
    };
    ArrayWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', properties = this.formProperty.properties;
        for (var _i = 0, _a = properties; _i < _a.length; _i++) {
            var itemProperty = _a[_i];
            var widgetInfo = itemProperty.schema.widget;
            var WidgetClass = this.registry.getWidgetType(widgetInfo.id);
            htmlStr += "\n\t\t\t<div>\n\t\t\t\t" + new WidgetClass().getTemplate(itemProperty.schema) + "\n\t\t\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t";
        }
        return htmlStr;
    };
    return ArrayWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["a" /* ArrayLayoutWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/button/button.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonWidget = (function (_super) {
    __extends(ButtonWidget, _super);
    function ButtonWidget() {
        return _super.call(this) || this;
    }
    ButtonWidget.prototype.getTemplate = function (schema, button) {
        return "\n    <button (click)=\"action($event,'" + button.id + "')\" class=\"btn btn-default\">" + button.label + "</button>\n    ";
    };
    return ButtonWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxWidget = (function (_super) {
    __extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        return _super.call(this) || this;
    }
    CheckboxWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t\t" + (schema.title || '') + "\n\t\t\t\t</label>\n\t\t\t\t" + this.iterateOptions(schema) + "\n\t\t\t</div>\n\t\t";
    };
    CheckboxWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.items && schema.items.oneOf;
        if (schema.type != 'array') {
            htmlStr = "\n\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t<input name=\"" + schema.name + "\" [indeterminate]=\"control.value !== false && control.value !== true ? true :null\" type=\"checkbox\" " + (schema.readOnly ? " disabled=\"true\"" : "") + ">\n\t\t\t\t" + (schema.readOnly ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n\t\t\t\t" + schema.description + "\n\t\t\t</label>\n\t\t\t";
        }
        else if (schema.type === 'array') {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                htmlStr += "\n\t\t\t\t<div  class=\"checkbox" + (schema.grid && schema.grid.mode ? ('-' + schema.grid.mode) : '') + "\">\n\t\t\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t\t\t<input  type=\"checkbox\" name=\"" + schema.name + "\"\n\t\t\t\t\t\t\tvalue=\"" + option.enum[0] + "\"\n\t\t\t\t\t\t\t" + (schema.readOnly ? " disabled=\"true\"" : "") + ">\n\t\t\t\t\t\t\t" + option.description + "\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t";
            }
        }
        return htmlStr;
    };
    return CheckboxWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/defaultwidget-registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootStrapDefaultWidgetRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/button/button.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_string_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/string/string.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema_index__ = __webpack_require__("../../../../../src/lib/schema/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__integer_integer_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/integer/integer.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range_range_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/range/range.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__textarea_textarea_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/textarea/textarea.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_select_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/select/select.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__radio_radio_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/radio/radio.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_checkbox_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__array_array_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/array/array.widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var BootStrapDefaultWidgetRegistry = (function (_super) {
    __extends(BootStrapDefaultWidgetRegistry, _super);
    function BootStrapDefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.setType(__WEBPACK_IMPORTED_MODULE_3__schema_index__["a" /* WidgetType */].BOOTSTRAP);
        _this.register('string', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('search', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('tel', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('url', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('email', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('password', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('color', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('date', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('date-time', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('time', __WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        _this.register('integer', __WEBPACK_IMPORTED_MODULE_4__integer_integer_widget__["a" /* IntegerWidget */]);
        _this.register('number', __WEBPACK_IMPORTED_MODULE_4__integer_integer_widget__["a" /* IntegerWidget */]);
        _this.register('button', __WEBPACK_IMPORTED_MODULE_0__button_button_widget__["a" /* ButtonWidget */]);
        _this.register('range', __WEBPACK_IMPORTED_MODULE_5__range_range_widget__["a" /* RangeWidget */]);
        _this.register('textarea', __WEBPACK_IMPORTED_MODULE_6__textarea_textarea_widget__["a" /* TextAreaWidget */]);
        _this.register('select', __WEBPACK_IMPORTED_MODULE_7__select_select_widget__["a" /* SelectWidget */]);
        _this.register('radio', __WEBPACK_IMPORTED_MODULE_8__radio_radio_widget__["a" /* RadioWidget */]);
        _this.register('checkbox', __WEBPACK_IMPORTED_MODULE_9__checkbox_checkbox_widget__["a" /* CheckboxWidget */]);
        _this.register('boolean', __WEBPACK_IMPORTED_MODULE_9__checkbox_checkbox_widget__["a" /* CheckboxWidget */]);
        _this.register('array', __WEBPACK_IMPORTED_MODULE_10__array_array_widget__["a" /* ArrayWidget */]);
        /*
            this.register('object',  ObjectWidget);
            this.register('file', FileWidget);
     */
        _this.setDefaultWidget(__WEBPACK_IMPORTED_MODULE_1__string_string_widget__["a" /* StringWidget */]);
        return _this;
    }
    return BootStrapDefaultWidgetRegistry;
}(__WEBPACK_IMPORTED_MODULE_2__widget_registry__["a" /* WidgetRegistry */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultwidget_registry__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/defaultwidget-registry.ts");
/* unused harmony reexport BootStrapDefaultWidgetRegistry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integer_integer_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/integer/integer.widget.ts");
/* unused harmony reexport IntegerWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_range_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/range/range.widget.ts");
/* unused harmony reexport RangeWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__string_string_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/string/string.widget.ts");
/* unused harmony reexport StringWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea_textarea_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/textarea/textarea.widget.ts");
/* unused harmony reexport TextAreaWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_button_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/button/button.widget.ts");
/* unused harmony reexport ButtonWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__array_array_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/array/array.widget.ts");
/* unused harmony reexport ArrayWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkbox_checkbox_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts");
/* unused harmony reexport CheckboxWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__radio_radio_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/radio/radio.widget.ts");
/* unused harmony reexport RadioWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__select_select_widget__ = __webpack_require__("../../../../../src/lib/widgets/bootstrap/select/select.widget.ts");
/* unused harmony reexport SelectWidget */












/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/integer/integer.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegerWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IntegerWidget = (function (_super) {
    __extends(IntegerWidget, _super);
    function IntegerWidget() {
        return _super.call(this) || this;
    }
    IntegerWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    <div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t<div class=\"widget form-group\">\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t<input \n\t\t\t  [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n\t\t\t\tid=\"" + schema.formId + "\"\n\t\t\t\tname=\"" + schema.name + "\"\n\t\t\t\tclass=\"text-widget integer-widget form-control\"\n\t\t\t\ttype=\"number\"\n\t\t\t\t[attr.min]=\"" + schema.minimum + "\"\n\t\t\t\t[attr.max]=\"" + schema.maximum + "\"\n\t\t\t\tplaceholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n\t\t\t\t" + ((schema.readOnly) ? " readonly=\"true\"" : "") + "\n\t\t\t\t" + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n\t\t\t\t" + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n\t\t\t>\n\t\t\t</div>\n\t\t</div>\n    ";
    };
    return IntegerWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/radio/radio.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadioWidget = (function (_super) {
    __extends(RadioWidget, _super);
    function RadioWidget() {
        return _super.call(this) || this;
    }
    RadioWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t" + this.iterateOptions(schema) + "\n\t\t</div>\n    ";
    };
    RadioWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.oneOf;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            htmlStr += "\n\t\t\t<div class=\"radio" + (schema.grid && schema.grid.mode ? ('-' + schema.grid.mode) : '') + "\">\n\t\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t\t<input name=\"" + schema.name + "\"\n\t\t\t\t\ttype=\"radio\" value=\"" + option.enum[0] + "\" " + (schema.readOnly ? " disabled=\"true\"" : "") + ">\n\t\t\t\t\t" + option.description + "\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t";
        }
        return htmlStr;
    };
    return RadioWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/range/range.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RangeWidget = (function (_super) {
    __extends(RangeWidget, _super);
    function RangeWidget() {
        return _super.call(this) || this;
    }
    RangeWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t<input \n\t\t\t  [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n\t\t\t\tid=\"" + schema.formId + "\"\n\t\t\t\tname=\"" + schema.name + "\"\n\t\t\t\tclass=\"text-widget range-widget\"\n\t\t\t\ttype=\"range\"\n\t\t\t\t[attr.min]=\"" + schema.minimum + "\"\n\t\t\t\t[attr.max]=\"" + schema.maximum + "\"\n\t\t\t\t" + ((schema.readOnly) ? " disabled=\"true\"" : "") + "\n\t\t\t>\n\t\t\t" + (schema.readOnly ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n\t\t</div>\n    ";
    };
    return RangeWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/select/select.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectWidget = (function (_super) {
    __extends(SelectWidget, _super);
    function SelectWidget() {
        return _super.call(this) || this;
    }
    SelectWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t" + (schema.type === 'array' ? "\n\t\t\t<select multiple name=\"" + schema.name + "\" " + (schema.readOnly ? " disabled=\"true\"" : "") + " class=\"form-control\">\n\t\t\t\t" + this.iterateOptions(schema.items.oneOf) + "\n\t\t\t</select>\n\t\t\t" : "\n\t\t\t<select name=\"" + schema.name + "\" " + (schema.readOnly ? " disabled=\"true\"" : "") + " class=\"form-control\">\n\t\t\t\t" + this.iterateOptions(schema.oneOf) + "\n\t\t\t</select>\n\t\t\t") + "\n\t\t\t" + (schema.readOnly ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n\t\t</div>\n    ";
    };
    SelectWidget.prototype.iterateOptions = function (items) {
        var htmlStr = '';
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            htmlStr += "<option  value=\"" + item.enum[0] + "\" >" + item.description + "</option>";
        }
        return htmlStr;
    };
    return SelectWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/string/string.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringWidget = (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super.call(this) || this;
    }
    StringWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = "<input  [attr.name]=\"name\" type=\"hidden\" [ngModel]=\"" + schema.modelName + "\">";
        }
        else {
            templ = "\n            <div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n                <label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n                    " + (schema.title || '') + "\n                </label>\n                " + (schema.description ? "<span  class=\"formHelp\"> " + schema.description + "</span>" : '') + "\n                <input\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + ((schema.widget.id !== 'color' && schema.readOnly) ? "readonly=\"true\"" : "") + "\n                class=\"text-widget.id textline-widget form-control\"\n                type=\"" + this.getInputType(schema) + "\"\n                placeholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n                " + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n                " + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n                " + ((schema.widget.id === 'color' && schema.readOnly) ? "[attr.disabled]=\"'true'\"" : "") + "/>\n                " + ((schema.widget.id === 'color' && schema.readOnly) ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n            </div>\n            ";
        }
        return templ;
    };
    StringWidget.prototype.getInputType = function (widgetInfo) {
        if (!widgetInfo.widget.id || widgetInfo.widget.id === 'string') {
            return 'text';
        }
        else {
            return widgetInfo.widget.id;
        }
    };
    return StringWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/bootstrap/textarea/textarea.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextAreaWidget = (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super.call(this) || this;
    }
    TextAreaWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t<textarea \n\t\t\t\tclass=\"text-widget textarea-widget form-control\"\n\t\t\t  [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n\t\t\t\tid=\"" + schema.formId + "\"\n\t\t\t\tname=\"" + schema.name + "\"\n\t\t\t\ttype=\"range\"\n\t\t\t\tplaceholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n\t\t\t\t" + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n\t\t\t\t" + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n\t\t\t\t" + (schema.readOnly ? " disabled=\"true\"" : "") + "\n\t\t\t></textarea>\n\t\t</div>\n    ";
    };
    return TextAreaWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/primeng/defaultwidget-registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PrimengDefaultWidgetRegistry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema_index__ = __webpack_require__("../../../../../src/lib/schema/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PrimengDefaultWidgetRegistry = (function (_super) {
    __extends(PrimengDefaultWidgetRegistry, _super);
    function PrimengDefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.setType(__WEBPACK_IMPORTED_MODULE_1__schema_index__["a" /* WidgetType */].PRIMENG);
        _this.register('string', function () {
            return "<div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n        </div>";
        });
        _this.setDefaultWidget(function () {
            return "<div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n        </div>";
        });
        return _this;
    }
    return PrimengDefaultWidgetRegistry;
}(__WEBPACK_IMPORTED_MODULE_0__widget_registry__["a" /* WidgetRegistry */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/primeng/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultwidget_registry__ = __webpack_require__("../../../../../src/lib/widgets/primeng/defaultwidget-registry.ts");
/* unused harmony reexport PrimengDefaultWidgetRegistry */



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/array/array.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayWidget = (function (_super) {
    __extends(ArrayWidget, _super);
    function ArrayWidget(_formProperty, registry) {
        var _this = _super.call(this) || this;
        _this._formProperty = _formProperty;
        _this.registry = registry;
        _this.formProperty = _formProperty;
        return _this;
    }
    ArrayWidget.prototype.getTemplate = function (schema) {
        return "\n\t\t<div class=\"widget form-group\">\n\t\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t\t" + (schema.title || '') + "\n\t\t\t\t</label>\n\t\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t\t" + this.iterateOptions(schema) + "\n\t\t\t\t\n\t\t\t\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t";
    };
    ArrayWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', properties = this.formProperty.properties;
        for (var _i = 0, _a = properties; _i < _a.length; _i++) {
            var itemProperty = _a[_i];
            var widgetInfo = itemProperty.schema.widget;
            var WidgetClass = this.registry.getWidgetType(widgetInfo.id);
            htmlStr += "\n\t\t\t<div>\n\t\t\t\t" + new WidgetClass().getTemplate(itemProperty.schema) + "\n\t\t\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t";
        }
        return htmlStr;
    };
    return ArrayWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["a" /* ArrayLayoutWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/button/button.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonWidget = (function (_super) {
    __extends(ButtonWidget, _super);
    function ButtonWidget() {
        return _super.call(this) || this;
    }
    ButtonWidget.prototype.getTemplate = function (schema, button) {
        return "\n    <button nz-button (click)=\"action($event,'" + button.id + "')\" class=\"btn btn-default\">" + button.label + "</button>\n    ";
    };
    return ButtonWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/checkbox/checkbox.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxWidget = (function (_super) {
    __extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        return _super.call(this) || this;
    }
    CheckboxWidget.prototype.getTemplate = function (schema) {
        var templ = '';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n            <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </label>\n        </div>\n      ";
        }
        templ += "\n    <div nz-form-control nz-col\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        " + this.iterateOptions(schema) + "\n    </div>\n    ";
        return templ;
    };
    // ${this.iterateOptions(schema)}
    CheckboxWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.items && schema.items.oneOf;
        if (schema.type != 'array') {
            htmlStr = "\n            <label nz-checkbox\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + ">\n                <span>" + schema.description + "</span>\n            </label>\n\t\t\t";
        }
        else if (schema.type === 'array') {
            htmlStr = "<nz-checkbox-group  name=\"" + schema.name + "\" [(ngModel)]=\"" + schema.modelName + ".checkOptions\"></nz-checkbox-group> \n            {{" + schema.modelName + ".checkOptions | json}}\n            ";
        }
        return htmlStr;
    };
    return CheckboxWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/date-range/date-range.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateRangeWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DateRangeWidget = (function (_super) {
    __extends(DateRangeWidget, _super);
    function DateRangeWidget() {
        return _super.call(this) || this;
    }
    DateRangeWidget.prototype.getTemplate = function (schema) {
        var templ = '';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n            <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </label>\n        </div>\n      ";
        }
        templ += "\n    <div nz-form-control nz-col\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        <nz-rangepicker \n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            " + (schema.readOnl ? "[nzReadonly]=\"true\"" : "") + "\n            " + (schema.size ? "[nzSize]=\"'" + schema.size + "'\"" : '') + "\n            " + (schema.format ? "[nzFormat]=\"'" + schema.format + "'\"" : "[nzFormat]=\"'YYYY/MM/DD'\"") + "\n            " + (schema.showTime ? "[nzShowTime]=\"true\"" : "[nzShowTime]=\"false\"") + "\n            [nzPlaceholder]=\"['" + schema.start + "', '" + schema.end + "']\"></nz-rangepicker>\n    </div>\n    ";
        return templ;
    };
    return DateRangeWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/date/date.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DateWidget = (function (_super) {
    __extends(DateWidget, _super);
    function DateWidget() {
        return _super.call(this) || this;
    }
    DateWidget.prototype.getTemplate = function (schema) {
        var templ = '';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n            <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </label>\n        </div>\n      ";
        }
        templ += "\n    <div nz-form-control nz-col\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        <nz-datepicker\n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + "\n            " + (schema.size ? "[nzSize]=\"'" + schema.size + "'\"" : '') + "\n            " + (schema.format ? "[nzFormat]=\"'" + schema.format + "'\"" : "[nzFormat]=\"'YYYY/MM/DD'\"") + "\n            " + (schema.showTime ? "[nzShowTime]=\"true\"" : "[nzShowTime]=\"false\"") + "\n            [nzPlaceHolder]=\"'" + (schema.placeholder ? schema.placeholder : '') + "'\"></nz-datepicker>\n    </div>\n    ";
        return templ;
    };
    return DateWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/defaultwidget-registry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZorroDefaultWidgetRegistry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_string_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/string/string.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__("../../../../../src/lib/schema/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/button/button.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_date_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/date/date.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_time_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/time/time.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_range_date_range_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/date-range/date-range.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkbox_checkbox_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/checkbox/checkbox.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__array_array_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/array/array.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__radio_radio_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/radio/radio.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__textarea_textarea_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/textarea/textarea.widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var ZorroDefaultWidgetRegistry = (function (_super) {
    __extends(ZorroDefaultWidgetRegistry, _super);
    function ZorroDefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.setType(__WEBPACK_IMPORTED_MODULE_2__schema__["a" /* WidgetType */].ZORRO);
        _this.register('string', __WEBPACK_IMPORTED_MODULE_0__string_string_widget__["a" /* StringWidget */]);
        _this.register('button', __WEBPACK_IMPORTED_MODULE_3__button_button_widget__["a" /* ButtonWidget */]);
        _this.register('date', __WEBPACK_IMPORTED_MODULE_4__date_date_widget__["a" /* DateWidget */]);
        _this.register('time', __WEBPACK_IMPORTED_MODULE_5__time_time_widget__["a" /* TimeWidget */]);
        _this.register('date-range', __WEBPACK_IMPORTED_MODULE_6__date_range_date_range_widget__["a" /* DateRangeWidget */]);
        _this.register('checkbox', __WEBPACK_IMPORTED_MODULE_7__checkbox_checkbox_widget__["a" /* CheckboxWidget */]);
        _this.register('radio', __WEBPACK_IMPORTED_MODULE_9__radio_radio_widget__["a" /* RadioWidget */]);
        _this.register('textarea', __WEBPACK_IMPORTED_MODULE_10__textarea_textarea_widget__["a" /* TextAreaWidget */]);
        _this.register('array', __WEBPACK_IMPORTED_MODULE_8__array_array_widget__["a" /* ArrayWidget */]);
        //   this.register('search', StringWidget);
        //   this.register('tel', StringWidget);
        //   this.register('url', StringWidget);
        //   this.register('email', StringWidget);
        //   this.register('password', StringWidget);
        //   this.register('color', StringWidget);
        //   this.register('date', StringWidget);
        //   this.register('date-time', StringWidget);
        //   this.register('time', StringWidget);
        //   this.register('integer', IntegerWidget);
        //   this.register('number', IntegerWidget);
        //   this.register('range', RangeWidget);
        //   this.register('select', SelectWidget);
        //   this.register('boolean', CheckboxWidget);
        _this.setDefaultWidget(__WEBPACK_IMPORTED_MODULE_0__string_string_widget__["a" /* StringWidget */]);
        return _this;
    }
    return ZorroDefaultWidgetRegistry;
}(__WEBPACK_IMPORTED_MODULE_1__widget_registry__["a" /* WidgetRegistry */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultwidget_registry__ = __webpack_require__("../../../../../src/lib/widgets/zorro/defaultwidget-registry.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultwidget_registry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/button/button.widget.ts");
/* unused harmony reexport ButtonWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_date_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/date/date.widget.ts");
/* unused harmony reexport DateWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_time_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/time/time.widget.ts");
/* unused harmony reexport TimeWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_range_date_range_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/date-range/date-range.widget.ts");
/* unused harmony reexport DateRangeWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkbox_checkbox_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/checkbox/checkbox.widget.ts");
/* unused harmony reexport CheckboxWidget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__textarea_textarea_widget__ = __webpack_require__("../../../../../src/lib/widgets/zorro/textarea/textarea.widget.ts");
/* unused harmony reexport TextAreaWidget */







/* export { IntegerWidget } from './integer/integer.widget';
export { RangeWidget } from './range/range.widget';
export { StringWidget } from './string/string.widget';
export { ArrayWidget } from './array/array.widget';
export { RadioWidget } from './radio/radio.widget';
export { SelectWidget } from './select/select.widget'; */


/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/radio/radio.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadioWidget = (function (_super) {
    __extends(RadioWidget, _super);
    function RadioWidget() {
        return _super.call(this) || this;
    }
    RadioWidget.prototype.getTemplate = function (schema) {
        var templ = '';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n            <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </label>\n        </div>\n      ";
        }
        templ += "\n    <div nz-form-control nz-col\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        " + this.iterateOptions(schema) + "\n    </div>\n    ";
        return templ;
    };
    // ${this.iterateOptions(schema)}
    RadioWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.oneOf || [];
        if (!options.length) {
            htmlStr = "\n            <label nz-radio\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + ">\n                <span>" + schema.description + "</span>\n            </label>\n\t\t\t";
        }
        else {
            htmlStr = "<nz-radio-group  name=\"" + schema.name + "\" [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\">";
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                htmlStr += "\n                <label nz-radio [nzValue]=\"'" + option.enum[0] + "'\">\n                    <span>" + option.description + "</span>\n                </label>\n\t\t\t\t";
            }
            htmlStr += "</nz-radio-group>";
        }
        return htmlStr;
    };
    return RadioWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/string/string.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringWidget = (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super.call(this) || this;
    }
    StringWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = "<input  nz-input [attr.name]=\"name\" type=\"hidden\" [ngModel]=\"" + schema.modelName + "\">";
        }
        else {
            templ = "\n            <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n                <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                    <span> " + (schema.title || '') + "\n                        " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                    </span>\n                </label>\n            </div>\n            <div nz-form-control nz-col\n                " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n                " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + "\n             nzHasFeedback>\n                <input nz-input\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + ((schema.widget.id !== 'color' && schema.readOnly) ? "[nzReadonly]=\"true\"" : "") + "\n                type=\"" + this.getInputType(schema) + "\"\n                placeholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n                " + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n                " + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n                " + ((schema.widget.id === 'color' && schema.readOnly) ? "[attr.disabled]=\"'true'\"" : "") + "/>\n                " + ((schema.widget.id === 'color' && schema.readOnly) ? "<input  nz-input name=\"" + schema.name + "\" type=\"hidden\"/>" : "") + "\n            </div>\n            ";
        }
        return templ;
    };
    StringWidget.prototype.getInputType = function (widgetInfo) {
        if (!widgetInfo.widget.id || widgetInfo.widget.id === 'string') {
            return 'text';
        }
        else {
            return widgetInfo.widget.id;
        }
    };
    return StringWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/textarea/textarea.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextAreaWidget = (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super.call(this) || this;
    }
    TextAreaWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "\n        <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n            <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </label>\n        </div>\n        <div nz-form-control nz-col\n            " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n            " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + "\n         nzHasFeedback>\n            <nz-input\n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            nzType=\"textarea\"\n            placeholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n            " + (schema.readOnly ? "[nzReadonly]=\"true\"" : "") + "\n            " + ((schema.autosize) ? "[nzAutosize]=\"" + schema.autosize + "\"" : "") + "></nz-input>\n        </div>\n        ";
        return templ;
    };
    return TextAreaWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/widgets/zorro/time/time.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget__ = __webpack_require__("../../../../../src/lib/widget.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TimeWidget = (function (_super) {
    __extends(TimeWidget, _super);
    function TimeWidget() {
        return _super.call(this) || this;
    }
    TimeWidget.prototype.getTemplate = function (schema) {
        var templ = '';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <div nz-form-label nz-col [nzSpan]=\"" + schema.span_label + "\"  class=\"" + listOfClassName.join(' ') + "\">\n            <label for=\"" + schema.formId + "\" nz-form-item-required [nzRequired]=\"required\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </label>\n        </div>\n      ";
        }
        templ += "\n    <div nz-form-control nz-col\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        <nz-timepicker\n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + "\n            " + (schema.size ? "[nzSize]=\"'" + schema.size + "'\"" : '') + "\n            " + (schema.format ? "[nzFormat]=\"'" + schema.format + "'\"" : "[nzFormat]=\"'HH:mm:ss'\"") + "\n            [nzPlaceHolder]=\"'" + (schema.placeholder ? schema.placeholder : '') + "'\"></nz-timepicker>\n    </div>\n    ";
        return templ;
    };
    return TimeWidget;
}(__WEBPACK_IMPORTED_MODULE_0__widget__["b" /* ControlWidget */]));



/***/ }),

/***/ "../../../../../src/lib/zorro-widget-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZorroWidgetFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_registry__ = __webpack_require__("../../../../../src/lib/widget-registry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_actionregistry__ = __webpack_require__("../../../../../src/lib/model/actionregistry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZorroWidgetFactory = (function () {
    function ZorroWidgetFactory(registry, compiler) {
        this.compiler = compiler;
        this.registry = registry;
    }
    ZorroWidgetFactory.prototype.addWidget = function (container, template, properties, context) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = (function () {
            function TemplateComponent(_differs, actionRegistry, changeDetectorRef) {
                this._differs = _differs;
                this.actionRegistry = actionRegistry;
                this.changeDetectorRef = changeDetectorRef;
                this.buttons = [];
            }
            TemplateComponent.prototype.ngOnInit = function () {
                this._differ = this._differs.find(this[this['modelName']]).create();
                if (this.interval) {
                    Object(__WEBPACK_IMPORTED_MODULE_4_timers__["clearInterval"])(this.interval);
                    this.interval = null;
                }
                this._parseButtons();
            };
            TemplateComponent.prototype.ngDoCheck = function () {
                if (this._differ) {
                    var changes = this._differ.diff(this[this['modelName']]);
                    if (changes) {
                        this._applyChanges(changes);
                        if (this['_debug_']) {
                            console.warn('model changes', this[this['modelName']]);
                        }
                    }
                }
            };
            TemplateComponent.prototype._parseButtons = function () {
                var schema = properties.formProperty.schema;
                if (schema.buttons !== undefined) {
                    this.buttons = schema.buttons;
                    for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        this._createButtonCallback(button);
                    }
                }
            };
            TemplateComponent.prototype._createButtonCallback = function (button) {
                var _this = this;
                this.action = function (e, id) {
                    var action;
                    if (id && (action = _this.actionRegistry.get(id))) {
                        if (action) {
                            action(properties.formProperty, _this._getBtnParameters(id));
                            // TODO，临时解决方案
                            if (id === 'reset') {
                                _this[_this['modelName']] = {};
                            }
                        }
                    }
                    e.preventDefault();
                };
            };
            TemplateComponent.prototype._applyChanges = function (changes) {
                context.onChange.emit({ value: this[this['modelName']] });
                context.modelChanged.emit(this[this['modelName']]);
            };
            TemplateComponent.prototype._getBtnParameters = function (id) {
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var btn = _a[_i];
                    if (id === btn.id) {
                        return btn.parameters;
                    }
                }
            };
            TemplateComponent.prototype.addItem = function () {
                this.formProperty.addItem();
            };
            TemplateComponent.prototype.removeItem = function (index) {
                this.formProperty.removeItem(index);
            };
            TemplateComponent.prototype.ngOnDestroy = function () {
                if (this.interval) {
                    Object(__WEBPACK_IMPORTED_MODULE_4_timers__["clearInterval"])(this.interval);
                    this.interval = null;
                }
            };
            TemplateComponent = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ template: template }),
                __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* KeyValueDiffers */],
                    __WEBPACK_IMPORTED_MODULE_5__model_actionregistry__["a" /* ActionRegistry */],
                    __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
            ], TemplateComponent);
            return TemplateComponent;
        }());
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            TemplateModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
                    declarations: [TemplateComponent],
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__["a" /* NgZorroAntdModule */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_5__model_actionregistry__["a" /* ActionRegistry */]]
                })
            ], TemplateModule);
            return TemplateModule;
        }());
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        return component;
    };
    ZorroWidgetFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__widget_registry__["a" /* WidgetRegistry */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Compiler */]])
    ], ZorroWidgetFactory);
    return ZorroWidgetFactory;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/horizontal-layout.json":
/***/ (function(module, exports) {

module.exports = "{\r\n    \"debug\": true,\r\n    \"layout\": \"horizontal\",\r\n    \"properties\": {\r\n        \"name\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"用户名\",\r\n            \"placeholder\": \"请输入用户名，且2位以上\",\r\n            \"minLength\": 2,\r\n            \"span_label\": 5,\r\n            \"span_control\": 16\r\n        },\r\n        \"password\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"password\",\r\n            \"title\": \"密码\",\r\n            \"placeholder\": \"请输入密码，且6位以上\",\r\n            \"minLength\": 6,\r\n            \"span_label\": 5,\r\n            \"span_control\": 16\r\n        }\r\n    },\r\n    \"required\": [\r\n        \"name\",\r\n        \"password\"\r\n    ],\r\n    \"button\": {\r\n        \"grid\": {\r\n            \"offset\": 5\r\n        },\r\n        \"items\": [\r\n            {\r\n                \"label\": \"登录\",\r\n                \"id\": \"send\",\r\n                \"submit\": true\r\n            },\r\n            {\r\n                \"label\": \"重置\",\r\n                \"id\": \"reset\"\r\n            }\r\n        ]\r\n    }\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/otherschema.json":
/***/ (function(module, exports) {

module.exports = "{\r\n  \"debug\": true,\r\n  \"modelName\": \"testModel\",\r\n  \"fieldsets\": [\r\n    {\r\n      \"fields\": [\r\n        \"title\",\r\n        \"description\"\r\n      ],\r\n      \"id\": \"default\",\r\n      \"title\": \"Default\"\r\n    },\r\n    {\r\n      \"fields\": [\r\n        \"author\",\r\n        \"language\",\r\n        \"numberOfBoxes\"\r\n      ],\r\n      \"id\": \"settings\",\r\n      \"title\": \"Settings\"\r\n    }\r\n  ],\r\n  \"properties\": {\r\n    \"description\": {\r\n      \"description\": \"Short description\",\r\n      \"placeholder\": \"input string\",\r\n      \"minLength\": 0,\r\n      \"readOnly\": true,\r\n      \"title\": \"Summary\",\r\n      \"type\": \"string\",\r\n      \"widget\": \"textarea\"\r\n    },\r\n    \"title\": {\r\n      \"description\": \"\",\r\n      \"title\": \"Title\",\r\n      \"maxLength\": 10,\r\n      \"type\": \"string\"\r\n    },\r\n    \"author\": {\r\n      \"description\": \"\",\r\n      \"title\": \"Author\",\r\n      \"type\": \"string\"\r\n    },\r\n    \"language\": {\r\n      \"description\": \"\",\r\n      \"oneOf\": [\r\n        {\r\n          \"description\": \"English\",\r\n          \"enum\": [\r\n            \"en\"\r\n          ]\r\n        },\r\n        {\r\n          \"description\": \"Chinese\",\r\n          \"enum\": [\r\n            \"zh\"\r\n          ]\r\n        }\r\n      ],\r\n      \"title\": \"Language\",\r\n      \"type\": \"string\",\r\n      \"widget\": \"select\"\r\n    },\r\n    \"numberOfBoxes\": {\r\n      \"type\": \"number\",\r\n      \"widget\": {\r\n        \"id\": \"range\"\r\n      },\r\n      \"description\": \"Number of boxes required\",\r\n      \"minimum\": 1,\r\n      \"maximum\": 10\r\n    }\r\n  },\r\n  \"required\": [\r\n    \"title\"\r\n  ],\r\n  \"button\": {\r\n    \"items\": [\r\n      {\r\n        \"label\": \"Alert\",\r\n        \"id\": \"alert\",\r\n        \"submit\": true,\r\n        \"offset\": 4\r\n      },\r\n      {\r\n        \"label\": \"Reset\",\r\n        \"id\": \"reset\"\r\n      }\r\n    ]\r\n  }\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/person-info-grid.json":
/***/ (function(module, exports) {

module.exports = "{\r\n    \"debug\": true,\r\n    \"modelName\": \"testModel\",\r\n    \"grid\": {\r\n        \"md\": {\r\n            \"span\": 6\r\n        }\r\n    },\r\n    \"properties\": {\r\n        \"email\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"邮箱\",\r\n            \"format\": \"email\",\r\n            \"placeholder\": \"请输入邮箱，最多20个字符\",\r\n            \"maxLength\": 20,\r\n            \"readOnly\": true,\r\n            \"grid\": {\r\n                \"md\": {\r\n                    \"span\": 4\r\n                },\r\n                \"lg\": {\r\n                    \"span\": 6\r\n                }\r\n            },\r\n            \"default\": \"giscafer@outlook.com\"\r\n        },\r\n        \"name\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"姓名\",\r\n            \"placeholder\": \"请输入姓名\",\r\n            \"description\": \"必须大写开头且3个字以上\",\r\n            \"maxLength\": 30,\r\n            \"minLength\": 3,\r\n            \"debug\": false\r\n        },\r\n        \"age\": {\r\n            \"type\": \"number\",\r\n            \"title\": \"年龄\",\r\n            \"minimum\": 1,\r\n            \"maximum\": 100\r\n        },\r\n        \"remark\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"描述\"\r\n        }\r\n    },\r\n    \"button\": {\r\n        \"grid\": {\r\n            \"md\": {\r\n                \"offset\": 5,\r\n                \"span\": 6\r\n            }\r\n        },\r\n        \"items\":[\r\n            {\r\n                \"label\": \"Alert\",\r\n                \"id\": \"alert\",\r\n                \"submit\": true\r\n            },\r\n            {\r\n                \"label\": \"Reset\",\r\n                \"id\": \"reset\"\r\n            }\r\n        ]\r\n    }\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/person-info.json":
/***/ (function(module, exports) {

module.exports = "{\r\n    \"modelName\": \"testModel\",\r\n    \"properties\": {\r\n        \"email\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"邮箱\",\r\n            \"format\": \"email\",\r\n            \"placeholder\": \"请输入邮箱，最多20个字符\",\r\n            \"maxLength\": 20,\r\n            \"readOnly\": true,\r\n            \"default\": \"giscafer@outlook.com\"\r\n        },\r\n        \"name\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"姓名\",\r\n            \"placeholder\": \"请输入姓名\",\r\n            \"description\": \"必须大写开头且3个字以上\",\r\n            \"maxLength\": 30,\r\n            \"minLength\": 3,\r\n            \"debug\": true\r\n        },\r\n        \"age\": {\r\n            \"type\": \"number\",\r\n            \"title\": \"年龄\",\r\n            \"minimum\": 1,\r\n            \"maximum\": 100\r\n        },\r\n        \"remark\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"描述\"\r\n        }\r\n    },\r\n    \"button\": {\r\n        \"items\": [\r\n            {\r\n                \"label\": \"Alert\",\r\n                \"id\": \"alert\",\r\n                \"submit\": true\r\n            },\r\n            {\r\n                \"label\": \"Reset\",\r\n                \"id\": \"reset\"\r\n            }\r\n        ]\r\n    }\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/sampleschema.json":
/***/ (function(module, exports) {

module.exports = "{\r\n\t\"$schema\": \"http://json-schema.org/draft-04/hyper-schema#\",\r\n\t\"type\": \"object\",\r\n\t\"properties\": {\r\n\t\t\"firstName\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"placeholder\": \"First name\",\r\n\t\t\t\"minLength\": 2,\r\n\t\t\t\"maxLength\": 40,\r\n\t\t\t\"title\": \"First name\",\r\n\t\t\t\"description\": \"First name\"\r\n\t\t},\r\n\t\t\"lastName\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"placeholder\": \"Last name\",\r\n\t\t\t\"minLength\": 2,\r\n\t\t\t\"maxLength\": 40,\r\n\t\t\t\"title\": \"Last name\",\r\n\t\t\t\"description\": \"Last name\"\r\n\t\t},\r\n\t\t\"bornOn\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"format\": \"date\",\r\n\t\t\t\"widget\": \"date\",\r\n\t\t\t\"default\": \"1800-12-12\",\r\n\t\t\t\"placeholder\": \"Ex: 2009-03-11\",\r\n\t\t\t\"description\": \"Born on\"\r\n\t\t},\r\n\t\t\"categories\": {\r\n\t\t\t\"type\": \"array\",\r\n\t\t\t\"title\": \"Categories\",\r\n\t\t\t\"grid\": {\r\n\t\t\t\t\"mode\": \"inline\",\r\n\t\t\t\t\"md\": {\r\n\t\t\t\t\t\"span\": 12\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t\"items\": {\r\n\t\t\t\t\"type\": \"string\",\r\n\t\t\t\t\"oneOf\": [\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"Dog\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"dog\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"Cat\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"cat\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"Daulphin\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"daulphin\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t},\r\n\t\t\t\"widget\": \"checkbox\"\r\n\t\t},\r\n\t\t\"moreInfo\": {\r\n\t\t\t\"type\": \"boolean\",\r\n\t\t\t\"widget\": \"checkbox\",\r\n\t\t\t\"description\": \"More information?\",\r\n\t\t\t\"default\": true\r\n\t\t},\r\n\t\t\"survey\": {\r\n\t\t\t\"type\": \"object\",\r\n\t\t\t\"description\": \"Little survey\",\r\n\t\t\t\"properties\": {\r\n\t\t\t\t\"q1\": {\r\n\t\t\t\t\t\"type\": \"string\",\r\n\t\t\t\t\t\"description\": \"Enter a number\"\r\n\t\t\t\t},\r\n\t\t\t\t\"q2\": {\r\n\t\t\t\t\t\"type\": \"object\",\r\n\t\t\t\t\t\"description\": \"Address\",\r\n\t\t\t\t\t\"properties\": {\r\n\t\t\t\t\t\t\"color\": {\r\n\t\t\t\t\t\t\t\"description\": \"color\",\r\n\t\t\t\t\t\t\t\"type\": \"string\",\r\n\t\t\t\t\t\t\t\"default\": \"#aaa000\",\r\n\t\t\t\t\t\t\t\"pattern\": \"ff$\",\r\n\t\t\t\t\t\t\t\"widget\": \"color\"\r\n\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\"zip\": {\r\n\t\t\t\t\t\t\t\"description\": \"zip\",\r\n\t\t\t\t\t\t\t\"type\": \"number\",\r\n\t\t\t\t\t\t\t\"default\": 15\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"favoriteColor\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"pattern\": \"^#[0-9a-fA-F]{6}$\",\r\n\t\t\t\"widget\": \"color\",\r\n\t\t\t\"default\": \"#aaa111\",\r\n\t\t\t\"description\": \"Favorite color\",\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"moreInfo\": [\r\n\t\t\t\t\ttrue\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"transactionNumber\": {\r\n\t\t\t\"type\": \"integer\",\r\n\t\t\t\"minimum\": 0,\r\n\t\t\t\"readOnly\": \"true\",\r\n\t\t\t\"description\": \"Transaction number\"\r\n\t\t},\r\n\t\t\"transactionDescription\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"widget\": \"textline\",\r\n\t\t\t\"description\": \"What is being transacted\"\r\n\t\t},\r\n\t\t\"category\": {\r\n\t\t\t\"type\": \"array\",\r\n\t\t\t\"widget\": \"select\",\r\n\t\t\t\"items\": {\r\n\t\t\t\t\"type\": \"string\",\r\n\t\t\t\t\"oneOf\": [\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"Design\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"design\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"High-Tech\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"hightech\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"Materials\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"materials\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"description\": \"Services\",\r\n\t\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\t\"services\"\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t},\r\n\t\t\t\"description\": \"Category\"\r\n\t\t},\r\n\t\t\"promotion\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"description\": \"Promotion\",\r\n\t\t\t\"widget\": \"radio\",\r\n\t\t\t\"oneOf\": [\r\n\t\t\t\t{\r\n\t\t\t\t\t\"description\": \"Student discount (20%)\",\r\n\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\"student\"\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"description\": \"Summer 2016 discount (15%)\",\r\n\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\"summer\"\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"description\": \"None\",\r\n\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\"none\"\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t},\r\n\t\t\"confirmationMail\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"description\": \"Email\",\r\n\t\t\t\"format\": \"email\"\r\n\t\t},\r\n\t\t\"password\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"widget\": \"password\",\r\n\t\t\t\"description\": \"Password\"\r\n\t\t},\r\n\t\t\"numberOfBoxes\": {\r\n\t\t\t\"type\": \"number\",\r\n\t\t\t\"widget\": {\r\n\t\t\t\t\"id\": \"range\"\r\n\t\t\t},\r\n\t\t\t\"description\": \"Number of boxes required\",\r\n\t\t\t\"minimum\": 1,\r\n\t\t\t\"maximum\": 10\r\n\t\t},\r\n\t\t\"deliveryService\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"widget\": \"select\",\r\n\t\t\t\"description\": \"Delivery service\",\r\n\t\t\t\"oneOf\": [\r\n\t\t\t\t{\r\n\t\t\t\t\t\"description\": \"UPS\",\r\n\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\"ups\"\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"description\": \"FedEx\",\r\n\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\"fedex\"\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"description\": \"Other\",\r\n\t\t\t\t\t\"enum\": [\r\n\t\t\t\t\t\t\"other\"\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t],\r\n\t\t\t\"default\": \"fedex\"\r\n\t\t},\r\n\t\t\"otherDeliveryService\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"minLength\": 2,\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"deliveryService\": [\r\n\t\t\t\t\t\"other\"\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"freeShipping\": {\r\n\t\t\t\"type\": \"boolean\",\r\n\t\t\t\"widget\": \"checkbox\",\r\n\t\t\t\"description\": \"Free shipping\",\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"deliveryService\": [\r\n\t\t\t\t\t\"other\",\r\n\t\t\t\t\t\"ups\"\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"shippingPrice\": {\r\n\t\t\t\"type\": \"number\",\r\n\t\t\t\"description\": \"ShippingCost\",\r\n\t\t\t\"minimum\": 0,\r\n\t\t\t\"maximum\": 200,\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"freeShipping\": [\r\n\t\t\t\t\tfalse\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"sendApologies\": {\r\n\t\t\t\"type\": \"boolean\",\r\n\t\t\t\"widget\": \"checkbox\",\r\n\t\t\t\"description\": \"Send apologies for the shipping cost\",\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"shippingPrice\": [\r\n\t\t\t\t\t22,\r\n\t\t\t\t\t23\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"useCustomEmail\": {\r\n\t\t\t\"type\": \"boolean\",\r\n\t\t\t\"description\": \"Write a custom email ?\"\r\n\t\t},\r\n\t\t\"customEmail\": {\r\n\t\t\t\"type\": \"string\",\r\n\t\t\t\"widget\": \"textarea\",\r\n\t\t\t\"description\": \"Email to send\",\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"useCustomEmail\": [\r\n\t\t\t\t\ttrue\r\n\t\t\t\t]\r\n\t\t\t},\r\n\t\t\t\"pattern\": \"^<h1>\"\r\n\t\t},\r\n\t\t\"userManual\": {\r\n\t\t\t\"type\": \"object\",\r\n\t\t\t\"widget\": \"file\",\r\n\t\t\t\"properties\": {\r\n\t\t\t\t\"content-type\": {\r\n\t\t\t\t\t\"type\": \"string\"\r\n\t\t\t\t},\r\n\t\t\t\t\"filename\": {\r\n\t\t\t\t\t\"type\": \"string\"\r\n\t\t\t\t},\r\n\t\t\t\t\"size\": {\r\n\t\t\t\t\t\"type\": \"integer\"\r\n\t\t\t\t},\r\n\t\t\t\t\"encoding\": {\r\n\t\t\t\t\t\"type\": \"string\"\r\n\t\t\t\t},\r\n\t\t\t\t\"data\": {\r\n\t\t\t\t\t\"type\": \"string\"\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t\"description\": \"Add a manual for the delivered items\",\r\n\t\t\t\"visibleIf\": {\r\n\t\t\t\t\"category\": [\r\n\t\t\t\t\t\"hightech\"\r\n\t\t\t\t]\r\n\t\t\t}\r\n\t\t},\r\n\t\t\"colors\": {\r\n\t\t\t\"type\": \"array\",\r\n\t\t\t\"description\": \"Colors\",\r\n\t\t\t\"index\": \"i\",\r\n\t\t\t\"items\": {\r\n\t\t\t\t\"type\": \"string\",\r\n\t\t\t\t\"description\": \"Color $i\",\r\n\t\t\t\t\"widget\": \"color\",\r\n\t\t\t\t\"buttons\": [\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t\"label\": \"Supprimer\",\r\n\t\t\t\t\t\t\"id\": \"Remove\"\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t},\r\n\t\t\t\"buttons\": [\r\n\t\t\t\t{\r\n\t\t\t\t\t\"label\": \"Ajouter\",\r\n\t\t\t\t\t\"id\": \"addItem\",\r\n\t\t\t\t\t\"parameters\": {\r\n\t\t\t\t\t\t\"value\": \"#afeadd\"\r\n\t\t\t\t\t}\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"label\": \"Reset\",\r\n\t\t\t\t\t\"id\": \"reset\"\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t},\r\n\t\"button\": {\r\n\t\t\"items\":[\r\n\t\t\t{\r\n\t\t\t\t\"label\": \"Alert\",\r\n\t\t\t\t\"id\": \"alert\"\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\t\"label\": \"Reset\",\r\n\t\t\t\t\"id\": \"reset\"\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\t\"label\": \"Disable all\",\r\n\t\t\t\t\"id\": \"disable\"\r\n\t\t\t}\r\n\t\t]\t\r\n\t},\r\n\t\"fieldsets\": [\r\n\t\t{\r\n\t\t\t\"id\": \"part_1\",\r\n\t\t\t\"title\": \"Part 1 - Recipient\",\r\n\t\t\t\"fields\": [\r\n\t\t\t\t\"firstName\",\r\n\t\t\t\t\"lastName\",\r\n\t\t\t\t\"categories\",\r\n\t\t\t\t\"bornOn\",\r\n\t\t\t\t\"moreInfo\",\r\n\t\t\t\t\"favoriteColor\",\r\n\t\t\t\t\"colors\",\r\n\t\t\t\t\"survey\"\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"part_2\",\r\n\t\t\t\"title\": \"Part 2 - Transaction\",\r\n\t\t\t\"fields\": [\r\n\t\t\t\t\"transactionNumber\",\r\n\t\t\t\t\"transactionDescription\",\r\n\t\t\t\t\"promotion\",\r\n\t\t\t\t\"category\",\r\n\t\t\t\t\"userManual\"\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"part_3\",\r\n\t\t\t\"title\": \"Part 3 - Shipping\",\r\n\t\t\t\"fields\": [\r\n\t\t\t\t\"numberOfBoxes\",\r\n\t\t\t\t\"deliveryService\",\r\n\t\t\t\t\"otherDeliveryService\",\r\n\t\t\t\t\"freeShipping\",\r\n\t\t\t\t\"shippingPrice\",\r\n\t\t\t\t\"sendApologies\"\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"part_4\",\r\n\t\t\t\"title\": \"Part 4 - Email\",\r\n\t\t\t\"fields\": [\r\n\t\t\t\t\"useCustomEmail\",\r\n\t\t\t\t\"customEmail\"\r\n\t\t\t]\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"id\": \"part_5\",\r\n\t\t\t\"title\": \"Part 5 - Confirmation\",\r\n\t\t\t\"fields\": [\r\n\t\t\t\t\"confirmationMail\",\r\n\t\t\t\t\"password\"\r\n\t\t\t]\r\n\t\t}\r\n\t],\r\n\t\"required\": [\r\n\t\t\"firstName\",\r\n\t\t\"lastName\",\r\n\t\t\"transactionNumber\",\r\n\t\t\"password\"\r\n\t]\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/vertical-layout.json":
/***/ (function(module, exports) {

module.exports = "{\r\n    \"debug\": true,\r\n    \"layout\": \"vertical\",\r\n    \"properties\": {\r\n        \"name\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"用户名\",\r\n            \"placeholder\": \"请输入用户名，且2位以上\",\r\n            \"minLength\": 2\r\n        },\r\n        \"password\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"password\",\r\n            \"title\": \"密码\",\r\n            \"placeholder\": \"请输入密码，且6位以上\",\r\n            \"minLength\": 6\r\n        }\r\n    },\r\n    \"required\": [\r\n        \"name\",\r\n        \"password\"\r\n    ],\r\n    \"button\": {\r\n        \"grid\": {\r\n            \"offset\": 5\r\n        },\r\n        \"items\": [\r\n            {\r\n                \"label\": \"登录\",\r\n                \"id\": \"send\",\r\n                \"submit\": true\r\n            },\r\n            {\r\n                \"label\": \"重置\",\r\n                \"id\": \"reset\"\r\n            }\r\n        ]\r\n    }\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/zorro-full-widget.json":
/***/ (function(module, exports) {

module.exports = "{\r\n    \"$schema\": \"http://json-schema.org/draft-04/hyper-schema#\",\r\n    \"type\": \"object\",\r\n    \"properties\": {\r\n        \"name\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"用户名\",\r\n            \"placeholder\": \"请输入用户名，且2位以上\",\r\n            \"minLength\": 2\r\n        },\r\n        \"password\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"password\",\r\n            \"title\": \"密码\",\r\n            \"placeholder\": \"请输入密码，且6位以上\",\r\n            \"minLength\": 6\r\n        },\r\n        \"remark\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"textarea\",\r\n            \"title\": \"备注\",\r\n            \"placeholder\": \"Autosize height with minimum and maximum number of lines\"\r\n        },\r\n        \"date1\": {\r\n            \"type\": \"string\",\r\n            \"placeholder\": \"基本日期\",\r\n            \"widget\": \"date\",\r\n            \"title\": \"基本日期\"\r\n        },\r\n        \"date2\": {\r\n            \"type\": \"string\",\r\n            \"placeholder\": \"可选时间\",\r\n            \"format\": \"YYYY/MM/DD HH:mm:ss\",\r\n            \"widget\": \"date\",\r\n            \"showTime\": true,\r\n            \"title\": \"带时间日期\"\r\n        },\r\n        \"date3\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"date\",\r\n            \"default\": \"2000-03-12\",\r\n            \"title\": \"默认值\",\r\n            \"placeholder\": \"Ex: 2000-03-12\"\r\n        },\r\n        \"datetime1\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"time\",\r\n            \"title\": \"时间选择\",\r\n            \"placeholder\": \"时间选择\"\r\n        },\r\n        \"daterange\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"date-range\",\r\n            \"title\": \"日期段\",\r\n            \"start\": \"Select start date\",\r\n            \"end\": \"Select end date\"\r\n        },\r\n        \"checked\": {\r\n            \"type\": \"boolean\",\r\n            \"widget\": \"checkbox\",\r\n            \"description\": \"I agree to the Terms of Service and the Privacy Policy.\"\r\n        },\r\n        \"checked1\": {\r\n            \"type\": \"boolean\",\r\n            \"widget\": \"checkbox\",\r\n            \"readOnly\": true,\r\n            \"default\": true,\r\n            \"description\": \"不可选 - Disabled.\"\r\n        },\r\n        \"categories\": {\r\n            \"type\": \"array\",\r\n            \"title\": \"Categories\",\r\n            \"items\": {\r\n                \"type\": \"string\",\r\n                \"oneOf\": [{\r\n                        \"description\": \"Dog\",\r\n                        \"enum\": [\r\n                            \"dog\"\r\n                        ]\r\n                    },\r\n                    {\r\n                        \"description\": \"Cat\",\r\n                        \"enum\": [\r\n                            \"cat\"\r\n                        ]\r\n                    },\r\n                    {\r\n                        \"description\": \"Daulphin\",\r\n                        \"enum\": [\r\n                            \"daulphin\"\r\n                        ]\r\n                    }\r\n                ]\r\n            },\r\n            \"widget\": \"checkbox\"\r\n        },\r\n        \"promotion\": {\r\n            \"type\": \"string\",\r\n            \"description\": \"独立使用 true\",\r\n            \"default\": true,\r\n            \"widget\": \"radio\"\r\n        },\r\n        \"promotions\": {\r\n            \"type\": \"string\",\r\n            \"description\": \"Promotion\",\r\n            \"widget\": \"radio\",\r\n            \"oneOf\": [{\r\n                    \"description\": \"Student discount (20%)\",\r\n                    \"enum\": [\r\n                        \"student\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"description\": \"Summer 2016 discount (15%)\",\r\n                    \"enum\": [\r\n                        \"summer\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"description\": \"None\",\r\n                    \"enum\": [\r\n                        \"none\"\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n\r\n        \"survey\": {\r\n            \"type\": \"object\",\r\n            \"description\": \"Little survey\",\r\n            \"properties\": {\r\n                \"q1\": {\r\n                    \"type\": \"string\",\r\n                    \"description\": \"Enter a number\"\r\n                },\r\n                \"q2\": {\r\n                    \"type\": \"object\",\r\n                    \"description\": \"Address\",\r\n                    \"properties\": {\r\n                        \"color\": {\r\n                            \"description\": \"color\",\r\n                            \"type\": \"string\",\r\n                            \"default\": \"#aaa000\",\r\n                            \"pattern\": \"ff$\",\r\n                            \"widget\": \"color\"\r\n                        },\r\n                        \"zip\": {\r\n                            \"description\": \"zip\",\r\n                            \"type\": \"number\",\r\n                            \"default\": 15\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        },\r\n        \"favoriteColor\": {\r\n            \"type\": \"string\",\r\n            \"pattern\": \"^#[0-9a-fA-F]{6}$\",\r\n            \"widget\": \"color\",\r\n            \"default\": \"#aaa111\",\r\n            \"description\": \"Favorite color\",\r\n            \"visibleIf\": {\r\n                \"moreInfo\": [\r\n                    true\r\n                ]\r\n            }\r\n        },\r\n        \"transactionNumber\": {\r\n            \"type\": \"integer\",\r\n            \"minimum\": 0,\r\n            \"readOnly\": \"true\",\r\n            \"description\": \"Transaction number\"\r\n        },\r\n        \"transactionDescription\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"textline\",\r\n            \"description\": \"What is being transacted\"\r\n        },\r\n        \"category\": {\r\n            \"type\": \"array\",\r\n            \"widget\": \"select\",\r\n            \"items\": {\r\n                \"type\": \"string\",\r\n                \"oneOf\": [{\r\n                        \"description\": \"Design\",\r\n                        \"enum\": [\r\n                            \"design\"\r\n                        ]\r\n                    },\r\n                    {\r\n                        \"description\": \"High-Tech\",\r\n                        \"enum\": [\r\n                            \"hightech\"\r\n                        ]\r\n                    },\r\n                    {\r\n                        \"description\": \"Materials\",\r\n                        \"enum\": [\r\n                            \"materials\"\r\n                        ]\r\n                    },\r\n                    {\r\n                        \"description\": \"Services\",\r\n                        \"enum\": [\r\n                            \"services\"\r\n                        ]\r\n                    }\r\n                ]\r\n            },\r\n            \"description\": \"Category\"\r\n        },\r\n\r\n        \"numberOfBoxes\": {\r\n            \"type\": \"number\",\r\n            \"widget\": {\r\n                \"id\": \"range\"\r\n            },\r\n            \"description\": \"Number of boxes required\",\r\n            \"minimum\": 1,\r\n            \"maximum\": 10\r\n        },\r\n        \"deliveryService\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"select\",\r\n            \"description\": \"Delivery service\",\r\n            \"oneOf\": [{\r\n                    \"description\": \"UPS\",\r\n                    \"enum\": [\r\n                        \"ups\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"description\": \"FedEx\",\r\n                    \"enum\": [\r\n                        \"fedex\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"description\": \"Other\",\r\n                    \"enum\": [\r\n                        \"other\"\r\n                    ]\r\n                }\r\n            ],\r\n            \"default\": \"fedex\"\r\n        },\r\n        \"otherDeliveryService\": {\r\n            \"type\": \"string\",\r\n            \"minLength\": 2,\r\n            \"visibleIf\": {\r\n                \"deliveryService\": [\r\n                    \"other\"\r\n                ]\r\n            }\r\n        },\r\n        \"freeShipping\": {\r\n            \"type\": \"boolean\",\r\n            \"widget\": \"checkbox\",\r\n            \"description\": \"Free shipping\",\r\n            \"visibleIf\": {\r\n                \"deliveryService\": [\r\n                    \"other\",\r\n                    \"ups\"\r\n                ]\r\n            }\r\n        },\r\n        \"shippingPrice\": {\r\n            \"type\": \"number\",\r\n            \"description\": \"ShippingCost\",\r\n            \"minimum\": 0,\r\n            \"maximum\": 200,\r\n            \"visibleIf\": {\r\n                \"freeShipping\": [\r\n                    false\r\n                ]\r\n            }\r\n        },\r\n        \"sendApologies\": {\r\n            \"type\": \"boolean\",\r\n            \"widget\": \"checkbox\",\r\n            \"description\": \"Send apologies for the shipping cost\",\r\n            \"visibleIf\": {\r\n                \"shippingPrice\": [\r\n                    22,\r\n                    23\r\n                ]\r\n            }\r\n        },\r\n        \"useCustomEmail\": {\r\n            \"type\": \"boolean\",\r\n            \"description\": \"Write a custom email ?\"\r\n        },\r\n        \"customEmail\": {\r\n            \"type\": \"string\",\r\n            \"widget\": \"textarea\",\r\n            \"description\": \"Email to send\",\r\n            \"visibleIf\": {\r\n                \"useCustomEmail\": [\r\n                    true\r\n                ]\r\n            },\r\n            \"pattern\": \"^<h1>\"\r\n        },\r\n        \"userManual\": {\r\n            \"type\": \"object\",\r\n            \"widget\": \"file\",\r\n            \"properties\": {\r\n                \"content-type\": {\r\n                    \"type\": \"string\"\r\n                },\r\n                \"filename\": {\r\n                    \"type\": \"string\"\r\n                },\r\n                \"size\": {\r\n                    \"type\": \"integer\"\r\n                },\r\n                \"encoding\": {\r\n                    \"type\": \"string\"\r\n                },\r\n                \"data\": {\r\n                    \"type\": \"string\"\r\n                }\r\n            },\r\n            \"description\": \"Add a manual for the delivered items\",\r\n            \"visibleIf\": {\r\n                \"category\": [\r\n                    \"hightech\"\r\n                ]\r\n            }\r\n        },\r\n        \"colors\": {\r\n            \"type\": \"array\",\r\n            \"description\": \"Colors\",\r\n            \"index\": \"i\",\r\n            \"items\": {\r\n                \"type\": \"string\",\r\n                \"description\": \"Color $i\",\r\n                \"widget\": \"color\",\r\n                \"buttons\": [{\r\n                    \"label\": \"Supprimer\",\r\n                    \"id\": \"Remove\"\r\n                }]\r\n            },\r\n            \"buttons\": [{\r\n                    \"label\": \"Ajouter\",\r\n                    \"id\": \"addItem\",\r\n                    \"parameters\": {\r\n                        \"value\": \"#afeadd\"\r\n                    }\r\n                },\r\n                {\r\n                    \"label\": \"Reset\",\r\n                    \"id\": \"reset\"\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"button\": {\r\n        \"items\": [{\r\n                \"label\": \"Alert\",\r\n                \"id\": \"alert\"\r\n            },\r\n            {\r\n                \"label\": \"Reset\",\r\n                \"id\": \"reset\"\r\n            },\r\n            {\r\n                \"label\": \"Disable all\",\r\n                \"id\": \"disable\"\r\n            }\r\n        ]\r\n    },\r\n    \"fieldsets\": [{\r\n            \"id\": \"input_widget\",\r\n            \"title\": \"input 字符串 部件\",\r\n            \"fields\": [\r\n                \"name\",\r\n                \"password\",\r\n                \"remark\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"date_widget\",\r\n            \"title\": \"日期、时间、日期时间段 部件\",\r\n            \"fields\": [\r\n                \"date1\",\r\n                \"date2\",\r\n                \"date3\",\r\n                \"datetime1\",\r\n                \"daterange\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"checkbox_widget\",\r\n            \"title\": \"checkbox 部件\",\r\n            \"fields\": [\r\n                \"checked\",\r\n                \"checked1\",\r\n                \"categories\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"radio_widget\",\r\n            \"title\": \"radio 部件\",\r\n            \"fields\": [\r\n                \"promotion\",\r\n                \"promotions\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"part_1\",\r\n            \"title\": \"part1\",\r\n            \"fields\": [\r\n                \"favoriteColor\",\r\n                \"colors\",\r\n                \"survey\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"part_2\",\r\n            \"title\": \"Part 2 - Transaction\",\r\n            \"fields\": [\r\n                \"transactionNumber\",\r\n                \"transactionDescription\",\r\n                \"category\",\r\n                \"userManual\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"part_3\",\r\n            \"title\": \"Part 3 - Shipping\",\r\n            \"fields\": [\r\n                \"numberOfBoxes\",\r\n                \"deliveryService\",\r\n                \"otherDeliveryService\",\r\n                \"freeShipping\",\r\n                \"shippingPrice\",\r\n                \"sendApologies\"\r\n            ]\r\n        },\r\n        {\r\n            \"id\": \"part_4\",\r\n            \"title\": \"Part 4 - Email\",\r\n            \"fields\": [\r\n                \"useCustomEmail\",\r\n                \"customEmail\"\r\n            ]\r\n        }\r\n    ],\r\n    \"required\": [\r\n        \"transactionNumber\",\r\n        \"password\"\r\n    ]\r\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/mock/zorro-grid.json":
/***/ (function(module, exports) {

module.exports = "{\r\n    \"debug\": true,\r\n    \"modelName\": \"testModel\",\r\n    \"col_num\": 2,\r\n    \"col_gutter\": 10,\r\n    \"properties\": {\r\n        \"email\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"邮箱\",\r\n            \"format\": \"email\",\r\n            \"placeholder\": \"请输入邮箱，最多20个字符\",\r\n            \"maxLength\": 20,\r\n            \"readOnly\": true,\r\n            \"span_label\": 5,\r\n            \"span_control\": 19,\r\n            \"default\": \"giscafer@outlook.com\"\r\n        },\r\n        \"name\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"姓名\",\r\n            \"placeholder\": \"请输入姓名\",\r\n            \"description\": \"必须大写开头且3个字以上\",\r\n            \"maxLength\": 30,\r\n            \"minLength\": 3,\r\n            \"span_label\": 5,\r\n            \"span_control\": 19\r\n        },\r\n        \"birthday\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"出生日期\",\r\n            \"widget\": \"date\",\r\n            \"span_label\": 5,\r\n            \"default\": 662688000000,\r\n            \"span_control\": 19\r\n        },\r\n        \"age\": {\r\n            \"type\": \"number\",\r\n            \"title\": \"年龄\",\r\n            \"minimum\": 1,\r\n            \"maximum\": 100,\r\n            \"span_label\": 5,\r\n            \"span_control\": 19\r\n        },\r\n        \"remark\": {\r\n            \"type\": \"string\",\r\n            \"title\": \"描述\",\r\n            \"span_label\": 5,\r\n            \"span_control\": 19\r\n        }\r\n    },\r\n    \"button\": {\r\n        \"grid\": {\r\n            \"md\": {\r\n                \"offset\": 11,\r\n                \"span\": 6\r\n            }\r\n        },\r\n        \"items\": [\r\n            {\r\n                \"label\": \"Alert\",\r\n                \"id\": \"alert\",\r\n                \"submit\": true\r\n            },\r\n            {\r\n                \"label\": \"Reset\",\r\n                \"id\": \"reset\"\r\n            }\r\n        ]\r\n    }\r\n}"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map