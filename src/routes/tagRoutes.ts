import { Router } from "express";
import TagController from "../controllers/TagController";
import Authentication from "../middlewares/Authentication";

const tagRoutes = Router();

const tagController = new TagController();

tagRoutes.post("/", Authentication.admin, tagController.create);
tagRoutes.get("/:id", tagController.findById);
tagRoutes.get("/", tagController.find);

export default tagRoutes;