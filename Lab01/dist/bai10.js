"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accNumber, balance, owner) {
        this.accNumber = accNumber;
        this.balance = balance;
        this.owner = owner;
    }
    getBalance() {
        return this.balance;
    }
}
exports.Account = Account;
