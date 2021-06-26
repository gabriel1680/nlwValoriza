import { getCustomRepository } from "typeorm";
import UserRepository from "@repositories/UserRespository";
import { classToPlain } from "class-transformer";
import { User } from "@entities/User";

export default class FindUserByQueryService
{
    public static async execute(...queryParams: any): Promise<User | Record<string, any>>
    {
        const userRepository = getCustomRepository(UserRepository);
        const hasId = Object.keys(queryParams).indexOf('id') !== -1;

        if (hasId) {
            //@ts-ignore
            return await userRepository.findById(queryParams.id);
        }

        const hasEmail = Object.keys(queryParams).indexOf('email') !== -1;

        if (hasEmail) {
            const email = queryParams.email;
            //@ts-ignore
            return await userRepository.findByEmail(email);
        }

        return classToPlain(await userRepository.findAll());
    }
}