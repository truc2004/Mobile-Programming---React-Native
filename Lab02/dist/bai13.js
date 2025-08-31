"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBai13 = void 0;
const bai05_1 = require("./bai05");
const runBai13 = async () => {
    try {
        const result = await (0, bai05_1.simulateTask)(2000);
        console.log("\nBài 13");
        console.log("Result:", result);
    }
    catch (error) {
        console.log("Error:", error);
    }
};
exports.runBai13 = runBai13;
