//! Class and Constructor 
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
/*class Demo {
    constructor(public name: string, private Pan: number) {
        this.name = name
        this.Pan = Pan
    }
}

const d1 = new Demo("sumit", 400605)
console.log(d1)  */
//! Access Modifier public, private ,protected
var Demo = /** @class */ (function () {
    function Demo(name, Pan) {
        this.name = name;
        this.Pan = Pan;
        this.name = name;
        this.Pan = Pan;
    }
    return Demo;
}());
var Demo1 = /** @class */ (function (_super) {
    __extends(Demo1, _super);
    function Demo1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "amit";
        return _this;
    }
    Demo1.prototype.change = function () {
        this.Pan = 113;
        this.name = "working";
    };
    return Demo1;
}(Demo));
var d1 = new Demo("sumit", 400605);
var d2 = new Demo1("w", 12);
console.log(d1);
console.log(d2.change());
