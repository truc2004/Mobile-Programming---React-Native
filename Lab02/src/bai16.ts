import { waitAndLog } from "./bai15";


export async function runParallelTasks() {

    const results = await Promise.all([
        waitAndLog("Task 1", 1000),
        waitAndLog("Task 2", 1500),
        waitAndLog("Task 3", 500),
    ]);

    console.log("\nBài 16");

    console.log("All finish!");
}