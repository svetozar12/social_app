"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber_1 = require("./isNumber");
describe("isNumber Utils", function () {
    it("Its a number", function () {
        [0, 1, 2, -1, 1.345e17, "1"].map(function (n) {
            expect(isNumber_1.isNumber(n)).toEqual(true);
        });
    });
    it("Its not a number", function () {
        [false, true, NaN, [], {}, "1a"].map(function (n) {
            expect(isNumber_1.isNumber(n)).toEqual(false);
        });
    });
});
