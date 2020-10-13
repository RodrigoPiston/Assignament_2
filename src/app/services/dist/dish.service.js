"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DishService = void 0;
var core_1 = require("@angular/core");
var dishes_1 = require("../shared/dishes");
var DishService = /** @class */ (function () {
    function DishService() {
    }
    DishService.prototype.getDishes = function () {
        return Promise.resolve(dishes_1.DISHES);
    };
    DishService.prototype.getDish = function (id) {
        return Promise.resolve(dishes_1.DISHES.filter(function (dish) { return (dish.id === id); })[0]);
    };
    DishService.prototype.getFeaturedDish = function () {
        return Promise.resolve(dishes_1.DISHES.filter(function (dish) { return dish.featured; })[0]);
    };
    DishService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
