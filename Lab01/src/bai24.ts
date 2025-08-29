abstract class Appliance {
    abstract turnOn(): void
}

export class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is now on");
    }
}

export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air conditioner is now on");
    }
}