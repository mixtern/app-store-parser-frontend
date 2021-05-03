(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\home\osa413\GitHub\app-store-parser-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1khC":
/*!**************************************!*\
  !*** ./src/shared/landing/slides.ts ***!
  \**************************************/
/*! exports provided: Slides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slides", function() { return Slides; });
const Slides = [
    {
        title: "ReviewGator - ваш помощник для мониторинга отзывов",
        description: "Пришло время перенести ответсвенность!",
        image: "bg-blue-400"
    },
    {
        title: "Расширь свои возможности по доступным ценам",
        description: "Меняй свой бизнес к лучшему!",
        image: "bg-yellow-600"
    },
    {
        title: "Доверь свою работу надежной команде",
        description: "Да, мы настроены серьезно!",
        image: "bg-green-300"
    },
    {
        title: "Расслабься и переложи ответсвенность нам",
        description: "Облегчи свою жизнь! Это реализуемо с нами!",
        image: "bg-yellow-400"
    },
    {
        title: "До сих пор не с нами? Чего ты ждешь?",
        description: "Присоединяйся!",
        image: "bg-yellow-200"
    }
];


/***/ }),

/***/ "353j":
/*!********************************************!*\
  !*** ./src/shared/landing/integrations.ts ***!
  \********************************************/
/*! exports provided: Integrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return Integrations; });
const Integrations = [
    {
        title: "Slack",
        image: "./../../app-store-parser-frontend/assets/images/services-logos/slack.png"
    }
];


/***/ }),

/***/ "3dMs":
/*!****************************************************!*\
  !*** ./src/app/landing/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: LandingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHeaderComponent", function() { return LandingHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LandingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingHeaderComponent.ɵfac = function LandingHeaderComponent_Factory(t) { return new (t || LandingHeaderComponent)(); };
LandingHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingHeaderComponent, selectors: [["landing-header"]], decls: 18, vars: 0, consts: [[1, "bg-white", "container", "mx-auto", "fixed", "z-10", "montserrat"], [1, "flex", "justify-between", "items-center", "h-14", "border-b", "w-screen"], [1, "flex", "items-center", "text-blue-500"], ["href", "./", 1, "mr-4"], ["src", "./../../app-store-parser-frontend/assets/images/logo.png", "alt", "Logo", 1, "h-14", "object-cover"], [1, "hidden", "md:block"], ["href", "#what-we-do", 1, "mx-4"], ["href", "#what-we-can-do", 1, "mx-4"], ["href", "#about-us", 1, "mx-4"], [1, "flex", "items-center"], [1, "mx-2", "bg-white", "border-2", "rounded-md", "border-blue-500", "text-blue-500"], [1, "mx-2", "mr-8", "bg-blue-500", "border-2", "rounded-md", "border-blue-500", "text-white"], [1, "h-14"]], template: function LandingHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0427\u0442\u043E \u043C\u044B \u0434\u0435\u043B\u0430\u0435\u043C? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0423\u0441\u043B\u0443\u0433\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0412\u043E\u0439\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CoQu":
/*!****************************************!*\
  !*** ./src/shared/landing/services.ts ***!
  \****************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
const Services = [
    {
        title: "Google Play",
        image: "./../../app-store-parser-frontend/assets/images/services-logos/googleplay.png"
    },
    {
        title: "App Store",
        image: "./../../app-store-parser-frontend/assets/images/services-logos/appstore.png"
    },
    {
        title: "AppGallery",
        image: "./../../app-store-parser-frontend/assets/images/services-logos/appgallery.png"
    }
];


/***/ }),

/***/ "Esxo":
/*!****************************************!*\
  !*** ./src/shared/landing/our-team.ts ***!
  \****************************************/
