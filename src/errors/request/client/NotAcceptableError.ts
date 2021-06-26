import { RequestError } from "../RequestError";

export default class NotAcceptableError extends RequestError
{
    constructor (message: string)
    {
        super({
            code: 406,
            message: message
        });
    }
}