// Assignment 06
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
import chalk from "chalk";
let nameWithWhiteSpace = "\t \n Shumaila Sarfaraz \t \n";
console.log(chalk.green("name With White Space:", nameWithWhiteSpace));
let strippingName = nameWithWhiteSpace.trim();
console.log(chalk.blue("stripping Name:", strippingName));
