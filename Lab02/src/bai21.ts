export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodo(): Promise<Todo> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: Todo = await response.json();
  console.log("\nBài 21:", data);
  return data;
}
