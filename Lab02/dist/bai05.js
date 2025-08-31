"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = void 0;
const simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    });
};
exports.simulateTask = simulateTask;
