import { Response, Request } from "express";
import CreateComplimentService from "@services/create/CreateComplimentService";

export default class CreateComplimentController
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        //@ts-ignore
        const { tagId, userSenderId, userReceiverId, message } = req.body;
        const compliment = await CreateComplimentService.execute({
            tagId,
            userSenderId,
            userReceiverId,
            message
        });

        return res.status(201).json(compliment);
    }
}