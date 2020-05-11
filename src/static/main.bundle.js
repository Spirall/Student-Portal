webpackJsonp([4],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/admin/admin.module": [
		"../../../../../src/app/components/admin/admin.module.ts",
		1,
		0
	],
	"./components/students/student.module": [
		"../../../../../src/app/components/students/student.module.ts",
		2,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet (deactivate)=\"onDeactivate()\" (activate)=\"onActivate($event)\"></router-outlet>\r\n\r\n<footer class=\"row footer grey lighten-2\">\r\n  <div class=\"col l12 m12 s12 center\">\r\n    &copy; 2017 Copyright - IT Dept / Software Project\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/shared/styles/mixin.css"), "");

// module
exports.push([module.i, ".footer {\n  height: 60px;\n  margin: 0px;\n  line-height: 60px;\n  font-family: 'Baloo Bhaina', cursive;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 1000; }\n\n.select-dropdown li img {\n  height: 25px;\n  width: 25px;\n  margin: 13px 15px; }\n\n/** ==========================================================================================================================\r\n== CHAT Bubble DESIGN CODE\r\n**  =========================================================================================================================== */\n.bubble-msg {\n  background-color: #F2F2F2;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #B2B2B2;\n  display: inline-block;\n  padding: 7px 18px 10px 18px;\n  position: relative;\n  vertical-align: top;\n  font-family: 'OpenSans', sans-serif; }\n\n.bubble-msg::before {\n  background-color: #F2F2F2;\n  content: \"\\A0\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  top: 12px;\n  transform: rotate(29deg) skew(-35deg);\n  -moz-transform: rotate(29deg) skew(-35deg);\n  -ms-transform: rotate(29deg) skew(-35deg);\n  -o-transform: rotate(29deg) skew(-35deg);\n  -webkit-transform: rotate(29deg) skew(-35deg);\n  width: 20px; }\n\n.you {\n  float: left;\n  margin: 0px; }\n\n.you::before {\n  box-shadow: -2px 2px 2px 0 rgba(178, 178, 178, 0.4);\n  left: -9px; }\n\n.me {\n  float: right;\n  margin: 0px;\n  background-color: #ed6400 !important; }\n\n.me::before {\n  box-shadow: 2px -2px 2px 0 rgba(178, 178, 178, 0.4);\n  right: -9px;\n  background-color: #ed6400 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onDeactivate = function () {
        window.scrollTo(0, 0);
    };
    AppComponent.prototype.onActivate = function (event) {
        window.scrollTo(0, 0);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_share_module__ = __webpack_require__("../../../../../src/app/shared/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_interceptor_main_auth_interceptor__ = __webpack_require__("../../../../../src/app/shared/interceptor/main-auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_visitors_main_nav_header_main_header_component__ = __webpack_require__("../../../../../src/app/components/visitors/main-nav-header/main-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_name_component_name_component__ = __webpack_require__("../../../../../src/app/component-name/component-name.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRouting */].components,
            __WEBPACK_IMPORTED_MODULE_13__components_visitors_main_nav_header_main_header_component__["a" /* MainHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_name_component_name_component__["a" /* ComponentNameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRouting */].routes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_share_module__["a" /* ShareModule */],
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__shared_interceptor_main_auth_interceptor__["a" /* MainAuth */], multi: true }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_visitors_home_home_component__ = __webpack_require__("../../../../../src/app/components/visitors/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_visitors_accommodations_accommodation_component__ = __webpack_require__("../../../../../src/app/components/visitors/accommodations/accommodation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_visitors_accommodations_single_accommodation_single_accommodation_component__ = __webpack_require__("../../../../../src/app/components/visitors/accommodations/single-accommodation/single-accommodation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_visitors_resident_student_resident_student_component__ = __webpack_require__("../../../../../src/app/components/visitors/resident-student/resident-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_visitors_contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/components/visitors/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_visitors_apply_now_apply_now_component__ = __webpack_require__("../../../../../src/app/components/visitors/apply-now/apply-now.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_visitors_home_home_component__["a" /* HomeComponent */] },
    { path: 'accommodations',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_visitors_accommodations_accommodation_component__["a" /* AccommodationComponent */] },
            { path: ':res_name', component: __WEBPACK_IMPORTED_MODULE_2__components_visitors_accommodations_single_accommodation_single_accommodation_component__["a" /* SingleAccommodationComponent */] }
        ]
    },
    { path: 'resident-student', component: __WEBPACK_IMPORTED_MODULE_3__components_visitors_resident_student_resident_student_component__["a" /* ResidentStudentComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_4__components_visitors_contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'apply-now', component: __WEBPACK_IMPORTED_MODULE_5__components_visitors_apply_now_apply_now_component__["a" /* ApplyNowComponent */] },
    { path: 'apply-now/:res_no/:room_type', component: __WEBPACK_IMPORTED_MODULE_5__components_visitors_apply_now_apply_now_component__["a" /* ApplyNowComponent */] },
    { path: 'ujres-admin', loadChildren: './components/admin/admin.module#AdminModule' },
    { path: 'ujres-student', loadChildren: './components/students/student.module#StudentModule' },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];
var appRouting = {
    routes: routes,
    components: [
        __WEBPACK_IMPORTED_MODULE_0__components_visitors_home_home_component__["a" /* HomeComponent */],
        __WEBPACK_IMPORTED_MODULE_1__components_visitors_accommodations_accommodation_component__["a" /* AccommodationComponent */],
        __WEBPACK_IMPORTED_MODULE_2__components_visitors_accommodations_single_accommodation_single_accommodation_component__["a" /* SingleAccommodationComponent */],
        __WEBPACK_IMPORTED_MODULE_3__components_visitors_resident_student_resident_student_component__["a" /* ResidentStudentComponent */],
        __WEBPACK_IMPORTED_MODULE_4__components_visitors_contact_us_contact_us_component__["a" /* ContactUsComponent */],
        __WEBPACK_IMPORTED_MODULE_5__components_visitors_apply_now_apply_now_component__["a" /* ApplyNowComponent */]
    ]
};
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/component-name/component-name.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  component-name works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/component-name/component-name.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component-name/component-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentNameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentNameComponent = (function () {
    function ComponentNameComponent() {
    }
    ComponentNameComponent.prototype.ngOnInit = function () {
    };
    return ComponentNameComponent;
}());
ComponentNameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-component-name',
        template: __webpack_require__("../../../../../src/app/component-name/component-name.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component-name/component-name.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ComponentNameComponent);

//# sourceMappingURL=component-name.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/accommodations/accommodation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-main-header></app-main-header>\r\n<!--End  Header -->\r\n\r\n<section class=\"row accom-first-section\">\r\n  <div class=\"parallax-container\">\r\n    <div materialize=\"parallax\" class=\"parallax\"><img src=\"./assets/img/sliders_imgs/apk2.jpg\"></div>\r\n    <h4 class=\"page-title\">Choose your Accommodation</h4>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"accom-second-section\">\r\n\r\n  <div class=\"row accom-campuses-row\" *ngIf=\"!residences_loading\">\r\n    <div class=\"row search-input\">\r\n      <div class=\"input-field col l4 m6 s12\">\r\n        <i class=\"material-icons prefix\">search</i>\r\n        <input type=\"text\" [(ngModel)]=\"search_res\" name=\"search_res\" id=\"search_res\" class=\"validate\" placeholder=\"\" />\r\n        <label for=\"search_res\">Search Residence</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12 m6 l3\" *ngFor=\"let res of residences_data | filter:search_res:['acc_name', 'campus_name_alias']\">\r\n      <div class=\"card\">\r\n        <div class=\"card-image waves-effect waves-block waves-light activator\">\r\n          <!--<img src=\"./assets/img/sliders_imgs/apk1.jpg\">-->\r\n          <!--<img src=\"http://via.placeholder.com/350x150\">-->\r\n          <img [src]=\"(res.acc_img ? res_mainImgUrl + res.acc_img : 'http://via.placeholder.com/350x120')\">\r\n          <span class=\"card-title\">{{res.campus_name_alias}} <br> {{res.acc_name}}</span>\r\n        </div>\r\n        <div class=\"card-action\">\r\n          <a (click)=\"gotToResidence(res)\" class=\"waves-effect waves-black btn transparent z-depth-0\">View</a>\r\n          <span class=\"card-title activator grey-text text-darken-4\"><i class=\"material-icons right waves-effect waves-black\">more_vert</i></span>\r\n        </div>\r\n        <div class=\"card-reveal\">\r\n          <span class=\"card-title grey-text text-darken-4\">\r\n            {{res.campus_name_alias}} <br> {{res.acc_name}}\r\n            <i class=\"material-icons right waves-effect waves-black\">close</i>\r\n          </span>\r\n          <p class=\"res_descr\">{{res.acc_descr}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"residence_loader_section\" *ngIf=\"residences_loading\">\r\n    <app-preloader-circle [size]=\"'big'\" [width]=\"'100px'\" [border]=\"'4px'\"></app-preloader-circle>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/accommodations/accommodation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".accom-first-section {\n  margin-bottom: 0px !important; }\n  .accom-first-section .parallax-container {\n    height: 350px;\n    width: 100%; }\n    .accom-first-section .parallax-container:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); }\n    .accom-first-section .parallax-container .page-title {\n      color: #ed6400;\n      position: absolute;\n      top: 43%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      font-family: \"LearningCurveDashed\", sans-serif;\n      font-weight: 500;\n      font-size: 8em;\n      width: 100%;\n      text-align: center; }\n      @media only screen and (max-width: 599px) {\n        .accom-first-section .parallax-container .page-title {\n          font-size: 1.5em;\n          font-family: \"Open Sans\", sans-serif; } }\n\n.accom-second-section {\n  margin-bottom: 5%;\n  padding: 30px 20px 20px 20px; }\n  .accom-second-section .accom-campuses-row {\n    margin: 0px; }\n    .accom-second-section .accom-campuses-row .card {\n      margin-bottom: 30px; }\n      .accom-second-section .accom-campuses-row .card .card-image {\n        cursor: default;\n        max-height: 110px;\n        height: 110px;\n        overflow: hidden; }\n        .accom-second-section .accom-campuses-row .card .card-image .card-title {\n          font-size: 18px;\n          padding: 15px;\n          font-family: \"OpenSans\", sans-serif; }\n        .accom-second-section .accom-campuses-row .card .card-image:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)); }\n      .accom-second-section .accom-campuses-row .card .card-action {\n        padding: 8px 24px 8px 0px; }\n        .accom-second-section .accom-campuses-row .card .card-action a {\n          color: #ed6400; }\n        .accom-second-section .accom-campuses-row .card .card-action i {\n          margin-top: 7px; }\n      .accom-second-section .accom-campuses-row .card .card-reveal {\n        padding: 20px; }\n        .accom-second-section .accom-campuses-row .card .card-reveal .card-title {\n          font-size: 17px;\n          font-family: \"OpenSans\", sans-serif;\n          font-weight: 400;\n          margin-top: -10px; }\n          .accom-second-section .accom-campuses-row .card .card-reveal .card-title i {\n            font-size: 30px;\n            position: absolute;\n            right: 10px;\n            top: 5px;\n            color: #ed6400; }\n        .accom-second-section .accom-campuses-row .card .card-reveal .res_descr {\n          margin: 10px 0px 0px 0px;\n          font-family: 'Raleway', sans-serif;\n          font-weight: 600; }\n    .accom-second-section .accom-campuses-row .search-input {\n      margin-bottom: 10px; }\n      .accom-second-section .accom-campuses-row .search-input i {\n        top: 8px;\n        width: 2rem;\n        left: 8px; }\n  .accom-second-section .residence_loader_section {\n    margin-top: 2%;\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/accommodations/accommodation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_url_encode__ = __webpack_require__("../../../../../src/app/shared/services/url_encode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_session_storage__ = __webpack_require__("../../../../../src/app/shared/services/session_storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccommodationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import * as res_data from '../../shared/json_data/residence_list.json';
var AccommodationComponent = (function () {
    // </editor-fold>
    function AccommodationComponent(data_service, url_service, _route, _active_route, session_storage) {
        this.data_service = data_service;
        this.url_service = url_service;
        this._route = _route;
        this._active_route = _active_route;
        this.session_storage = session_storage;
        this.residences_loading = true;
        this.res_mainImgUrl = __WEBPACK_IMPORTED_MODULE_6__shared_constants_constants__["e" /* residencesMainImg_upload_server */];
    }
    AccommodationComponent.prototype.ngOnInit = function () {
        this.fetch_ResidencesDataFrom_LocalStorage();
        this.fetch_ResidencesDataFrom_API();
    };
    // <editor-fold descr="fetch residences data from the API server">
    AccommodationComponent.prototype.fetch_ResidencesDataFrom_API = function () {
        var _this = this;
        this.data_service.dataGet('get-residences')
            .subscribe(function (response) {
            if (response.req === 'found') {
                _this.updateCurrentData(response.data);
            }
            else {
                console.log(response);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('An Error happened, please contact the admin of the website', 4000);
            }
        }, function (err) {
            console.log(err);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('An Error happened, please contact the admin of the website', 4000);
        }, function () { _this.residences_loading = false; });
    };
    // </editor-fold>
    // <editor-fold descr="fetch residences data from the API server">
    AccommodationComponent.prototype.fetch_ResidencesDataFrom_LocalStorage = function () {
        var res_local = this.session_storage.getSessionStorageObject('residences_data');
        if (res_local) {
            this.residences_data = res_local;
            this.residences_loading = false;
        }
    };
    // </editor-fold>
    // <editor-fold descr="Got to residence page">
    AccommodationComponent.prototype.gotToResidence = function (res) {
        var res_slug = this.encodeUrl(res.acc_name);
        this.session_storage.setSessionStorageObject(res_slug, res);
        this._route.navigate(['./', res_slug], { preserveQueryParams: false, relativeTo: this._active_route });
    };
    AccommodationComponent.prototype.encodeUrl = function (url) {
        return this.url_service.urlEncode(url);
    };
    // </editor-fold>
    // <editor-fold descr="Update residence page data">
    AccommodationComponent.prototype.updateCurrentData = function (data) {
        this.residences_data = data;
        this.session_storage.setSessionStorageObject('residences_data', this.residences_data);
    };
    return AccommodationComponent;
}());
AccommodationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-accommodation',
        template: __webpack_require__("../../../../../src/app/components/visitors/accommodations/accommodation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/accommodations/accommodation.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_url_encode__["a" /* UrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_url_encode__["a" /* UrlService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_session_storage__["a" /* SectionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_session_storage__["a" /* SectionStorageService */]) === "function" && _e || Object])
], AccommodationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=accommodation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/accommodations/single-accommodation/single-accommodation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-main-header></app-main-header>\r\n<!--End  Header -->\r\n<section class=\"single-res-page\">\r\n  <div class=\"residence-header grey lighten-1\">\r\n    <a  [routerLink]=\"['../']\" class=\"waves-effect waves-black btn back-btn z-depth-0\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <p class=\"page-title\">{{res_data.campus_name_alias + ' - ' + res_data.acc_name}}</p>\r\n  </div>\r\n\r\n<!--<editor-fold description= \"carousel block\"> -->\r\n  <section class=\"carousel-section\">\r\n\r\n    <div materialize=\"carousel\" class=\"carousel\" [materializeParams]=\"sliderOptions\" *ngIf=\"!is_dataLoading\">\r\n      <div *ngIf=\"res_data.res_imgs.length > 0\">\r\n        <div class=\"carousel-item\" *ngFor=\"let img of res_data.res_imgs\">\r\n          <img src=\"{{res_img_url + img.img_src}}\" style=\"width: 350px;height: 350px;\">\r\n        </div>\r\n        <div *ngIf=\"res_data.res_imgs.length == 1\">\r\n          <div class=\"carousel-item\"><img src=\"http://via.placeholder.com/450x450\"></div>\r\n          <div class=\"carousel-item\"><img src=\"http://via.placeholder.com/450x450\"></div>\r\n        </div>\r\n        <div *ngIf=\"res_data.res_imgs.length == 2\">\r\n          <div class=\"carousel-item\"><img src=\"http://via.placeholder.com/450x450\"></div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"res_data.res_imgs.length == 0\">\r\n        <div class=\"carousel-item\"><img src=\"http://via.placeholder.com/450x450\"></div>\r\n        <div class=\"carousel-item\"><img src=\"http://via.placeholder.com/450x450\"></div>\r\n        <div class=\"carousel-item\"><img src=\"http://via.placeholder.com/450x450\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"carousel-loader-section\">\r\n      <app-preloader-circle\r\n              *ngIf=\"is_dataLoading\"\r\n              [size]=\"'big'\"\r\n              [width]=\"'70px'\"\r\n              [border]=\"'4px'\"\r\n              class=\"carousel-loading\">\r\n      </app-preloader-circle>\r\n    </div>\r\n  </section>\r\n<!--</editor-fold>-->\r\n\r\n<!--<editor-fold description= \"residence capacity detail block\"> -->\r\n  <section class=\"row chart-details \">\r\n      <div class=\"col offset-l4 l2 offset-m4 m2 offset-s2 s4\">\r\n        <div class=\"chart-label-1\">\r\n          <div class=\"capacity-title\">Capacity:</div>\r\n          <div class='capacity z-depth-1 waves-effect waves-black'>{{res_data.acc_capacity}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col l2 m2 s4\">\r\n        <div class=\"chart-label-2\">\r\n          <div class=\"avail-title\">Available:</div>\r\n          <div class='avail z-depth-1 waves-effect waves-black'>{{res_data.rooms_data.length}}</div>\r\n        </div>\r\n      </div>\r\n  </section>\r\n<!--<editor-fold description= \"carousel block\"> -->\r\n\r\n  <section class=\"row single-res-details\">\r\n    <div class=\"col l4 m4 s12 res-desc\">\r\n      <ul class=\"collection with-header\">\r\n        <li class=\"collection-header grey lighten-3 center\">Description</li>\r\n        <li class=\"collection-item\" *ngIf=\"res_data.acc_descr;else empty_desc\">\r\n          {{res_data.acc_descr}}\r\n        </li>\r\n        <ng-template #empty_desc>\r\n          <li class=\"collection-item\">\r\n            <i class=\"material-icons left\">mood_bad</i>\r\n            No Feature found\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col l4 m4 s12 res-feature\">\r\n      <ul class=\"collection with-header\"  *ngIf=\"res_data.res_features.length > 0; else empty_feature\">\r\n        <li class=\"collection-header grey lighten-3 center\">Features</li>\r\n        <li class=\"collection-item\" *ngFor=\"let feature of res_data.res_features\">\r\n          <i class=\"material-icons left\">insert_emoticon</i>\r\n          {{feature.acc_f_name}}\r\n        </li>\r\n      </ul>\r\n      <ng-template #empty_feature>\r\n        <ul class=\"collection with-header\">\r\n          <li class=\"collection-header grey lighten-3 center\">Features</li>\r\n          <li class=\"collection-item\">\r\n            <i class=\"material-icons left\">mood_bad</i>\r\n            No Feature found\r\n          </li>\r\n        </ul>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col l4 m4 s12 room-type\">\r\n      <ul class=\"collection with-header\">\r\n        <li class=\"collection-header grey lighten-3 center\">Room types</li>\r\n        <li class=\"collection-item\" *ngFor=\"let room_type of room_type\">\r\n          <div class=\"row margin-0\">\r\n            <div class=\"col l8 m12 s7\">\r\n              <i class=\"fa fa-bed left\" aria-hidden=\"true\"></i>\r\n              {{room_type.name}} Avail: {{room_type.count}}\r\n            </div>\r\n\r\n            <div class=\"col l4 m12 s5 center\" *ngIf=\"room_type.count > 0\">\r\n              <a routerLink=\"/apply-now/{{res_data.acc_id}}/{{room_type.no}}\" class=\"waves-effect waves-light btn btn-apply\">Apply</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"row single-res-map\">\r\n    <agm-map [latitude]=\"res_data.acc_lat\" [longitude]=\"res_data.acc_long\" [disableDefaultUI]=\"false\" [zoom]=\"zoom\" [scrollwheel]=\"false\">\r\n      <agm-marker [latitude]=\"res_data.acc_lat\" [longitude]=\"res_data.acc_long\">\r\n        <agm-info-window [isOpen]=\"true\">\r\n          <div class=\"row margin-bottom-0 info-window-1\">\r\n            <div class=\"col l4 m4 s4 agm-res-col-1\">\r\n              <i class=\"fa fa-bed agm-bed-icon left\"></i>\r\n            </div>\r\n            <div class=\"col l8 m8 s8 agm-res-col-2\">\r\n              {{res_data.acc_name}}<br>\r\n            </div>\r\n          </div>\r\n        </agm-info-window>\r\n      </agm-marker>\r\n    </agm-map>\r\n  </section>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/accommodations/single-accommodation/single-accommodation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/shared/styles/mixin.css"), "");

// module
exports.push([module.i, ".single-res-page {\n  margin-bottom: 70px; }\n  .single-res-page .residence-header {\n    height: 55px;\n    padding: 0px 20px 0px 0px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-family: 'Raleway', sans-serif;\n    font-weight: 600; }\n    .single-res-page .residence-header .back-btn {\n      background: transparent;\n      height: 100%;\n      width: 80px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0px;\n      border-radius: 0px; }\n      .single-res-page .residence-header .back-btn i {\n        font-size: 50px;\n        color: #ed6400 !important; }\n      .single-res-page .residence-header .back-btn:hover {\n        background-color: #c7c7c7; }\n    .single-res-page .residence-header .page-title {\n      margin: auto 0px;\n      padding-left: 10px;\n      font-size: 25px; }\n      @media only screen and (max-width: 599px) {\n        .single-res-page .residence-header .page-title {\n          font-size: 14px; } }\n  .single-res-page .carousel-section {\n    margin-top: -10px;\n    padding: 0px 18%;\n    min-height: 415px;\n    height: 415px; }\n    @media only screen and (max-width: 991px) {\n      .single-res-page .carousel-section {\n        padding: 0px 10%; } }\n    @media only screen and (max-width: 599px) {\n      .single-res-page .carousel-section {\n        padding: 0px 0px; } }\n    .single-res-page .carousel-section .carousel {\n      height: 415px; }\n      .single-res-page .carousel-section .carousel .carousel-item {\n        min-width: 350px;\n        top: -80px;\n        opacity: 1 !important; }\n    .single-res-page .carousel-section .carousel-loader-section {\n      text-align: center; }\n      .single-res-page .carousel-section .carousel-loader-section .carousel-loading {\n        position: absolute;\n        top: 20%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n        @media only screen and (max-width: 599px) {\n          .single-res-page .carousel-section .carousel-loader-section .carousel-loading {\n            top: 15%; } }\n  .single-res-page .chart-details .chart-label-1,\n  .single-res-page .chart-details .chart-label-2 {\n    font-size: 20px;\n    font-family: \"OpenSans\", sans-serif;\n    margin: 0px 0px 7px 0px; }\n    @media only screen and (max-width: 599px) {\n      .single-res-page .chart-details .chart-label-1,\n      .single-res-page .chart-details .chart-label-2 {\n        font-size: 14px; } }\n    .single-res-page .chart-details .chart-label-1 .capacity-title,\n    .single-res-page .chart-details .chart-label-2 .capacity-title {\n      text-align: center; }\n    .single-res-page .chart-details .chart-label-1 .capacity,\n    .single-res-page .chart-details .chart-label-2 .capacity {\n      background: #ff9d55;\n      padding: 1px 5px 0px 5px;\n      width: 100%;\n      text-align: center; }\n    .single-res-page .chart-details .chart-label-1 .avail-title,\n    .single-res-page .chart-details .chart-label-2 .avail-title {\n      text-align: center; }\n    .single-res-page .chart-details .chart-label-1 .avail,\n    .single-res-page .chart-details .chart-label-2 .avail {\n      background: #6cc765;\n      padding: 1px 5px 0px 5px;\n      cursor: pointer;\n      width: 100%;\n      text-align: center; }\n  .single-res-page .single-res-details .collection .collection-header {\n    font-family: Raleway, sans-serif;\n    font-weight: 800;\n    font-size: 20px; }\n    @media only screen and (max-width: 991px) {\n      .single-res-page .single-res-details .collection .collection-header {\n        font-size: 18px; } }\n  .single-res-page .single-res-details .collection .collection-item {\n    font-family: 'Raleway', sans-serif;\n    font-size: 16px;\n    padding-left: 15px; }\n    @media only screen and (max-width: 991px) {\n      .single-res-page .single-res-details .collection .collection-item {\n        font-size: 15px; } }\n  .single-res-page .single-res-details .room-type .btn-apply {\n    background-color: #ed6400 !important;\n    font-family: OpenSans, sans-serif;\n    font-size: 13px;\n    height: 30px;\n    line-height: 28px; }\n    @media only screen and (max-width: 991px) {\n      .single-res-page .single-res-details .room-type .btn-apply {\n        width: 100%;\n        margin-top: 5px; } }\n    @media only screen and (max-width: 599px) {\n      .single-res-page .single-res-details .room-type .btn-apply {\n        margin-top: 0px; } }\n  .single-res-page .single-res-map {\n    height: 600px;\n    width: 100%; }\n    .single-res-page .single-res-map agm-map {\n      height: 600px;\n      width: 100%; }\n      .single-res-page .single-res-map agm-map .info-window-1 .agm-res-col-1 .agm-bed-icon {\n        font-size: 30px; }\n      .single-res-page .single-res-map agm-map .info-window-1 .agm-res-col-2 {\n        font-family: 'OpenSans', sans-serif;\n        font-weight: 800;\n        font-size: 13px;\n        padding: 5px 0px 0px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/accommodations/single-accommodation/single-accommodation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_session_storage__ = __webpack_require__("../../../../../src/app/shared/services/session_storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_res_service__ = __webpack_require__("../../../../../src/app/shared/services/res.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleAccommodationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SingleAccommodationComponent = (function () {
    function SingleAccommodationComponent(_activated_route, _route, session_storage, group_room_type, data_service) {
        this._activated_route = _activated_route;
        this._route = _route;
        this.session_storage = session_storage;
        this.group_room_type = group_room_type;
        this.data_service = data_service;
        this.sliderOptions = [{ interval: 10000 }];
        this.zoom = 16;
        this.res_img_url = __WEBPACK_IMPORTED_MODULE_6__shared_constants_constants__["d" /* residencesOtherImg_upload_server */];
        this.is_dataLoading = true;
        this.res_slug = this._activated_route.snapshot.params['res_name'];
        var res_data = this.session_storage.getSessionStorageObject(this.res_slug);
        if (!res_data) {
            this._route.navigate(['../'], { preserveQueryParams: false, relativeTo: this._activated_route });
        }
        else {
            this.res_data = res_data;
            this.acc_id = this.res_data.acc_id;
            this.room_type = this.group_room(res_data.rooms_data);
            this.fetch_ResidenceRoomsData();
        }
    }
    SingleAccommodationComponent.prototype.ngOnInit = function () {
        // window.scrollTo(0, 0);
    };
    // <editor-fold description="Fetch page data from server">
    SingleAccommodationComponent.prototype.fetch_ResidenceRoomsData = function () {
        var _this = this;
        this.data_service.dataGet("admin/admin-get-residence-rooms/" + this.acc_id)
            .subscribe(function (response) {
            if (response.req === 'found') {
                _this.res_data = response.data;
            }
            else {
                console.log(response);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('An error happened while fetching new data, please contact the dev admin', 4000);
            }
        }, function (err) {
            console.log(err);
            _this.is_dataLoading = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["b" /* toast */])('An error happened while fetching new data, please contact the dev admin', 4000);
        }, function () { _this.is_dataLoading = false; });
    };
    // </editor-fold>
    SingleAccommodationComponent.prototype.group_room = function (res_rooms) {
        return this.group_room_type.groupResRoomType(res_rooms);
    };
    return SingleAccommodationComponent;
}());
SingleAccommodationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-accommodation',
        template: __webpack_require__("../../../../../src/app/components/visitors/accommodations/single-accommodation/single-accommodation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/accommodations/single-accommodation/single-accommodation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_session_storage__["a" /* SectionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_session_storage__["a" /* SectionStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_res_service__["a" /* GroupResidence */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_res_service__["a" /* GroupResidence */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */]) === "function" && _e || Object])
], SingleAccommodationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=single-accommodation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/apply-now/apply-now.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-main-header></app-main-header>\r\n<!--End  Header -->\r\n\r\n<section class=\"applyNow-form-section\">\r\n  <div class=\"row\" *ngIf=\"!residences_loading\">\r\n    <div class=\"col offset-l1 offset-m1 l10 m10 s12\">\r\n      <div class=\"card grey lighten-5\">\r\n          <div class=\"card-content white-text grey lighten-3\">\r\n            <span class=\"card-title\">Apply for residence</span>\r\n          </div>\r\n           <div class=\"card-inputs\">\r\n             <form name=\"student_application\" [formGroup]=\"application_form\" (ngSubmit)=\"onSubmitApplication(application_form.value, application_form)\">\r\n              <div class=\"row margin-0\">\r\n\r\n                <div class=\"input-field col l4 m6 s12\">\r\n                  <input type=\"text\" name=\"fname\" id=\"fname\"  formControlName=\"fname\" class=\"validate\" placeholder=\"\" autocomplete=\"false\" required minlength=\"3\" maxlength=\"100\">\r\n                  <label for=\"fname\" class=\"active\">First Name</label>\r\n                </div>\r\n\r\n                <div class=\"input-field col  l4 m6 s12\">\r\n                  <input type=\"text\" name=\"lname\" id=\"lname\" formControlName=\"lname\" class=\"validate\" placeholder=\"\" autocomplete=\"false\" required minlength=\"3\" maxlength=\"100\">\r\n                  <label for=\"lname\" class=\"active\">Last Name</label>\r\n                </div>\r\n\r\n                <div class=\"input-field col l4 m6 s12\">\r\n                  <input type=\"text\" name=\"id_passport\" id=\"id_passport\" formControlName=\"id_passport\" class=\"validate\" placeholder=\"\" autocomplete=\"false\" required minlength=\"6\" maxlength=\"20\">\r\n                  <label for=\"id_passport\" class=\"active\">ID / Passport No</label>\r\n                </div>\r\n\r\n                <div class=\"input-field col l4 m6 s12\">\r\n                  <input type=\"number\" name=\"st_no\" id=\"st_no\" formControlName=\"st_no\" class=\"validate\" placeholder=\"\" autocomplete=\"false\" required min=\"6\" max=\"12\">\r\n                  <label for=\"st_no\" class=\"active\">Student Number</label>\r\n                </div>\r\n\r\n                <div class=\"input-field col l4 m6 s12\">\r\n                  <input type=\"tel\"  name=\"st_cel\" id=\"st_cel\" formControlName=\"st_cel\" class=\"validate\" placeholder=\"\" autocomplete=\"false\" required minlength=\"10\" maxlength=\"15\">\r\n                  <label for=\"st_cel\" class=\"active\">Cell number</label>\r\n                </div>\r\n\r\n                <div class=\"input-field col l4 m6 s12\">\r\n                  <input type=\"email\"  name=\"st_email\" id=\"st_email\" formControlName=\"st_email\" class=\"validate\" placeholder=\"\" autocomplete=\"false\" required>\r\n                  <label for=\"st_email\" class=\"active\">Email Address</label>\r\n                </div>\r\n\r\n                <div class=\"col l3 m6 s12 radio-btn-group\">\r\n                  <span class=\"radio-1\">\r\n                     <input materialize class=\"with-gap\" name=\"st_gender\" formControlName=\"st_gender\" type=\"radio\" id=\"st_female\" [value]=\"'F'\" checked (change)=\"genderChanged('F')\"/>\r\n                     <label for=\"st_female\">Female</label>\r\n                  </span>\r\n                  <span class=\"radio-2\">\r\n                     <input materialize class=\"with-gap\" name=\"st_gender\" formControlName=\"st_gender\" type=\"radio\" id=\"st_male\" [value]=\"'M'\" (change)=\"genderChanged('M')\"/>\r\n                     <label for=\"st_male\">Male</label>\r\n                  </span>\r\n                </div>\r\n\r\n                <div class=\"input-field col l3 m6 s12\">\r\n                  <select name=\"st_year\" formControlName=\"st_year\" formControlName=\"st_year\" (ngModelChange)=\"stYearHasChanged($event)\" #st_year class=\"default-select-dropdown\">\r\n                    <option value=\"\" disabled selected>Which year are you doing ?</option>\r\n                      <option value=\"1\">1st / 2nd Year</option>\r\n                      <option value=\"2\">3rd / 4th Year</option>\r\n                      <option value=\"3\">Honors</option>\r\n                      <option value=\"4\">Master</option>\r\n                      <option value=\"5\">Doctorate</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"input-field col l3 m6 s12\">\r\n                  <select name=\"room_type\" id=\"room_type\"  formControlName=\"room_type\" #room_type class=\"default-select-dropdown\">\r\n                    <option value=\"\" disabled selected>Choose type of room</option>\r\n                    <optgroup #select_disable_1  label=\"1st and 2nd Year\">\r\n                      <option value=\"2\">Double Room</option>\r\n                    </optgroup>\r\n                    <optgroup #select_disable_2 label=\"3rd year to up\">\r\n                      <option  class=\"disabled\" value=\"1\">Single Room</option>\r\n                    </optgroup>\r\n                    <optgroup label=\"Master to up\">\r\n                      <option #select_disable_3 value=\"3\">Flat</option>\r\n                    </optgroup>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"input-field col l3 m6 s12\">\r\n                  <select name=\"res_name\" formControlName=\"res_name\" #res_id class=\"default-select-dropdown\">\r\n                      <option value=\"\" disabled selected>Choose your residence</option>\r\n                        <optgroup label=\"APK Campus\">\r\n                          <option *ngFor=\"let res of grouped_res['APK']\" value=\"{{res.acc_id}}\">{{res.acc_name}}</option>\r\n                        </optgroup>\r\n                        <optgroup label=\"APB Campus\">\r\n                          <option *ngFor=\"let res of grouped_res['APB']\" value=\"{{res.acc_id}}\">{{res.acc_name}}</option>\r\n                        </optgroup>\r\n                        <optgroup label=\"DFC Campus\">\r\n                          <option *ngFor=\"let res of grouped_res['DFC']\" value=\"{{res.acc_id}}\">{{res.acc_name}}</option>\r\n                        </optgroup>\r\n                        <optgroup label=\"Soweto Campus\">\r\n                          <option *ngFor=\"let res of grouped_res['SWC']\" value=\"{{res.acc_id}}\">{{res.acc_name}}</option>\r\n                        </optgroup>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"file-field input-field col l4 m6 s12\">\r\n                  <div class=\"btn\">\r\n                    <i class=\"material-icons\">attach_file</i>\r\n                    <input type=\"file\" name=\"st_proof\" #st_proof_of_Res accept=\"image/jpeg, image/png, application/pdf\">\r\n                  </div>\r\n                  <div class=\"file-path-wrapper\">\r\n                    <input class=\"file-path validate\" type=\"text\" placeholder=\"UJ Proof of Registration\" #st_proof_of_Res_copy>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"input-field fullAddrInput col l8 m12 s12\">\r\n                  <input type=\"text\" name=\"st_addr\" id=\"st_addr\"\r\n                         formControlName=\"st_addr\" class=\"validate\" placeholder=\"\" required id=\"googleAutoComplete\"\r\n                         googleAutoComplete (fullAddressEvent)=\"callFullAddress($event)\" >\r\n                  <label for=\"st_addr\" class=\"active\">Your Full Address</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row center margin-0\">\r\n                <div class=\"row btn-signIn-section\">\r\n                  <button type=\"submit\" class=\"waves-effect waves-light btn btn-signIn\">Send Application</button>\r\n                </div>\r\n            </div>\r\n           </form>\r\n          </div>\r\n          <app-preloader-intermediate *ngIf=\"is_submitting\"></app-preloader-intermediate>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"residence_loader_section\" *ngIf=\"residences_loading\">\r\n    <app-preloader-circle [size]=\"'big'\" [width]=\"'100px'\" [border]=\"'4px'\"></app-preloader-circle>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<!-- This is the delete ress modal -->\r\n<div id=\"modal1\" class=\"modal application-res-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"application_modalActions\">\r\n  <div class=\"modal-content\">\r\n    <h4 class=\"modal-title\">Residence Application</h4>\r\n    <p class=\"message\">\r\n        Your Application has been sent with success. Once it has been processed,\r\n        an email will be sent to you about your application status.<br/><br/>\r\n        Thank you for choosing UJ as your home.\r\n    </p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a (click)=\"this.application_modalActions.emit({action: 'modal' , params:['close']})\" class=\"modal-action modal-close waves-effect waves-green btn-flat dismiss-btn\">Close</a>\r\n  </div>\r\n</div>\r\n<!-- End delete room modal -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/apply-now/apply-now.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".applyNow-form-section .card {\n  margin: 30px 0px 100px 0px; }\n  .applyNow-form-section .card .card-content {\n    padding: 24px 0px; }\n    .applyNow-form-section .card .card-content .card-title {\n      color: rgba(42, 34, 37, 0.54);\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 0px; }\n  .applyNow-form-section .card .card-inputs {\n    padding: 45px 20px 0px 20px; }\n    .applyNow-form-section .card .card-inputs .input-field {\n      margin-bottom: 30px; }\n    .applyNow-form-section .card .card-inputs .fullAddrInput {\n      margin-bottom: 0px; }\n    .applyNow-form-section .card .card-inputs .file-field .btn {\n      width: 7px;\n      height: 30px;\n      padding: 21px;\n      background-color: #ed6400 !important; }\n      .applyNow-form-section .card .card-inputs .file-field .btn i {\n        font-size: 1.9rem;\n        margin: -21px -14px;\n        position: absolute; }\n    .applyNow-form-section .card .card-inputs .file-field .file-path {\n      margin: 0px;\n      font-size: 14px; }\n    .applyNow-form-section .card .card-inputs .select-dropdown {\n      max-height: 300px; }\n    .applyNow-form-section .card .card-inputs .btn-signIn-section {\n      margin-bottom: 30px; }\n      @media only screen and (max-width: 991px) {\n        .applyNow-form-section .card .card-inputs .btn-signIn-section {\n          margin: 30px 0px 50px 0px; } }\n      .applyNow-form-section .card .card-inputs .btn-signIn-section .btn-signIn {\n        background-color: #ed6400 !important; }\n    .applyNow-form-section .card .card-inputs .default-select-dropdown {\n      display: block;\n      position: relative;\n      opacity: 1;\n      width: 100%;\n      height: 45px;\n      pointer-events: all; }\n    .applyNow-form-section .card .card-inputs .radio-btn-group {\n      margin: 25px 0px; }\n      .applyNow-form-section .card .card-inputs .radio-btn-group .radio-1 {\n        padding-right: 20px; }\n      .applyNow-form-section .card .card-inputs .radio-btn-group .radio-2 {\n        padding-left: 20px; }\n\n.applyNow-form-section .residence_loader_section {\n  margin-top: 15%;\n  text-align: center; }\n\n.application-res-modal {\n  top: 20% !important; }\n  .application-res-modal .modal-content {\n    padding-bottom: 0px; }\n    .application-res-modal .modal-content .modal-title {\n      font-family: Raleway, sans-serif;\n      font-weight: 600;\n      margin-bottom: 40px; }\n    .application-res-modal .modal-content .message {\n      font-family: \"OpenSans\", sans-serif;\n      font-weight: 200;\n      font-size: 20px; }\n  .application-res-modal .modal-footer {\n    padding: 4px 20px; }\n    .application-res-modal .modal-footer .save-btn {\n      background-color: #ed6400 !important;\n      color: #fff; }\n      .application-res-modal .modal-footer .save-btn:hover {\n        background-color: #FF4D1C !important; }\n    .application-res-modal .modal-footer .dismiss-btn:hover {\n      background-color: rgba(166, 37, 32, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/apply-now/apply-now.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_base64_service__ = __webpack_require__("../../../../../src/app/shared/services/base64.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_session_storage__ = __webpack_require__("../../../../../src/app/shared/services/session_storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_res_service__ = __webpack_require__("../../../../../src/app/shared/services/res.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyNowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ApplyNowComponent = (function () {
    // </editor-fold>
    function ApplyNowComponent(_activated_route, data_service, fb, base64_service, session_storage, grouped_res_service) {
        this._activated_route = _activated_route;
        this.data_service = data_service;
        this.fb = fb;
        this.base64_service = base64_service;
        this.session_storage = session_storage;
        this.grouped_res_service = grouped_res_service;
        this.application_modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.residences_loading = true;
        this.is_submitting = false;
    }
    ApplyNowComponent.prototype.ngOnInit = function () {
        this.application_form = this.fb.group({
            'fname': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'lname': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'id_passport': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'st_no': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'st_cel': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'st_email': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email],
            'st_year': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'st_gender': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'res_name': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'room_type': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            'st_addr': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
        this.fetch_ResidencesDataFrom_LocalStorage();
        if (!this._activated_route.snapshot.params['room_type']) {
            this.fetch_ResidencesDataFrom_API();
        }
    };
    ApplyNowComponent.prototype.ngAfterViewInit = function () {
        this.checkResidenceParams();
    };
    // <editor-fold description="fetch residences data from the API server">
    ApplyNowComponent.prototype.fetch_ResidencesDataFrom_LocalStorage = function () {
        var res_local = this.session_storage.getSessionStorageObject('residences_data');
        if (res_local) {
            this.updateCurrentData(res_local);
        }
    };
    // </editor-fold>
    // <editor-fold description="fetch residences data from the API server">
    ApplyNowComponent.prototype.fetch_ResidencesDataFrom_API = function () {
        var _this = this;
        this.data_service.dataGet('get-residences')
            .subscribe(function (response) {
            if (response.req === 'found') {
                _this.updateCurrentData(response.data);
            }
            else {
                console.log(response);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the admin of the website', 4000);
            }
        }, function (err) {
            console.log(err);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the admin of the website', 4000);
        }, function () { _this.residences_loading = false; });
    };
    // </editor-fold>
    // <editor-fold description="On Student year has changed">
    ApplyNowComponent.prototype.stYearHasChanged = function (year_value) {
        year_value = parseInt(year_value, 10);
        if (year_value === 1) {
            this.select_disable_2.nativeElement.disabled = true;
            this.select_disable_3.nativeElement.disabled = true;
        }
        else if (year_value === 2) {
            this.select_disable_2.nativeElement.disabled = false;
            this.select_disable_3.nativeElement.disabled = true;
        }
        else if (year_value === 3) {
            this.select_disable_2.nativeElement.disabled = false;
            this.select_disable_3.nativeElement.disabled = true;
        }
        else if (year_value === 4) {
            this.select_disable_2.nativeElement.disabled = false;
            this.select_disable_3.nativeElement.disabled = false;
        }
        else if (year_value === 5) {
            this.select_disable_2.nativeElement.disabled = false;
            this.select_disable_3.nativeElement.disabled = false;
        }
    };
    // </editor-fold>
    // <editor-fold description="On Student gender changed">
    ApplyNowComponent.prototype.genderChanged = function (gender) {
        if (gender) {
            this.updateCurrentData(this.residences_data);
            // if (!this._activated_route.snapshot.params['room_type']) {
            this.grouped_res = this.grouped_res_service.updateGenderResidence(this.grouped_res, gender);
            // }
        }
    };
    // </editor-fold>
    // <editor-fold description="On Event Full Address AutoComplete">
    ApplyNowComponent.prototype.callFullAddress = function (event) {
        this.full_addressObj = event;
        this.application_form.controls['st_addr'].setValue(this.full_addressObj.street_number + ' '
            + this.full_addressObj.route + ' '
            + this.full_addressObj.sublocality_level_1 + ' '
            + this.full_addressObj.locality + ' '
            + this.full_addressObj.administrative_area_level_1 + ' '
            + this.full_addressObj.postal_code + ' '
            + this.full_addressObj.country);
    };
    // </editor-fold>
    // <editor-fold description="On Submit Application">
    ApplyNowComponent.prototype.onSubmitApplication = function (values, _form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var new_st_proof, st_proof, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.session_storage.setSessionStorageObject('my_data', values);
                        new_st_proof = this.st_proof_of_Res.nativeElement;
                        if (!this.validate_input(_form, new_st_proof.files[0])) return [3 /*break*/, 4];
                        this.is_submitting = true;
                        if (!(new_st_proof.files[0])) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.base64_service.ConvertToBase64(new_st_proof.files[0])];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        st_proof = _a;
                        values['proof_reg'] = st_proof;
                        values['st_addr_2'] = this.full_addressObj;
                        this.data_service.dataPost('student-application', values)
                            .subscribe(function (response) {
                            if (response.req === 'successful') {
                                // <editor-fold description="Upload proof of registration file to apache server">
                                var data_sent = {
                                    'request': 'upload', 'sub-request': 'proof-registration',
                                    'base64-file': values['proof_reg'], 'st_no': values['st_no']
                                };
                                _this.data_service.dataPHPFilePost(data_sent)
                                    .subscribe(function (response_2) {
                                    if (response_2.req === 'successful') {
                                        // console.log(response_2);
                                        new_st_proof.files = null;
                                        _this.st_proof_of_Res_copy.nativeElement.value = null;
                                        _this.application_modalActions.emit({ action: 'modal', params: ['open'] });
                                        _this.application_form.reset();
                                    }
                                    else {
                                        console.log(response_2);
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                                        _this.is_submitting = false;
                                    }
                                }, function (err) {
                                    console.log(err);
                                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                                    _this.is_submitting = false;
                                }, function () { _this.is_submitting = false; });
                                // </editor-fold>
                            }
                            else {
                                console.log(response);
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                            }
                        }, function (err) {
                            console.log(err);
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                            _this.is_submitting = false;
                        }, function () { });
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // </editor-fold>
    // <editor-fold description="Validate Input">
    ApplyNowComponent.prototype.validate_input = function (_form, proof_reg) {
        var is_valid = true;
        var controls = _form.controls;
        if (controls.fname.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('First name cannot be empty or less than 3 character', 3000);
            is_valid = false;
        }
        else if (controls.lname.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Last Name cannot be empty or less than 3 character', 3000);
            is_valid = false;
        }
        else if (controls.id_passport.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('ID/Passport should be between 9 and 20 characters', 3000);
            is_valid = false;
        }
        else if (controls.st_no.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Your student number should be between 6 to 10 numeric characters', 3000);
            is_valid = false;
        }
        else if (controls.st_cel.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Cell number should be between 10 to 15 numeric characters', 3000);
            is_valid = false;
        }
        else if (controls.st_email.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Email address is incorrect', 3000);
            is_valid = false;
        }
        else if (controls.st_gender.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Your gender cannot be empty', 3000);
            is_valid = false;
        }
        else if (controls.st_year.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Your University year cannot be empty', 3000);
            is_valid = false;
        }
        else if (controls.room_type.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Room type cannot be empty, or make sure you have selected the correct year', 3000);
            is_valid = false;
        }
        else if (controls.res_name.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Residence name cannot be empty', 3000);
            is_valid = false;
        }
        else if (controls.st_addr.invalid) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Your address cannot be empty', 3000);
            is_valid = false;
        }
        else if (!proof_reg) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Please attach your proof of registration', 3000);
            is_valid = false;
        }
        return is_valid;
    };
    // </editor-fold>
    // <editor-fold description="Grouped Residence to campus">
    ApplyNowComponent.prototype.group_residence = function (res) {
        this.grouped_res = this.grouped_res_service.groupResidence(res);
    };
    // </editor-fold>
    // <editor-fold description="Update residence page data">
    ApplyNowComponent.prototype.updateCurrentData = function (data) {
        this.residences_data = data;
        this.session_storage.setSessionStorageObject('residences_data', this.residences_data);
        this.residences_loading = false;
        this.group_residence(this.residences_data);
    };
    // </editor-fold>
    // <editor-fold description="Check application page parameters">
    ApplyNowComponent.prototype.checkResidenceParams = function () {
        var res_no = this._activated_route.snapshot.params['res_no'];
        var room_type = this._activated_route.snapshot.params['room_type'];
        if (res_no && room_type && this.res_id) {
            this.res_id.nativeElement.value = res_no;
            this.room_type.nativeElement.value = room_type;
        }
    };
    return ApplyNowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('st_year'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "st_year", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('room_type'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "room_type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('res_id'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "res_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('st_proof_of_Res'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "st_proof_of_Res", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('st_proof_of_Res_copy'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "st_proof_of_Res_copy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select_disable_1'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "select_disable_1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select_disable_2'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "select_disable_2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select_disable_3'),
    __metadata("design:type", Object)
], ApplyNowComponent.prototype, "select_disable_3", void 0);
ApplyNowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-apply-now',
        template: __webpack_require__("../../../../../src/app/components/visitors/apply-now/apply-now.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/apply-now/apply-now.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_data_services__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_base64_service__["a" /* Base64Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_base64_service__["a" /* Base64Service */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_session_storage__["a" /* SectionStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_session_storage__["a" /* SectionStorageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_res_service__["a" /* GroupResidence */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_res_service__["a" /* GroupResidence */]) === "function" && _f || Object])
], ApplyNowComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=apply-now.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-main-header></app-main-header>\r\n<!--End  Header -->\r\n\r\n<section class=\"row contact-first-section\">\r\n  <div class=\"parallax-container\">\r\n    <div materialize=\"parallax\" class=\"parallax\"><img src=\"./assets/img/sliders_imgs/apk2.jpg\"></div>\r\n    <h4 class=\"page-title\">Contact us</h4>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section class=\"contact-form-section grey lighten-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col offset-l3 offset-m2 l6 m8 s12\">\r\n      <div class=\"card grey lighten-5\">\r\n        <div class=\"card-content white-text grey lighten-3\">\r\n          <span class=\"card-title\">Send us your enquiry</span>\r\n        </div>\r\n          <div class=\"card-inputs\">\r\n              <form name=\"contactus-frm\"  [formGroup]=\"contact_form\" (ngSubmit)=\"onSubmitContactFrm(contact_form.value, contact_form)\">\r\n                  <div class=\"row\">\r\n                    <div class=\"input-field col l5 m12 s12\">\r\n                        <div class=\"row\">\r\n                          <div class=\"input-field col l12 m12 s12\">\r\n                            <input type=\"email\"  name=\"email_addr\" id=\"email_addr\" formControlName=\"email_addr\" class=\"validate\" placeholder=\"\"  autocomplete=\"false\" required>\r\n                            <label for=\"email_addr\" class=\"active\">Email Address</label>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"input-field col  l12 m12 s12\">\r\n                            <input type=\"text\" name=\"full_name\" id=\"full_name\" formControlName=\"full_name\"  class=\"validate\" placeholder=\"\"  autocomplete=\"false\" required>\r\n                            <label for=\"full_name\" class=\"active\">Full Name</label>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-field col l7 m12 s12\">\r\n                      <textarea name=\"msg\" id=\"msg\" formControlName=\"msg\" class=\"materialize-textarea msg-textArea\"\r\n                                placeholder=\"Enter your enquiry here\" required></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row center margin-0\">\r\n                    <div class=\"row btn-signIn-section\">\r\n                      <button type=\"submit\" class=\"waves-effect waves-light btn btn-signIn\">Send</button>\r\n                    </div>\r\n                  </div>\r\n              </form>\r\n          </div>\r\n          <app-preloader-intermediate *ngIf=\"is_submitting\"></app-preloader-intermediate>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<!-- This is the delete ress modal -->\r\n<div id=\"modal1\" class=\"modal contactUs-modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"contact_modalActions\">\r\n  <div class=\"modal-content\">\r\n    <h4 class=\"modal-title\">Contact Us</h4>\r\n    <p class=\"message\">\r\n      Thank you for contacting UJ Residence Department.\r\n      Once your enquired is viewed and processed, an email will send to you on {{contact_email}}.\r\n    </p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a (click)=\"this.contact_modalActions.emit({action: 'modal' , params:['close']})\" class=\"modal-action modal-close waves-effect waves-green btn-flat dismiss-btn\">Close</a>\r\n  </div>\r\n</div>\r\n<!-- End delete room modal -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/contact-us/contact-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-first-section {\n  margin-bottom: 0px !important; }\n  .contact-first-section .parallax-container {\n    height: 350px;\n    width: 100%; }\n    .contact-first-section .parallax-container:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); }\n    .contact-first-section .parallax-container .page-title {\n      color: #ed6400;\n      position: absolute;\n      top: 43%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      font-family: \"LearningCurveDashed\", sans-serif;\n      font-weight: 500;\n      font-size: 8em;\n      width: 100%;\n      text-align: center; }\n      @media only screen and (max-width: 599px) {\n        .contact-first-section .parallax-container .page-title {\n          font-size: 1.5em;\n          font-family: \"Open Sans\", sans-serif; } }\n\n.contact-form-section .card {\n  margin-top: -6em;\n  margin-bottom: 80px; }\n  .contact-form-section .card .card-content {\n    padding: 24px 0px; }\n    .contact-form-section .card .card-content .card-title {\n      color: rgba(42, 34, 37, 0.54);\n      text-transform: uppercase;\n      text-align: center; }\n  .contact-form-section .card .card-inputs {\n    padding: 45px 20px 0px 20px; }\n    .contact-form-section .card .card-inputs .btn-signIn-section .btn-signIn {\n      width: 200px;\n      background-color: #ed6400 !important; }\n    .contact-form-section .card .card-inputs .btn-forgotPassword-section .btn-forgotPassword {\n      color: #ed6400 !important;\n      text-decoration: underline; }\n    .contact-form-section .card .card-inputs .msg-textArea {\n      resize: none;\n      height: 135px;\n      padding-top: 0px;\n      margin-left: 12px; }\n\n.contactUs-modal {\n  top: 20% !important; }\n  .contactUs-modal .modal-content {\n    padding-bottom: 0px; }\n    .contactUs-modal .modal-content .modal-title {\n      font-family: Raleway, sans-serif;\n      font-weight: 600;\n      margin-bottom: 40px; }\n    .contactUs-modal .modal-content .message {\n      font-family: \"OpenSans\", sans-serif;\n      font-weight: 200;\n      font-size: 20px; }\n  .contactUs-modal .modal-footer {\n    padding: 4px 20px; }\n    .contactUs-modal .modal-footer .save-btn {\n      background-color: #ed6400 !important;\n      color: #fff; }\n      .contactUs-modal .modal-footer .save-btn:hover {\n        background-color: #FF4D1C !important; }\n    .contactUs-modal .modal-footer .dismiss-btn:hover {\n      background-color: rgba(166, 37, 32, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUsComponent = (function () {
    //  </editor-fold>
    function ContactUsComponent(data_service, fb) {
        this.data_service = data_service;
        this.fb = fb;
        this.is_submitting = false;
        this.contact_modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contact_form = this.fb.group({
            'email_addr': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email],
            'full_name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'msg': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    };
    // <editor-fold description="On submit contact us form">
    ContactUsComponent.prototype.onSubmitContactFrm = function (values, _form) {
        var _this = this;
        if (_form.valid) {
            this.is_submitting = true;
            this.data_service.dataPost('contact-us', values)
                .subscribe(function (response) {
                if (response.req === 'successful') {
                    _this.contact_email = values.email_addr;
                    _this.contact_modalActions.emit({ action: 'modal', params: ['open'] });
                    _this.contact_form.reset();
                }
                else {
                    console.log(response);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                }
            }, function (err) {
                console.log(err);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                _this.is_submitting = false;
            }, function () { _this.is_submitting = false; });
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Empty value are not allowed', 4000);
        }
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__("../../../../../src/app/components/visitors/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/contact-us/contact-us.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], ContactUsComponent);

var _a, _b;
//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-main-header></app-main-header>\r\n<!--End  Header -->\r\n\r\n<section class=\"row home-first-section\">\r\n      <section class=\"slider home-slider\" materialize=\"slider\" [materializeActions]=\"sliderNavActions\" [materializeParams]=\"sliderOptions\">\r\n        <ul class=\"slides\">\r\n          <li  *ngFor=\"let img of sliderImgArr\" class=\"slide\">\r\n            <img [src]=\"img.img\"> <!-- random image -->\r\n            <div class=\"caption left-align\">\r\n              <!--<h3>This is our big Tagline!</h3>-->\r\n              <h5 class=\"light white-text text-lighten-1 slider-descr\">{{ img.descr }}</h5>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <section class=\"slider-nav-btn\">\r\n            <a (click)=\"slide('prev')\" class=\"btn-floating btn-large waves-effect waves-light slider-btn-left z-depth-0\"><i class=\"material-icons\">arrow_back</i></a>\r\n            <a (click)=\"slide('next')\" class=\"btn-floating btn-large waves-effect waves-light slider-btn-right z-depth-0\"><i class=\"material-icons\">arrow_forward</i></a>\r\n        </section>\r\n      </section>\r\n</section>\r\n\r\n<section class=\"row home-second-section\">\r\n    <div class=\"row s12 intro-section\">\r\n        <div class=\"col offset-l1 l10 m12\">\r\n            <h3 class=\"center intro-title\">Student Accommodation and Residence Life​</h3>\r\n            <p class=\"intro-subtitle\">\r\n              Student Accommodation and Residence Life division is mainly responsible for\r\n              the accommodation of approximately 19000 students in both university owned and managed\r\n              residences as well as off-campus accredited privately owned accommodation.\r\n              <br /><br />\r\n              Off-campus accommodation's accredited properties are within 2 km of each campus and where they are beyond the prescribed radius,\r\n              the set condition is that service providers are obliged to provide transport. Additionally,\r\n              intercampus transportation is provided for all students residing in off-campus residences and houses.\r\n              The university offers to all students, a list of accredited off-campus accommodation.\r\n            </p>\r\n            <div class=\"center row download-row\">\r\n              <div class=\"col l12 m12 s12 no-padding\">\r\n                <ul materialize=\"collapsible\" class=\"collapsible z-depth-0\" data-collapsible=\"accordion\">\r\n                  <li>\r\n                    <div class=\"collapsible-header active\">\r\n                        <i class=\"material-icons\">file_download</i>\r\n                        To All UJ Students/Parents and Sponsors\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                      <a href=\"https://www.uj.ac.za/studyatUJ/Student-Accommodation-Residence-Life/Documents/Off-Campus%20Accommodation%20letter%208%2011%2016.pdf\" class=\"waves-effect waves-light btn orange darken-3\" target=\"_blank\">\r\n                        Download\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"collapsible-header\">\r\n                      <i class=\"material-icons\">file_download</i>\r\n                      UJ Student Regulations\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                      <a href=\"https://www.uj.ac.za/studyatUJ/Student-Accommodation-Residence-Life/Documents/UJ%20STUDENT%20REGULATIONS%20approved%20by%20Council.pdf\" class=\"waves-effect waves-light btn orange darken-3\" target=\"_blank\">\r\n                        Download\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"collapsible-header\">\r\n                      <i class=\"material-icons\">file_download</i>\r\n                      UJ Regulations for student discipline\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                      <a href=\"https://www.uj.ac.za/studyatUJ/Student-Accommodation-Residence-Life/Documents/UJ%20REGULATIONS%20FOR%20STUDENT%20DISCIPLINE%20approved%20Council%20November%202010.pdf\" class=\"waves-effect waves-light btn orange darken-3\" target=\"_blank\">\r\n                        Download\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"collapsible-header\">\r\n                      <i class=\"material-icons\">file_download</i>\r\n                      2017 Subscribing POSA updated list\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                      <a href=\"https://www.uj.ac.za/studyatUJ/Student-Accommodation-Residence-Life/PublishingImages/Pages/default/2017%20Subscribing%20POSA%20updated%20list.pdf\" class=\"waves-effect waves-light btn orange darken-3\" target=\"_blank\">\r\n                        Download\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"collapsible-header\">\r\n                      <i class=\"material-icons\">file_download</i>\r\n                      Policy on Privately-Owned Student Accommodation\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                      <a href=\"https://www.uj.ac.za/studyatUJ/Student-Accommodation-Residence-Life/PublishingImages/Pages/default/Policy%20on%20Privately-Owned%20Student%20Accommodation.pdf\" class=\"waves-effect waves-light btn orange darken-3\" target=\"_blank\">\r\n                        Download\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n  <div class=\"parallax-container\">\r\n    <div materialize=\"parallax\" class=\"parallax\"><img src=\"./assets/img/sliders_imgs/apk3.jpg\"></div>\r\n  </div>\r\n\r\n  <div class=\"row news-section\">\r\n      <div class=\"col offset-l1 l10 m12 s12\">\r\n          <div class=\"story-slider\" *ngIf=\"!article_loading\">\r\n\r\n            <section class=\"slider\"\r\n                     materialize=\"slider\"\r\n                     [materializeActions]=\"articleSliderNavActions\"\r\n                     [materializeParams]=\"articleSliderOptions\" >\r\n                  <ul class=\"slides article-slides\">\r\n                    <li *ngFor=\"let art of articles_data\" class=\"slide\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col l5 m6 s12 center no-padding\" style=\"margin-bottom: 25px;\">\r\n                          <img src=\"{{article_src + art.article_img}}\" style=\"width: 80%\" >\r\n                        </div>\r\n                        <div class=\"col l7 m6 s12 no-padding story-text\">\r\n                          <div class=\"article-title\" >\r\n                            {{art.article_title}}\r\n                          </div>\r\n                          <div class=\"article-msg\" [innerHtml]=\"art.article_msg\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n            </section>\r\n\r\n            <div class=\"row story-slider-btn\">\r\n              <div class=\"col l12 m12 s12 right-align\">\r\n                <a (click)=\"storySlide('prev')\" class=\"btn-floating btn-large waves-effect waves-black slider-btn-left z-depth-0\"><i class=\"material-icons\">keyboard_arrow_left</i></a>\r\n                <a (click)=\"storySlide('next')\" class=\"btn-floating btn-large waves-effect waves-black slider-btn-right z-depth-0\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n      <section class=\"article-loader-section\">\r\n        <app-preloader-circle *ngIf=\"article_loading\" [size]=\"'big'\" [width]=\"'100px'\" [border]=\"'4px'\"></app-preloader-circle>\r\n      </section>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-first-section {\n  margin-bottom: 0px !important; }\n  .home-first-section .home-slider {\n    height: 660px !important;\n    width: 100%; }\n    .home-first-section .home-slider .slides .slide:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)); }\n    .home-first-section .home-slider .slides .slide .slider-descr {\n      font-family: 'ABeeZee', cursive;\n      font-size: 30px; }\n    .home-first-section .home-slider .slides .caption {\n      left: 5%;\n      top: 30%; }\n    .home-first-section .home-slider .slider-nav-btn {\n      position: absolute;\n      top: 42%;\n      z-index: 10;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      .home-first-section .home-slider .slider-nav-btn .slider-btn-left {\n        background-color: transparent !important; }\n        .home-first-section .home-slider .slider-nav-btn .slider-btn-left i {\n          font-size: 3.3rem !important; }\n      .home-first-section .home-slider .slider-nav-btn .slider-btn-right {\n        background-color: transparent !important; }\n        .home-first-section .home-slider .slider-nav-btn .slider-btn-right i {\n          font-size: 3.3rem !important; }\n\n.home-second-section {\n  margin: 0px; }\n  .home-second-section .intro-section {\n    background-color: #efefef;\n    padding: 50px 5px 40px 0px;\n    margin: 0px; }\n    .home-second-section .intro-section .intro-title {\n      margin: 0px;\n      font-family: 'Baloo Bhaina', cursive; }\n    .home-second-section .intro-section .intro-subtitle {\n      padding: 0px 5%;\n      font-family: \"Open Sans\", sans-serif; }\n    .home-second-section .intro-section .download-row {\n      padding: 0px 5%;\n      margin-bottom: 0px; }\n      .home-second-section .intro-section .download-row .collapsible-header {\n        font-family: \"Arial\", sans-serif;\n        color: #888888; }\n  @media only screen and (max-width: 991px) {\n    .home-second-section .parallax-container {\n      height: 350px; } }\n  @media only screen and (max-width: 599px) {\n    .home-second-section .parallax-container {\n      height: 300px; } }\n  .home-second-section .news-section {\n    background-color: #efefef;\n    margin: 0px;\n    min-height: 500px;\n    padding: 5% 30px; }\n    @media only screen and (max-width: 599px) {\n      .home-second-section .news-section .story-slider .slider {\n        height: 635px !important; } }\n    .home-second-section .news-section .story-slider .article-slides {\n      background-color: transparent; }\n      @media only screen and (max-width: 599px) {\n        .home-second-section .news-section .story-slider .article-slides {\n          height: 635px !important; } }\n    .home-second-section .news-section .story-slider .story-text .article-title {\n      font-family: \"Open Sans\", sans-serif;\n      padding: 10px 0px 0px 0px;\n      font-size: 30px;\n      text-align: center; }\n    .home-second-section .news-section .story-slider .story-text .article-msg {\n      overflow: scroll;\n      height: 283px;\n      padding: 10px 0px; }\n      @media only screen and (max-width: 599px) {\n        .home-second-section .news-section .story-slider .story-text .article-msg {\n          height: 183px; } }\n    .home-second-section .news-section .story-slider .story-slider-btn {\n      margin-top: 21px;\n      margin-bottom: 40px; }\n      @media only screen and (max-width: 599px) {\n        .home-second-section .news-section .story-slider .story-slider-btn {\n          margin-bottom: 65px; } }\n      .home-second-section .news-section .story-slider .story-slider-btn a {\n        background-color: transparent; }\n        .home-second-section .news-section .story-slider .story-slider-btn a i {\n          font-size: 2.9em !important;\n          color: #000000; }\n    .home-second-section .news-section .article-loader-section {\n      position: absolute;\n      left: 50%;\n      bottom: 10%;\n      -webkit-transform: translate(-50%);\n              transform: translate(-50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(data_service) {
        this.data_service = data_service;
        this.article_loading = true;
        this.article_src = __WEBPACK_IMPORTED_MODULE_3__shared_constants_constants__["a" /* article_img_upload_server */];
        this.sliderNavActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sliderOptions = [{ fullWidth: true, height: 660, interval: 10000 }];
        this.sliderImgArr = [
            { 'img': './assets/img/sliders_imgs/saratoga_village_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus' },
            { 'img': './assets/img/sliders_imgs/saratoga_village2_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus' },
            { 'img': './assets/img/sliders_imgs/saratoga_village3_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus' },
            { 'img': './assets/img/sliders_imgs/saratoga_village4_dfc.jpeg', 'descr': 'Saratoga Village DFC Campus' },
            { 'img': './assets/img/sliders_imgs/hector_pieterson1_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus' },
            { 'img': './assets/img/sliders_imgs/hector_pieterson2_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus' },
            { 'img': './assets/img/sliders_imgs/hector_pieterson3_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus' },
            { 'img': './assets/img/sliders_imgs/hector_pieterson4_swc.jpg', 'descr': 'Hector Pieterson Soweto Campus' },
            { 'img': './assets/img/sliders_imgs/apk1.jpg', 'descr': 'APK Campus' },
            { 'img': './assets/img/sliders_imgs/apk2.jpg', 'descr': 'APK Campus' }
        ];
        this.articleSliderNavActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.articleSliderOptions = [{ fullWidth: true, height: '350', interval: 1000000, indicators: false }];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetch_homeData_API();
    };
    // <editor-fold descr="fetch residences data from the API server">
    HomeComponent.prototype.fetch_homeData_API = function () {
        var _this = this;
        this.data_service.dataGet('get-pub-stories')
            .subscribe(function (response) {
            if (response.req === 'successful') {
                _this.articles_data = response.data;
                // console.log(this.articles_data);
            }
            else {
                console.log(response);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the admin of the website', 4000);
            }
        }, function (err) {
            _this.article_loading = false;
            console.log(err);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the admin of the website', 4000);
        }, function () { _this.article_loading = false; });
    };
    // </editor-fold>
    HomeComponent.prototype.slide = function (direction) {
        this.sliderNavActions.emit({ action: 'slider', params: ['pause'] });
        this.sliderNavActions.emit({ action: 'slider', params: [direction] });
    };
    HomeComponent.prototype.storySlide = function (direction) {
        this.articleSliderNavActions.emit({ action: 'slider', params: ['pause'] });
        this.articleSliderNavActions.emit({ action: 'slider', params: [direction] });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/visitors/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/home/home.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_data_services__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/main-nav-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey lighten-2 z-depth-1\">\r\n  <div class=\"nav-wrapper\">\r\n    <div class=\"row\" style=\"margin: 0px;\">\r\n      <div class=\"col l3 m6 s6 no-padding\">\r\n        <div class=\"site-title\">\r\n          <a href=\"/\" class=\"uppercase\">\r\n            <img src=\"assets/img/uj_logo_3.png\" class=\"site-logo\"/>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <!--On Desktop-->\r\n      <section class=\"col l6 no-padding show-on-large hide-on-med-and-down center btn-option-section\">\r\n        <ul class=\"show-on-large hide-on-med-and-down\">\r\n          <li>\r\n            <a routerLink=\"/accommodations\" routerLinkActive=\"active\"\r\n               class=\"waves-effect waves-black upper-case btn-option\">Accommodation</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/resident-student\" routerLinkActive=\"active\"\r\n               class=\"waves-effect waves-black upper-case btn-option\">Resident Students</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/contact-us\" routerLinkActive=\"active\"\r\n                class=\"waves-effect waves-black upper-case btn-option\">Contact us</a>\r\n          </li>\r\n        </ul>\r\n      </section>\r\n      <div class=\"col l3 no-padding show-on-large hide-on-med-and-down right-align\">\r\n        <a routerLink=\"/apply-now\" class=\"waves-effect waves-light btn btn-apply z-depth-0\">Apply Now</a>\r\n      </div>\r\n      <!--On Tabs and Mobile-->\r\n      <div class=\"col offset-m4 offset-s3 m2 s3 no-padding hide-on-large-only show-on-medium-and-down right-align btn-menu-section\">\r\n        <a class=\"waves-effect waves-black btn btn-menu z-depth-0\"\r\n           materialize=\"sideNav\" [materializeParams]=\"sidenavParams\" [materializeActions]=\"sidenavActions\"\r\n           data-activates=\"sideNavMenu\">\r\n          <i class=\"material-icons\">menu</i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<ul id=\"sideNavMenu\" class=\"side-nav\">\r\n  <li>\r\n    <div class=\"user-view\">\r\n      <div>\r\n        <img src=\"../assets/img/uj_logo_4.png\" style=\"width: 100%\">\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li><div class=\"divider\"></div></li>\r\n  <li><a class=\"subheader\">Menu Options</a></li>\r\n  <li><div class=\"divider\"></div></li>\r\n  <li>\r\n    <a href=\"/apply-now\" class=\"waves-effect nav-item\">\r\n      <i class=\"material-icons nav-item-icon\">play_arrow</i>Apply Now\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a href=\"/accommodations\" class=\"waves-effect nav-item\">\r\n      <i class=\"material-icons nav-item-icon\">play_arrow</i>Accommodation\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a href=\"/resident-student\" class=\"waves-effect nav-item\">\r\n      <i class=\"material-icons nav-item-icon\">play_arrow</i>Resident Students\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a href=\"/contact-us\" class=\"waves-effect nav-item\">\r\n      <i class=\"material-icons nav-item-icon\">play_arrow</i>Contact us\r\n    </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/main-nav-header/main-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/shared/styles/mixin.css"), "");

// module
exports.push([module.i, "nav {\n  padding: 0px 25px;\n  height: 64px;\n  line-height: 63px; }\n  @media only screen and (max-width: 991px) {\n    nav {\n      padding: 0px 0px 0px 5px; } }\n  nav .site-title {\n    margin: 5px 0px 0px 0px;\n    line-height: 0px; }\n    nav .site-title .site-logo {\n      height: 50px; }\n  nav .btn-option-section {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    nav .btn-option-section ul {\n      margin-left: -40px; }\n    nav .btn-option-section .btn-option {\n      font-size: 12px;\n      background-color: transparent;\n      height: 64px;\n      font-family: Arial, sans-serif;\n      font-weight: 600;\n      color: #9e9e9e; }\n      nav .btn-option-section .btn-option:hover {\n        color: #696969;\n        background-color: transparent; }\n      nav .btn-option-section .btn-option.active {\n        color: #000000; }\n  nav .btn-apply {\n    font-size: 12px;\n    background-color: #ed6400; }\n    nav .btn-apply:hover {\n      background-color: #c15201; }\n  nav .btn-menu-section {\n    line-height: 0px; }\n    nav .btn-menu-section .btn-menu {\n      height: 64px;\n      background-color: transparent;\n      border-radius: 0px;\n      color: #ed6400; }\n      nav .btn-menu-section .btn-menu:hover {\n        background-color: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/main-nav-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
        this.sidenavActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sidenavParams = [{ edge: 'right', draggable: true }];
    }
    MainHeaderComponent.prototype.ngOnInit = function () { };
    return MainHeaderComponent;
}());
MainHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-header',
        template: __webpack_require__("../../../../../src/app/components/visitors/main-nav-header/main-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/main-nav-header/main-header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainHeaderComponent);

//# sourceMappingURL=main-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/visitors/resident-student/resident-student.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-main-header></app-main-header>\r\n<!--End  Header -->\r\n\r\n<section class=\"row resStud-first-section\">\r\n  <div class=\"parallax-container\">\r\n    <div materialize=\"parallax\" class=\"parallax\"><img src=\"./assets/img/sliders_imgs/apk2.jpg\"></div>\r\n    <h4 class=\"page-title\">Current Residents</h4>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"resStud-loginform-section grey lighten-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col offset-l3 offset-m2 l6 m8 s12\">\r\n      <div class=\"card grey lighten-5\">\r\n        <div class=\"card-content white-text grey lighten-3\">\r\n          <span class=\"card-title\">Sign In</span>\r\n        </div>\r\n        <app-preloader-intermediate *ngIf=\"is_loggin\"></app-preloader-intermediate>\r\n\r\n        <div class=\"card-inputs\">\r\n          <div class=\"row\">\r\n              <div class=\"input-field col offset-l3 offset-m2 l6 m8 s12\">\r\n                <input type=\"text\"  name=\"stNo\" id=\"stNo\"  class=\"validate\" placeholder=\"\" required #st_number>\r\n                <label for=\"stNo\" class=\"active\">Student Number</label>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col offset-l3 offset-m2 l6 m8 s12\">\r\n              <input type=\"password\"  name=\"st_pwd\" id=\"st_pwd\" class=\"validate\" placeholder=\"\" required #pwd>\r\n              <label for=\"st_pwd\" class=\"active\">Password</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row center margin-0\">\r\n            <div class=\"row btn-signIn-section\">\r\n              <a (click)=\"submitLogin(st_number, pwd)\" class=\"waves-effect waves-light btn btn-signIn\">Sign in</a>\r\n            </div>\r\n\r\n            <div class=\"row right btn-forgotPassword-section\">\r\n              <a class=\"waves-effect waves-light btn-forgotPassword\" (click)=\"openForgetPasswordModal()\">Forgot Password</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section id=\"modal1\" class=\"modal bottom-sheet\" materialize=\"modal\"\r\n        [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalAction\">\r\n  <app-preloader-intermediate *ngIf=\"forgotPwd_loading\"></app-preloader-intermediate>\r\n  <div class=\"modal-content padding-bottom-0\">\r\n    <div style=\"margin-bottom: 30px\">\r\n      <h4>FORGOT PASSWORD</h4>\r\n      <p>Did you forget your password? no problem, enter your UJ student number here</p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col offset-l4 offset-l4  offset-m2 l4 m4 s12\">\r\n        <input type=\"email\"  name=\"st_no\" id=\"st_no\" class=\"validate\" placeholder=\"\" required #st_no>\r\n        <label for=\"st_no\" class=\"active\">UJ Student Number</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row center margin-0\">\r\n      <a (click)=\"onSubmitForgetPwd(st_no)\" class=\"waves-effect waves-light btn\">Submit</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\">Close</a>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/visitors/resident-student/resident-student.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resStud-first-section {\n  margin-bottom: 0px !important; }\n  .resStud-first-section .parallax-container {\n    height: 350px;\n    width: 100%; }\n    .resStud-first-section .parallax-container:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); }\n    .resStud-first-section .parallax-container .page-title {\n      color: #ed6400;\n      position: absolute;\n      top: 43%;\n      left: 50%;\n      margin: 0px;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      font-family: \"LearningCurveDashed\", sans-serif;\n      font-weight: 500;\n      font-size: 8em;\n      width: 100%;\n      text-align: center; }\n      @media only screen and (max-width: 599px) {\n        .resStud-first-section .parallax-container .page-title {\n          font-size: 1.5em;\n          font-family: \"Open Sans\", sans-serif; } }\n\n.resStud-loginform-section .card {\n  margin-top: -9em;\n  margin-bottom: 80px; }\n  .resStud-loginform-section .card .card-content {\n    padding: 24px 0px; }\n    .resStud-loginform-section .card .card-content .card-title {\n      color: rgba(42, 34, 37, 0.54);\n      text-transform: uppercase;\n      text-align: center; }\n  .resStud-loginform-section .card .card-inputs {\n    padding: 45px 20px 0px 20px; }\n    .resStud-loginform-section .card .card-inputs .btn-signIn-section .btn-signIn {\n      width: 200px;\n      background: #ed6400 !important; }\n    .resStud-loginform-section .card .card-inputs .btn-forgotPassword-section .btn-forgotPassword {\n      color: #ed6400 !important;\n      text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/visitors/resident-student/resident-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage__ = __webpack_require__("../../../../../src/app/shared/services/local_storage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResidentStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResidentStudentComponent = (function () {
    function ResidentStudentComponent(_route, data_service, local_storage) {
        this._route = _route;
        this.data_service = data_service;
        this.local_storage = local_storage;
        this.is_loggin = false;
        this.forgotPwd_loading = false;
        this.modalAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalParams = [];
    }
    ResidentStudentComponent.prototype.ngOnInit = function () {
        this.local_storage.deleteLocalStorage('student_data');
    };
    // <editor-fold Description="On Forgot Pwd">
    ResidentStudentComponent.prototype.submitLogin = function (username, pwd) {
        var _this = this;
        var st_no = username.value;
        var st_pwd = pwd.value;
        if (st_no && st_pwd) {
            this.is_loggin = true;
            var data_sent = { 'st_no': st_no, 'st_pwd': st_pwd };
            this.data_service.dataPost('student/student-login', data_sent)
                .subscribe(function (response) {
                _this.processAdminLogin(response);
            }, function (err) {
                _this.is_loggin = false;
                console.log(err);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
            }, function () { _this.is_loggin = false; });
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Login fields cannot be empty', 4000);
        }
    };
    ResidentStudentComponent.prototype.processAdminLogin = function (response) {
        if (response.req === 'found') {
            // console.log(response.data);
            this.local_storage.setLocalStorageObject('student_data', response.data);
            this._route.navigate(['ujres-student'], { preserveQueryParams: false });
        }
        else if (response.req === 'not_found') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Incorrent student number or password', 5000);
        }
        else {
            console.error(response);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
        }
    };
    // <editor-fold>
    // <editor-fold Description="On Forgot Pwd">
    ResidentStudentComponent.prototype.openForgetPasswordModal = function () {
        this.modalAction.emit({ action: 'modal', params: ['open'] });
    };
    ResidentStudentComponent.prototype.closeModal = function () {
        this.modalAction.emit({ action: 'modal', params: ['close'] });
    };
    ResidentStudentComponent.prototype.onSubmitForgetPwd = function (st_no) {
        var _this = this;
        var forgot_st_no = st_no.value;
        if (forgot_st_no) {
            this.forgotPwd_loading = true;
            this.data_service.dataGet("student/reset-pwd", { 'student_no': forgot_st_no })
                .subscribe(function (response) {
                if (response.req === 'successful') {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Your new temporary password has been sent to your email', 4000, 'rounded');
                    _this.closeModal();
                }
                else if (response.req === 'not found') {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('This student number was not found', 4000);
                }
                else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
                }
            }, function (err) {
                _this.forgotPwd_loading = false;
                console.log(err);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('An Error happened, please contact the dev admin', 4000);
            }, function () { _this.forgotPwd_loading = false; });
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["b" /* toast */])('Empty email not allowed', 4000);
        }
    };
    return ResidentStudentComponent;
}());
ResidentStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resident-student',
        template: __webpack_require__("../../../../../src/app/components/visitors/resident-student/resident-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/visitors/resident-student/resident-student.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_data_services__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage__["a" /* LocalStorageService */]) === "function" && _c || Object])
], ResidentStudentComponent);

