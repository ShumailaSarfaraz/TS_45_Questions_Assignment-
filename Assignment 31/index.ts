// Assignment no 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let friends_name: string[] =["Rehan", "Ali", "ahmed", "Abdullah"];

//Cheak if the list of users is not empty
if(friends_name.length > 0) {
// Loop through the array and print each user
for (let user of friends_name) {
    console.log("User: " + user);
    }   
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
let nullNumber: string[] =[];

//Cheak if the list of users is not empty after removal
if (nullNumber.length > 0) {
// Loop through the array and print each user
    for (let user of nullNumber) {
        console.log("User: ", user);
    }
} else {
    console.log("We need to find some users!");
}