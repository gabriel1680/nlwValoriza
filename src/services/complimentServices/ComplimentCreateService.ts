import { getCustomRepository } from "typeorm";
import { BadRequestError } from "../../core/customErrors";
import { Compliment } from "../../entities/Compliment";
import ComplimentRepository from "../../repositories/ComplimentRepository";
import UserRepository from "../../repositories/UserRespository";

interface IComplimentRequest
{
    tagId: number,
    userSenderId: number,
    userReceiverId: number,
    message: string;
}

export default class ComplimentCreateService
{
    public static async handle(complimentRequest: IComplimentRequest): Promise<Compliment>
    {
        const { userSenderId, userReceiverId } = complimentRequest;

        const complimentRepository = getCustomRepository(ComplimentRepository);
        const userRepository = getCustomRepository(UserRepository);

        if (userSenderId === userReceiverId)
            throw new BadRequestError("The sender must not be same as the receiver!");

        const userSender = await userRepository.findById(userSenderId);

        if (!userSender)
            throw new BadRequestError("User Receiver does not exists!");

        const compliment = await complimentRepository.createAndSave(complimentRequest);

        return compliment;
    }
}