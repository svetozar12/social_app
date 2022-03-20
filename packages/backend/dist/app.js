"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
// Boot express
var app = express();
// Application routing
routes_1.routes(app);
exports.default = app;
