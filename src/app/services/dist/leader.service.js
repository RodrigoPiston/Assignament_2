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
var baseurl_1 = require("./../shared/baseurl");
var operators_1 = require("rxjs/operators");
var LeaderService = /** @class */ (function () {
    function LeaderService(http) {
        this.http = http;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.http.get(baseurl_1.baseURL + 'leadership');
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.http.get(baseurl_1.baseURL + 'leadership/' + id);
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.http.get(baseurl_1.baseURL + 'leadership?featured=true')
            .pipe(operators_1.map(function (leader) { return leader[0]; }));
    };
    LeaderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
