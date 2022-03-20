"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
exports.isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
