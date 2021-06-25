import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../core/customErrors";

export default class Auth
{
    public static adminHandle(req: Request, res: Response, next: NextFunction)
    {
        const isAdmin = true;

        //@ts-ignore
        if (isAdmin)
            return next();

        console.log("admin");

        throw new UnauthorizedError("Unauthorized");
    }
}