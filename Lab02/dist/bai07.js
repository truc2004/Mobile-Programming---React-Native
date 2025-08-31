"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBai07 = runBai07;
const bai05_1 = require("./bai05");
function runBai07() {
    const task4 = (0, bai05_1.simulateTask)(5000);
    const task5 = (0, bai05_1.simulateTask)(2000);
    const task6 = (0, bai05_1.simulateTask)(3000);
    Promise.race([task4, task5, task6])
        .then((result) => {
        console.log("\nBài 7");
        console.log("First finished:", result);
    })
        .catch((error) => {
        console.log("Error:", error);
    });
}
