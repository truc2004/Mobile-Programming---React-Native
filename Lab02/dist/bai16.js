"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runParallelTasks = runParallelTasks;
const bai15_1 = require("./bai15");
async function runParallelTasks() {
    const results = await Promise.all([
        (0, bai15_1.waitAndLog)("Task 1", 1000),
        (0, bai15_1.waitAndLog)("Task 2", 1500),
        (0, bai15_1.waitAndLog)("Task 3", 500),
    ]);
    console.log("\nBài 16");
    console.log("All finish!");
}
