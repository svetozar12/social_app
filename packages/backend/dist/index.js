"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var port = 5000;
// Start server
app_1.default.listen(port, function () { return console.log("Server is listening on port " + port + "!"); });
