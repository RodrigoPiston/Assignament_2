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
var baseurl_1 = require("./../shared/baseurl");
var operators_1 = require("rxjs/operators");
var DishService = /** @class */ (function () {
    function DishService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    // -- Simulate time delay
    DishService.prototype.getDishes = function () {
        console.log(baseurl_1.baseURL + 'dishes');
        return this.http.get(baseurl_1.baseURL + 'dishes')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getDish = function (id) {
        return this.http.get(baseurl_1.baseURL + 'dishes/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.http.get(baseurl_1.baseURL + 'dishes?featured=true')
            .pipe(operators_1.map(function (dishes) { return dishes[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes()
            .pipe(operators_1.map(function (dishes) { return dishes.map(function (dish) { return dish.id; }); }))
            .pipe(operators_1.catchError(function (error) { return error; }));
    };
    DishService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
