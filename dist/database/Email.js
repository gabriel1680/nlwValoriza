"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(address) {
        if (!this.isValid(address))
            throw new Error("Email com formato incorreto!");
        this._address = address;
    }
    isValid(address) {
        const isNotValidAddress = address.indexOf("@") === -1 || address.indexOf(".com") === -1;
        if (isNotValidAddress)
            return false;
        return true;
    }
    get address() {
        return this._address;
    }
}
exports.Email = Email;
