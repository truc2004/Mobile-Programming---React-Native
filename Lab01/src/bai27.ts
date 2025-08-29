export class Person2 {
    constructor(public name: string, public age: number) {

    }
}

export class Teacher extends Person2 {
    constructor(name: string, age: number, public subject: string) {
        super(name, age)
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old and I teach ${this.subject}.`);
    }
}