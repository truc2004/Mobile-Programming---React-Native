"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat4 = exports.Dog4 = exports.Animal4 = void 0;
class Animal4 {
    makeSound() {
        console.log("Animal makes a sound");
    }
    speak() {
        this.makeSound(); // Gọi method protected bên trong export class
    }
}
exports.Animal4 = Animal4;
class Dog4 extends Animal4 {
    makeSound() {
        console.log("Dog says Woof Woof!");
    }
}
exports.Dog4 = Dog4;
class Cat4 extends Animal4 {
    makeSound() {
        console.log("Cat says Meow Meow!");
    }
}
exports.Cat4 = Cat4;