var _a, _b, _c;
//# sourceMappingURL=resident-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return proof_registration_upload_server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return residencesMainImg_upload_server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return residencesOtherImg_upload_server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return article_img_upload_server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return issue_img_upload_server; });
/**  Created by Marvine Bamba on 2017/08/13. */
/**  Created by Marvine Bamba on 2017/08/13. */ var proof_registration_upload_server = 'http://marvinebamba.com/ujres-api/uploads/proof-registration/';
var residencesMainImg_upload_server = 'http://marvinebamba.com/ujres-api/uploads/residence-main-img/';
var residencesOtherImg_upload_server = 'http://marvinebamba.com/ujres-api/uploads/residence-other-img/';
var article_img_upload_server = 'http://marvinebamba.com/ujres-api/uploads/article-img/';
var issue_img_upload_server = 'http://marvinebamba.com/ujres-api/uploads/issue-img/';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/google_autoComplete.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAutoCompleteDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleAutoCompleteDirective = (function () {
    function GoogleAutoCompleteDirective(el, _loader) {
        this.el = el;
        this._loader = _loader;
        this.fullAddressEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.componentForm = {
            street_number: 'long_name',
            route: 'long_name',
            locality: 'long_name',
            sublocality_level_1: 'long_name',
            administrative_area_level_1: 'long_name',
            administrative_area_level_2: 'long_name',
            country: 'long_name',
            postal_code: 'short_name'
        };
        this.full_address = {};
        this.initAutoComplete();
    }
    GoogleAutoCompleteDirective.prototype.initAutoComplete = function () {
        var _this = this;
        this._loader.load().then(function () {
            var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-26.209493, 28.036435), new google.maps.LatLng(-34.659335, 18.648433));
            var options = {
                bounds: defaultBounds,
                types: ['address']
            };
            var autoComplete = new google.maps.places.Autocomplete(_this.el.nativeElement, options);
            google.maps.event.addListener(autoComplete, 'place_changed', function () {
                var place = autoComplete.getPlace();
                for (var i = 0; i < place.address_components.length; i++) {
                    var addressType = place.address_components[i].types[0];
                    if (_this.componentForm[addressType]) {
                        var val = place.address_components[i][_this.componentForm[addressType]];
                        _this.full_address[addressType] = val;
                    }
                }
                _this.fullAddressEvent.emit(_this.full_address);
            });
            _this.geoLocate(autoComplete);
        });
    };
    GoogleAutoCompleteDirective.prototype.geoLocate = function (autoComplete) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var locations = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var circle = new google.maps.Circle({
                    center: locations,
                    radius: position.coords.accuracy
                });
                autoComplete.setBounds(circle.getBounds());
            }, function (error) {
                console.log(error);
            });
        }
    };
    return GoogleAutoCompleteDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('fullAddressEvent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GoogleAutoCompleteDirective.prototype, "fullAddressEvent", void 0);
GoogleAutoCompleteDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[googleAutoComplete]' }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object])
], GoogleAutoCompleteDirective);

