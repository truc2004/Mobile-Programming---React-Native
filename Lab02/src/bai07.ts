import { simulateTask } from "./bai05";

export function runBai07() {
  const task4 = simulateTask(5000);
  const task5 = simulateTask(2000);
  const task6 = simulateTask(3000);

  Promise.race([task4, task5, task6])
    .then((result: string) => {
      console.log("\nBài 7");
      console.log("First finished:", result);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}