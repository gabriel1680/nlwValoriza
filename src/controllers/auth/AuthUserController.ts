import { Request, Response } from "express";
import { User } from "@entities/User";
import AuthUserService from "@services/auth/AuthUserService";
import Token from "@token/Token";

export default class AuthUserController
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { email, password } = req.body;

        const user = await AuthUserService.execute({ email, password });

        const token = await AuthUserController.createToken(user);

        return res.json(token);
    }

    private static async createToken(user: User): Promise<string>
    {
        const secretKey = process.env.KEY || "Z2FicmllbG5sd3ZhbG9yaXph";

        const token = new Token(secretKey);

        token.generate(
            {
                email: user.email
            },
            {
                subject: user.id.toString(),
                expiresIn: "1d"
            }
        );

        return token.lastToken();
    }
}