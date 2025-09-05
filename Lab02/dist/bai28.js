"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = batchProcess;
function fakeTask(id) {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000 * id));
}
async function batchProcess() {
    const tasks = [1, 2, 3, 4, 5].map(id => fakeTask(id));
    const results = await Promise.all(tasks);
    console.log("Bài 28 - Kết quả:", results);
}
