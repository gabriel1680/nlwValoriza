import { Request, Response, NextFunction } from "express";
import { CustomError } from "../core/customErrors";
import { Message } from "../core/Message";

export default class ErrorHandler
{
    public static handle(error: Error, req: Request, res: Response, next: NextFunction)
    {
        const msg = new Message();

        if (error instanceof CustomError)
            return ErrorHandler.buildAndSend(res, error);

        return res.status(500).json(msg.error('Internal Server Error'));
    }

    private static buildAndSend(res: Response, err: CustomError)
    {
        const msg = new Message();
        return res.status(err.code).json(msg.byException(err));
    }
}