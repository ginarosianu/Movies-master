(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <app-nav-menu></app-nav-menu>\n\n    <div class=\"container\">\n\n        <router-outlet></router-outlet>\n\n    </div>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">COMMENTS</h1>\n\n<p>This is our Comments Board.</p>\n\n<p *ngIf=\"!comments\"><em>Loading...</em></p>\n\n\n\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"comments\">\n    <thead>\n        <tr>\n            <th>Author</th>\n            <th>Content</th>\n            <th>Important</th>\n            <th>For Movie</th>\n            <th>Operations</th>\n\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let comment of comments\">\n            <td>{{ comment.author }}</td>\n            <td>{{ comment.content }}</td>\n            <td>{{ comment.important }}</td>\n            <td>{{ comment.movieid }}</td>\n            <td>\n                <a>Details</a> |\n                <a>Edit</a> |\n                <a>Delete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<p>Add a comment:</p>\n\n\n<input [(ngModel)]=\"name\" />\n\n<p>{{name}}</p>\n\n\n\n<button (click)=\"submit()\">Submit!</button>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\n\n<p>This is a simple example of an Angular component.</p>\n\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\n\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\n\n\n\n<input type=\"text\" [(ngModel)]=\"name\" />\n\n<p>{{name}}</p>\n\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n<input type=\"text\" [(ngModel)]=\"name\" />\n\n\n<input type=\"text\" value=\"{{name}}\" />\n\n\n\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n<p>{{name}}</p>\n\n\n<input type=\"text\" value=\"{{name}}\" />\n\n\n\n<p> {{name}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">MOVIES</h1>\n\n<p>This is our Movies Board.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"movies\">\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Description</th>\n            <th>Genre</th>\n            <th>Duration minutes</th>\n            <th>Year of fRelease</th>\n            <th>Director</th>\n            <th>Comments</th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let movie of movies\">\n            <td>{{ movie.title }}</td>\n            <td>{{ movie.description }}</td>\n            <td>{{ movie.genre }}</td>\n            <td>{{ movie.minute }}</td>\n            <td>{{ movie.yearOfRelease }}</td>\n            <td>{{ movie.director }}</td>\n            <td>{{ movie.comments }}</td>\n        </tr>\n    </tbody>\n</table>\n\n\n<p>Mai jos facem adaugarea unui film</p>\n\n\n<!--<input [(ngModel)]=\"name\" />\n\n<p>{{name}}</p>\n\n\n\n<button (click)=\"submit()\">Submit!</button>\n\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>-->\n\n<img src=\"{{heroImageUrl}}\" style=\"width:100%\">\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-add/movie-add.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-add/movie-add.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>movie-add works!</p>\n<h1 id=\"tableLabel\"> Add new movie.</h1>\n\n<div class=\"container\">\n    <div class=\" row\">\n        <div class=\" col-10\">\n            <div class=\" jumbotron\">\n                <form [formGroup]=\"movieForm\" (ngSubmit)=\"onSubmit(movieForm)\">\n\n                    <div class=\"form-group\">\n                        <label>Title</label>\n                        <input type=\"text\" class=\" form-control\" formControlName=\"title\" />\n                        <!--<span *ngIf=\"form.get('title').errors?.required\">Title is required</span>-->\n                        <span *ngIf=\"movieForm.get('title').errors?.serverError\">\n                            {{ movieForm.get('title').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Description</label>\n                        <input type=\"text\" class=\" form-control\" formControlName=\"description\" />\n                        <!--<span *ngIf=\"form.get('description').errors?.required\">Description is required</span>-->\n                        <span *ngIf=\"movieForm.get('description').errors?.serverError\">\n                            {{ movieForm.get('description').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <!--<div class=\"form-group\">\n                        <label>Genre</label>\n                        <select class=\" form-control\" formControlName=\"genre\">\n                            <option value=\"0\">Select genre</option>\n                            <option *ngFor=\"let movieGenre of movieGenres\" [value]=\"movieGenre\">-->\n                                <!--{{movieGenre}}-->\n                            <!--</option>\n                        </select>\n                    </div>-->\n\n                    <div class=\"form-group\">\n                        <label>Genre</label>\n                        <select class=\" form-control\" formControlName=\"genre\">\n                            <option value=\"comedy\">Comedy</option>\n                            <option value=\"drama\">Drama</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Minute</label>\n                        <input type=\"number\" class=\" form-control\" placeholder=\"0,00\" formControlName=\"minute\" />\n                        <!--<span *ngIf=\"form.get('minute').errors?.required\">Duration is required</span>-->\n                        <span *ngIf=\"movieForm.get('minute').errors?.serverError\">\n                            {{ movieForm.get('minute').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Year of Release</label>\n                        <input type=\"number\" class=\" form-control\" formControlName=\"yearOfRelease\" />\n                        <span *ngIf=\"movieForm.get('yearOfRelease').errors?.serverError\">\n                            {{ movieForm.get('yearOfRelease').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Director</label>\n                        <input type=\"text\" class=\" form-control\" formControlName=\"director\" />\n                        <!--<span *ngIf=\"form.get('director').errors?.required\">Director is required</span>-->\n                        <span *ngIf=\"movieForm.get('director').errors?.serverError\">\n                            {{ movieForm.get('director').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"datetime\" class=\" form-control\" placeholder=\"2020-06-14\" formControlName=\"dateAdded\" />\n                        <!--<span *ngIf=\"form.get('dateAdded').errors?.required\">Date is required</span>-->\n                        <span *ngIf=\"movieForm.get('dateAdded').errors?.serverError\">\n                            {{ movieForm.get('dateAdded').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Rating</label>\n                        <input type=\"number\" class=\" form-control\" placeholder=\"0,00\" formControlName=\"rating\" />\n                        <span *ngIf=\"movieForm.get('rating').errors?.serverError\">\n                            {{ movieForm.get('rating').errors?.serverError }}\n                        </span>\n                    </div>\n\n                    <!--<div class=\"form-group\">\n                        <label>Watched</label>\n                        <select class=\" form-control\" formControlName=\"watched\">\n                            <option value=\"0\">Select</option>\n                            <option *ngFor=\"let movieWatched of movieWatcheds\" [value]=\"movieWatched\">-->\n                                <!--{{movieWatched}}-->\n                            <!--</option>\n                        </select>\n                    </div>-->\n\n\n                    <div class=\"form-group\">\n                        <label>Watched</label>\n                        <select class=\" form-control\" formControlName=\"watched\">\n                            <option value=\"true\">True</option>\n                            <option value=\"false\">False</option>\n                        </select>\n                    </div>\n\n                    <button class=\"btn btn-secondary btnLeft\" type='submit' [disabled]=\"!movieForm.valid\">Save</button>\n                    <button class=\"btn btn-secondary btnRight\" (click)=\"goBack()\">Back</button>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-details/movie-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-details/movie-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>movie-details works!</p>\n\n\n<p *ngIf=\"!movie\"><em>Loading ...</em></p>\n\n<a [routerLink]=\"['/movie']\" routerLinkActive=\"active\">Back</a>\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"movie\">\n    <tbody>\n        <tr>\n            <th>Title</th>\n            <td>{{ movie.title }}</td>\n        </tr>\n        <tr>\n            <th>Description</th>\n            <td>{{ movie.description }}</td>\n        </tr>\n        <tr>\n            <th>Genre</th>\n            <td>{{ movie.genre }}</td>\n        </tr>\n\n        <tr>\n            <th>Duration minutes</th>\n            <td>{{ movie.minute }}</td>\n        </tr>\n\n        <tr>\n            <th>Year of Release</th>\n            <td>{{ movie.yearOfRelease }}</td>\n        </tr>\n\n        <tr>\n            <th>Director</th>\n            <td>{{ movie.director }}</td>\n        </tr>\n\n        <tr>\n            <th>DateAdded</th>\n            <td>{{ movie.dateAdded }}</td>\n        </tr>\n\n        <tr>\n            <th>Rating</th>\n            <td>{{ movie.rating }}</td>\n        </tr>\n\n        <tr>\n            <th>Watched</th>\n            <td>{{ movie.watched }}</td>\n        </tr>\n    </tbody>\n</table>\n\n<th>Comments</th>\n<table style=\"width:100%\" *ngIf=\"movie\">\n    <thead>\n        <tr>\n            <th style=\"width:30%\">Content</th>\n            <th style=\"width:30%\">Author</th>\n            <th style=\"width:30%\">Important</th>\n        </tr>\n    </thead>\n    <tr *ngFor=\"let comment of movie.comments\">\n        <td style=\"width:30%\">{{ comment.content }}</td>\n        <td style=\"width:30%\">{{ comment.author }}</td>\n        <td style=\"width:30%\">{{ comment.important}}</td>\n    </tr>\n</table>\n<a [routerLink]=\"['/movie']\" routerLinkActive=\"active\">Back</a>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">MOVIES</h1>\n\n<p>This is our Movies Board.</p>\n\n<p *ngIf=\"!movies\"><em>Loading...</em></p>\n\n\n<table style=\"width:100%\" class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"movies\">\n    <thead>\n        <tr>\n            <th style=\"width:10%\">Title</th>\n            <th style=\"width:10%\">Description</th>\n            <th style=\"width:10%\">Genre</th>\n            <th style=\"width:10%\">Duration minutes</th>\n            <th style=\"width:10%\">Year of Release</th>\n            <th style=\"width:10%\">Director</th>\n            <th style=\"width:10%\">No of Comments</th>\n            <th style=\"width:30%\">Operations</th>\n\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let movie of movies\">\n            <td>{{ movie.title }}</td>\n            <td>{{ movie.description }}</td>\n            <td>{{ movie.genre }}</td>\n            <td>{{ movie.minute }}</td>\n            <td>{{ movie.yearOfRelease }}</td>\n            <td>{{ movie.director }}</td>\n            <td>{{ movie.numberOfComments }}</td>\n            <td>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/movie', movie.id]\" routerLinkActive=\"active\">Details</a> |\n                <a class=\"btn btn-warning\">Edit</a> |\n                <a class=\"btn btn-danger\" (click)=\" delete(movie.id)\">Delete</a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<td><a class=\"btn btn-success\" [routerLink]=\"['/movie-add/0']\">Add movie</a></td>\n\n\n\n<!--<input [(ngModel)]=\"name\" />\n\n<p>{{name}}</p>\n\n\n\n<button (click)=\"submit()\">Submit!</button>\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">MOVIES</a>\n            <button class=\"navbar-toggler\"\n                    type=\"button\"\n                    data-toggle=\"collapse\"\n                    data-target=\".navbar-collapse\"\n                    aria-label=\"Toggle navigation\"\n                    [attr.aria-expanded]=\"isExpanded\"\n                    (click)=\"toggle()\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\n                 [ngClass]=\"{ show: isExpanded }\">\n                <ul class=\"navbar-nav flex-grow\">\n\n                    <li class=\"nav-item\"\n                        [routerLinkActive]=\"['link-active']\"\n                        [routerLinkActiveOptions]=\"{ exact: true }\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/movie']\">Movie</a>\n                    </li>\n\n                    <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/comment']\">Comment</a>\n                    </li>\n\n                \n         \n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _movie_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie/movie-details/movie-details.component */ "./src/app/movie/movie-details/movie-details.component.ts");
/* harmony import */ var _movie_movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie/movie-add/movie-add.component */ "./src/app/movie/movie-add/movie-add.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"],
            _movie_movie_component__WEBPACK_IMPORTED_MODULE_11__["MovieComponent"],
            _movie_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailsComponent"],
            _movie_movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_13__["MovieAddComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'movie', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_11__["MovieComponent"] },
                { path: 'comment', component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_10__["CommentComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'movie/:movieId', component: _movie_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailsComponent"] },
                { path: 'movie-add/:id', component: _movie_movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_13__["MovieAddComponent"] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CommentComponent = class CommentComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.name = "test";
        this.loadComments();
    }
    loadComments() {
        this.http.get(this.baseUrl + 'api/Comments').subscribe(result => {
            this.comments = result;
            console.log(this.comments);
        }, error => console.error(error));
    }
    submit() {
        var comment = {};
        comment.author = this.name;
        comment.content = this.name;
        comment.important = true;
        this.http.post(this.baseUrl + 'api/Comments', comment).subscribe(result => {
            console.log('success!');
            this.loadComments();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
            }
        });
    }
};
CommentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
CommentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-comment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], CommentComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 2;
        this.name = "test";
    }
    incrementCounter() {
        this.currentCount++;
        this.name = '';
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.name = "";
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
        this.loadMovies();
    }
    loadMovies() {
        this.http.get(this.baseUrl + 'api/Movies').subscribe(result => {
            this.movies = result;
            console.log(this.movies);
        }, error => console.error(error));
    }
    submit() {
        var movie = {};
        movie.title = this.name;
        movie.description = this.name;
        movie.genre = Genre.Comedy;
        movie.minute = 5;
        movie.yearOfRelease = 1990;
        movie.director = this.name;
        movie.dateAdded = new Date();
        movie.rating = 2;
        movie.watched = true;
        this.http.post(this.baseUrl + 'api/Movies', movie).subscribe(result => {
            console.log('success!');
            this.loadMovies();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
            }
        });
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);

