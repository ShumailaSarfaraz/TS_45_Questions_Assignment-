// Assignment 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
import chalk from "chalk";
// Question solve 3 methods
// 1) loop
// 2) for each
// 3) for of loop
let names = ["Shumaila Sarfaraz", "Sadaf", "Abdul Qadeer", "Abdul Kabeer", "Abdullah", "Ayesha"];
// loop (First Method)
for (let i = 0; i < names.length; i++) {
    console.log(chalk.red(`hello, ${names[i]}! how are you today?`));
}
// for each (Second Method)
names.forEach(familyname => {
    console.log(chalk.yellow(`Hi, ${familyname}! how are you today?`));
});
// for of loop (Third Method)
for (let familyname of names) {
    console.log(chalk.blue(`Dear, ${familyname}! how are you?`));
}
