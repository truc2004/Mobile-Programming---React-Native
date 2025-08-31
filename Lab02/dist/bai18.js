"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = fetchUser;
exports.runFetchUser = runFetchUser;
// Hàm async mô phỏng API call
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: "Thanh Trúc - 22663401",
                email: "truc@gmail.com",
            });
        }, 1000);
    });
}
async function runFetchUser() {
    const user = await fetchUser(1);
    console.log("\nBài 18\nFetched user:", user);
}