var Genre;
(function (Genre) {
    Genre[Genre["Action"] = 0] = "Action";
    Genre[Genre["Comedy"] = 1] = "Comedy";
    Genre[Genre["Horror"] = 2] = "Horror";
    Genre[Genre["Thriller"] = 3] = "Thriller";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
    constructor() {
        this.heroImageUrl = __webpack_require__(/*! ./images/movie1.jpg */ "./src/app/home/images/movie1.jpg");
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/images/movie1.jpg":
/*!****************************************!*\
  !*** ./src/app/home/images/movie1.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "movie1.jpg";

/***/ }),

/***/ "./src/app/movie/movie-add/movie-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie/movie-add/movie-add.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLWFkZC9tb3ZpZS1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/movie/movie-add/movie-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie/movie-add/movie-add.component.ts ***!
  \********************************************************/
/*! exports provided: MovieAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAddComponent", function() { return MovieAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/movie.service */ "./src/app/movie/shared/movie.service.ts");
/* harmony import */ var _shared_enum_movieGenre_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/enum/movieGenre.enum */ "./src/app/movie/shared/enum/movieGenre.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_enum_movieWatched__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/enum/movieWatched */ "./src/app/movie/shared/enum/movieWatched.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let MovieAddComponent = class MovieAddComponent {
    constructor(movieService, location, fb, route) {
        this.movieService = movieService;
        this.location = location;
        this.fb = fb;
        this.route = route;
        this.movieGenres = Object.values(_shared_enum_movieGenre_enum__WEBPACK_IMPORTED_MODULE_4__["MovieGenre"]);
        this.movieWatched = Object.values(_shared_enum_movieWatched__WEBPACK_IMPORTED_MODULE_6__["MovieWatched"]);
    }
    ngOnInit() {
        this.addMovieForm();
        this.getMovie();
    }
    addMovieForm() {
        this.movieForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            genre: [''],
            minute: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            yearOfRelease: [0],
            director: [''],
            dateAdded: [''],
            rating: [0],
            watched: ['']
        });
    }
    getMovie() {
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        if (id !== 0) {
            this.movieService.getMovie(id)
                .subscribe(result => {
                this.movie = result;
                if (this.movie !== null) {
                    this.movieForm.setValue({
                        title: this.movie.title,
                        description: this.movie.description,
                        genre: this.movie.genre,
                        minute: this.movie.minute,
                        yearOfRelease: this.movie.yearOfRelease,
                        director: this.movie.director,
                        dateAdded: this.movie.dateAdded,
                        rating: this.movie.rating,
                        watched: this.movie.watched,
                    });
                }
            });
        }
    }
    onSubmit({ value, valid }) {
        console.log("wrong place");
        if (valid) {
            var id = parseInt(this.route.snapshot.paramMap.get('id'));
            if (id === 0) {
                this.movieService.add(value)
                    .subscribe(_ => this.location.back(), err => {
                    const validationErrors = err.error.errors;
                    Object.keys(validationErrors).forEach(prop => {
                        const formControl = this.movieForm.get(prop.toLowerCase());
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[prop][0]
                            });
                        }
                    });
                });
            }
            else {
                value.id = id;
                this.movieService.update(id, value)
                    .subscribe(_ => this.location.back(), err => {
                    const validationErrors = err.error.errors;
                    Object.keys(validationErrors).forEach(prop => {
                        const formControl = this.movieForm.get(prop.toLowerCase());
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[prop][0]
                            });
                        }
                    });
                });
            }
        }
    }
    goBack() {
        this.location.back();
    }
};
MovieAddComponent.ctorParameters = () => [
    { type: _shared_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MovieAddComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movie-add',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movie-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-add/movie-add.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./movie-add.component.css */ "./src/app/movie/movie-add/movie-add.component.css")).default]
    }),
    __metadata("design:paramtypes", [_shared_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MovieAddComponent);



/***/ }),

