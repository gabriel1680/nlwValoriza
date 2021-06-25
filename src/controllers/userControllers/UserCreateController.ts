import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UserRespository";
import UserCreateService from "../../services/userServices/UserCreateService";

export default class UserCreateController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { name, email, password, isAdmin } = req.body;
        const user = await UserCreateService.handle({
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin
        });

        return res.status(201).json(user);
    }
}