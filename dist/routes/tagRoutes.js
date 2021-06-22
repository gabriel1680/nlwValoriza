"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TagController_1 = require("../controllers/TagController");
const tagRoutes = express_1.Router();
const tagController = new TagController_1.TagController();
tagRoutes.post("/", tagController.handle);
exports.default = tagRoutes;
