// Assignment 09
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

import chalk from "chalk";

let favoriteResult:number = 7;
let messageResult:string = `My favorite number: ${favoriteResult}`;

console.log(chalk .green(messageResult));