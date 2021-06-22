"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteRoutes = express_1.Router();
deleteRoutes.delete("/", (req, res) => {
    res.statusCode = 204;
    res.statusMessage = "No Content";
    res.send();
});
exports.default = deleteRoutes;
