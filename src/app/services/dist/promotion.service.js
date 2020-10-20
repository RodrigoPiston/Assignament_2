"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PromotionService = void 0;
var baseurl_1 = require("./../shared/baseurl");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var PromotionService = /** @class */ (function () {
    function PromotionService(http) {
        this.http = http;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.http.get(baseurl_1.baseURL + 'promotions');
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.http.get(baseurl_1.baseURL + 'promotions/' + id);
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.http.get(baseurl_1.baseURL + 'promotions?featured=true')
            .pipe(operators_1.map(function (promotion) { return promotion[0]; }));
    };
    PromotionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
