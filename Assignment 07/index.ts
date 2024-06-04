// Assignment 07
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

import chalk from "chalk";

// Addition
let add1 = 4;
let add2 = 4;
let additionResult = add1 + add2;
console.log(chalk .green("addition Result:", additionResult)); 

// Subtraction
let sub1 = 12;
let sub2 = 4;
let subtractionResult = sub1 - sub2;
console.log(chalk .blue("subtraction Result:", subtractionResult));

// Multiplication
let mult1 = 4;
let mult2 = 2;
let multiplicationResult = mult1 * mult2;
console.log(chalk .red("multiplicationResult:", multiplicationResult));

// Division
let div1 = 16;
let div2 = 2;
let divisionResult = div1 / div2;
console.log(chalk .yellowBright("divisionResult:", divisionResult));