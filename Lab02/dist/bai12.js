"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBai12 = runBai12;
const bai05_1 = require("./bai05");
async function runBai12() {
    const result = await (0, bai05_1.simulateTask)(2000);
    console.log("\nBài 12");
    console.log(result);
}
