import { Request, Response } from "express";
import { User } from "../../entities/User";
import UserAuthService from "../../services/userServices/UserAuthService";
import Token from "./Token";

export default class UserAuthController
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { email, password } = req.body;

        const user = await UserAuthService.authenticate({ email, password });

        const token = await UserAuthController.createToken(user);

        return res.json(token);
    }

    private static async createToken(user: User): Promise<Token>
    {
        const secretKey = process.env.KEY || "Z2FicmllbG5sd3ZhbG9yaXph";

        const token = new Token();

        token.generateKey(
            {
                email: user.email
            },
            secretKey,
            {
                subject: user.id.toString(),
                expiresIn: "1d"
            }
        );

        return token;
    }
}