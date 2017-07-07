"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_leaveservice_1 = require("../app.leaveservice");
var AdminComponent = (function () {
    function AdminComponent(_service) {
        this._service = _service;
        this.approve = true;
        this.reject = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getEmployees()
            .subscribe(function (data) { return _this.employee = data; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Admin/app.admin.component.html',
        providers: [app_leaveservice_1.LeavedataService],
    }),
    __metadata("design:paramtypes", [app_leaveservice_1.LeavedataService])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=app.admin.component.js.map