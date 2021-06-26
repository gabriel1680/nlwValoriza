import { Router } from "express";
import CreateComplimentController from "@controllers/create/CreateComplimentController";
import Auth from "@middlewares/Auth";

const complimentRoutes = Router();

complimentRoutes.post("/", Auth.authHandle, CreateComplimentController.handle);

export default complimentRoutes;