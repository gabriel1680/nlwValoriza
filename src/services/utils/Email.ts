
export default class Email
{
    private _address: string;

    constructor (address: string)
    {
        if (!Email.isEmail(address)) throw new Error("Ivalid email");
        this._address = address;
    }

    public static isEmail(address: string): boolean
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
