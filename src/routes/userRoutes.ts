import UserAuthController from "../controllers/userControllers/UserAuthController";
import { Router } from "express";
import UserCreateController from "../controllers/userControllers/UserCreateController";
import UserFindController from "../controllers/userControllers/UserFindController";

const userRoutes = Router();

//CREATE
userRoutes.post("/", UserCreateController.handle);

//AUTH
userRoutes.post("/auth", UserAuthController.handle);

//READ
userRoutes.get("/", UserFindController.find);
userRoutes.get("/:id", UserFindController.findById);

export default userRoutes;