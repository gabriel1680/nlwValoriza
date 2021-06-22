"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createRoutes = express_1.Router();
createRoutes.post("/", (req, res) => {
    res.statusCode = 201;
    res.statusMessage = "Created";
    res.send();
});
exports.default = createRoutes;
