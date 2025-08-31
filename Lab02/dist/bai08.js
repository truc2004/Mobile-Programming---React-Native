"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseChain = void 0;
const promiseChain = () => {
    new Promise((resolve) => {
        setTimeout(() => resolve(2), 1000); // bắt đầu với số 2
    })
        .then(num => num * num) // bình phương
        .then(num => num * 2) // nhân đôi
        .then(num => num + 5) // cộng 5
        .then(result => console.log("\nBài 8\nResult:", result));
};
exports.promiseChain = promiseChain;
