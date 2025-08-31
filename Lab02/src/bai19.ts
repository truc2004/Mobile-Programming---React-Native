import { fetchUser } from "./bai18";


export async function fetchUsers(ids: number[]) {
    // Chạy song song bằng Promise.all
    const userPromises = ids.map(id => fetchUser(id));
    const users = await Promise.all(userPromises);
    return users;
}


export async function runFetchUsers() {
    const ids = [1, 2, 3];

    const users = await fetchUsers(ids);
    console.log("\nBài 19\nFetched users:", users);
}
