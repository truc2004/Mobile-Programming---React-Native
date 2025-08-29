"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.User2 = exports.Book2 = void 0;
class Book2 {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
exports.Book2 = Book2;
class User2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.User2 = User2;
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(newbook) {
        this.books.push(newbook);
    }
    addUser(newUser) {
        this.users.push(newUser);
    }
    getListBook() {
        this.books.forEach(b => {
            console.log(b);
        });
    }
    getListUser() {
        this.users.forEach(u => {
            console.log(u);
        });
    }
}
exports.Library = Library;
