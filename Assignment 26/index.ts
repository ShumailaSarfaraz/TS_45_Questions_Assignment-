// Assignment no 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// create a variable
let alien_color2: string = "green";

// now create a passing condition
if (alien_color2 === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points for shooting the alien.")
}
// then create a falling condition
let alien_color3: string = "red";
if (alien_color3 === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points for shooting the alien.");
}
