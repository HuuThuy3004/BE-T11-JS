// Bài 1: Quản lý học sinh
class Student {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getInfomation() {
    return `Student name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
console.log('Bai 1');
const student01 = new Student('Thuy', 21, 'BE-T11');
const student02 = new Student('Thinh', 21, 'BE-T11');
console.log(student01.getInfomation())
console.log(student02.getInfomation())

// Bài 2: Hệ thống ngân hàng
class BankAccount {
  accountNumber: string;
  balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number) {
    amount > 0
      ? (this.balance += amount)
      : console.log("Deposit amount must be positive.");
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount: number) {
    amount > 0 && amount <= this.balance
      ? (this.balance -= amount)
      : console.log("Invalid withdraw amount or insufficient balance.");
    console.log(`Withdraw ${amount}. New balance: ${this.balance}`);
  }
}

class SavingAccount extends BankAccount {
  interestRate: number;

  constructor(accountNumber: string, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    const interest = this.balance * this.interestRate / 100
    console.log(`Calculated interest: ${interest}`);
  }
}
console.log('Bai 2');
const myAccount = new SavingAccount("123456789", 1000, 5);
myAccount.deposit(500);
myAccount.withdraw(300);
const interest = myAccount.calculateInterest();

// Bài 3: Quản lý thư viện
type Book = {
    title: string;
    author: string;
    ISBN: string;
};

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }

    removeBook(ISBN: string): void {
        let index = -1;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].ISBN === ISBN) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`Removed book: ${removedBook.title}`);
        } else {
            console.log("Book with the given ISBN not found.");
        }
    }

    findBook(title: string): Book | undefined {
        for (const book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                console.log(`Found book: ${book.title}`);
                return book;
            }
        }
        console.log("Book not found.");
        return undefined;
    }
}
console.log('Bai 3');
const myLibrary = new Library();
const book1: Book = { title: "Book One", author: "Author One", ISBN: "111" };
const book2: Book = { title: "Book Two", author: "Author Two", ISBN: "222" };

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.findBook("Book One");
myLibrary.removeBook("111");

// Bài 4: Hình học
const PI = 3.14
abstract class Shape {
    abstract calculateArea(): number;
}
// - Hình chữ nhật
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}
// - Hình tròn
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return PI * this.radius * this.radius;
    }
}
console.log('Bai 4');
const rectangle = new Rectangle(10, 5);
const circle = new Circle(6);

console.log(`Area of Rectangle: ${rectangle.calculateArea()}`);
console.log(`Area of Circle: ${circle.calculateArea()}`);

// Bài 5: Quản lý nhân viên
class Employee {
    name: string;
    position: string;
    salary: number;
    
    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Manager", salary);
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Developer", salary);
    }
}

const employees: Employee[] = [
    new Manager("Alice", 5000),
    new Developer("Bob", 4000),
    new Developer("Charlie", 4500)
];

console.log('Bai 5');
employees.forEach(employee => {
    console.log(employee.getDetails());
});