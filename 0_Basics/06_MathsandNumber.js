// number and its method
// const score = 400
// console.log(score);
// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //output-100.00 its add two extra digit after point(.)
// const otherNum = 123.6589
// console.log(otherNum.toPrecision(3)); // output-124 it is round off the value of three digit after the decimal
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // output- 10,00,000 it is used to separates the values in indian standards using (,).

// ***************Maths*********************
// console.log(Math);
// console.log(Math.abs(-5)); // output-5 its gives positive value remove negative sign
// console.log(Math.round(5.3)); // output-5 its gives round of value 
// console.log(Math.ceil(5.2)); // output-6 its gives top value
// console.log(Math.floor(5.9)); // output-5 its gives low value
console.log(Math.random()); // it is gives always value in between 0-1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);