/***/ "./src/app/movie/movie-details/movie-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/movie/movie-details/movie-details.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-link {\r\n    border: none;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #212529\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vdmllL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0bi1saW5rIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMyMTI1MjlcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/movie/movie-details/movie-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/movie/movie-details/movie-details.component.ts ***!
  \****************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(http, baseUrl, route) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.route = route;
    }
    loadMovie(movieId) {
        this.http.get(this.baseUrl + 'api/Movies/' + movieId).subscribe(result => {
            this.movie = result;
            console.log(this.movie);
        }, error => console.error(error));
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadMovie(params.get('movieId'));
        });
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MovieDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movie-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie-details/movie-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./movie-details.component.css */ "./src/app/movie/movie-details/movie-details.component.css")).default]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MovieDetailsComponent);



/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MovieComponent = class MovieComponent {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.name = "";
        this.loadMovies();
    }
    loadMovies() {
        this.http.get(this.baseUrl + 'api/Movies').subscribe(result => {
            this.movies = result;
            console.log(this.movies);
        }, error => console.error(error));
    }
    delete(movieId) {
        if (confirm('Are you sure you want to delete the movie with id ' + movieId + '?')) {
            this.http.delete(this.baseUrl + 'api/Movies/' + movieId)
                .subscribe(result => {
                alert('Movie successfully deleted!');
                this.loadMovies();
            }, error => alert('Cannot delete movie - maybe it has comments?'));
        }
    }
    submit() {
        var movie = {};
        movie.title = this.name;
        movie.description = this.name;
        movie.genre = Genre.Comedy;
        movie.minute = 5;
        movie.yearOfRelease = 1990;
        movie.director = this.name;
        movie.dateAdded = new Date();
        movie.rating = 2;
        movie.watched = true;
        this.http.post(this.baseUrl + 'api/Movies', movie).subscribe(result => {
            console.log('success!');
            this.loadMovies();
        }, error => {
            if (error.status == 400) {
                console.log(error.error.errors);
            }
        });
    }
};
MovieComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
MovieComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movie',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie/movie.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], MovieComponent);

