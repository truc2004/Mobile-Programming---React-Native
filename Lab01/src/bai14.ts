export class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary
    }

    calculateSalary(): number {
        return this.salary;
    }
}

export class Manager extends Employee {
    bonus: number;

    constructor(name: string, salary: number, bonus: number) {
        super(name, salary);
        this.bonus = bonus
    }

    calculateSalary(): number {
        return this.salary + this.bonus
    }
}

export class Developer extends Employee {
    hour: number;

    constructor(name: string, salary: number, hour: number) {
        super(name, salary);
        this.hour = hour
    }

    calculateSalary(): number {
        return this.salary + this.hour * 200
    }
}