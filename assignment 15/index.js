// Assignment 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
import chalk from "chalk";
let inviteGuestList1 = ["Shumaila Sarfaraz", "Sadaf", "Amna"];
// print the name who can't make dinner
let unavailableAttendee = inviteGuestList1.splice(0, 1)[0];
console.log(chalk.green(`${unavailableAttendee} not invited for dinner.`));
// Push
inviteGuestList1.push("Abdul Qadeer");
// print a message 
inviteGuestList1.forEach(guest => {
    console.log(chalk.yellow(`Dear, ${guest}, you are cordially invited.`));
});
