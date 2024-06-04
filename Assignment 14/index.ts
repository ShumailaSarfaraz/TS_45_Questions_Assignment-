// Assignment 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list 
// that includes at least three people you’d like to invite to dinner. Then use your list to print a message
// to each person, inviting them to dinner.

import chalk from "chalk";
// Define array of guest.
let invteGuestList:string[] =["Shumaila Sarfaraz", "Sadaf", "Amna"];

// Invite each guest for dinner
// for each
// for of loop
// Map

// for each (First Method)
invteGuestList.forEach(Guest  => {
    console.log(chalk .yellow(`Dear, ${Guest}, you are cordially invited to dinner.`));
});

// for of loop
for (const Guest of invteGuestList) {
    console.log(chalk .red(`Hello, ${invteGuestList}, You are cordially invited to dinner.`));
}

// map()
// invite guest
let invitation:string[] = invteGuestList.map(Guest => `Hello, ${invteGuestList}, You are cordially invited to dinner.`)
     
 invitation.forEach(guestllist => {
    console.log(chalk .green(guestllist));
 });    


