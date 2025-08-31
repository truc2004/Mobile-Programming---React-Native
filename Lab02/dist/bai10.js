"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBai10 = runBai10;
const bai09_1 = require("./bai09");
function runBai10(numbers) {
    (0, bai09_1.filterEvenNumbers)(numbers)
        .then(result => {
        console.log("\nBài 10\nResult:", result);
    })
        .catch(error => {
        console.log("\nBài 10\nLỗi:", error);
    })
        .finally(() => {
        console.log("Done");
    });
}