var _a, _b, _c;
//# sourceMappingURL=google_autoComplete.js.map

/***/ }),

/***/ "../../../../../src/app/shared/interceptor/main-auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAuth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainAuth = (function () {
    function MainAuth() {
    }
    MainAuth.prototype.intercept = function (req, next) {
        var authReq = req.clone({
            headers: req.headers.set('Authorization', 'token ....')
        });
        return next.handle(authReq);
    };
    return MainAuth;
}());
MainAuth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MainAuth);

//# sourceMappingURL=main-auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/search-filter.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by MarvineBamba on 2017/08/13.
 */

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, term, params) {
        if (term === undefined) {
            return items;
        }
        return items.filter(function (item) {
            if (Array.isArray(params) && params.length > 0) {
                for (var i = 0; i < params.length; i++) {
                    var property = params[i];
                    if (item[property] === undefined) {
                        throw PropertyException(property);
                    }
                    if (item[property] === null) {
                        continue;
                    }
                    if (perform_search(item[property]) === true) {
                        return true;
                    }
                }
            }
            else {
                for (var property in item) {
                    if (item[property] === null) {
                        continue;
                    }
                    if (perform_search(item[property]) === true) {
                        return true;
                    }
                }
            }
            return false;
        });
        function perform_search(item) {
            return (function (i) {
                var _item = i.toString().toLowerCase().replace(/[^\u0000-\u007E]/g, '');
                var _term = term.toString().toLowerCase();
                if (_term[_term.length - 1] === ' ') {
                    _term = _term.substring(0, _term.length - 1);
                }
                if (_item.includes(_term)) {
                    return true;
                }
            })(item);
        }
        function PropertyException(property_name) {
            return 'Search Filter Pipe Error - Property name ' + property_name + ' does not exist in the object';
        }
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchFilterPipe);

