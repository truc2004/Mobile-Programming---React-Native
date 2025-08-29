"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat3 = exports.Dog3 = exports.Animal3 = void 0;
class Animal3 {
    makeSound() {
        console.log("Animal make a sound");
    }
}
exports.Animal3 = Animal3;
class Dog3 extends Animal3 {
    makeSound() {
        console.log("Dog says: woof woof");
    }
}
exports.Dog3 = Dog3;
class Cat3 extends Animal3 {
    makeSound() {
        console.log("Cat says: meo meo");
    }
}
exports.Cat3 = Cat3;
