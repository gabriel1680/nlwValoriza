"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const connection_1 = __importDefault(require("./database/connection"));
connection_1.default.tryOpen();
const server = express_1.default();
server.use(express_1.default.json());
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server is running on ${port}`));
server.use(routes_1.default);
