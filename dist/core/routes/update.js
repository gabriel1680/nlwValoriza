"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateRoutes = express_1.Router();
updateRoutes.put("/", (req, res) => {
    res.statusCode = 204;
    res.statusMessage = "No Content";
    res.send();
});
updateRoutes.patch("/", (req, res) => {
    res.statusCode = 204;
    res.statusMessage = "No Content";
    res.send();
});
exports.default = updateRoutes;
