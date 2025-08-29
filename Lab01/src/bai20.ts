interface Vehicle {
    introduce(): void
}

export class Car2 implements Vehicle {
    introduce(): void {
        console.log("This is a car");
        
    }
}

export class Bike2 implements Vehicle {
    introduce(): void {
        console.log("This is a bike");
        
    }
}