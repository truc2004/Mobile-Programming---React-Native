export async function downloadFile(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log("\nBài 25 - File đã tải xong!");
}
