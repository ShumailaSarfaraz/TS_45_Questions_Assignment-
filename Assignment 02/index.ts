// Assignment 02
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

import chalk from "chalk";

let personName:string = "Eric";
let message:string = `Hello ${personName}, would you like to learn some Python today?`;

console.log(chalk .blue(`${message}`));