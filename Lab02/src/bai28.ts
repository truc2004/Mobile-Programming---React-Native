function fakeTask(id: number): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve(`Task ${id} done`), 1000 * id)
  );
}

export async function batchProcess(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5].map(id => fakeTask(id));
  const results = await Promise.all(tasks);
  console.log("Bài 28 - Kết quả:", results);
}
