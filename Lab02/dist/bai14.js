"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyAfter1s = void 0;
const multiplyAfter1s = async (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
};
exports.multiplyAfter1s = multiplyAfter1s;
