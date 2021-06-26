import { Compliment } from "@entities/Compliment";
import ComplimentRepository from "@repositories/ComplimentRepository";
import { getCustomRepository } from "typeorm";

export default class FindComplimentsSentService
{
    public static async execute(userId: string): Promise<Compliment[]>
    {
        const complimentRepository = getCustomRepository(ComplimentRepository);
        return await complimentRepository.findBySenderId(userId);
    }
}