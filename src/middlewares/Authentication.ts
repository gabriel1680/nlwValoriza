import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../core/customErrors";

export default class Authentication
{
    public static admin(req: Request, res: Response, next: NextFunction)
    {
        const isAdmin = true;

        //@ts-ignore
        if (isAdmin)
            return next();

        console.log("admin");

        throw new UnauthorizedError("Unauthorized");
    }
}