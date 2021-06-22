export class Email
{
    private _address: string;

    constructor (address: string)
    {
        if (!this.isValid(address)) throw new Error("Email com formato incorreto!");
        this._address = address;
    }

    private isValid(address: string): boolean
    {
        const isNotValidAddress = address.indexOf("@") === -1 || address.indexOf(".com") === -1;

        if (isNotValidAddress) return false;

        return true;
    }

    public get address(): string
    {
        return this._address;
    }
}
