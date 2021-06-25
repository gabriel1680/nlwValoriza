import "reflect-metadata";
import { createConnection } from "typeorm";

export default class DbCnnection
{
    public static async tryToConnect(): Promise<void>
    {
        try {
            const { isConnected, options } = await createConnection();
            //@ts-ignore
            if (isConnected) console.log(`Database '${options.database}' is connected on ${options.port}`);
        } catch (error) {
            console.error(`Database connection error: ${error.message}`);
        }
    }
}

