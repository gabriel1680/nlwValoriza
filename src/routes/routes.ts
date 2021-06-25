import { Router } from "express";
import complimentRoutes from "./complimentRoutes";
import tagRoutes from "./tagRoutes";
import userRoutes from "./userRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/tags", tagRoutes);
routes.use("/compliments", complimentRoutes);

export default routes;
