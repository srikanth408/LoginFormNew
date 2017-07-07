"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmpDataService = (function () {
    function EmpDataService() {
    }
    EmpDataService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    EmpDataService.prototype.setEmpInfo = function (data) {
        this.empInfo = data;
    };
    EmpDataService.prototype.getEmpInfo = function () {
        return this.empInfo;
    };
    EmpDataService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    return EmpDataService;
}());
EmpDataService = __decorate([
    core_1.Injectable()
], EmpDataService);
exports.EmpDataService = EmpDataService;
//# sourceMappingURL=app.model.js.map