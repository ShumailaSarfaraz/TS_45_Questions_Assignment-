// Assignment 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

import chalk from "chalk";

// UpperCase
function toUpperCase(Shumaila:string) {
    return `${Shumaila}`.toUpperCase();  
 }
 let inputString:string = "shumaila sarfaraz";
 let upperCaseString:string = toUpperCase(inputString);
 console.log(chalk .red("UpperCase:", upperCaseString));

 //LowerCase
function toLowerCase(Sarfaraz:string) {
    return `${Sarfaraz}`.toLowerCase();
}
let outputString:string = "SHUMAILA SARFARAZ";
let lowerCaseString:string = toLowerCase(outputString);
console.log(chalk .yellow("LowerCase:", lowerCaseString));    

// TitleCase
let sentence:string = "i am learning typescript";
// Step 01
let personName:string[] = sentence.split(" ");
// Step 02
let titlecaseName:string = "";
// Step 03
for (let i = 0; i < personName.length; i++) {
    titlecaseName +=personName[i].charAt(0).toUpperCase()+personName[i].slice(1).toLowerCase() + " ";
}
console.log(chalk .blue(titlecaseName));