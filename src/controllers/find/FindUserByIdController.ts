import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "@repositories/UserRespository";

export default class FindUserByIdController 
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);

        return res.json(user);
    }
}