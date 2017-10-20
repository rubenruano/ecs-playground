var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { suite, test } from "mocha-typescript";
var Two = /** @class */ (function () {
    function Two() {
    }
    Two.prototype.method = function () { };
    __decorate([
        test
    ], Two.prototype, "method", null);
    Two = __decorate([
        suite
    ], Two);
    return Two;
}());