var Genre;
(function (Genre) {
    Genre[Genre["Action"] = 0] = "Action";
    Genre[Genre["Comedy"] = 1] = "Comedy";
    Genre[Genre["Horror"] = 2] = "Horror";
    Genre[Genre["Thriller"] = 3] = "Thriller";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/movie/shared/enum/movieGenre.enum.ts":
/*!******************************************************!*\
  !*** ./src/app/movie/shared/enum/movieGenre.enum.ts ***!
  \******************************************************/
/*! exports provided: MovieGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieGenre", function() { return MovieGenre; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MovieGenre;
(function (MovieGenre) {
    MovieGenre["Action"] = "Action";
    MovieGenre["Comedy"] = "Comedy";
    MovieGenre["Horror"] = "Horror";
    MovieGenre["Thriller"] = "Thriller";
})(MovieGenre || (MovieGenre = {}));


/***/ }),

/***/ "./src/app/movie/shared/enum/movieWatched.ts":
/*!***************************************************!*\
  !*** ./src/app/movie/shared/enum/movieWatched.ts ***!
  \***************************************************/
/*! exports provided: MovieWatched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieWatched", function() { return MovieWatched; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MovieWatched;
(function (MovieWatched) {
    MovieWatched["True"] = "True";
    MovieWatched["False"] = "False";
})(MovieWatched || (MovieWatched = {}));


/***/ }),

/***/ "./src/app/movie/shared/movie.service.ts":
/*!***********************************************!*\
  !*** ./src/app/movie/shared/movie.service.ts ***!
  \***********************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MovieService = class MovieService {
    constructor(httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
    }
    getAllMovies() {
        return this.httpClient.get(this.baseUrl + 'api/Movies');
    }
    getMovie(id) {
        return this.httpClient.get(this.baseUrl + 'api/Movies/' + id);
    }
    add(movie) {
        return this.httpClient.post(this.baseUrl + 'api/Movies', movie);
    }
    delete(id) {
        return this.httpClient.delete(this.baseUrl + 'api/Movies/' + id);
    }
    update(id, movie) {
        return this.httpClient.put(this.baseUrl + 'api/Movies/' + id, movie);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
MovieService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], MovieService);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Movies-master\MoviesLab2\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map