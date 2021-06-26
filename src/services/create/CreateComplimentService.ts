import { getCustomRepository } from "typeorm";
import ComplimentRepository from "@repositories/ComplimentRepository";
import UserRepository from "@repositories/UserRespository";
import { Compliment } from "@entities/Compliment";
import BadRequestError from "errors/request/client/BadRequestError";
import NotAcceptableError from "errors/request/client/NotAcceptableError";

interface IComplimentRequest
{
    tagId: string,
    userSenderId: string,
    userReceiverId: string,
    message: string;
}

export default class CreateComplimentService
{
    public static async execute(complimentRequest: IComplimentRequest): Promise<Compliment>
    {
        const { tagId, userSenderId, userReceiverId, message } = complimentRequest;

        if (!tagId || !userSenderId || !userReceiverId || !message)
            throw new NotAcceptableError("Some field is empty, please verify your requisition");

        // CreateComplimentService.handleFieldsVerification(complimentRequest);

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

    private static handleFieldsVerification({ tagId, userSenderId, userReceiverId, message }: IComplimentRequest): void
    {
        if (!tagId)
            throw new NotAcceptableError("The field 'tagId' is empty");

        if (!userSenderId)
            throw new NotAcceptableError("The field 'userSenderId' is empty");

        if (!userReceiverId)
            throw new NotAcceptableError("The field 'userReceieverId' is empty");

        if (!message)
            throw new NotAcceptableError("The field 'message' is empty");
    }
}