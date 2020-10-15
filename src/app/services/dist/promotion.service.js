"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PromotionService = void 0;
var core_1 = require("@angular/core");
var promotions_1 = require("../shared/promotions");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PromotionService = /** @class */ (function () {
    function PromotionService() {
    }
    PromotionService.prototype.getPromotions = function () {
        return rxjs_1.of(promotions_1.PROMOTIONS).pipe(operators_1.delay(2000));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return rxjs_1.of(promotions_1.PROMOTIONS.filter(function (promo) { return (promo.id === id); })[0]).pipe(operators_1.delay(2000));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return rxjs_1.of(promotions_1.PROMOTIONS.filter(function (promotion) { return promotion.featured; })[0]).pipe(operators_1.delay(2000));
    };
    PromotionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