/*! exports provided: OurTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeam", function() { return OurTeam; });
const OurTeam = [
    {
        title: "Nikita",
        image: "./../../app-store-parser-frontend/assets/images/avatars/Nikita.jpg"
    },
    {
        title: "Daniella",
        image: "./../../app-store-parser-frontend/assets/images/avatars/Daniella.jpg"
    },
    {
        title: "Ilya",
        image: "./../../app-store-parser-frontend/assets/images/avatars/Ilya.jpg"
    },
    {
        title: "Oleg",
        image: "./../../app-store-parser-frontend/assets/images/avatars/Oleg.jpg"
    },
    {
        title: "Rodion",
        image: "./../../app-store-parser-frontend/assets/images/avatars/Rodion.jpg"
    }
];


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var src_shared_landing_integrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/landing/integrations */ "353j");
/* harmony import */ var src_shared_landing_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/landing/services */ "CoQu");
/* harmony import */ var src_shared_landing_slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/landing/slides */ "1khC");
/* harmony import */ var src_shared_landing_what_is_rg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/landing/what-is-rg */ "UxD1");
/* harmony import */ var _shared_landing_our_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/landing/our-team */ "Esxo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "3dMs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { faded: a0 }; };
function LandingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, i_r6 !== ctx_r0.currentSlide));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](slide_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", slide_r5.image, " text-3xl mt-4 p-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](slide_r5.description);
} }
function LandingComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const description_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", i_r8 > 9 ? "" : "0", "", i_r8 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", description_r7.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", description_r7.description, " ");
} }
function LandingComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 36);
} if (rf & 2) {
    const service_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", service_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", service_r9.name);
} }
function LandingComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const integration_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", integration_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", integration_r10.name);
} }
function LandingComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", member_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", member_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](member_r11.name);
} }
class LandingComponent {
    constructor() {
        this.OurTeam = _shared_landing_our_team__WEBPACK_IMPORTED_MODULE_4__["OurTeam"];
        this.WhatIsReviewGator = src_shared_landing_what_is_rg__WEBPACK_IMPORTED_MODULE_3__["WhatIsReviewGator"];
        this.Services = src_shared_landing_services__WEBPACK_IMPORTED_MODULE_1__["Services"];
        this.Integrations = src_shared_landing_integrations__WEBPACK_IMPORTED_MODULE_0__["Integrations"];
        this.currentSlide = 1;
        this.SlideInterval = 7000;
        this.Slides = src_shared_landing_slides__WEBPACK_IMPORTED_MODULE_2__["Slides"];
        setInterval(() => this.nextSlide(), 7000);
    }
    nextSlide() {
        this.currentSlide++;
        if (this.currentSlide >= this.Slides.length) {
            this.currentSlide = 0;
        }
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 55, vars: 5, consts: [[1, "montserrat"], [1, "h-screen", "carousel"], [1, "bg-container"], ["autoplay", "", "muted", "", "loop", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true", 1, "h-screen", "w-screen", "object-cover"], ["src", "../../app-store-parser-frontend/assets/video/landing/background.mp4"], [1, "bg-content"], ["class", "bg-content-text text-white centered w-5/6 md:w-3/5 text-2xl sm:text-6xl font-bold", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "bg-gradient-to-b", "join-button", "rg-color-gradient", "px-5", "py-4", "rounded-full", "text-white"], ["id", "what-we-do", 1, "p-4", "sm:p-36", "pt-28"], [1, "text-5xl", "mb-24"], [1, "rg-style-text"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-24", "mb-32"], [4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-24", "mb-16"], ["src", "./../../app-store-parser-frontend/assets/images/landing/photo-of-person-holding-mobile-phone-3183153.jpg", "alt", ""], [1, "text-3xl", "leading-relaxed", "self-center"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-24"], [1, "bg-gray-700", "rounded-3xl", "text-white", "text-center", "p-8", "text-3xl"], [1, "pt-4", "mt-4", "border-t-4", "border-color", "flex", "flex-wrap", "justify-around"], ["class", "max-h-32", 3, "src", "alt", 4, "ngFor", "ngForOf"], ["class", "max-h-32 mx-auto my-auto", 3, "src", "alt", 4, "ngFor", "ngForOf"], ["id", "what-we-can-do", 1, "sm:p-36", "sm:pt-28"], [1, "text-center", "text-5xl", "mb-11"], [1, "text-center", "text-4xl", "pb-10"], [1, "flex", "flex-wrap", "justify-between"], [1, "bg-gray-700", "h-40", "w-96", "m-1"], ["id", "about-us", 1, "text-gray-400", "bg-gray-800", "pt-14", "pb-10", "text-center"], [1, "text-base"], ["src", "./../../app-store-parser-frontend/assets/images/logo.png", "alt", "Logo", 1, "h-48", "mx-auto"], [1, ""], [1, "flex", "justify-center", "mx-auto", "pt-4"], ["class", "px-4", 4, "ngFor", "ngForOf"], [1, "text-gray-500", "text-sm", "pt-16"], [1, "bg-content-text", "text-white", "centered", "w-5/6", "md:w-3/5", "text-2xl", "sm:text-6xl", "font-bold", 3, "ngClass"], [1, "font-bold", "text-3xl"], [1, "border-t-2", "border-black", "text-lg", "mt-4", "pt-2"], [1, "max-h-32", 3, "src", "alt"], [1, "max-h-32", "mx-auto", "my-auto", 3, "src", "alt"], [1, "px-4"], [1, "object-cover", "mx-auto", "h-12", "w-12", "rounded-full", 3, "src", "alt"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "landing-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LandingComponent_div_7_Template, 5, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " \u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " \u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "ReviewGator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LandingComponent_div_17_Template, 7, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " \u0414\u043E\u0441\u0442\u0443\u043F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u043A \u0435\u0433\u043E \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C, \u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u043E\u0435\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " \u0421\u0435\u0440\u0432\u0438\u0441\u044B, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, LandingComponent_img_26_Template, 1, 2, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " \u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LandingComponent_img_30_Template, 1, 2, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " \u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, LandingComponent_div_50_Template, 4, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\u041C\u044B \u043B\u044E\u0431\u0438\u043C \u043D\u0430\u0448\u0438\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "\u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.WhatIsReviewGator);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Services);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Integrations);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.OurTeam);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["LandingHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".bg-container[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.bg-container[_ngcontent-%COMP%]   .bg-content[_ngcontent-%COMP%] {\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.bg-content-text.faded[_ngcontent-%COMP%] {\n  transition: opacity 1s ease-in-out;\n  opacity: 0;\n}\n\n.bg-content-text[_ngcontent-%COMP%]:not(.faded) {\n  opacity: 1;\n  transition: opacity 1s ease-in-out;\n}\n\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.join-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.border-color[_ngcontent-%COMP%] {\n  border-color: #A23E7E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJnLWNvbnRhaW5lciAuYmctY29udGVudCB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJnLWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYmctY29udGVudC10ZXh0LmZhZGVke1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5iZy1jb250ZW50LXRleHQ6bm90KC5mYWRlZCl7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5qb2luLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uYm9yZGVyLWNvbG9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0EyM0U3RTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'app-store-parser-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UxD1":
/*!******************************************!*\
  !*** ./src/shared/landing/what-is-rg.ts ***!
  \******************************************/
/*! exports provided: WhatIsReviewGator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatIsReviewGator", function() { return WhatIsReviewGator; });
const WhatIsReviewGator = [
    {
        title: "Ваш помощник",
        description: "Помогает бизнесу решать, важные задачи, при минимальных усилиях, не тратя на это ваше время"
    },
    {
        title: "Личный аналитик",
        description: "Снимает с вас отвественность по сбору информации о вашем продукте, мониторингу рейтинга, и контролю за его качеством."
    },
    {
        title: "Надёжный сервис",
        description: "Круглосуточный мониторинг вашего бизнеса, быстрое и надежное уведомления, позволяющие повысить скорость работы с клиентом"
    },
    {
        title: "Доступное решение",
        description: "Ценообразнование, позволяющие любому приложению расшиить свои возможнотси и использовать весь спектр наших услуг  на полную!!!"
    }
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _landing_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/header/header.component */ "3dMs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");



// Landing



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
        _landing_header_header_component__WEBPACK_IMPORTED_MODULE_4__["LandingHeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', pathMatch: 'full', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map