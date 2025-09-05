export async function setTimeout1(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("\nBài 26 - Đã chờ 5s xong!");
}