//# sourceMappingURL=search-filter.pipes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/preloaders/preloader-circle/preloader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-wrapper {{size}} active\"\r\n     [ngStyle]=\"width && {'width': width, height: width}\">\r\n\r\n  <div class=\"spinner-layer spinner-blue\">\r\n    <div class=\"circle-clipper left\">\r\n      <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n    </div><div class=\"gap-patch\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div><div class=\"circle-clipper right\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"spinner-layer spinner-red\">\r\n    <div class=\"circle-clipper left\">\r\n      <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n    </div><div class=\"gap-patch\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div><div class=\"circle-clipper right\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"spinner-layer spinner-yellow\">\r\n    <div class=\"circle-clipper left\">\r\n      <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n    </div><div class=\"gap-patch\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div><div class=\"circle-clipper right\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"spinner-layer spinner-green\">\r\n    <div class=\"circle-clipper left\">\r\n      <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n    </div><div class=\"gap-patch\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div><div class=\"circle-clipper right\">\r\n    <div class=\"circle\" [ngStyle]=\"border && {'border-width': border}\"></div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/preloaders/preloader-circle/preloader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/preloaders/preloader-circle/preloader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderCircleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreloaderCircleComponent = (function () {
    function PreloaderCircleComponent() {
        this.width = null; // 50px
        this.border = null; // 1px
    }
    return PreloaderCircleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloaderCircleComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloaderCircleComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloaderCircleComponent.prototype, "border", void 0);
PreloaderCircleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-preloader-circle',
        template: __webpack_require__("../../../../../src/app/shared/preloaders/preloader-circle/preloader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/preloaders/preloader-circle/preloader.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PreloaderCircleComponent);

//# sourceMappingURL=preloader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/preloaders/preloader-indeterminate/preloader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/preloaders/preloader-indeterminate/preloader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress {\n  background-color: #ed6400;\n  margin: 0px;\n  border-radius: 0px; }\n  .progress .indeterminate {\n    background-color: #ebeaf7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/preloaders/preloader-indeterminate/preloader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderIntermediateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreloaderIntermediateComponent = (function () {
    function PreloaderIntermediateComponent() {
    }
    PreloaderIntermediateComponent.prototype.ngOnInit = function () { };
    return PreloaderIntermediateComponent;
}());
PreloaderIntermediateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-preloader-intermediate',
        template: __webpack_require__("../../../../../src/app/shared/preloaders/preloader-indeterminate/preloader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/preloaders/preloader-indeterminate/preloader.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PreloaderIntermediateComponent);

//# sourceMappingURL=preloader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/base64.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64Service; });
/*  Created by Marvine Bamba on 2017/08/13. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Base64Service = (function () {
    function Base64Service() {
    }
    Base64Service.prototype.ConvertToBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            if (!file) {
                reject(file);
            }
            var reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    };
    return Base64Service;
}());
Base64Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Base64Service);

//# sourceMappingURL=base64.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/data.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_shareReplay__ = __webpack_require__("../../../../rxjs/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_shareReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_shareReplay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  Created by Marvine Bamba on 2017/08/13. */









var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'https://uj-residence.herokuapp.com/';
        // baseUrl: string = 'http://localhost:5000/';
        this.uploadUrl = 'http://ujres-api.marvinebamba.com/php-api/';
    }
    // <editor-fold description='HTTP REQUEST'>
    DataService.prototype.dataGet = function (route, dataObject) {
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        requestOptions.params = dataObject;
        return this.http.get(this.baseUrl + route, requestOptions)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.dataPost = function (route, dataObject) {
        return this.http.post(this.baseUrl + route, JSON.stringify(dataObject), this.getPutHeaders())
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.dataPHPFilePost = function (dataObject) {
        return this.http.post(this.uploadUrl, dataObject, this.getPutHeaders_2())
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Node.js server error');
    };
    DataService.prototype.getPutHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
    };
    DataService.prototype.getPutHeaders_2 = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
    };
    // </editor-fold>
    // <editor-fold description='SOCKET REQUEST'>
    DataService.prototype.sendSocketData = function (route, message) {
        this.socket.emit(route, message);
    };
    DataService.prototype.getSocketData = function (route) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on(route, function (data) {
                observer.next(data);
            });
            return function () {
                _this.disconnectSocket();
            };
        });
    };
    DataService.prototype.connectSocket = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(this.baseUrl);
    };
    DataService.prototype.disconnectSocket = function () {
        if (this.socket) {
            this.socket.disconnect();
        }
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
// dataGetCoordinate(): Observable< any > {
// return this.http.post('https://www.googleapis.com/geolocation/v1
// /geolocate?key=AIzaSyBBARqJNCwiLgUSw3R0leTAd2RxVEEQBZU', this.getPutHeaders() )
//         .map((res: any) => {
//             return res.json();
//         })
//         .catch(this.handleError);
// }
//# sourceMappingURL=data.services.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/local_storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/*  Created by Marvine Bamba on 2017/08/13. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getLocalStorageItem = function (key, default_value) {
        return localStorage.getItem(key) || default_value;
    };
    LocalStorageService.prototype.setLocalStorageItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.getLocalStorageObject = function (key, default_value) {
        return JSON.parse(localStorage.getItem(key)) || default_value;
    };
    LocalStorageService.prototype.setLocalStorageObject = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.deleteLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype.deleteAllLocalStorage = function () {
        localStorage.clear();
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local_storage.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/location.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationService = (function () {
    function LocationService() {
    }
    LocationService.prototype.getUserLocation = function () {
        return new Promise(function (resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(position.coords);
                }, function (error) {
                    console.log(error);
                    reject('not working');
                });
            }
            else {
                reject('not working 2');
            }
        });
    };
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocationService);

