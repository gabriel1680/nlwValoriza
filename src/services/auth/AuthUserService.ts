import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { User } from "@entities/User";
import UserRepository from "@repositories/UserRespository";
import UnauthorizedError from "errors/request/client/UnauthorizedError";

interface IUserAuthRequest
{
    email: string;
    password: string;
}

export default class AuthUserService
{
    public static async execute({ email, password }: IUserAuthRequest): Promise<User>
    {
        if (!email || !password) throw new UnauthorizedError("Email or password can not be empty");

        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findByEmail(email);

        if (!user) throw new UnauthorizedError("Email or password are invalid!");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new UnauthorizedError("Email or password are invalid!");

        return user;
    }
}
