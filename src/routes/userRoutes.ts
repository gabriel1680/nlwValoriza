import { Router } from "express";
import UserController from "../controllers/UserController";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.get("/", userController.find);
userRoutes.get("/:id", userController.findById);

export default userRoutes;