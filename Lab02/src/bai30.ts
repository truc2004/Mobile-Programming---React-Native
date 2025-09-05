export async function bai30(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/invalid"
  ];

  const results = await Promise.allSettled(
    urls.map(url => fetch(url).then(r => r.json()))
  );

  console.log("\nBài 30 - Kết quả:", results);
}
