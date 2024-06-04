// Assignment 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

import chalk from "chalk";

let inviteGuestList1: string[] = ["Shumaila Sarfaraz", "Sadaf", "Amna"];

// print the name who can't make dinner
let unavailableAttendee: string = inviteGuestList1.splice(0, 1)[0];
console.log(chalk .green(`${unavailableAttendee} not invited for dinner.`));

// Push
inviteGuestList1.push("Abdul Qadeer");

// print a message 
inviteGuestList1.forEach(guest => {
  console.log(chalk .yellow(`Dear, ${guest}, you are cordially invited.`));  
});

