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
var PromotionService = /** @class */ (function () {
    function PromotionService() {
    }
    PromotionService.prototype.getPromotions = function () {
        return Promise.resolve(promotions_1.PROMOTIONS);
    };
    PromotionService.prototype.getPromotion = function (id) {
        return Promise.resolve(promotions_1.PROMOTIONS.filter(function (promo) { return (promo.id === id); })[0]);
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return Promise.resolve(promotions_1.PROMOTIONS.filter(function (promotion) { return promotion.featured; })[0]);
    };
    PromotionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
