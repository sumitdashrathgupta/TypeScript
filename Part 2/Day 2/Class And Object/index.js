//Class and Constructor 
var Part1 = /** @class */ (function () {
    function Part1(name, id) {
        this.name = name;
        this.id = id;
        this.Salary = 5000;
        console.log(name, id);
        console.log(this.Salary);
    }
    return Part1;
}());
var Data = new Part1("sumit", 12);
// console.log(Data)
console.log(Part1.name);
