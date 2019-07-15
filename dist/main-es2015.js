(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/create-event.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/create-event.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>New Event</h1>\r\n<hr />\r\n<div class=\"col-md-6\">\r\n  <form\r\n    #newEventForm=\"ngForm\"\r\n    (ngSubmit)=\"saveEvent(newEventForm.value)\"\r\n    autocomplete=\"off\"\r\n    novalidate\r\n  >\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{\r\n        error:\r\n          newEventForm.controls.name?.invalid &&\r\n          newEventForm.controls.name?.touched\r\n      }\"\r\n    >\r\n      <label for=\"eventName\">Event Name:</label>\r\n      <em\r\n        *ngIf=\"\r\n          newEventForm.controls.name?.invalid &&\r\n          newEventForm.controls.name?.touched\r\n        \"\r\n        >Required</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(newEvent.name)\"\r\n        name=\"name\"\r\n        required\r\n        id=\"name\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Name of your event...\"\r\n      />\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{\r\n        error:\r\n          newEventForm.controls.date?.invalid &&\r\n          newEventForm.controls.date?.touched\r\n      }\"\r\n    >\r\n      <label for=\"eventDate\">Event Date:</label>\r\n      <em\r\n        *ngIf=\"\r\n          newEventForm.controls.date?.invalid &&\r\n          newEventForm.controls.date?.touched\r\n        \"\r\n        >Required</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(newEvent.date)\"\r\n        name=\"date\"\r\n        required\r\n        id=\"eventDate\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"format (mm/dd/yyyy)...\"\r\n      />\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{\r\n        error:\r\n          newEventForm.controls.time?.invalid &&\r\n          newEventForm.controls.time?.touched\r\n      }\"\r\n    >\r\n      <label for=\"eventTime\">Event Time:</label>\r\n      <em\r\n        *ngIf=\"\r\n          newEventForm.controls.time?.invalid &&\r\n          newEventForm.controls.time?.touched\r\n        \"\r\n        >Required</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(newEvent.time)\"\r\n        name=\"time\"\r\n        required\r\n        id=\"eventTime\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"start and end time...\"\r\n      />\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{\r\n        error:\r\n          newEventForm.controls.price?.invalid &&\r\n          newEventForm.controls.price?.touched\r\n      }\"\r\n    >\r\n      <label for=\"eventPrice\">Event Price:</label>\r\n      <em\r\n        *ngIf=\"\r\n          newEventForm.controls.price?.invalid &&\r\n          newEventForm.controls.price?.touched\r\n        \"\r\n        >Required</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(newEvent.price)\"\r\n        name=\"price\"\r\n        required\r\n        id=\"eventPrice\"\r\n        type=\"text\"\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        placeholder=\"event price...\"\r\n      />\r\n    </div>\r\n    <div ngModelGroup=\"location\" #locationGroup=\"ngModelGroup\" validateLocation>\r\n      <div class=\"form-group\">\r\n        <label for=\"address\">Event Location:</label>\r\n        <em *ngIf=\"locationGroup?.invalid && locationGroup?.touched\"\r\n          >You must enter the full location or an online URL</em\r\n        >\r\n        <input\r\n          (ngModel)=\"(newEvent.address)\"\r\n          name=\"address\"\r\n          id=\"address\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"Address of event...\"\r\n        />\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <input\r\n            (ngModel)=\"(newEvent.city)\"\r\n            name=\"city\"\r\n            id=\"city\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"City...\"\r\n          />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <input\r\n            (ngModel)=\"(newEvent.country)\"\r\n            name=\"country\"\r\n            id=\"country\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Country...\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"onlineUrl\">Online Url:</label>\r\n      <input\r\n        (ngModel)=\"(newEvent.onlineUrl)\"\r\n        name=\"onlineUrl\"\r\n        id=\"onlineUrl\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Online Url...\"\r\n        (change)=\"\r\n          locationGroup.control.controls.address.updateValueAndValidity()\r\n        \"\r\n      />\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{\r\n        error:\r\n          newEventForm.controls.imageUrl?.invalid &&\r\n          newEventForm.controls.imageUrl?.touched\r\n      }\"\r\n    >\r\n      <label for=\"imageUrl\">Image:</label>\r\n      <em\r\n        *ngIf=\"\r\n          newEventForm.controls.imageUrl?.invalid &&\r\n          newEventForm.controls.imageUrl?.touched &&\r\n          newEventForm.controls.imageUrl?.errors.required\r\n        \"\r\n        >Required</em\r\n      >\r\n      <em\r\n        *ngIf=\"\r\n          newEventForm.controls.imageUrl?.invalid &&\r\n          newEventForm.controls.imageUrl?.touched &&\r\n          newEventForm.controls.imageUrl?.errors.pattern\r\n        \"\r\n        >Must be a png or jpg url</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(newEvent.imageUrl)\"\r\n        name=\"imageUrl\"\r\n        required\r\n        pattern=\".*\\/.*.(png|jpg)\"\r\n        id=\"imageUrl\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"url of image...\"\r\n      />\r\n      <img\r\n        [src]=\"newEventForm.controls.imageUrl.value\"\r\n        *ngIf=\"newEventForm.controls.imageUrl?.valid\"\r\n      />\r\n    </div>\r\n\r\n    <button\r\n      type=\"submit\"\r\n      class=\"btn btn-primary\"\r\n      [disabled]=\"newEventForm.invalid\"\r\n    >\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/event-detail/create-session.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/event-detail/create-session.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <h3>Create Session</h3>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <form\r\n    [formGroup]=\"newSessionForm\"\r\n    (ngSubmit)=\"saveSession(newSessionForm.value)\"\r\n    autocomplete=\"off\"\r\n  >\r\n    <div class=\"form-group\" [ngClass]=\"{ error: name.invalid && name.dirty }\">\r\n      <label for=\"sessionName\">Session Name:</label>\r\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\r\n      <input\r\n        formControlName=\"name\"\r\n        id=\"sessionName\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"session name...\"\r\n      />\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{ error: presenter.invalid && presenter.dirty }\"\r\n    >\r\n      <label for=\"eventDate\">Presenter:</label>\r\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\r\n      <input\r\n        formControlName=\"presenter\"\r\n        id=\"presenter\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"presenter...\"\r\n      />\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{ error: duration.invalid && duration.dirty }\"\r\n    >\r\n      <label for=\"duration\">Duration:</label>\r\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\r\n      <select class=\"form-control\" formControlName=\"duration\">\r\n        <option value=\"\">select duration...</option>\r\n        <option value=\"1\">Half Hour</option>\r\n        <option value=\"2\">1 Hour</option>\r\n        <option value=\"3\">Half Day</option>\r\n        <option value=\"4\">Full Day</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ error: level.invalid && level.dirty }\">\r\n      <label for=\"level\">Level:</label>\r\n      <em *ngIf=\"level.invalid && level.dirty\">Required</em>\r\n      <select class=\"form-control\" formControlName=\"level\">\r\n        <option value=\"\">select level...</option>\r\n        <option value=\"Beginner\">Beginner</option>\r\n        <option value=\"Intermediate\">Intermediate</option>\r\n        <option value=\"Advanced\">Advanced</option>\r\n      </select>\r\n    </div>\r\n    <div\r\n      class=\"form-group\"\r\n      [ngClass]=\"{ error: abstract.invalid && abstract.dirty }\"\r\n    >\r\n      <label for=\"abstract\">Abstract:</label>\r\n      <em\r\n        *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.required\"\r\n        >Required</em\r\n      >\r\n      <em\r\n        *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.maxlength\"\r\n        >Cannot exceed 400 characters</em\r\n      >\r\n      <em\r\n        *ngIf=\"\r\n          abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords\r\n        \"\r\n        >Restricted Words Found: {{ abstract.errors.restrictedWords }}</em\r\n      >\r\n      <textarea\r\n        formControlName=\"abstract\"\r\n        id=\"abstract\"\r\n        rows=\"3\"\r\n        class=\"form-control\"\r\n        placeholder=\"abstract...\"\r\n      ></textarea>\r\n    </div>\r\n    <button\r\n      type=\"submit\"\r\n      class=\"btn btn-primary\"\r\n      [disabled]=\"newSessionForm.invalid\"\r\n    >\r\n      Save\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/event-detail/event-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/event-detail/event-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class=\"event-image\" [src]=\"event?.imageUrl\" [alt]=\"event?.name\" />\n\n  <div class=\"row\">\n    <div class=\"col-md-11\">\n      <h2>{{ event?.name | uppercase }}</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div><strong>Date:</strong> {{ event?.date | date: \"shortDate\" }}</div>\n      <div><strong>Time:</strong> {{ event?.time }}</div>\n      <div><strong>Price:</strong> {{ event?.price | currency: \"USD\" }}</div>\n    </div>\n    <div class=\"col-md-6\">\n      <address>\n        <strong>Address:</strong><br />\n        {{ event?.location?.address }}<br />\n        {{ event?.location?.city }}, {{ event?.location?.country }}\n      </address>\n    </div>\n  </div>\n\n  <hr />\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <h3 style=\"margin:0\">Sessions</h3>\n    </div>\n    <div class=\"col-md-7\" style=\"margin-bottom: 10px\">\n      <div class=\"btn-group btn-group-sm\" style=\"margin: 0 20px;\">\n        <button\n          class=\"btn btn-default\"\n          [class.active]=\"sortBy === 'name'\"\n          (click)=\"sortBy = 'name'\"\n        >\n          By Name\n        </button>\n\n        <button\n          class=\"btn btn-default\"\n          [class.active]=\"sortBy === 'votes'\"\n          (click)=\"sortBy = 'votes'\"\n        >\n          By Votes\n        </button>\n      </div>\n\n      <div class=\"btn-group btn-group-sm\">\n        <button\n          class=\"btn btn-default\"\n          [class.active]=\"filterBy === 'all'\"\n          (click)=\"(filterBy === 'all')\"\n        >\n          All\n        </button>\n        <button\n          class=\"btn btn-default\"\n          [class.active]=\"filterBy === 'beginner'\"\n          (click)=\"filterBy = 'beginner'\"\n        >\n          Beginner\n        </button>\n        <button\n          class=\"btn btn-default\"\n          [class.active]=\"filterBy === 'intermediate'\"\n          (click)=\"filterBy = 'intermediate'\"\n        >\n          Intermediate\n        </button>\n        <button\n          class=\"btn btn-default\"\n          [class.active]=\"filterBy === 'advanced'\"\n          (click)=\"filterBy = 'advanced'\"\n        >\n          Advanced\n        </button>\n      </div>\n    </div>\n\n    <div class=\"col-md-2\">\n      <a (click)=\"addSession()\">Add Session</a>\n    </div>\n  </div>\n  <session-list\n    [eventId]=\"event?.id\"\n    [sortBy]=\"sortBy\"\n    [sessions]=\"event?.sessions\"\n    *ngIf=\"!addMode\"\n    [filterBy]=\"filterBy\"\n  ></session-list>\n  <create-session\n    *ngIf=\"addMode\"\n    (saveNewSession)=\"saveNewSession($event)\"\n    (cancelAddSession)=\"cancelAddSession()\"\n  ></create-session>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/event-detail/session-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/event-detail/session-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\r\n  <div class=\"col-md-1\">\r\n    <div *ngIf=\"auth.isAuthenticated()\">\r\n      <upvote\r\n        (vote)=\"toggleVote(session)\"\r\n        [count]=\"session.voters.length\"\r\n        [voted]=\"userHasVoted(session)\"\r\n      ></upvote>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-10\">\r\n    <collapsible-well>\r\n      <div well-title>\r\n        {{ session.name }}\r\n        <i\r\n          *ngIf=\"session.voters.length > 3\"\r\n          class=\"glyphicon glyphicon-fire\"\r\n          style=\"color:red;\"\r\n        ></i>\r\n      </div>\r\n      <div well-body>\r\n        <h6>{{ session.presenter }}</h6>\r\n        <span>Duration: {{ session.duration | duration }}</span\r\n        ><br />\r\n        <span>Level: {{ session.level }}</span>\r\n        <p>{{ session.abstract }}</p>\r\n      </div>\r\n    </collapsible-well>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/navbar.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/navbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">ngEvents</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a\r\n            [routerLink]=\"['/events']\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            >All Events</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/events/new']\" routerLinkActive=\"active\"\r\n            >Create Event</a\r\n          >\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            Events\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li>\r\n              <a href=\"\">Angular Connect</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <div class=\"navbar-header navbar-right\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a [routerLink]=\"['user/login']\" *ngIf=\"!auth.isAuthenticated()\"\r\n              >Login</a\r\n            >\r\n            <a [routerLink]=\"['user/profile']\" *ngIf=\"auth.isAuthenticated()\"\r\n              >Welcome {{ auth.currentUser.firstName }}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <form\r\n        id=\"searchForm\"\r\n        class=\"navbar-form navbar-right\"\r\n        (ngSubmit)=\"searchSessions(searchTerm)\"\r\n      >\r\n        <div class=\"form-group\">\r\n          <input\r\n            [(ngModel)]=\"searchTerm\"\r\n            name=\"searchTerm\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Search Sessions\"\r\n          />\r\n        </div>\r\n        <button class=\"btn btn-default\" modal-trigger=\"searchResults\">\r\n          Search\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<simple-modal\r\n  elementId=\"searchResults\"\r\n  title=\"Matching Sessions\"\r\n  closeOnBodyClick=\"true\"\r\n>\r\n  <div class=\"list-group\">\r\n    <a\r\n      class=\"list-group-item\"\r\n      *ngFor=\"let session of foundSessions\"\r\n      [routerLink]=\"['/events', session.eventId]\"\r\n      >{{ session.name }}</a\r\n    >\r\n  </div>\r\n</simple-modal>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.checkAuthenticationStatus();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/navbar.component */ "./src/app/nav/navbar.component.ts");
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errors/404.component */ "./src/app/errors/404.component.ts");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _common_common_barrel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/common-barrel */ "./src/app/common/common-barrel.ts");
/* harmony import */ var _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/event-barrel */ "./src/app/events/event-barrel.ts");






