"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying high!`);
    }
}
exports.Bird = Bird;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is swimming in the water!`);
    }
}
exports.Fish = Fish;
