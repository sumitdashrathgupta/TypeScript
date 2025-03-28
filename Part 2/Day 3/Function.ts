
/*function abc(a: number, b: number): number {
    return a + b
}

let sum = abc(9, 1)
console.log(sum)*/


//! Arrow Functions

const subtract = (a: number, b: number): number => a - b;

console.log(subtract(10, 3)); // Output: 7

//! Optional Parameters

function greet(name: string, message?: string): string {
    return `Hello, ${name}! ${message || "Welcome!"}`;
}

console.log(greet("Sumit")); // Output: Hello, Sumit! Welcome!
console.log(greet("Sumit", "Good Morning!")); // Output: Hello, Sumit! Good Morning!


//! Default Parameters

function calculatePrice(price: number, tax: number = 0.1): number {
    return price + price * tax;
}

console.log(calculatePrice(100)); // Output: 110
console.log(calculatePrice(100, 0.2)); // Output: 120

//!Rest Parameters

function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//!Function Overloading

function getInfo(id: number): string;
function getInfo(name: string): string;
function getInfo(value: number | string): string {
    if (typeof value === "number") {
        return `User ID: ${value}`;
    } else {
        return `User Name: ${value}`;
    }
}

console.log(getInfo(101)); // Output: User ID: 101
console.log(getInfo("Sumit")); // Output: User Name: Sumit

//!Higher-Order Functions

function operate(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

const result = operate(10, 5, (x, y) => x / y);
console.log(result); // Output: 2


//! Function with Interface

interface MathOperation {
    (x: number, y: number): number;
}

const divide: MathOperation = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5

//! Anonymous and Callback Functions

function processUserInput(callback: (name: string) => void) {
    let name = "Sumit";
    callback(name);
}

processUserInput((name) => console.log(`Hello, ${name}!`)); // Output: Hello, Sumit!
