// // function with parameter
// function addNumbers(a: number, b: number) {
//   return a + b;
// }
// console.log(addNumbers(3, 15));

// // tuple
// let mine: [number, string];
// mine = [280, "bacon"];
// mine[0] = 1000;
// console.log("mine ti 1 : ", mine[0]);
// console.log("mine ti 2 : ", mine[1]);

// // enum
// enum Foods {
//   "bacon",
//   "tomada",
//   "lettuce",
// }
// console.log(Foods[1]);

// let data: any = true;
// console.log(data);

// type Person = {
//   id: string | number;
//   username: string;
//   age: number[];
// };

// type Person02 = {
//   dateOfBirth: string;
// };
// interface IPerson {
//   id: string | number;
//   username: string;
//   age: number;
// }

// const user: Person & Person02 = {
//   id: 12345,
//   username: "Hello002",
//   age: [23, 90],
//   dateOfBirth: "02/10/2000",
// };

// console.log(user);

// let kosal: any = 67;
// console.log(typeof kosal);

// function sayHello(a: number, b: number) {
//   return "a + b = " + (a + b);
// }

// console.log(typeof sayHello(2, 89));

// function sumRest(a: number, ...b: number[]): number {
//   let result = a;
//   for (var i = 0; i < b.length; i++) {
//     result += b[i];
//   }
//   console.log(b)
//   return result;
// }

// console.log(sumRest(2, 4, 6, 10, 22));

function displayResult(names: string): string;
function displayResult(names: string[]): string;

function displayResult(names : any): any {
  return names;
}

console.log(displayResult("Johnson"))
console.log(displayResult(["a", "b", "c"]))