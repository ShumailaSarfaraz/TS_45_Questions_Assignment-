// Assignment 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your    list. • Print a new set of invitation messages, one for each person in your list. 

import chalk from "chalk";

let inviteGuestList2: string[] = ["Shumaila Sarfaraz", "Sadaf", "Amna"];
console.log("Great News! be found a bigger table");

// add something in array beginning:
// Method use Unshift()

 let fruits:string[] = ["Apple", "Banana", "Orange"]
 fruits.unshift("Mango");
 console.log(chalk .red(fruits)); 

 // add something in Middle of array
 // Method unshift()
 
 inviteGuestList2.unshift("Abdul Qadeer");
 inviteGuestList2.splice(Math.floor(inviteGuestList2.length/2),0, "Abdul Kabeer");
 inviteGuestList2.push("Sarfaraz Ahmed")
 console.log(chalk .yellow(inviteGuestList2));

 // for each Method
 inviteGuestList2.forEach(Guest => {
    console.log(chalk .green(`Dear ${Guest}, You all are cordially invited in dinner.`));
 });

 // Example of Math.floor
 let num1:number = 9.99;
 let nums:number = Math.floor(num1)
 console.log(nums);