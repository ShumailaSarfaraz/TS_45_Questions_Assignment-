// Assignment 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive  in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

import chalk from "chalk";

// print message
console.log(chalk .blue("unfortunately! the new dinner table table wont arrive so we can invite only 2 guest"));

// Question 16 List
let inviteGuestList3: string[] = ["Shumaila Sarfaraz", "Sadaf", "Amna"];

// Updated guest list
inviteGuestList3.unshift("Abdul Qadeer", "Abdul Kabeer");

// print message guest Updated list
console.log(chalk .red("Updated list of guest", inviteGuestList3));

// remove guest from the list
while (inviteGuestList3.length > 2) {
  // using (Pop Method)
    let removedguest :string | undefined = inviteGuestList3.pop()
    if (removedguest!==undefined){
        console.log(chalk .yellow(`Sorry!, ${removedguest}, we cant invite you`));
    }
}

// Print a message to each of the two people still on your list, letting them know they’re still invited.

inviteGuestList3.forEach(guest => {
  console.log(chalk .green(`Dear! ${guest}, You both are the invited for the dinner`))  
});

// removed 2 names feom the list (Splice Method)
inviteGuestList3.splice(0, inviteGuestList3.length);

//print updatedempty list 
console.log(chalk .gray("updated list of guest:", inviteGuestList3));
