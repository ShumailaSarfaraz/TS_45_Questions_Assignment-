// Assignment 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

import chalk from "chalk";

// array
// Defines an array of names
let names:string[] = ["Shumaila Sarfaraz", "Sadaf", "Abdul Qadeer", "Abdul Kabeer", "Abdullah", "Ayesha"];

// Question solve 3 methods
// 1) loop
// 2) for each
// 3) for of loop

// 1) loop (First Method)
for (let i = 0; i < names.length; i++) {
    console.log(chalk .green(names[i]));
}

// for each (Second Method)
names.forEach(familyname => {
    console.log(chalk .yellow(familyname));
});

// for of loop (Thired Method)
for (const familyname of names) {
    console.log(chalk .red(familyname));
}