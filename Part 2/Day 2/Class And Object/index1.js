var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo = /** @class */ (function () {
    function Demo(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        console.log(name);
        console.log(id + salary);
    }
    Demo.demp2 = function (salary) {
        console.log(salary);
    };
    return Demo;
}());
var Demo1 = /** @class */ (function (_super) {
    __extends(Demo1, _super);
    function Demo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Demo1;
}(Demo));
var Data = new Demo("sumit", 12, 4000);
console.log(Data);
