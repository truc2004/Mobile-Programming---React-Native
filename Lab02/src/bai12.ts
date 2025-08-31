import { simulateTask } from "./bai05";

export async function runBai12() {
  const result = await simulateTask(2000); 
  console.log("\nBài 12");
  console.log(result);
}