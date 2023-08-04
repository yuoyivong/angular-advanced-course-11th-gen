interface Taxable {
  calculateTax: (bonus: number) => number;
}

// type gender = ["MALE" , "FEMALE"];
type gender = "MALE" | "FEMALE";

class Person {
  private name: string;
  private gen: gender | string;
  private age: number;

  constructor(name: string, gen: string, age: number) {
    this.name = name;
    this.gen = gen;
    this.age = age;
  }

  display = () => {
    if (this.gen === "MALE") {
      console.log(
        this.name +
          " is " +
          this.gen.toLowerCase() +
          " and he is " +
          this.age +
          " years old."
      );
    } else if (this.gen === "FEMALE") {
      console.log(
        this.name +
          " is " +
          this.gen.toLowerCase() +
          " and she is " +
          this.age +
          " years old."
      );
    }
  };
}

class Employee extends Person implements Taxable {
  position: string;
  salary: number;
  tax: number;
  netSalary: number;

  constructor(name: string, gender: string, age: number) {
    super(name, gender, age);
  }

  displayEmployee() {
    console.log(this.position + " : " + this.salary + "$");
  }

  public calculateTax(bonus: number): number {
    if (bonus > 0) {
      this.tax = ((this.salary + bonus) * 10) / 100;
    } else {
      this.tax = (this.salary * 10) / 100;
    }
    this.netSalary = this.salary - this.tax;
    return this.netSalary;
  }
}

const employee = new Employee("Mary", "FEMALE", 25);
const employee1 = new Employee("John", "OTHER", 28);
// const employee2 = new Employee("Smith", "other", 21);

employee.position = "Software Engineering";
employee.salary = 5000;
employee.displayEmployee();
employee.display();
employee1.display();
employee.calculateTax(0);
console.log("The tax is : ", employee.tax);
console.log("The net salary is : ", employee.netSalary);
