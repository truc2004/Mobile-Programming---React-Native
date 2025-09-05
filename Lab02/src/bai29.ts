function queueTask(id: number): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve(`Task ${id} done`), 1000)
  );
}

export async function queueProcess(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5];
  for (const id of tasks) {
    const result = await queueTask(id);
    console.log("\nBài 29: ", result);
  }
}
