// Assignment 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

import chalk from "chalk";

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let placeToVisit: string[] =["paris", "canada", "new york", "rome", "itlay"];

// • Print your array in its original order.
// print in original order
console.log(chalk .red("origional order:", placeToVisit));

// • Print your array in alphabetical order without modifying the actual list.
// Print array in alphabetical order without modifying the actual list.
console.log(chalk .yellow("Alphabetical order:", placeToVisit.slice().sort()));

// • Show that your array is still in its original order by printing it.
// array is still in its original order by printing it.
console.log(chalk .blue("origional order:", placeToVisit));

// • Print your array in reverse alphabetical order without changing the order of the original list.
// Print array in reverse alphabetical order without changing the order of the original list.
console.log(chalk .gray("reverse order:", placeToVisit.slice().sort().reverse()));

// • Show that your array is still in its original order by printing it again.
// array is still in its original order by printing it again.
console.log(chalk .red("origional order:", placeToVisit));

// • Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of your list. Print the array to show that its order has changed.
console.log(chalk .yellow("reverse order changed"));
placeToVisit.reverse();
console.log(chalk .blue(placeToVisit));

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(chalk. black("orginal order:", placeToVisit.sort()));
console.log(chalk .black(placeToVisit));

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(chalk .red("reverse alphabetical order changed:", placeToVisit.sort().reverse()));
console.log(chalk .red(placeToVisit));



