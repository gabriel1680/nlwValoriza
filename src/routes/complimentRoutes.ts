import { Router } from "express";
import ComplimentCreateController from "../controllers/complimentControllers/ComplimentCreateController";
import Auth from "../middlewares/Auth";

const complimentRoutes = Router();

complimentRoutes.post("/", ComplimentCreateController.handle);
// complimentRoutes.get("/:id", ComplimentFindController.findById);
// complimentRoutes.get("/", ComplimentFindController.find);

export default complimentRoutes;