// Assignment no 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians4(magicians4) {
    magicians4.forEach(magician => console.log(magician));
}
function make_great2(magicians4) {
    return magicians4.map(magician => "the Great" + magician);
}
// Define an array of magician's names
let magicians4 = ['Akbar ali', 'Haris', 'Zahid'];
let great_magicians5 = make_great2([-- - magicians4]); // Creating a copy using 
// Call show_magicians4() to show the original array of magician's names 
console.log("Original magicians4:");
show_magicians4(magicians4);
// Call show_magicians4() to show the array with "the Great" added to each magician's names
console.log("\nGreat magician5:");
show_magicians4(great_magicians5);
export {};
