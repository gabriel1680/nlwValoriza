import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import BadRequestError from "@clientErrors/BadRequestError";
import { User } from "@entities/User";
import UserRepository from "@repositories/UserRespository";
import Email from "../utils/Email";

interface IUserCreateRquest
{
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}

export default class CreateUserService
{
    public static async execute({ name, email, password, isAdmin = false }: IUserCreateRquest): Promise<User>
    {
        if (!name || !email || !password)
            throw new BadRequestError("The fields: name, email and password are required!");

        const repository = getCustomRepository(UserRepository);

        const isValidEmail = Email.isEmail(email);

        if (!isValidEmail) throw new BadRequestError("Invalid email");

        const emailExists = await repository.findByEmail(email);

        if (emailExists) throw new BadRequestError("The email given already exists");

        const newUser = repository.createAndSave({
            name: name,
            email: email,
            password: await hash(password, 8),
            isAdmin: isAdmin
        });

        return newUser;
    }
}