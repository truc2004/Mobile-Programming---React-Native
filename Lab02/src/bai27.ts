export async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Request failed");
      return await response.json();
    } catch (err) {
      console.log(`\n- Thử lại lần ${i + 1}`);
      if (i === retries - 1) throw err;
    }
  }
}
