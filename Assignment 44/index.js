// Assignment no 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    items.forEach(item => console.log("-" + item));
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments each time
orderSandwich('Bread', 'Tomato', 'Mayo');
orderSandwich('Garlic', 'Tomato', 'Mayonnaise', 'Onion');
orderSandwich('Peanut', 'Butter', 'Jelly');
orderSandwich('Butter');
export {};
