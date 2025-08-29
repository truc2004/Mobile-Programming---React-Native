interface Animal {
    sound(): void;
}

export class Lion implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} says: Gru Gru!`);
    }
}