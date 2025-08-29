
export class Book2 {
    id: string;
    title: string;
    author: string;

    constructor(id: string, title: string, author: string ) {
        this.id = id;
        this.title = title;
        this.author = author
    }
}

export class User2 {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name
    }
}

export class Library {
    private books: Book2[] = [];
    private users: User2[] = [];

    addBook(newbook: Book2): void {
        this.books.push(newbook);
    }

    addUser(newUser: User2): void {
        this.users.push(newUser)
    }

    getListBook(): void {
        this.books.forEach(b => {
            console.log(b);
            
        })
    }

    getListUser(): void {
        this.users.forEach(u => {
            console.log(u);
            
        })
    }

}