"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LeaderService = void 0;
var core_1 = require("@angular/core");
var leaders_1 = require("../shared/leaders");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var LeaderService = /** @class */ (function () {
    function LeaderService() {
    }
    LeaderService.prototype.getLeaders = function () {
        //return Promise.resolve(LEADERS);
        return rxjs_1.of(leaders_1.LEADERS).pipe(operators_1.delay(2000));
    };
    LeaderService.prototype.getLeader = function (id) {
        return rxjs_1.of(leaders_1.LEADERS.filter(function (leader) { return (leader.id === id); })[0]).pipe(operators_1.delay(2000));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return rxjs_1.of(leaders_1.LEADERS.filter(function (leader) { return leader.featured; })[0]).pipe(operators_1.delay(2000));
    };
    LeaderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
