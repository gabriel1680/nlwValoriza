import "reflect-metadata";
import { createConnection } from "typeorm";

const connection = {
    async tryOpen(): Promise<void>
    {
        try {
            const { isConnected, options } = await createConnection();
            //@ts-ignore
            if (isConnected) console.log(`Database '${options.database}' is connected on ${options.port}`);
        } catch (error) {
            console.error(`Database connection error: ${error.message}`);
        }
    },
};

export default connection;