//# sourceMappingURL=location.services.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/res.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupResidence; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupResidence = (function () {
    function GroupResidence() {
    }
    GroupResidence.prototype.groupResidence = function (residences) {
        var campus = {};
        var first_res = [];
        var second_res = [];
        var third_res = [];
        var forth_res = [];
        var campuses = ['APK', 'APB', 'DFC', 'SWC'];
        residences.forEach(function (res_data) {
            if (res_data.campus_name_alias === campuses[0]) {
                first_res.push(res_data);
                campus[campuses[0]] = first_res;
            }
            else if (res_data.campus_name_alias === campuses[1]) {
                second_res.push(res_data);
                campus[res_data.campus_name_alias] = second_res;
            }
            else if (res_data.campus_name_alias === campuses[2]) {
                third_res.push(res_data);
                campus[res_data.campus_name_alias] = third_res;
            }
            else if (res_data.campus_name_alias === campuses[3]) {
                forth_res.push(res_data);
                campus[res_data.campus_name_alias] = forth_res;
            }
        });
        return campus;
    };
    GroupResidence.prototype.updateGenderResidence = function (grouped_res, gender) {
        var campuses = ['APK', 'APB', 'DFC', 'SWC'];
        campuses.forEach(function (campus) {
            if (grouped_res[campus]) {
                var res_data = grouped_res[campus].slice();
                var new_res_data_1 = [];
                res_data.forEach(function (res) {
                    if (res.acc_type.toUpperCase() === 'MIXED' || res.acc_type.toUpperCase() === gender.toUpperCase()) {
                        new_res_data_1.push(res);
                    }
                });
                grouped_res[campus] = new_res_data_1;
            }
        });
        return grouped_res;
    };
    GroupResidence.prototype.groupResRoomType = function (res_rooms) {
        var room_type = [];
        var single = 0;
        var double = 0;
        var flat = 0;
        res_rooms.forEach(function (room) {
            if (room.r_type_id === 1 && room.room_status === 'available') {
                single++;
            }
            else if (room.r_type_id === 2 && room.room_status === 'available') {
                double++;
            }
            else if (room.r_type_id === 3 && room.room_status === 'available') {
                flat++;
            }
        });
        room_type = [
            { 'name': 'Single Room', 'count': single, 'no': 1 },
            { 'name': 'Double Room', 'count': double, 'no': 2 },
            { 'name': 'Flat', 'count': flat, 'no': 3 }
        ];
        return room_type;
    };
    GroupResidence.prototype.getResAvailability = function (res_rooms) {
        var capacity = 0;
        var available = 0;
        var unavailable = 0;
        res_rooms.forEach(function (res) {
            if (res.room_status === 'available') {
                available++;
            }
            else {
                unavailable++;
            }
            if (res.r_type_id === 1) {
                capacity++;
            }
            else if (res.r_type_id === 2 || res.r_type_id === 3) {
                capacity = capacity + 2;
            }
        });
        return {
            'capacity': capacity,
            'available': available,
            'unavailable': unavailable,
        };
    };
    return GroupResidence;
}());
GroupResidence = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GroupResidence);

