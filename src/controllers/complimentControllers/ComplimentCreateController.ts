import { Response, Request } from "express";
import ComplimentCreateService from "../../services/complimentServices/ComplimentCreateService";

export default class ComplimentCreateController
{
    public static async handle(req: Request, res: Response): Promise<Response>
    {
        //@ts-ignore
        const { tagId, userSenderId, userReceiverId, message } = req.body;
        const compliment = await ComplimentCreateService.handle({
            tagId,
            userSenderId,
            userReceiverId,
            message
        });

        return res.status(201).json(compliment);
    }
}