// # I.DATA TYPE
// Number
let age = 22
const pi = 3.14
let bigNumber = 1e6
// String
let firstName = "Tran"
let midName = "Huu"
let lastName = "Thuy"
// Boolean
let isUser = false
let isAccount = true
// Undefined
let user
// null - kiểu này mình chỉ định
let jac = null
// Array
// Object
let person = {
    fullName: "Tran Huu Thuy",
    age: 22,
    address: "Quang Nam",
    isStudent: true
}

// console.log(person);


// # II. OPERATORS:
// Mathematical Operators: +, -, *, /, %, **
// Compare Operators: ==, ===, !=, !==, >, >=, <, <=
// Logical Operators: &&, ||, !
// Assignment Operators: +=, -=, *=, /=, %=, ++, --
// Tenary Operators: condition ? true : false

// # III. CONTROL FLOW:
// Conditional Statements: if, else if, else
if (isUser) {
    // console.log("Welcome!");
} else {
    // console.log("Please login.");
}
// Switch Statements: switch, case, break, default
switch (age) {
    case 18:
        console.log("You are an adult.");
        break;
    case 17:
        console.log("You are a teenager.");
        break;
    default:
        console.log("You are a child.");
        break;
}

// # IV. LOOPS:
// For Loops: for, let, in, of, while, do_while

// # V. FUNCTIONS:
// Function Declaration: function name() {}
function FunctionDeclaration() {}
let FunctionDeclaration = 22
// Function Expression: let name = function() {}
let FunctionExpression = function() {}
// Arrow Functions: let name = () => {}
let ArrowFunction = () => {}
// Function Call: name
FunctionDeclaration()
FunctionExpression()
ArrowFunction()

// # VI. Arrays:
// Arrays Declaration: let arr = [number, string, boolean, null, undefined, object...]
let arr = [1, 2, 3, 4, 5];
// Index Array: start 0 - 1 - 2 
// Length Array: use property length - syntax: variableArray.length
// CRUD Array:
// - Create: unshift(), push()
// - Read: map()
// - Update: splice()
// - Delete: shift(), pop()
// Browse array: for-of(), forEach(), map()