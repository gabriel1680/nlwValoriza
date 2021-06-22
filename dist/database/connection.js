"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const connection = {
    async tryOpen() {
        // try {
        const { isConnected, options } = await typeorm_1.createConnection();
        //@ts-ignore
        if (isConnected)
            console.log(`Database '${options.database}' is connected on ${options.port}`);
        // } catch (error) {
        //     console.error(error.message);
        // }
    },
};
exports.default = connection;