//# sourceMappingURL=res.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/session_storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionStorageService; });
/*  Created by Marvine Bamba on 2017/08/13. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionStorageService = (function () {
    function SectionStorageService() {
    }
    SectionStorageService.prototype.setSessionStorageItem = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    SectionStorageService.prototype.getSessionStorageItem = function (value, default_value) {
        return sessionStorage.getItem(value) || default_value;
    };
    SectionStorageService.prototype.setSessionStorageObject = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    SectionStorageService.prototype.getSessionStorageObject = function (key, default_value) {
        return JSON.parse(sessionStorage.getItem(key)) || default_value;
    };
    SectionStorageService.prototype.deleteSessionStorage = function (key) {
        sessionStorage.removeItem(key);
    };
    SectionStorageService.prototype.deleteAllSessionStorage = function () {
        sessionStorage.clear();
    };
    return SectionStorageService;
}());
SectionStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SectionStorageService);

//# sourceMappingURL=session_storage.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/url_encode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
/*  Created by Marvine Bamba on 2017/08/13. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlService = (function () {
    function UrlService() {
    }
    UrlService.prototype.urlEncode = function (url) {
        url = url.trim().toLowerCase();
        url = url.split(' ').join('-');
        url = url.replace(/[^a-zA-Z0-9|-]/g, '');
        return url;
    };
    return UrlService;
}());
UrlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UrlService);

//# sourceMappingURL=url_encode.js.map

/***/ }),

