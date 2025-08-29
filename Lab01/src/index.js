"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai12_1 = require("./bai12");
const bai09_1 = require("./bai09");
const bai07_1 = require("./bai07");
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai08_1 = require("./bai08");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
// bài 1
var person = new bai01_1.Person("Nguyễn Thanh Trúc", 21);
console.log("Bài 1");
console.log(person);
// bài 2
var student = new bai02_1.Student("Nguyễn Thanh Trúc", 21, "DHKTPM18CTT");
console.log("\nBài 2");
student.displayInfo();
// bài 3
var car = new bai03_1.Car("Toyota", "Camry", 2022);
console.log("\nBài 3");
car.carInfo();
// bài 4
var rectangle = new bai04_1.Rectangle(2, 4);
var area = rectangle.calculateArea();
var perimeter = rectangle.calculatePerimeter();
console.log("\nBài 4");
console.log("Width: " + rectangle.width);
console.log("Height: " + rectangle.height);
console.log("Area: " + area);
console.log("Perimeter: " + perimeter);
// bài 5
var bankAccount = new bai05_1.BankAccount(400);
console.log("\nBài 5");
console.log("balance: " + bankAccount.balance);
bankAccount.deposit(200);
bankAccount.withdraw(400);
// bài 6
var book = new bai06_1.Book("Lập trình di động", "Nguyễn Thanh Trúc", 2025);
console.log("\nBài 6");
console.log(book);
// bài 7
var user = new bai07_1.User("A");
console.log("\nBài 7");
console.log("User: " + user.getName());
user.setName("Thanh Trúc");
console.log("New user: " + user.getName());
// bài 8
var products = [
    new bai08_1.Product("Book", 50),
    new bai08_1.Product("Headphones", 120),
    new bai08_1.Product("Keyboard", 80),
    new bai08_1.Product("Monitor", 200),
];
var productFilter = products.filter(p => p.price > 100);
console.log("\nBài 8");
console.log("Product with price > 100");
productFilter.forEach(p => {
    console.log(p);
});
// bài 9
var lion = new bai09_1.Lion("Lion");
console.log("\nBài 9");
lion.sound();
// bài 10
var account = new bai10_1.Account("123456", 200, "Nguyễn Thanh Trúc");
console.log("\nBài 10");
console.log("Account number: " + account.accNumber);
console.log("Owner: " + account.owner);
console.log("Balance: " + account.getBalance());
// bài 11
var dog = new bai11_1.Dog("KiKi");
var cat = new bai11_1.Cat("Kitty");
console.log("\nBài 11");
dog.bark();
cat.meow();
// bài 12
var bird = new bai12_1.Bird("Eagle");
var fish = new bai12_1.Fish("Nemo");
console.log("\nBài 12");
bird.fly();
fish.swim();
// bài 13
var square = new bai13_1.Square(5);
var circle = new bai13_1.Circle(4);
console.log("\nBài 13");
console.log("Square area: " + square.area());
console.log("Circle area: " + circle.area());
// bài 14
var manager = new bai14_1.Manager("Nguyên Thanh Trúc", 200000, 2000);
var developer = new bai14_1.Developer("Nguyễn Văn A", 200000, 4);
console.log("\nBài 14");
console.log(manager.name + ": " + manager.calculateSalary());
console.log(developer.name + ": " + developer.calculateSalary());
// bài 15
var library = new bai15_1.Library();
var book1 = new bai15_1.Book2("1", "Clean Code", "Robert C. Martin");
var book2 = new bai15_1.Book2("2", "Design Patterns", "Erich Gamma");
library.addBook(book1);
library.addBook(book2);
var user1 = new bai15_1.User2("1", "Nguyễzômn Thanh Trúc");
library.addUser(user1);
console.log("\nBài 15");
console.log("List book");
library.getListBook();
console.log("List user");
library.getListUser();
// bài 16
console.log("\nBài 16");
var numberBox = new bai16_1.Box(100);
console.log("Number Box:", numberBox.getValue());
var stringBox = new bai16_1.Box("Hello TypeScript");
console.log("String Box:", stringBox.getValue());
var booleanBox = new bai16_1.Box(true);
console.log("Boolean Box:", booleanBox.getValue());
// bài 17
var logger1 = bai17_1.Logger.getInstance();
var logger2 = bai17_1.Logger.getInstance();
console.log("\nBài 17");
logger1.log("Xin chào, đây là log đầu tiên!");
logger2.log("Log thứ hai từ logger!");
// bài 18
console.log("\nBài 18");
console.log("5 + 3 = " + bai18_1.MathUtil.add(5, 3));
console.log("5 - 3 = " + bai18_1.MathUtil.subtract(5, 3));
console.log("5 * 3 = " + bai18_1.MathUtil.multiply(5, 3));
console.log("5 / 3 = " + bai18_1.MathUtil.divide(5, 3));
// bài 19
var animal3 = new bai19_1.Animal3();
var dog3 = new bai19_1.Dog3();
var cat3 = new bai19_1.Cat3();
console.log("\nBài 19");
animal3.makeSound();
dog3.makeSound();
cat3.makeSound();
// bài 20
var car2 = new bai20_1.Car2();
var bike2 = new bai20_1.Bike2();
console.log("\nBài 20");
car2.introduce();
bike2.introduce();
// bài 21
console.log("\nBài 21");
var stringRepo = new bai21_1.Repository();
stringRepo.add("Book 1");
stringRepo.add("Book 2");
console.log("String Repo:", stringRepo.getAll());
const numberRepo = new bai21_1.Repository();
numberRepo.add(100);
numberRepo.add(200);
console.log("\nNumber Repo:", numberRepo.getAll());
var bookRepo = new bai21_1.Repository();
bookRepo.add(new bai15_1.Book2("1", "Clean Code", "Robert C. Martin"));
bookRepo.add(new bai15_1.Book2("2", "Design Patterns", "Erich Gamma"));
console.log("\nBook Repo:", bookRepo.getAll());
// bài 22
var stack = new bai22_1.Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("\nBài 22");
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
// bài 23
var cash = new bai23_1.CashPayment();
var card = new bai23_1.CardPayment();
console.log("\nBài 23");
cash.pay(200);
card.pay(100);
// bài 24
var fan = new bai24_1.Fan();
var airConditioner = new bai24_1.AirConditioner();
console.log("\nBài 24");
fan.turnOn();
airConditioner.turnOn();
// bài 25
console.log("\nBài 25");
bai25_1.Shape2.describe();
// bài 26
var order = new bai26_1.Order();
order.addProduct(new bai26_1.Product2("Laptop", 1500));
order.addProduct(new bai26_1.Product2("Mouse", 50));
order.addProduct(new bai26_1.Product2("Keyboard", 100));
console.log("\nBài 26");
console.log("Total Price:", order.calculateTotal());
// bài 27
var teacher = new bai27_1.Teacher("Nguyễn Thanh Trúc", 30, "Math");
console.log("\nBài 27");
teacher.introduce();
// bài 28
var dog4 = new bai28_1.Dog4();
var cat4 = new bai28_1.Cat4();
console.log("\nBài 28");
dog4.speak();
cat4.speak();
// bài 29
var car3 = new bai29_1.Car3();
var robot = new bai29_1.Robot();
console.log("\nBài 29");
car3.move();
robot.move();
// bài 30
var school = new bai30_1.School();
school.addStudent(new bai30_1.Student2("Nguyễn Thanh Trúc", 15));
school.addStudent(new bai30_1.Student2("Nguyễn Văn A", 16));
school.addTeacher(new bai30_1.Teacher2("Phạm Minh B", "Toán"));
school.addTeacher(new bai30_1.Teacher2("Nguyễn Tuân C", "Lý"));
console.log("\nBài 30");
school.displayInfo();
