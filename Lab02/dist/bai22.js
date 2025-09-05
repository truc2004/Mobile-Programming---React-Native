"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAPIMultiple = fetchAPIMultiple;
async function fetchAPIMultiple(times) {
    const results = [];
    for (let i = 1; i <= times; i++) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
        const data = await response.json();
        results.push(data);
    }
    console.log("\nBài 22", results);
    return results;
}
