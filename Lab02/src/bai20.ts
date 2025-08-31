// baiFetchUserTimeout.ts
interface User {
    id: number;
    name: string;
    email: string;
}

// Hàm fetchUser với timeout
export async function fetchUser2(id: number): Promise<User> {
    const apiCall = new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: "Thanh Trúc - 22663401",
                email: "truc@gmail.com",
            });
        }, 1000);
    });

    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 2000);
    });

    // Promise.race: nếu apiCall lâu hơn 2 giây thì sẽ ném lỗi timeout
    return Promise.race([apiCall, timeout]);
}

export async function runFetchUserTimeout() {
    try {

        const user = await fetchUser2(1);
        console.log("\nBài 20\nFetched user:", user);

    } catch (error) {
        console.error("Error:", error);
    }
}