// Component Imports



// Service Imports

// Route Imports

// Common Imports

// Event Imports

// Global 3rd Party Objects
let toastr = window["toastr"];
let jQuery = window["$"];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["EventsListComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["EventThumbnailComponent"],
            _nav_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
            _common_common_barrel__WEBPACK_IMPORTED_MODULE_11__["CollapsibleWellComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["EventDetailComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["CreateEventComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["CreateSessionComponent"],
            _errors_404_component__WEBPACK_IMPORTED_MODULE_8__["Error404Component"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["SessionListComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["DurationPipe"],
            _common_common_barrel__WEBPACK_IMPORTED_MODULE_11__["SimpleModalComponent"],
            _common_common_barrel__WEBPACK_IMPORTED_MODULE_11__["ModalTriggerDirective"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["UpVoteComponent"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["LocationValidator"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"])
        ],
        providers: [
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["EventService"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["VoterService"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["EventResolver"],
            _events_event_barrel__WEBPACK_IMPORTED_MODULE_12__["EventsListResolver"],
            _user_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            {
                provide: _common_common_barrel__WEBPACK_IMPORTED_MODULE_11__["TOASTR_TOKEN"],
                useValue: toastr
            },
            {
                provide: _common_common_barrel__WEBPACK_IMPORTED_MODULE_11__["JQ_TOKEN"],
                useValue: jQuery
            },
            { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);

function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm("You have not saved this event. Do you really want to cancel?");
    }
    return true;
}


/***/ }),

/***/ "./src/app/common/collapsible-well.component.ts":
/*!******************************************************!*\
  !*** ./src/app/common/collapsible-well.component.ts ***!
  \******************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CollapsibleWellComponent = class CollapsibleWellComponent {
    constructor() {
        this.visible = true;
    }
    toggleContent() {
        this.visible = !this.visible;
    }
};
CollapsibleWellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "collapsible-well",
        template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `
    })
], CollapsibleWellComponent);



/***/ }),

/***/ "./src/app/common/common-barrel.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common-barrel.ts ***!
  \*****************************************/
/*! exports provided: TOASTR_TOKEN, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastr.service */ "./src/app/common/toastr.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return _toastr_service__WEBPACK_IMPORTED_MODULE_0__["TOASTR_TOKEN"]; });

/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jQuery.service */ "./src/app/common/jQuery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return _jQuery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"]; });

/* harmony import */ var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapsible-well.component */ "./src/app/common/collapsible-well.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return _collapsible_well_component__WEBPACK_IMPORTED_MODULE_2__["CollapsibleWellComponent"]; });

/* harmony import */ var _simple_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-modal.component */ "./src/app/common/simple-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return _simple_modal_component__WEBPACK_IMPORTED_MODULE_3__["SimpleModalComponent"]; });

/* harmony import */ var _modal_trigger_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-trigger.directive */ "./src/app/common/modal-trigger.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return _modal_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["ModalTriggerDirective"]; });








/***/ }),

