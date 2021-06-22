"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../../controllers/UserController");
const userRoutes = express_1.Router();
const userController = new UserController_1.UserController();
userRoutes.post("/", userController.handle);
exports.default = userRoutes;
