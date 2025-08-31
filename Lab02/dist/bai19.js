"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = fetchUsers;
exports.runFetchUsers = runFetchUsers;
const bai18_1 = require("./bai18");
async function fetchUsers(ids) {
    // Chạy song song bằng Promise.all
    const userPromises = ids.map(id => (0, bai18_1.fetchUser)(id));
    const users = await Promise.all(userPromises);
    return users;
}
async function runFetchUsers() {
    const ids = [1, 2, 3];
    const users = await fetchUsers(ids);
    console.log("\nBài 19\nFetched users:", users);
}
