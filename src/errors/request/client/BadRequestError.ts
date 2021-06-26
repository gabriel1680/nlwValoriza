import { RequestError } from "../RequestError";

export default class BadRequestError extends RequestError
{
    constructor (message: string)
    {
        super({
            code: 400,
            message: message
        });
    }
}