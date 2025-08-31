"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBai06 = runBai06;
const bai05_1 = require("./bai05");
function runBai06() {
    const task1 = (0, bai05_1.simulateTask)(1000);
    const task2 = (0, bai05_1.simulateTask)(1500);
    const task3 = (0, bai05_1.simulateTask)(2000);
    Promise.all([task1, task2, task3])
        .then((results) => {
        console.log("\nBài 6");
        console.log("All tasks completed:");
        results.forEach((result, index) => {
            console.log(`Task ${index + 1}: ${result}`);
        });
    })
        .catch((error) => {
        console.log("\nAt least one task failed:", error);
    });
}
