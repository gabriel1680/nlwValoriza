import { Router } from "express";
import TagController from "../controllers/tagControllers/TagCreateController";
import Auth from "../middlewares/Auth";

const tagRoutes = Router();

const tagController = new TagController();

tagRoutes.post("/", Auth.adminHandle, tagController.create);
// tagRoutes.get("/:id", tagController.findById);
// tagRoutes.get("/", tagController.find);

export default tagRoutes;