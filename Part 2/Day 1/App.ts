//! Basic Type
/* 
-primitive Type (Number,string,boolean)
-Array
-Tuples
-Enums
-Any ,unknown,void,null,undefined,never
 */

//! primitive Type (Number,string,boolean)

const num = 12;
const str = "string";
const bool = true;

//! Array

let arr = [12, 34, 42, 42, 42]; //? This is a Array:Number
let arr1 = [12, "sumit", 42, null, 42]; //? This is a Array:string | number | null)[]
let arr2: Number[] = [12, 34, 42, 42]; //? This is a Array:Number
let arr3: String[] = ["12", "34", "42", "42"]; //? This is a Array:String

//! Tuples
let arr4: [number, string] = [23, "sumit"]; //? This is a Array: [Number , String]
//? let arr5:[number,string]=["sumit",76]  //? ❌

//! Enums
enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

UserRole.ADMIN; //You can used any place

//! Any ,unknown,void,null,undefined,never

//?ANY

let a; //? You an not defined type than it is a by default type any than typyscript off
a = 12;
a = "sting";
a.toUpperCase();

//?UNKNOWN
let b: unknown;
b = 12;
b = "string";

// b.toUpperCase() //❌ you can defined condition

if (typeof b === "string") b.toUpperCase(); //you can defined condition

//? Void

function abc(): void {
  console.log("abc"); //! You can not return any thing
}
function abc1(): number {
  return 12; //! You can return number
}
function abc2(): string {
  return "sumit"; //! You can  return String
}

//! Null

let a1: null;
let a2: string | null;
a2 = "sumit";
a2 = null;
// a2=12 //❌ You can defined type string or null


//!undefined
let a3 = undefined; // You can not any thing defined than undefined
a3 = 12
console.log(a3)


//!Never
function abcde(): never {
  while (true) { } // This is a infint loops than return not any thing
}

abcde();
console.log("return"); //! it is not excuted
