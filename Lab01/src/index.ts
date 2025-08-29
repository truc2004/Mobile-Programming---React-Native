import { Bird, Fish } from './bai12';
import { Lion } from './bai09';
import { User } from './bai07';
import { Person } from "./bai01"
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";
import { Product } from './bai08';
import { Account } from './bai10';
import { Dog, Cat } from './bai11';
import { Circle, Square } from './bai13';
import { Developer, Manager } from './bai14';
import { Book2, Library, User2 } from './bai15';
import { Box } from './bai16';
import { Logger } from './bai17';
import { MathUtil } from './bai18';
import { Animal3, Cat3, Dog3 } from './bai19';
import { Bike2, Car2 } from './bai20';
import { Repository } from './bai21';
import { Stack } from './bai22';
import { CardPayment, CashPayment } from './bai23';
import { Fan, AirConditioner } from './bai24';
import { Shape2 } from './bai25';
import { Order, Product2 } from './bai26';
import { Teacher } from './bai27';
import { Cat4, Dog4 } from './bai28';
import { Car3, Robot } from './bai29';
import { School, Student2, Teacher2 } from './bai30';


// bài 1
var person = new Person("Nguyễn Thanh Trúc", 21)
console.log("Bài 1");
console.log(person);

// bài 2
var student = new Student("Nguyễn Thanh Trúc", 21, "DHKTPM18CTT");
console.log("\nBài 2");
student.displayInfo()

// bài 3
var car = new Car("Toyota", "Camry", 2022)
console.log("\nBài 3");
car.carInfo()

// bài 4
var rectangle = new Rectangle(2, 4);
var area = rectangle.calculateArea()
var perimeter = rectangle.calculatePerimeter()
console.log("\nBài 4");
console.log("Width: " + rectangle.width);
console.log("Height: " + rectangle.height);
console.log("Area: " + area);
console.log("Perimeter: " + perimeter);

// bài 5
var bankAccount = new BankAccount(400);
console.log("\nBài 5");
console.log("balance: " + bankAccount.balance);
bankAccount.deposit(200);
bankAccount.withdraw(400);

// bài 6
var book = new Book("Lập trình di động", "Nguyễn Thanh Trúc", 2025);
console.log("\nBài 6")
console.log(book);

// bài 7
var user = new User("A");
console.log("\nBài 7");
console.log("User: " + user.getName());

user.setName("Thanh Trúc")
console.log("New user: " + user.getName());


// bài 8
var products: Product[] = [
    new Product("Book", 50),
    new Product("Headphones", 120),
    new Product("Keyboard", 80),
    new Product("Monitor", 200),
];

var productFilter = products.filter(p => p.price > 100)

console.log("\nBài 8");
console.log("Product with price > 100");

productFilter.forEach(p => {
    console.log(p);
    
})

// bài 9
var lion = new Lion("Lion");
console.log("\nBài 9");
lion.sound()

// bài 10
var account = new Account("123456", 200, "Nguyễn Thanh Trúc");
console.log("\nBài 10");
console.log("Account number: " + account.accNumber);
console.log("Owner: " + account.owner);
console.log("Balance: " + account.getBalance());


// bài 11
var dog = new Dog("KiKi");
var cat = new Cat("Kitty");
console.log("\nBài 11");
dog.bark()
cat.meow()

// bài 12
var bird = new Bird("Eagle");
var fish = new Fish("Nemo");
console.log("\nBài 12");
bird.fly();
fish.swim()

// bài 13
var square = new Square(5);
var circle = new Circle(4);
console.log("\nBài 13");
console.log("Square area: " + square.area());
console.log("Circle area: " + circle.area());

// bài 14
var manager = new Manager("Nguyên Thanh Trúc", 200000, 2000);
var developer = new Developer("Nguyễn Văn A", 200000, 4)
console.log("\nBài 14");
console.log(manager.name + ": " + manager.calculateSalary());
console.log(developer.name + ": " + developer.calculateSalary());

