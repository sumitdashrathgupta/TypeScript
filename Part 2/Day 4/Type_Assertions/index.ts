// Type Assertions
// Type casting
// Non-null assertion operator


// let a: any = "12"
// let b = (a as number)
// console.log(b)


let a: any = "12"
let b = <number>a;
console.log(b)



// let a = Number("12")
// console.log(a)


//? Non-null assertion operator

let s: null | undefined | string
s: "sumit"

s!  //-Non-nullor undefined assertion