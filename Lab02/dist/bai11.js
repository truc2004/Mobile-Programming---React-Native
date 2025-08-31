"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsyncAwait = helloAsyncAwait;
async function helloAsyncAwait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
