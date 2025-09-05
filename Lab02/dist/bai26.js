"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimeout1 = setTimeout1;
async function setTimeout1() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("\nBài 26 - Đã chờ 5s xong!");
}
