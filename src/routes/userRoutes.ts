import { Router } from "express";
import AuthUserController from "@controllers/auth/AuthUserController";
import CreateUserController from "@controllers/create/CreateUserController";
import Auth from "@middlewares/Auth";
import FindComplimentsSentController from "@controllers/find/FindComplimentsSentController";
import FindComplimentsReceivedController from "@controllers/find/FindComplimentsReceivedController";
import FindUserByQueryController from "@controllers/find/FindUserByQueryController";
import FindUserByIdController from "@controllers/find/FindUserByIdController";


const userRoutes = Router();

//CREATE
userRoutes.post("/", CreateUserController.handle);

//AUTH
userRoutes.post("/auth", AuthUserController.handle);

//READ
userRoutes.get("/", FindUserByQueryController.handle);
userRoutes.get("/:id", FindUserByIdController.handle);

//COMPLIMENTS
userRoutes.get("/compliments/sent", Auth.authHandle, FindComplimentsSentController.handle);
userRoutes.get("/compliments/received", Auth.authHandle, FindComplimentsReceivedController.handle);


export default userRoutes;