/***/ "./src/app/common/jQuery.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/jQuery.service.ts ***!
  \******************************************/
/*! exports provided: JQ_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return JQ_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

let JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("jquery");


/***/ }),

/***/ "./src/app/common/modal-trigger.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/common/modal-trigger.directive.ts ***!
  \***************************************************/
/*! exports provided: ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return ModalTriggerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jQuery.service */ "./src/app/common/jQuery.service.ts");



let ModalTriggerDirective = class ModalTriggerDirective {
    constructor($, elementRef) {
        this.$ = $;
        this.el = elementRef.nativeElement;
    }
    ngOnInit() {
        this.el.addEventListener("click", e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("modal-trigger"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalTriggerDirective.prototype, "modalId", void 0);
ModalTriggerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[modal-trigger]"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ModalTriggerDirective);



/***/ }),

/***/ "./src/app/common/simple-modal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/common/simple-modal.component.ts ***!
  \**************************************************/
/*! exports provided: SimpleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return SimpleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jQuery.service */ "./src/app/common/jQuery.service.ts");



let SimpleModalComponent = class SimpleModalComponent {
    constructor($) {
        this.$ = $;
    }
    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.containerEl.nativeElement).modal("hide");
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SimpleModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SimpleModalComponent.prototype, "elementId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SimpleModalComponent.prototype, "closeOnBodyClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContainer", null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SimpleModalComponent.prototype, "containerEl", void 0);
SimpleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "simple-modal",
        template: `
    <div id="{{ elementId }}" #modalContainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
        styles: ["\n      .modal-body {\n        height: 250px;\n        overflow-y: scroll;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], SimpleModalComponent);



/***/ }),

/***/ "./src/app/common/toastr.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/toastr.service.ts ***!
  \******************************************/
/*! exports provided: TOASTR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return TOASTR_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

let TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](`toastr`);


/***/ }),

/***/ "./src/app/errors/404.component.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/404.component.ts ***!
  \*****************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() {
    }
};
Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <h1 class="errorMessage">404'd</h1>
  `,
        styles: ["\n    .errorMessage { \n      margin-top:150px; \n      font-size: 170px;\n      text-align: center; \n    }"]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Error404Component);



