export class Animal3 {
    makeSound(): void {
        console.log("Animal make a sound");
        
    }
}

export class Dog3 extends Animal3 {
    makeSound(): void {
        console.log("Dog says: woof woof");
        
    }
}

export class Cat3 extends Animal3 {
    makeSound(): void {
        console.log("Cat says: meo meo");
        
    }
}