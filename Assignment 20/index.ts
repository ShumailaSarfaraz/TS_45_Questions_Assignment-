// Assignment 20
// // Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

import chalk from "chalk";

let countries: string[] =["usa", "canada", "france", "germany", "japan"]

// print list of countries
console.log(chalk .red("list of countries:", countries.forEach(country => {
    console.log(chalk .blue(country));
})));