/***/ }),

/***/ "./src/app/events/create-event.component.ts":
/*!**************************************************!*\
  !*** ./src/app/events/create-event.component.ts ***!
  \**************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");




let CreateEventComponent = class CreateEventComponent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }
    cancel() {
        this.router.navigate(['/events']);
    }
};
CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./create-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/create-event.component.html"),
        styles: ["\n      em {\n        float: right;\n        color: #e05c65;\n        padding-left: 10px;\n      }\n      .error input {\n        background-color: #e3c3c5;\n      }\n      .error ::-webkit-input-placeholder,\n      .error :ms-input-placeholder,\n      .error ::-moz-placeholder,\n      .error :-moz-placeholder {\n        color: #999;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
], CreateEventComponent);



/***/ }),

/***/ "./src/app/events/event-barrel.ts":
/*!****************************************!*\
  !*** ./src/app/events/event-barrel.ts ***!
  \****************************************/
/*! exports provided: CreateEventComponent, EventThumbnailComponent, EventsListComponent, EventsListResolver, LocationValidator, EventResolver, EventService, restrictedWords, DurationPipe, EventDetailComponent, CreateSessionComponent, SessionListComponent, UpVoteComponent, VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event.component */ "./src/app/events/create-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return _create_event_component__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"]; });

/* harmony import */ var _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-thumbnail.component */ "./src/app/events/event-thumbnail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__["EventThumbnailComponent"]; });

