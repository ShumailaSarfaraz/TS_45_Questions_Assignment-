// Assignment no 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size, message) {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}
// Calling the function
make_shirt2("Large", "I love TypeScript");
// Create a medium shirt with the default message
make_shirt2('Medium', "I love TypeScript");
// Create a shirt of any size with a different message
make_shirt2('Small', 'Keep calm and code on!');
export {};
