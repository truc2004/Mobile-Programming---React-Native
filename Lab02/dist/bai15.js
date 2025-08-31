"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitAndLog = waitAndLog;
exports.runSequential = runSequential;
// Một hàm async giả lập chờ n giây rồi in ra thông báo
async function waitAndLog(name, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
// Gọi nhiều hàm async tuần tự bằng await
async function runSequential() {
    await waitAndLog("Task 1", 5000);
    await waitAndLog("Task 2", 6000);
    await waitAndLog("Task 3", 4000);
    console.log("\nBài 15");
    console.log("All finish!");
}
