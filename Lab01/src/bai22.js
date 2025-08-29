"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.items = [];
    }
    // Thêm phần tử vào stack
    push(item) {
        this.items.push(item);
    }
    // Lấy ra phần tử trên cùng và xóa nó
    pop() {
        return this.items.pop();
    }
    // Xem phần tử trên cùng nhưng không xóa
    peek() {
        return this.items[this.items.length - 1];
    }
    // Kiểm tra stack rỗng
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.Stack = Stack;
