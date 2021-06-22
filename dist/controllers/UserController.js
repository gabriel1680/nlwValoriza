"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typeorm_1 = require("typeorm");
const UserRespository_1 = require("../repositories/UserRespository");
class UserController {
    async handle(req, res) {
        //@ts-ignore
        const { name, email, isAdmin } = req.body;
        const user = typeorm_1.getCustomRepository(UserRespository_1.UserRepository).create();
        user.name = name;
        user.email = email;
        user.isAdmin = isAdmin;
        await new UserRespository_1.UserRepository().save(user);
        return res.json(user);
    }
}
exports.UserController = UserController;
