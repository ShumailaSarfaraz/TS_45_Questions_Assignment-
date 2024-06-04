// Assignment 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

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
