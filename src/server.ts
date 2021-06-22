import express from "express";
import routes from "./routes/routes";
import connection from "./database/connection";

connection.tryOpen().finally();

const server = express();

server.use(express.json());

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`server is running on ${port}`));

server.use(routes);
