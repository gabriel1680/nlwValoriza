"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const routes = express_1.Router();
routes.use("/users", userRoutes_1.default);
// routes.use("/tags", tagRoutes);
// routes.use("/compleinces", compleinceRoutes);
exports.default = routes;
