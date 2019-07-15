(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\r\n<hr />\r\n<div class=\"col-md-4\">\r\n  <form\r\n    autocomplete=\"off\"\r\n    #loginForm=\"ngForm\"\r\n    (ngSubmit)=\"login(loginForm.value)\"\r\n  >\r\n    <div class=\"form-group\">\r\n      <label for=\"userName\">User Name:</label>\r\n      <em\r\n        *ngIf=\"\r\n          loginForm.controls.userName?.invalid &&\r\n          (loginForm.controls.userName?.touched || mouseOverLogin)\r\n        \"\r\n        >Required</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(userName)\"\r\n        name=\"userName\"\r\n        id=\"userName\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"User Name...\"\r\n        required\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password:</label>\r\n      <em\r\n        *ngIf=\"\r\n          loginForm.controls.password?.invalid &&\r\n          (loginForm.controls.password?.touched || mouseOverLogin)\r\n        \"\r\n        >Required</em\r\n      >\r\n      <input\r\n        (ngModel)=\"(password)\"\r\n        name=\"password\"\r\n        id=\"password\"\r\n        type=\"password\"\r\n        class=\"form-control\"\r\n        placeholder=\"Password...\"\r\n        required\r\n      />\r\n    </div>\r\n    <span\r\n      (mouseenter)=\"mouseOverLogin = true\"\r\n      (mouseleave)=\"mouseOverLogin = false\"\r\n    >\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-primary\"\r\n        [disabled]=\"loginForm.invalid\"\r\n      >\r\n        Login\r\n      </button>\r\n    </span>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </form>\r\n  <br />\r\n  <div *ngIf=\"loginInvalid\" class=\"alert alert-danger\">Invalid Login Info</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/profile.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Edit Your Profile</h1>\r\n  <hr />\r\n  <div class=\"col-md-4\">\r\n    <form\r\n      autocomplete=\"off\"\r\n      novalidate\r\n      [formGroup]=\"profileForm\"\r\n      (ngSubmit)=\"saveProfile(profileForm.value)\"\r\n    >\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{\r\n          error: !validateFirstName()\r\n        }\"\r\n      >\r\n        <label for=\"firstName\">First Name:</label>\r\n        <em\r\n          *ngIf=\"\r\n            !validateFirstName() &&\r\n            profileForm.controls.firstName.errors.required\r\n          \"\r\n          >Required</em\r\n        >\r\n        <em\r\n          *ngIf=\"\r\n            !validateFirstName() &&\r\n            profileForm.controls.firstName.errors.pattern\r\n          \"\r\n          >Must start with a letter</em\r\n        >\r\n        <input\r\n          formControlName=\"firstName\"\r\n          id=\"firstName\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"First Name...\"\r\n        />\r\n      </div>\r\n      <div\r\n        class=\"form-group\"\r\n        [ngClass]=\"{\r\n          error: !validateLastName()\r\n        }\"\r\n      >\r\n        <label for=\"lastName\">Last Name:</label>\r\n        <em *ngIf=\"!validateLastName()\">Required</em>\r\n        <input\r\n          formControlName=\"lastName\"\r\n          id=\"lastName\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"Last Name...\"\r\n        />\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">\r\n        Cancel\r\n      </button>\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-warning\"\r\n        (click)=\"logout()\"\r\n        style=\"float:right;\"\r\n      >\r\n        Log Out\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginInvalid = false;
    }
    login(formValues) {
        this.auth
            .loginUser(formValues.userName, formValues.password)
            .subscribe(res => {
            if (!res) {
                this.loginInvalid = true;
            }
            else {
                this.router.navigate(["events"]);
            }
        });
    }
    cancel() {
        this.router.navigate(["events"]);
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login.component.html"),
        styles: ["\n      em {\n        float: right;\n        color: #e05c65;\n        padding-left: 10px;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/user/profile.component.ts":
/*!*******************************************!*\
  !*** ./src/app/user/profile.component.ts ***!
  \*******************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/toastr.service */ "./src/app/common/toastr.service.ts");






let ProfileComponent = class ProfileComponent {
    constructor(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.auth.currentUser.firstName, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z].*")
        ]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.auth.currentUser.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }
    validatelastName() {
        return this.lastName.valid || this.lastName.untouched;
    }
    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.auth
                .updateCurrentUser(formValues.firstName, formValues.lastName)
                .subscribe(() => {
                this.toastr.success("Profile Saved");
            });
        }
    }
    cancel() {
        this.router.navigate(["events"]);
    }
    logout() {
        this.auth.logout().subscribe(() => {
            this.router.navigate(["/user/login"]);
        });
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/profile.component.html"),
        styles: ["\n      em {\n        float: right;\n        color: #e05c65;\n        padding-left: 10px;\n      }\n      .error input {\n        background-color: #e3c3c5;\n      }\n      .error ::-webkit-input-placeholder,\n      .error :ms-input-placeholder,\n      .error ::-moz-placeholder,\n      .error :-moz-placeholder {\n        color: #999;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_common_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routes */ "./src/app/user/user.routes.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");








let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_5__["userRoutes"])
        ],
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
        providers: []
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/user.routes.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.routes.ts ***!
  \*************************************/
/*! exports provided: userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");


const userRoutes = [
    { path: "profile", component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
    { path: "login", component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map