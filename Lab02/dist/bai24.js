"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = postData;
async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Hello World",
            body: "This is a test",
            userId: 1111
        })
    });
    const data = await response.json();
    console.log("\nBài 24 - POST response:", data);
}
