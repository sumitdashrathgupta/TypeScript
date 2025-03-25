//!---------------------------------------------------InterFace And Aliases


//* Definging interface

interface User {
    name: String,
    Rollno: Number,
    Work: String
}

// Using interfaces to defind object shapes
function demo(Obj: User) {
    console.log(Obj.name)
}

demo({ name: "sumit", Rollno: 12, Work: "work" })



//!------------------------------------------------------Extending interfaces


interface Admin extends User{
    isAdmin:boolean
}

function demo1(Obj: Admin) {
   Obj.Rollno,Obj.isAdmin,Obj.name
}


//!-----------------------------------------------------------Type Aliases

type datatype = number | string
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
console.log(A)


//! -------------------------------------------------Intersection types

//! This is a Union ( | )
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