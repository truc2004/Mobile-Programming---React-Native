"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateSalary() {
        return this.salary;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }
    calculateSalary() {
        return this.salary + this.bonus;
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, salary, hour) {
        super(name, salary);
        this.hour = hour;
    }
    calculateSalary() {
        return this.salary + this.hour * 200;
    }
}
exports.Developer = Developer;
