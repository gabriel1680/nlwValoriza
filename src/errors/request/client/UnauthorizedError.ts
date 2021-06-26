import { RequestError } from "../RequestError";

export default class UnauthorizedError extends RequestError
{
    constructor (message: string)
    {
        super({
            code: 401,
            message: message
        });
    }
}