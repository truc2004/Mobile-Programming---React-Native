import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('tasks.db');

// Tạo bảng nếu chưa có
export async function setupDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      value TEXT NOT NULL
    );
  `);
}

// Lấy danh sách
export async function getItems() {
  const rows = await db.getAllAsync('SELECT * FROM tasks ORDER BY id DESC');
  return rows;
}

// Thêm
export async function addItem(value: string) {
  await db.runAsync('INSERT INTO tasks (value) VALUES (?)', [value]);
}

// Xóa
export async function deleteItem(id: number) {
  await db.runAsync('DELETE FROM tasks WHERE id = ?', [id]);
}
