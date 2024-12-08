var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Bài 1: Quản lý học sinh
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.getInfomation = function () {
        return "Student name: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade);
    };
    return Student;
}());
console.log('Bai 1');
var student01 = new Student('Thuy', 21, 'BE-T11');
var student02 = new Student('Thinh', 21, 'BE-T11');
console.log(student01.getInfomation());
console.log(student02.getInfomation());
// Bài 2: Hệ thống ngân hàng
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        amount > 0
            ? (this.balance += amount)
            : console.log("Deposit amount must be positive.");
        console.log("Deposited ".concat(amount, ". New balance: ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        amount > 0 && amount <= this.balance
            ? (this.balance -= amount)
            : console.log("Invalid withdraw amount or insufficient balance.");
        console.log("Withdraw ".concat(amount, ". New balance: ").concat(this.balance));
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.calculateInterest = function () {
        var interest = this.balance * this.interestRate / 100;
        console.log("Calculated interest: ".concat(interest));
    };
    return SavingAccount;
}(BankAccount));
console.log('Bai 2');
var myAccount = new SavingAccount("123456789", 1000, 5);
myAccount.deposit(500);
myAccount.withdraw(300);
var interest = myAccount.calculateInterest();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Added book: ".concat(book.title));
    };
    Library.prototype.removeBook = function (ISBN) {
        var index = -1;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].ISBN === ISBN) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var removedBook = this.books.splice(index, 1)[0];
            console.log("Removed book: ".concat(removedBook.title));
        }
        else {
            console.log("Book with the given ISBN not found.");
        }
    };
    Library.prototype.findBook = function (title) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title.toLowerCase() === title.toLowerCase()) {
                console.log("Found book: ".concat(book.title));
                return book;
            }
        }
        console.log("Book not found.");
        return undefined;
    };
    return Library;
}());
console.log('Bai 3');
var myLibrary = new Library();
var book1 = { title: "Book One", author: "Author One", ISBN: "111" };
var book2 = { title: "Book Two", author: "Author Two", ISBN: "222" };
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.findBook("Book One");
myLibrary.removeBook("111");
// Bài 4: Hình học
var PI = 3.14;
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
// - Hình chữ nhật
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// - Hình tròn
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
console.log('Bai 4');
var rectangle = new Rectangle(10, 5);
var circle = new Circle(6);
console.log("Area of Rectangle: ".concat(rectangle.calculateArea()));
console.log("Area of Circle: ".concat(circle.calculateArea()));
// Bài 5: Quản lý nhân viên
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, "Manager", salary) || this;
    }
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, "Developer", salary) || this;
    }
    return Developer;
}(Employee));
var employees = [
    new Manager("Alice", 5000),
    new Developer("Bob", 4000),
    new Developer("Charlie", 4500)
];
console.log('Bai 5');
employees.forEach(function (employee) {
    console.log(employee.getDetails());
});
