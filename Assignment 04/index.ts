// Assignment 04
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”



import chalk from "chalk";

let famQuote:string = "A person who never made a mistake never tried anything new.";
let author:string = "Albert Einstein";

console.log(chalk .red(`${author} once said, "${famQuote}"`));
