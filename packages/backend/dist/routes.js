"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var PingController_1 = require("./controllers/PingController");
var IndexController_1 = require("./controllers/IndexController");
var _routes = [
    ["/", IndexController_1.default],
    ["/ping", PingController_1.default],
];
exports.routes = function (app) {
    _routes.forEach(function (route) {
        var url = route[0], controller = route[1];
        app.use(url, controller);
    });
};
