import { Request, Response, NextFunction } from "express";
import { IRequestError, RequestError } from "@requestErrors/RequestError";
import { Message } from "@middlewares/utils/Message";

export default class ErrorHandler
{
    public static handle(error: Error, req: Request, res: Response, next: NextFunction): Response
    {
        if (error instanceof RequestError)
            return ErrorHandler.buildAndSendError(res, error);

        return ErrorHandler.buildAndSend(res, 500, "Internal Server Error");
    }

    private static buildAndSendError(res: Response, err: IRequestError): Response
    {
        const msg = new Message();
        return res.status(err.code).json(msg.error(err.message));
    }

    private static buildAndSend(res: Response, code: number, message: string): Response
    {
        const msg = new Message();
        return res.status(code).json(msg.error(message));
    }
}