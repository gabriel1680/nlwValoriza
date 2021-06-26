import { Router } from "express";
import CreateTagController from "@controllers/create/CreateTagController";
import Auth from "@middlewares/Auth";
import FindTagByIdController from "@controllers/find/FindTagByIdController";
import FindTagByQueryController from "@controllers/find/FindTagByQueryController";

const tagRoutes = Router();

tagRoutes.post("/", Auth.authHandle, Auth.adminHandle, CreateTagController.handle);
tagRoutes.get("/:id", Auth.authHandle, FindTagByIdController.handle);
tagRoutes.get("/", Auth.authHandle, FindTagByQueryController.handle);

export default tagRoutes;