"use strict";
// Assignment 02
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var personName = "Eric";
var message = "Hello ".concat(personName, ", would you like to learn some Python today?");
console.log(chalk_1.default.blue("".concat(message)));
