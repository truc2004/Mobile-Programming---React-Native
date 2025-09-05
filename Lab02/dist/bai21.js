"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodo = getTodo;
async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("\nBài 21:", data);
    return data;
}
