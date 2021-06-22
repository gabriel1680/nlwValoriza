import { Router } from "express";
import { TagController } from "../controllers/TagController";

const tagRoutes = Router();

const tagController = new TagController();

tagRoutes.post("/", tagController.handle);

export default tagRoutes;