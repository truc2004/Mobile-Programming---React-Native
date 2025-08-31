import { filterEvenNumbers } from "./bai09";

export function runBai10(numbers: number[]) {
  filterEvenNumbers(numbers)
    .then(result => {
      console.log("\nBài 10\nResult:", result);
    })
    .catch(error => {
      console.log("\nBài 10\nLỗi:", error);
    })
    .finally(() => {
      console.log("Done"); 
    });
}