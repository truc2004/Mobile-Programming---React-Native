import { Todo } from "./bai21";

export async function fetchAPIMultiple(times: number): Promise<Todo[]> {
  const results: Todo[] = [];

  for (let i = 1; i <= times; i++) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    const data: Todo = await response.json();
    results.push(data);
  }

  console.log("\nBài 22", results);
  return results;
}
