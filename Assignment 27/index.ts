// Assignment 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// create a variable
let alien_color5: string = "green";

// let version
if (alien_color5 === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else if (alien_color5 === "yellow") {
    console.log("The player just earned 10 points for shooting the yellow alien.")
} else if (alien_color5 === "red") {
    console.log("The player just earned 15 points for shooting the red alien.");
}
// Create another variable
let alien_color6: string = "yellow";

// 2nd version
if (alien_color6 === "green") {
    console.log("The player just earned 5 points for shooting the green alien.");
} else if (alien_color6 === "yellow") {
    console.log("The player just earned 10 points for shooting the yellow alien.");
} else if (alien_color6 === "red") {
    console.log("The player just earned 15 points for shooting the red alien.");
}

// create again another variable
let alien_color7: string = "red";

// 3rd version
if (alien_color7 === "green") {
    console.log("The player just earned 5 points for shooting the green alien.");
} else if (alien_color7 === "yellow") {
    console.log("The player just earned 10 points for shooting the yellow alien.");
} else if (alien_color7 === "red") {
    console.log("The player just earned 15 points for shooting the red alien.");
}

