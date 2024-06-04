// Assignment 21
import chalk from "chalk";
// in object what we learned
// default typed object
// update property
// add new property
// define custom type property
// use any with object
// let student ={
//     name: "Abdullah",
//     rollnumber: 4,
//     grades: [40, 50, 90], // length start with 1 and index start with 0 and this is a length. 
//};
// console.log(chalk .blue(student.grades[2]));
// E-commerce website
// let products = {
//     name: "laptop",
//     price: "8000",
//     describtion: "high performance laptop with fast processor",
// };
// console.log(chalk .green(products.name));
// santax means (write karne ka tarika)
// let objectname ={
//    key1: "value1",
//    key2: "value2",
//};
//console.log(objectname.key1);
// type interface (type interface custom data type ko define karne ma help karta hain)
// type interface
// interface Person {
//       name: string;
//       age: number;
//       city: string;
// }
// let person1: Person ={
//     name: "Abdul Qadeer",
//     age: 40,
//     city: "London",
// }
// let person2: Person = {
//     name: "Abdul Kabeer",
//     age: 30,
//     city: "U.S.A",
// }
// console.log(chalk .red(person1.name));
// type annotation
// let myvariable:string = "hello";
// type infers
// let anotherVariable = "world";
//intial object 
// let person = {
//     name: "Shumaila Sarfaraz",
//     age: 20,
//     city: "Karachi",
//}
// update property
// person.age = 21,
// person.city = "Londan",
// console.log(person);
// add new property
// person["gender"] = "female";
// console.log(person);
// define custom type property
// interface Person {
//     name: string;
//     age: number;
// city: string;
//}
// let person1: Person ={
//   name: "Abdul Qadeer",
//   age: 40,
//   city: "London",
// }
// let person2: Person = {
//   name: "Ahmed",
//   age: 30,
//   city: "U.S.A",
//}
// console.log(chalk .red(person1.name));
// use any with object
// let myVariable:any;
// myVariable = 10;
// myVariable ="hello";
// myVariable =true;
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// first create an object
let student_name = {
    name: "Shumaila",
    year: 2024,
    course: "Web Metaverse & Artifical Inteligence",
};
console.log(chalk.red(student_name));