/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-list.component */ "./src/app/events/events-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return _events_list_component__WEBPACK_IMPORTED_MODULE_2__["EventsListComponent"]; });

/* harmony import */ var _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-list-resolver.service */ "./src/app/events/events-list-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListResolver", function() { return _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_3__["EventsListResolver"]; });

/* harmony import */ var _shared_event_shared_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/event-shared-barrel */ "./src/app/events/shared/event-shared-barrel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _shared_event_shared_barrel__WEBPACK_IMPORTED_MODULE_4__["EventService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _shared_event_shared_barrel__WEBPACK_IMPORTED_MODULE_4__["restrictedWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _shared_event_shared_barrel__WEBPACK_IMPORTED_MODULE_4__["DurationPipe"]; });

/* harmony import */ var _event_detail_event_detail_barrel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-detail/event-detail-barrel */ "./src/app/events/event-detail/event-detail-barrel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return _event_detail_event_detail_barrel__WEBPACK_IMPORTED_MODULE_5__["EventDetailComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _event_detail_event_detail_barrel__WEBPACK_IMPORTED_MODULE_5__["CreateSessionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _event_detail_event_detail_barrel__WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpVoteComponent", function() { return _event_detail_event_detail_barrel__WEBPACK_IMPORTED_MODULE_5__["UpVoteComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _event_detail_event_detail_barrel__WEBPACK_IMPORTED_MODULE_5__["VoterService"]; });

/* harmony import */ var _location_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-validator.directive */ "./src/app/events/location-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationValidator", function() { return _location_validator_directive__WEBPACK_IMPORTED_MODULE_6__["LocationValidator"]; });

/* harmony import */ var _event_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-resolver.service */ "./src/app/events/event-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return _event_resolver_service__WEBPACK_IMPORTED_MODULE_7__["EventResolver"]; });











/***/ }),

/***/ "./src/app/events/event-detail/create-session.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-detail/create-session.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return CreateSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_event_shared_barrel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/event-shared-barrel */ "./src/app/events/shared/event-shared-barrel.ts");




let CreateSessionComponent = class CreateSessionComponent {
    constructor() {
        this.saveNewSession = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelAddSession = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.presenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.abstract = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(400),
            Object(_shared_event_shared_barrel__WEBPACK_IMPORTED_MODULE_3__["restrictedWords"])(['foo', 'bar'])
        ]);
        this.newSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }
    saveSession(formValues) {
        const session = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            duration: +formValues.duration,
            voters: []
        };
        this.saveNewSession.emit(session);
    }
    cancel() {
        this.cancelAddSession.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateSessionComponent.prototype, "saveNewSession", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreateSessionComponent.prototype, "cancelAddSession", void 0);
CreateSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'create-session',
        template: __webpack_require__(/*! raw-loader!./create-session.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/event-detail/create-session.component.html"),
        styles: ["\n      em {\n        float: right;\n        color: #e05c65;\n        padding-left: 10px;\n      }\n      .error input,\n      .error select,\n      .error textarea {\n        background-color: #e3c3c5;\n      }\n      .error ::-webkit-input-placeholder,\n      .error :ms-input-placeholder,\n      .error ::-moz-placeholder,\n      .error :-moz-placeholder {\n        color: #999;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreateSessionComponent);



/***/ }),

/***/ "./src/app/events/event-detail/event-detail-barrel.ts":
/*!************************************************************!*\
  !*** ./src/app/events/event-detail/event-detail-barrel.ts ***!
  \************************************************************/
/*! exports provided: EventDetailComponent, CreateSessionComponent, SessionListComponent, UpVoteComponent, VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-detail.component */ "./src/app/events/event-detail/event-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return _event_detail_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailComponent"]; });

/* harmony import */ var _create_session_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-session.component */ "./src/app/events/event-detail/create-session.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _create_session_component__WEBPACK_IMPORTED_MODULE_1__["CreateSessionComponent"]; });

/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list.component */ "./src/app/events/event-detail/session-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _session_list_component__WEBPACK_IMPORTED_MODULE_2__["SessionListComponent"]; });

/* harmony import */ var _upvote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upvote.component */ "./src/app/events/event-detail/upvote.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpVoteComponent", function() { return _upvote_component__WEBPACK_IMPORTED_MODULE_3__["UpVoteComponent"]; });

/* harmony import */ var _voter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voter.service */ "./src/app/events/event-detail/voter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _voter_service__WEBPACK_IMPORTED_MODULE_4__["VoterService"]; });








/***/ }),

/***/ "./src/app/events/event-detail/event-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/event-detail/event-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/event.service */ "./src/app/events/shared/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EventDetailComponent = class EventDetailComponent {
    constructor(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    ngOnInit() {
        this.route.data.forEach(data => {
            this.event = data.event;
            this.addMode = false;
        });
    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }
    cancelAddSession() {
        this.addMode = false;
    }
};
EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-detail',
        template: __webpack_require__(/*! raw-loader!./event-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/event-detail/event-detail.component.html"),
        styles: ["\n      .container {\n        padding: 0 20px;\n      }\n      .event-image {\n        height: 100px;\n      }\n      a {\n        cursor: pointer;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EventDetailComponent);



/***/ }),

/***/ "./src/app/events/event-detail/session-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/event-detail/session-list.component.ts ***!
  \***************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _voter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voter.service */ "./src/app/events/event-detail/voter.service.ts");




let SessionListComponent = class SessionListComponent {
    constructor(voterService, auth) {
        this.voterService = voterService;
        this.auth = auth;
        this.visibleSessions = [];
    }
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name'
                ? this.visibleSessions.sort(sortByNameAsc)
                : this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    toggleVote(session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    userHasVoted(session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }
    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SessionListComponent.prototype, "sessions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SessionListComponent.prototype, "filterBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SessionListComponent.prototype, "sortBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SessionListComponent.prototype, "eventId", void 0);
SessionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'session-list',
        template: __webpack_require__(/*! raw-loader!./session-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/event-detail/session-list.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_voter_service__WEBPACK_IMPORTED_MODULE_3__["VoterService"], src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], SessionListComponent);

const sortByNameAsc = (session1, session2) => {
    if (session1.name > session2.name) {
        return 1;
    }
    else if (session1.name === session2.name) {
        return 0;
    }
    else {
        return -1;
    }
};
const sortByVotesDesc = (session1, session2) => {
    return session2.voters.length - session1.voters.length;
};


/***/ }),

/***/ "./src/app/events/event-detail/upvote.component.css":
/*!**********************************************************!*\
  !*** ./src/app/events/event-detail/upvote.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".votingWidgetContainer {\r\n  padding-left: 24px;\r\n}\r\n\r\n.votingWidget {\r\n  height: 64px;\r\n  padding-top: 7px;\r\n  border-radius: 21px;\r\n}\r\n\r\n.votingButton {\r\n  margin-left: -7px;\r\n  margin-top: 1px;\r\n  cursor: pointer;\r\n}\r\n\r\n.votingButton i {\r\n  color: white;\r\n}\r\n\r\n.badge-inverse {\r\n  background-color: #fff;\r\n  color: #4e5d6c;\r\n}\r\n\r\n.votingCount {\r\n  margin-left: -11px;\r\n  margin-top: 1px;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbC91cHZvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbC91cHZvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b3RpbmdXaWRnZXRDb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG5cclxuLnZvdGluZ1dpZGdldCB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcclxufVxyXG5cclxuLnZvdGluZ0J1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZvdGluZ0J1dHRvbiBpIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYWRnZS1pbnZlcnNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjNGU1ZDZjO1xyXG59XHJcblxyXG4udm90aW5nQ291bnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/events/event-detail/upvote.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/events/event-detail/upvote.component.ts ***!
  \*********************************************************/
/*! exports provided: UpVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpVoteComponent", function() { return UpVoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UpVoteComponent = class UpVoteComponent {
    constructor() {
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    onClick() {
        this.vote.emit({});
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UpVoteComponent.prototype, "count", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], UpVoteComponent.prototype, "voted", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UpVoteComponent.prototype, "vote", void 0);
UpVoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'upvote',
        template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="votingWidget well">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
        styles: [__webpack_require__(/*! ./upvote.component.css */ "./src/app/events/event-detail/upvote.component.css")]
    })
], UpVoteComponent);



