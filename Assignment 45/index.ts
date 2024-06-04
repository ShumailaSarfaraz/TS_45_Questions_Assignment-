// Assignment no 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type Car ={
    manufacturer: string;
    modelName: string;
    [key: string]: any; //Allow any additional properties
}

function carInfo(manufacturer: string, modelName: string, option: Partial<Car>): Car {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        ...option,
    };
}

// Call the function with required information and additional name-value pairs
let car = carInfo('Toyota', 'Corola', { color: "blue", year: 2022});

// Print the returned object
console.log(car);
