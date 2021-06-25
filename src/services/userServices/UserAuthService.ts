import { compare } from "bcryptjs";
import { BadRequestError } from "../../core/customErrors";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import UserRepository from "../../repositories/UserRespository";
import { User } from "../../entities/User";

interface IUserAuthRequest
{
    email: string;
    password: string;
}

export default class UserAuthService
{
    public static async authenticate({ email, password }: IUserAuthRequest): Promise<User>
    {
        if (!email || !password) throw new BadRequestError("Email or password can not be empty");

        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findByEmail(email);

        if (!user) throw new BadRequestError("Email or password are invalid!");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new BadRequestError("Email or password are invalid!");

        return user;
    }

    public static async createToken(user: User): Promise<string>
    {
        const authKey = process.env.KEY || "";

        const token = sign({
            email: user.email
        },
            authKey,
            {
                subject: user.id.toString(),
                expiresIn: "1d"
            });

        return token;
    }
}
