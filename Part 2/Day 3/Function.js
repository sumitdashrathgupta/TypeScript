/*function abc(a: number, b: number): number {
    return a + b
}

let sum = abc(9, 1)
console.log(sum)*/
//! Arrow Functions
var subtract = function (a, b) { return a - b; };
console.log(subtract(10, 3)); // Output: 7
//! Optional Parameters
function greet(name, message) {
    return "Hello, ".concat(name, "! ").concat(message || "Welcome!");
}
console.log(greet("Sumit")); // Output: Hello, Sumit! Welcome!
console.log(greet("Sumit", "Good Morning!")); // Output: Hello, Sumit! Good Morning!
//! Default Parameters
function calculatePrice(price, tax) {
    if (tax === void 0) { tax = 0.1; }
    return price + price * tax;
}
console.log(calculatePrice(100)); // Output: 110
console.log(calculatePrice(100, 0.2)); // Output: 120
//!Rest Parameters
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
function getInfo(value) {
    if (typeof value === "number") {
        return "User ID: ".concat(value);
    }
    else {
        return "User Name: ".concat(value);
    }
}
console.log(getInfo(101)); // Output: User ID: 101
console.log(getInfo("Sumit")); // Output: User Name: Sumit
//!Higher-Order Functions
function operate(a, b, operation) {
    return operation(a, b);
}
var result = operate(10, 5, function (x, y) { return x / y; });
console.log(result); // Output: 2
var divide = function (a, b) { return a / b; };
console.log(divide(10, 2)); // Output: 5
//! Anonymous and Callback Functions
function processUserInput(callback) {
    var name = "Sumit";
    callback(name);
}
processUserInput(function (name) { return console.log("Hello, ".concat(name, "!")); }); // Output: Hello, Sumit!
