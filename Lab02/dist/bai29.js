"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueProcess = queueProcess;
function queueTask(id) {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000));
}
async function queueProcess() {
    const tasks = [1, 2, 3, 4, 5];
    for (const id of tasks) {
        const result = await queueTask(id);
        console.log("\nBài 29: ", result);
    }
}
