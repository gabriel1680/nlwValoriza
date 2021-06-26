import { RequestError } from "../RequestError";

export default class InternalServerError extends RequestError
{
    constructor (message: string)
    {
        super({
            code: 500,
            message: message
        });
    }
}