interface Payment {
    pay(amount: number): void
}

export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Pay ${amount} in cash`);
    }
}

export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Pay ${amount} in card`);
    }
}