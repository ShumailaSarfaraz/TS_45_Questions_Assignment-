// Assignment 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
import chalk from "chalk";
// UpperCase
function toUpperCase(Shumaila) {
    return `${Shumaila}`.toUpperCase();
}
let inputString = "shumaila sarfaraz";
let upperCaseString = toUpperCase(inputString);
console.log(chalk.red("UpperCase:", upperCaseString));
//LowerCase
function toLowerCase(Sarfaraz) {
    return `${Sarfaraz}`.toLowerCase();
}
let outputString = "SHUMAILA SARFARAZ";
let lowerCaseString = toLowerCase(outputString);
console.log(chalk.yellow("LowerCase:", lowerCaseString));
// TitleCase
let sentence = "i am learning typescript";
// Step 01
let personName = sentence.split(" ");
// Step 02
let titlecaseName = "";
// Step 03
for (let i = 0; i < personName.length; i++) {
    titlecaseName += personName[i].charAt(0).toUpperCase() + personName[i].slice(1).toLowerCase() + " ";
}
console.log(chalk.blue(titlecaseName));
