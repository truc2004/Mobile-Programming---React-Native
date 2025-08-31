import { simulateTask } from "./bai05";

export function runBai06() {
const task1 = simulateTask(1000);
const task2 = simulateTask(1500);
const task3 = simulateTask(2000);

Promise.all([task1, task2, task3])
  .then((results: string[]) => {

    console.log("\nBài 6");
    console.log("All tasks completed:");

    results.forEach((result, index) => {
      console.log(`Task ${index + 1}: ${result}`);
    });
  })
  .catch((error: string) => {
    console.log("\nAt least one task failed:", error);
  });
}
