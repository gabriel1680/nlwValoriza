import { BadRequestError } from "../../core/customErrors";

export default class Email
{
    private _address: string;

    constructor (address: string)
    {
        if (!this.isEmail(address)) throw new BadRequestError("Email inválido!");
        this._address = address;
    }

    public isEmail(address: string): boolean
    {
        const isNotValidAddress = address.indexOf("@") === -1 || address.indexOf(".com") === -1 || address.length < 8;

        if (isNotValidAddress) return false;

        return true;
    }

    public get address(): string
    {
        return this._address;
    }
}
