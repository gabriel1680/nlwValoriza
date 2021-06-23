import express from "express";
import "express-async-errors";
import routes from "./routes/routes";
import DbCnnection from "./database/connection/DbConnection";
import ErrorHandler from "./middlewares/ErrorHandler";

DbCnnection.tryToConnect().finally();

const server = express();

server.use(express.json());

server.use(routes);

server.use(ErrorHandler.handle);

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`server is running on ${port}`));