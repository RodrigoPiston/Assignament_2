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
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var app_animations_1 = require("../animations/app.animations");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishService, promotionService, leaderService, BaseURL) {
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getFeaturedDish().subscribe(function (featuredDish) { return _this.dish = featuredDish; }, function (errMess) { return _this.dishErrMess = errMess; });
        this.leaderService.getFeaturedLeader().subscribe(function (featuredLeader) { _this.leader = featuredLeader; }, function (errMess) { return _this.leaderErrMess = errMess; });
        this.promotionService.getFeaturedPromotion().subscribe(function (featuredPromotion) { return _this.promotion = featuredPromotion; }, function (errMess) { return _this.promotionErrMess = errMess; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display:block;'
            },
            animations: [
                app_animations_1.flyInOut(),
                app_animations_1.expand()
            ]
        }),
        __param(3, core_1.Inject('BaseURL'))
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
