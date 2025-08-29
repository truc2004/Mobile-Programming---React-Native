"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Person2 = void 0;
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person2 = Person2;
class Teacher extends Person2 {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old and I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
