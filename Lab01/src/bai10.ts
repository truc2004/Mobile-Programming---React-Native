export class Account {

    // truy cập tự do
    public accNumber: string;

    // chỉ truy cập được trong class -> muốn sử dụng phải thông qua 
    // phương thức public nào đó
    private balance: number;

    // chỉ được gán một lần khi tạo object, không thể thay đổi sau đó
    public readonly owner: string;

    constructor(accNumber: string, balance: number, owner: string){
        this.accNumber = accNumber;
        this.balance = balance;
        this.owner = owner;
    }

    public getBalance(): number {
        return this.balance;
    }
}