"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Teacher2 = exports.Student2 = void 0;
class Student2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Student2 = Student2;
class Teacher2 {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
exports.Teacher2 = Teacher2;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("Students:");
        this.students.forEach(s => console.log(`- ${s.name}, Age: ${s.age}`));
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(`- ${t.name}, Subject: ${t.subject}`));
    }
}
exports.School = School;
