import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UserRespository";

export default class UserFindController 
{
    public static async find(req: Request, res: Response): Promise<Response>
    {
        const userRepository = getCustomRepository(UserRepository);
        const queryParams = req.query;
        const hasId = Object.keys(queryParams).indexOf('id') !== -1;

        if (hasId) {
            //@ts-ignore
            const user = await userRepository.findById(queryParams.id);
            return res.json(user);
        }

        const hasEmail = Object.keys(queryParams).indexOf('email') !== -1;

        if (hasEmail) {
            const email = queryParams.email;
            //@ts-ignore
            const user = await userRepository.findByEmail(email);
            return res.json(user);
        }

        const users = await userRepository.findAll();
        return res.json(users);
    }

    public static async findById(req: Request, res: Response): Promise<Response>
    {
        const { id } = req.params;

        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);

        return res.json(user);
    }
}