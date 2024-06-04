// Assignment no 22
import chalk from "chalk";

//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// create an array
let friendnames: string[]=["Ali", "Abdullah", "Ahmed", "Abdul Qadeer"];
//create an error in an array
console.log(chalk .blue(friendnames[5]));
//now solve it
console.log(chalk .yellow(friendnames[1]));

