"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runForAwait = runForAwait;
function waitAndReturn(taskName, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} done after ${time}ms`);
        }, time);
    });
}
// Hàm async dùng for await...of
async function runForAwait() {
    const tasks = [
        waitAndReturn("Task 1", 8000),
        waitAndReturn("Task 2", 9000),
        waitAndReturn("Task 3", 10000),
    ];
    for await (const result of tasks) {
        console.log("\nBài 17");
        console.log(result);
    }
    console.log("All finish!");
}
