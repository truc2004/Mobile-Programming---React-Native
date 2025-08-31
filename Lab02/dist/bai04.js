"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = getRandomNumber;
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const number = Math.random(); // trong khoảng [0, 1]
        if (number < 1) {
            resolve(number);
        }
        else {
            reject(new Error("Failed to generate a valid number"));
        }
    });
}
