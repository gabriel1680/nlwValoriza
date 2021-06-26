import { getCustomRepository } from "typeorm";
import { User } from "@entities/User";
import UserRepository from '@repositories/UserRespository';
import BadRequestError from "@requestErrors/client/BadRequestError";

export default class FindUserByIdService
{
    public static async execute(id: string): Promise<User> 
    {
        if (!id) throw new BadRequestError("User id is missing");

        const userRepository = getCustomRepository(UserRepository);
        return await userRepository.findById(id);
    }
}