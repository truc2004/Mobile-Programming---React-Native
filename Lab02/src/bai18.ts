// Định nghĩa kiểu User
interface User {
    id: number;
    name: string;
    email: string;
}

// Hàm async mô phỏng API call
export async function fetchUser(id: number): Promise<User> {
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

export async function runFetchUser() {

    const user = await fetchUser(1);

    console.log("\nBài 18\nFetched user:", user);
}
