//! This is a Union

/*function value(num1: number | string, num2: number | string) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2
    }
    else {
        result = num1.toString() + num2.toString()
    }
    return result
}

const A = value(12, 4)
console.log(value("g","e"))
console.log(A)*/




//! This is a Liteal Type

/*function value(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2
    }
    else {
        result = num1.toString() + num2.toString()
    }
    return result
}

const A = value("12", 4, "as-number")
console.log(value("g", "e", "as-string"))
console.log(A)*/


//! interface 

/*interface User {
    name: string
    rollno: number
    skill: string[]
}


const user: User = {
    name: "sumit",
    rollno: 34,
    skill: ["react", "javascript"]
}

console.log(user)
console.log(user.name)*/



//! Alias Type / Custome Type


/*type datatype = number | string
type convert = "as-number" | "as-string"

function value(num1: datatype, num2: datatype, conversionType: convert) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2
    }
    else {
        result = num1.toString() + num2.toString()
    }
    return result
}

const A = value(12, 4, "as-number")
console.log(value("g", "e", "as-string"))
console.log(A)*/





//! Function



//? Error

/*function sum(num1: number, num2: number): string {
    return num1 + num2
}

const Data = sum(12, 4)
console.log(Data)*/



//? Right

/*function sum(num1: string, num2: string): string {
    return num1 + num2
}

const Data = sum("12", " 4")
console.log(Data)*/


const ok = (num1: number, num2: number): number => {
    return num1 + num2
}

console.log(ok(12, 3))
