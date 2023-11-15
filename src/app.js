"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
var express_1 = require("express");
// Import json file containing chemical data
var PeriodicTableJSON_json_1 = require("./data/PeriodicTableJSON.json");
// Initialize the express engine
var app = (0, express_1.default)();
// Take a port 3000 for running server.
var port = 3000;
// Handling '/' Request
app.get('/', function (_req, _res) {
    _res.send("TypeScript With Express");
});
// Handling the base element request
app.get('/data/:element', function (_req, _res) {
    _res.send(PeriodicTableJSON_json_1.default['elements'][_req.params['element']]);
});
// Server setup
app.listen(port, function () {
    console.log("TypeScript with Express \n         http://localhost:".concat(port, "/"));
});
