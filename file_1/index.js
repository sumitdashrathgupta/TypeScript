//! This is a function
function sum(num1, num2) {
    return num1 + num2;
}
var total = sum("12", "3");
// console.log(total)
//!This is a object

// var obj = {
//     name: "string",
//     rollno: 234,
//     skill: ["javascript", "react js", "typescript", "next js"]
// };
// console.log(obj);


const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
console.log(area)