import { getCustomRepository } from "typeorm";
import { Email } from "../database/Email";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRespository";

interface IUser
{
    name: string;
    email: Email;
    isAdmin?: boolean;
}

export class UserServices 
{
    public async create({ name, email, isAdmin }: IUser): Promise<User>
    {
        const userRepository = getCustomRepository(UserRepository);
        const emailExists = await userRepository.findByEmail(email);

        if (emailExists) {
            throw new Error("Endereço de email já cadastrado!");
        }

        return userRepository.createAndSave(name, email, isAdmin);
    }

    public async update()
    {

    }

    public async destroy()
    {

    }
}