interface Flyable {
    fly(): void
}

interface Swimmable {
    swim(): void
}

export class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    fly(): void {
        console.log(`${this.name} is flying high!`);
    }
}

export class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    swim(): void {
        console.log(`${this.name} is swimming in the water!`);
    }
}