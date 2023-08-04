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
var Person = /** @class */ (function () {
    function Person(name, gen, age) {
        var _this = this;
        this.display = function () {
            if (_this.gen === "MALE") {
                console.log(_this.name +
                    " is " +
                    _this.gen.toLowerCase() +
                    " and he is " +
                    _this.age +
                    " years old.");
            }
            else if (_this.gen === "FEMALE") {
                console.log(_this.name +
                    " is " +
                    _this.gen.toLowerCase() +
                    " and she is " +
                    _this.age +
                    " years old.");
            }
            else {
                console.log(_this.name +
                    " is " +
                    _this.gen.toLowerCase() +
                    " and you are " +
                    _this.age +
                    " years old.");
            }
        };
        this.name = name;
        this.gen = gen;
        this.age = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, gender, age) {
        return _super.call(this, name, gender, age) || this;
    }
    Employee.prototype.displayEmployee = function () {
        console.log(this.position + " : " + this.salary + "$");
    };
    Employee.prototype.calculateTax = function (bonus) {
        if (bonus > 0) {
            this.tax = ((this.salary + bonus) * 10) / 100;
        }
        else {
            this.tax = (this.salary * 10) / 100;
        }
        this.netSalary = this.salary - this.tax;
        return this.netSalary;
    };
    return Employee;
}(Person));
var employee = new Employee("Mary", "FEMALE", 25);
var employee1 = new Employee("John", "OTHER", 28);
// const employee2 = new Employee("Smith", "other", 21);
employee.position = "Software Engineering";
employee.salary = 5000;
employee.displayEmployee();
employee.display();
employee1.display();
employee.calculateTax(0);
console.log("The tax is : ", employee.tax);
console.log("The net salary is : ", employee.netSalary);
