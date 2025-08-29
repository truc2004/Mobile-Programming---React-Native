export class Animal4 {
    protected makeSound(): void {
        console.log("Animal makes a sound");
    }

    public speak(): void {
        this.makeSound(); // Gọi method protected bên trong export class
    }
}

export class Dog4 extends Animal4 {
    protected makeSound(): void {
        console.log("Dog says Woof Woof!");
    }
}


export class Cat4 extends Animal4 {
    protected makeSound(): void {
        console.log("Cat says Meow Meow!");
    }
}