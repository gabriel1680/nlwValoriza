"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const readRoutes = express_1.Router();
readRoutes.get("", (req, res) => {
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.send();
});
exports.default = readRoutes;
