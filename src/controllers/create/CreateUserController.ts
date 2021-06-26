import { Request, Response } from "express";
import CreateUserService from "@services/create/CreateUserService";

export default class CreateUserController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { name, email, password, isAdmin } = req.body;
        const user = await CreateUserService.execute({
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin
        });

        return res.status(201).json(user);
    }
}