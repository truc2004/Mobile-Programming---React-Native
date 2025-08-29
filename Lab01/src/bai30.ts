export class Student2 {
    constructor(public name: string, public age: number) {}
}

export class Teacher2 {
    constructor(public name: string, public subject: string) {}
}

export class School {
    private students: Student2[] = [];
    private teachers: Teacher2[] = [];

    addStudent(student: Student2): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher2): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("Students:");
        this.students.forEach(s => console.log(`- ${s.name}, Age: ${s.age}`));

        console.log("Teachers:");
        this.teachers.forEach(t => console.log(`- ${t.name}, Subject: ${t.subject}`));
    }
}