// bài 15
var library = new Library();

var book1 = new Book2("1", "Clean Code", "Robert C. Martin");
var book2 = new Book2("2", "Design Patterns", "Erich Gamma");
library.addBook(book1);
library.addBook(book2);

var user1 = new User2("1", "Nguyễzômn Thanh Trúc");
library.addUser(user1)

console.log("\nBài 15");
console.log("List book");
library.getListBook()
console.log("List user");
library.getListUser()

// bài 16
console.log("\nBài 16");

var numberBox = new Box<number>(100);
console.log("Number Box:", numberBox.getValue());

var stringBox = new Box<string>("Hello TypeScript");
console.log("String Box:", stringBox.getValue());

var booleanBox = new Box<boolean>(true);
console.log("Boolean Box:", booleanBox.getValue());

// bài 17
var logger1 = Logger.getInstance();
var logger2 = Logger.getInstance();

console.log("\nBài 17");
logger1.log("Xin chào, đây là log đầu tiên!");
logger2.log("Log thứ hai từ logger!");

// bài 18
console.log("\nBài 18");
console.log("5 + 3 = " + MathUtil.add(5, 3));
console.log("5 - 3 = " + MathUtil.subtract(5, 3));
console.log("5 * 3 = " + MathUtil.multiply(5, 3));
console.log("5 / 3 = " + MathUtil.divide(5, 3));

// bài 19
var animal3 = new Animal3();
var dog3 = new Dog3();
var cat3 = new Cat3();

console.log("\nBài 19");
animal3.makeSound();
dog3.makeSound()
cat3.makeSound()

// bài 20
var car2 = new Car2();
var bike2 = new Bike2();

console.log("\nBài 20");
car2.introduce();
bike2.introduce();

// bài 21
console.log("\nBài 21");

var stringRepo = new Repository<string>();
stringRepo.add("Book 1");
stringRepo.add("Book 2");
console.log("String Repo:", stringRepo.getAll());

const numberRepo = new Repository<number>();
numberRepo.add(100);
numberRepo.add(200);
console.log("\nNumber Repo:", numberRepo.getAll());


var bookRepo = new Repository<Book2>();
bookRepo.add(new Book2( "1", "Clean Code", "Robert C. Martin" ));
bookRepo.add(new Book2( "2", "Design Patterns", "Erich Gamma" ));
console.log("\nBook Repo:", bookRepo.getAll());

// bài 22
var stack = new Stack<number>();
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
var cash = new CashPayment();
var card = new CardPayment();

console.log("\nBài 23");
cash.pay(200);
card.pay(100)

// bài 24
var fan = new Fan();
var airConditioner = new AirConditioner();

console.log("\nBài 24");
fan.turnOn();
airConditioner.turnOn();

// bài 25
console.log("\nBài 25");
Shape2.describe()

// bài 26
var order = new Order();
order.addProduct(new Product2("Laptop", 1500));
order.addProduct(new Product2("Mouse", 50));
order.addProduct(new Product2("Keyboard", 100));

console.log("\nBài 26");
console.log("Total Price:", order.calculateTotal());

// bài 27
var teacher = new Teacher("Nguyễn Thanh Trúc", 30, "Math");

console.log("\nBài 27");
teacher.introduce()

// bài 28
var dog4 = new Dog4();
var cat4 = new Cat4();

console.log("\nBài 28");
dog4.speak();
cat4.speak()

// bài 29
var car3 = new Car3();
var robot = new Robot();

console.log("\nBài 29");
car3.move();
robot.move()

// bài 30
var school = new School();
school.addStudent(new Student2("Nguyễn Thanh Trúc", 15));
school.addStudent(new Student2("Nguyễn Văn A", 16));

school.addTeacher(new Teacher2("Phạm Minh B", "Toán"));
school.addTeacher(new Teacher2("Nguyễn Tuân C", "Lý"));

console.log("\nBài 30");
school.displayInfo();





