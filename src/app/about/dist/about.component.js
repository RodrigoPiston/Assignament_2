"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AboutComponent = void 0;
var core_1 = require("@angular/core");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderService, BaseURL) {
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
        }),
        __param(1, core_1.Inject('BaseURL'))
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
