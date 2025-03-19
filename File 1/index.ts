//! This is a function

function sum(num1: string, num2: string) {
    return num1 + num2
}

const total = sum("12", "3")
// console.log(total)


//!This is a object

const obj: {
    name: string,
    rollno: number,
    skill: string[]
} = {
    name: "string",
    rollno: 234,
    skill: ["javascript", "react js", "typescript", "next js"]
};

console.log(obj)