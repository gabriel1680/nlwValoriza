import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { Email } from "../database/Email";
import { UserRepository } from "../repositories/UserRespository";
import { UserServices } from "../services/UserServices";

export class UserController 
{
    public async create(req: Request, res: Response)
    {
        // const { name, email, isAdmin } = req.body;
        // const userRepository = getCustomRepository(UserRepository);
        // try {
        //     const user = await userRepository.createAndSave(name, (new Email(email)), isAdmin);
        //     return res.json(user);
        // } catch (error) {
        //     res.statusCode = 401;
        //     res.statusMessage = "Forbidden";
        //     res.json(error.message);
        // }

        const { name, email, isAdmin } = req.body;
        const userServices = new UserServices();
        try {
            const user = await userServices.create({
                name: name,
                email: new Email(email),
                isAdmin: isAdmin
            });
            return res.json(user);

        } catch (error) {
            res.statusCode = 401;
            res.statusMessage = "Forbidden";
            res.json(error.message);
        }
    }

    public async findById(req: Request, res: Response)
    {
        const { id } = req.params;

        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findById(id);

        return res.json(user);
    }

    public async find(req: Request, res: Response)
    {
        const userRepository = getCustomRepository(UserRepository);

        if (!req.query) {
            const users = await userRepository.findAll();
            res.json(users);
            return;
        }

        /**
         * TODO IMPLEMENTAR AS QUERIES
         */
        return res.json();
    }
}