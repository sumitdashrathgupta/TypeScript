//!---------------------------------------------------InterFace And Aliases
// Using interfaces to defind object shapes
function demo(Obj) {
    console.log(Obj.name);
}
demo({ name: "sumit", Rollno: 12, Work: "work" });
function demo1(Obj) {
    Obj.Rollno, Obj.isAdmin, Obj.name;
}
function value(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var A = value(12, 4, "as-number");
console.log(value("g", "e", "as-string"));
console.log(A);
