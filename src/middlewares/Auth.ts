import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "@repositories/UserRespository";
import UnauthorizedError from "@clientErrors/UnauthorizedError";
import Token from "@token/Token";

export default class Auth
{
    public static async adminHandle(req: Request, res: Response, next: NextFunction)
    {
        //@ts-ignore
        const { userId } = req;

        const userRepository = getCustomRepository(UserRepository);
        const { isAdmin } = await userRepository.findById(userId);

        if (isAdmin)
            return next();

        throw new UnauthorizedError("Only admin users can create a tag");
    }

    public static authHandle(req: Request, res: Response, next: NextFunction)
    {
        const receivedToken = req.headers.authorization;

        if (!receivedToken)
            throw new UnauthorizedError("Missing token");

        //Bearer ....    
        const [ , splitedToken ] = receivedToken.split(" ");

        const token = new Token("Z2FicmllbG5sd3ZhbG9yaXph");

        try {
            const { sub } = token.verify(splitedToken);
            //@ts-ignore
            req.userId = sub;
            return next();
        } catch (error) {
            throw new UnauthorizedError(error.message);
        }
    }
}