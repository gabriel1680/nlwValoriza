import { Router } from "express";
import tagRoutes from "./tagRoutes";
import userRoutes from "./userRoutes";

const routes = Router();

routes.use("/users", userRoutes);

// routes.use("/tags", tagRoutes);

// routes.use("/compleinces", compleinceRoutes);

export default routes;
