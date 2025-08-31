export function throwError(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000); 
  });
}