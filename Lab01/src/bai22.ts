export class Stack<T> {
    private items: T[] = [];

    // Thêm phần tử vào stack
    push(item: T): void {
        this.items.push(item);
    }

    // Lấy ra phần tử trên cùng và xóa nó
    pop(): T | undefined {
        return this.items.pop();
    }

    // Xem phần tử trên cùng nhưng không xóa
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Kiểm tra stack rỗng
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}