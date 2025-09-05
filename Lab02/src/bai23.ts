import { Todo } from "./bai21";

export async function getComplete(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  const completed = todos.filter(todo => todo.completed);
  console.log("\nBài 23", completed.slice(0, 5));
  return completed;
}
