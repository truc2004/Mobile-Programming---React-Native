import { simulateTask } from "./bai05";

export const runBai13 = async () => {
  try {
    const result = await simulateTask(2000);
    
    console.log("\nBài 13");
    
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
};