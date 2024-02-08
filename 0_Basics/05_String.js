const fname = "Vishal"
const lname = "Sharma"
// console.log(fname + " " + lname); old way to write code for string concatenation.

console.log(`Hello my first name is ${fname} and my last name is ${lname}`); // Modern way for string concatenation and it is called string interpolation

// Assesing key values and string method

const gameName = new String ("Vishal-sharma")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('l'));
// const newString = gameName.substring(0,4)
// console.log(newString) // output-vish last value not include in it
// const anotherString = gameName.slice(-5,3)
// console.log(anotherString); // output-is because we passed negative value in it

const newStringOne = "   Vishal  "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim used to remove starting and ending space

const url = "https//www.vishal.com/vishal%20sharma"
console.log(url.replace('%20','_'));
console.log(url.includes('vishal')); // output-true because vishal is present inside the url
console.log(gameName.split('-')); // output-['Vishal', 'sharma' ] it is help to convert string into array