/***/ }),

/***/ "./src/app/events/event-detail/voter.service.ts":
/*!******************************************************!*\
  !*** ./src/app/events/event-detail/voter.service.ts ***!
  \******************************************************/
/*! exports provided: VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return VoterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let VoterService = class VoterService {
    constructor(http) {
        this.http = http;
    }
    deleteVoter(eventId, session, voterName) {
        session.voters = session.voters.filter(voter => voter !== voterName);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http
            .delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addVoter')))
            .subscribe();
    }
    addVoter(eventId, session, voterName) {
        session.voters.push(voterName);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.http
            .post(url, {}, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addVoter')))
            .subscribe();
    }
    userHasVoted(session, voterName) {
        return session.voters.some(voter => voter === voterName);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error('error: ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
VoterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VoterService);



/***/ }),

/***/ "./src/app/events/event-resolver.service.ts":
/*!**************************************************!*\
  !*** ./src/app/events/event-resolver.service.ts ***!
  \**************************************************/
/*! exports provided: EventResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return EventResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");



let EventResolver = class EventResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    resolve(route) {
        return this.eventService.getEvent(route.params["id"]);
    }
};
EventResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
], EventResolver);



/***/ }),

/***/ "./src/app/events/event-thumbnail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.ts ***!
  \*****************************************************/
/*! exports provided: EventThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return EventThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventThumbnailComponent = class EventThumbnailComponent {
    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
            return [];
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventThumbnailComponent.prototype, "event", void 0);
EventThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'event-thumbnail',
        template: `
    <div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date: {{ event?.date | date: "shortDate" }}</div>
      <div [ngSwitch]="event?.time" [ngClass]="getStartTimeClass()">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{ event?.price | currency: "USD" }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span>&nbsp;</span>
        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">Online Url: {{ event?.onlineUrl }}</div>
    </div>
  `,
        styles: ["\n      .green {\n        color: #003300 !important;\n      }\n      .bold {\n        font-weight: bold;\n      }\n      .thumbnail {\n        min-height: 210px;\n      }\n      .pad-left {\n        margin-left: 10px;\n      }\n      .well div {\n        color: #bbb;\n      }\n    "]
    })
], EventThumbnailComponent);



/***/ }),

/***/ "./src/app/events/events-list-resolver.service.ts":
/*!********************************************************!*\
  !*** ./src/app/events/events-list-resolver.service.ts ***!
  \********************************************************/
/*! exports provided: EventsListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListResolver", function() { return EventsListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");



let EventsListResolver = class EventsListResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    resolve() {
        return this.eventService.getEvents();
    }
};
EventsListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
], EventsListResolver);



/***/ }),

/***/ "./src/app/events/events-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/events/events-list.component.ts ***!
  \*************************************************/
/*! exports provided: EventsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return EventsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");




let EventsListComponent = class EventsListComponent {
    constructor(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    ngOnInit() {
        this.events = this.route.snapshot.data.events;
    }
};
EventsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], EventsListComponent);



/***/ }),

/***/ "./src/app/events/location-validator.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/events/location-validator.directive.ts ***!
  \********************************************************/
/*! exports provided: LocationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationValidator", function() { return LocationValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var LocationValidator_1;


let LocationValidator = LocationValidator_1 = class LocationValidator {
    validate(formGroup) {
        let addressControl = formGroup.controls["address"];
        let cityControl = formGroup.controls["city"];
        let countryControl = formGroup.controls["country"];
        let onlineUrlControl = formGroup.root.controls["onlineUrl"];
        if ((addressControl &&
            addressControl.value &&
            cityControl &&
            cityControl.value &&
            countryControl &&
            countryControl.value) ||
            (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false };
        }
    }
};
LocationValidator = LocationValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[validateLocation]",
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: LocationValidator_1,
                multi: true
            }
        ]
    })
], LocationValidator);



/***/ }),

/***/ "./src/app/events/shared/duration.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/events/shared/duration.pipe.ts ***!
  \************************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DurationPipe = class DurationPipe {
    transform(value) {
        switch (value) {
            case 1:
                return 'Half Hour';
            case 2:
                return 'One Hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
            default:
                return value.toString();
        }
    }
};
DurationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'duration'
    })
], DurationPipe);



