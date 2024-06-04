// Assignment 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
import chalk from "chalk";
let transportationMode = ["motorcycle", "car", "bicycle", "bus"];
// loop
// for each
// for of loop
// loop (First Method)
for (let i = 0; i < transportationMode.length; i++) {
    console.log(chalk.bgGreen(`I would like to own a ${transportationMode[i]}`));
}
//for each
transportationMode.forEach(Vehical => {
    console.log(chalk.bgBlue(`I would like to own a ${Vehical}`));
});
//for of loop (Third Method)
for (let names of transportationMode) {
    console.log(chalk.bgCyanBright(`I would like to own a ${names}`));
}