/***/ "../../../../../src/app/shared/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_search_filter_pipes__ = __webpack_require__("../../../../../src/app/shared/pipes/search-filter.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_services__ = __webpack_require__("../../../../../src/app/shared/services/data.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_local_storage__ = __webpack_require__("../../../../../src/app/shared/services/local_storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_session_storage__ = __webpack_require__("../../../../../src/app/shared/services/session_storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_url_encode__ = __webpack_require__("../../../../../src/app/shared/services/url_encode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_base64_service__ = __webpack_require__("../../../../../src/app/shared/services/base64.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_res_service__ = __webpack_require__("../../../../../src/app/shared/services/res.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_location_services__ = __webpack_require__("../../../../../src/app/shared/services/location.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_google_autoComplete__ = __webpack_require__("../../../../../src/app/shared/directives/google_autoComplete.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__preloaders_preloader_circle_preloader_component__ = __webpack_require__("../../../../../src/app/shared/preloaders/preloader-circle/preloader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__preloaders_preloader_indeterminate_preloader_component__ = __webpack_require__("../../../../../src/app/shared/preloaders/preloader-indeterminate/preloader.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ShareModule = (function () {
    function ShareModule() {
    }
    return ShareModule;
}());
ShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBBARqJNCwiLgUSw3R0leTAd2RxVEEQBZU',
                libraries: ['places']
            }),
            __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__["CKEditorModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__pipes_search_filter_pipes__["a" /* SearchFilterPipe */], __WEBPACK_IMPORTED_MODULE_15__preloaders_preloader_circle_preloader_component__["a" /* PreloaderCircleComponent */], __WEBPACK_IMPORTED_MODULE_16__preloaders_preloader_indeterminate_preloader_component__["a" /* PreloaderIntermediateComponent */], __WEBPACK_IMPORTED_MODULE_14__directives_google_autoComplete__["a" /* GoogleAutoCompleteDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */],
            __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6__pipes_search_filter_pipes__["a" /* SearchFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__preloaders_preloader_circle_preloader_component__["a" /* PreloaderCircleComponent */],
            __WEBPACK_IMPORTED_MODULE_16__preloaders_preloader_indeterminate_preloader_component__["a" /* PreloaderIntermediateComponent */],
            __WEBPACK_IMPORTED_MODULE_14__directives_google_autoComplete__["a" /* GoogleAutoCompleteDirective */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__["CKEditorModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_services__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_8__services_local_storage__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_9__services_session_storage__["a" /* SectionStorageService */], __WEBPACK_IMPORTED_MODULE_10__services_url_encode__["a" /* UrlService */], __WEBPACK_IMPORTED_MODULE_11__services_base64_service__["a" /* Base64Service */], __WEBPACK_IMPORTED_MODULE_12__services_res_service__["a" /* GroupResidence */], __WEBPACK_IMPORTED_MODULE_13__services_location_services__["a" /* LocationService */]]
    })
], ShareModule);

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/shared/styles/mixin.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upper-case {\r\n  text-transform: uppercase; }\r\n\r\n.margin-0 {\r\n  margin: 0px !important; }\r\n\r\n.margin-left-0 {\r\n  margin-left: 0px !important; }\r\n\r\n.margin-right-0 {\r\n  margin-right: 0px !important; }\r\n\r\n.margin-top-0 {\r\n  margin-top: 0px !important; }\r\n\r\n.margin-bottom-0 {\r\n  margin-bottom: 0px !important; }\r\n\r\n.padding-left-0 {\r\n  padding-left: 0px !important; }\r\n\r\n.padding-right-0 {\r\n  padding-right: 0px !important; }\r\n\r\n.padding-top-0 {\r\n  padding-top: 0px !important; }\r\n\r\n.padding-bottom-0 {\r\n  padding-bottom: 0px !important; }\r\n", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map