/***/ }),

/***/ "./src/app/events/shared/event-shared-barrel.ts":
/*!******************************************************!*\
  !*** ./src/app/events/shared/event-shared-barrel.ts ***!
  \******************************************************/
/*! exports provided: EventService, restrictedWords, DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.service */ "./src/app/events/shared/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });

/* harmony import */ var _restricted_words_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restricted-words-validator */ "./src/app/events/shared/restricted-words-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _restricted_words_validator__WEBPACK_IMPORTED_MODULE_1__["restrictedWords"]; });

/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duration.pipe */ "./src/app/events/shared/duration.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _duration_pipe__WEBPACK_IMPORTED_MODULE_2__["DurationPipe"]; });






/***/ }),

/***/ "./src/app/events/shared/event.service.ts":
/*!************************************************!*\
  !*** ./src/app/events/shared/event.service.ts ***!
  \************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let EventService = class EventService {
    constructor(http) {
        this.http = http;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error('error: ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    getEvents() {
        return this.http
            .get('/api/events')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getEvents', [])));
    }
    getEvent(id) {
        return this.http
            .get('/api/events/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getEvent')));
    }
    saveEvent(event) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http
            .post('/api/events', event, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('saveEvent')));
    }
    searchSessions(searchTerm) {
        return this.http
            .get('/api/sessions/search?search=' + searchTerm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchSessions', [])));
    }
};
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], EventService);



/***/ }),

/***/ "./src/app/events/shared/restricted-words-validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/events/shared/restricted-words-validator.ts ***!
  \*************************************************************/
/*! exports provided: restrictedWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return restrictedWords; });
function restrictedWords(words) {
    return (control) => {
        if (!words) {
            return null;
        }
        let invalidWords = words
            .map(w => (control.value.includes(w) ? w : null))
            .filter(w => w != null);
        return invalidWords && invalidWords.length > 0
            ? { restrictedWords: invalidWords.join(', ') }
            : null;
    };
}


/***/ }),

/***/ "./src/app/nav/navbar.component.ts":
/*!*****************************************!*\
  !*** ./src/app/nav/navbar.component.ts ***!
  \*****************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _events_event_barrel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/event-barrel */ "./src/app/events/event-barrel.ts");




let NavBarComponent = class NavBarComponent {
    constructor(auth, eventService) {
        this.auth = auth;
        this.eventService = eventService;
        this.searchTerm = "";
    }
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "nav-bar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/navbar.component.html"),
        styles: ["\n      .nav.navbar-nav {\n        font-size: 15px;\n      }\n      #searchForm {\n        margin-right: 100px;\n      }\n      @media (max-width: 1200px) {\n        #searchForm {\n          display: none;\n        }\n      }\n      li > a.active {\n        color: #f97924;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _events_event_barrel__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
], NavBarComponent);



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _events_event_barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/event-barrel */ "./src/app/events/event-barrel.ts");
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/404.component */ "./src/app/errors/404.component.ts");
/* harmony import */ var _events_event_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/event-resolver.service */ "./src/app/events/event-resolver.service.ts");
// Barrel Imports



const appRoutes = [
    {
        path: "events/new",
        component: _events_event_barrel__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"],
        canDeactivate: ["canDeactivateCreateEvent"]
    },
    {
        path: "events",
        component: _events_event_barrel__WEBPACK_IMPORTED_MODULE_0__["EventsListComponent"],
        resolve: { events: _events_event_barrel__WEBPACK_IMPORTED_MODULE_0__["EventsListResolver"] }
    },
    {
        path: "events/:id",
        component: _events_event_barrel__WEBPACK_IMPORTED_MODULE_0__["EventDetailComponent"],
        resolve: { event: _events_event_resolver_service__WEBPACK_IMPORTED_MODULE_2__["EventResolver"] }
    },
    { path: "events/session/new", component: _events_event_barrel__WEBPACK_IMPORTED_MODULE_0__["CreateSessionComponent"] },
    { path: "404", component: _errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"] },
    { path: "", redirectTo: "/events", pathMatch: "full" },
    { path: "user", loadChildren: "./user/user.module#UserModule" }
];


/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    loginUser(userName, password) {
        const loginInfo = {
            username: userName,
            password
        };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
        return this.http
            .post("/api/login", loginInfo, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => {
            this.currentUser = data;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    checkAuthenticationStatus() {
        this.http.get("/api/currentIdentity").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => {
            if (data instanceof Object) {
                this.currentUser = data;
            }
        }));
    }
    updateCurrentUser(firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }
    logout() {
        this.currentUser = undefined;
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
        return this.http.post("/api/logout", {}, options);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\taiwo\Desktop\Angular\event-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map