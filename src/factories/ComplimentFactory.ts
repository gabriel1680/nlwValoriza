import { Compliment } from "../entities/Compliment";

interface ICompliment
{
    tagId: number,
    userSenderId: number,
    userReceiverId: number,
    message: string;
}

export default class ComplimentFactory 
{
    public static create({ tagId, userSenderId, userReceiverId, message }: ICompliment)
    {
        const compliment = new Compliment();
        compliment.tag_id = tagId;
        compliment.user_sender = userSenderId;
        compliment.user_receiver = userReceiverId;
        compliment.message = message;

        return compliment;
    }
}