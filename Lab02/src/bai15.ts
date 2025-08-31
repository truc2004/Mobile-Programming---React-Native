// Một hàm async giả lập chờ n giây rồi in ra thông báo
export async function waitAndLog(name: string, ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Gọi nhiều hàm async tuần tự bằng await
export async function runSequential() {

  await waitAndLog("Task 1", 5000);
  await waitAndLog("Task 2", 6000);
  await waitAndLog("Task 3", 4000);

  console.log("\nBài 15");
  
  console.log("All finish!");
}