"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComplete = getComplete;
async function getComplete() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const completed = todos.filter(todo => todo.completed);
    console.log("\nBài 23", completed.slice(0, 5));
    return completed;
}
