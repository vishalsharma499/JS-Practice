// Arrays

const myArr = [0,1,2,3,4,5]
const heroes = ["shaktiman","naagraj"]
const myArr1 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods
// myArr.push(6); // add element in array
// myArr.push(7);
// myArr.pop() // romove element from 
// myArr.unshift(9) //add element on starting 
// myArr.shift() // remove element from last
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(typeof newArr);
// console.log(myArr);

// splice and slice difference in slice and splice in slice original array do not change but in splice ariginal array has been changed
console.log("A",myArr);
const myn1=myArr.slice(1,3) 
console.log(myn1);
console.log("b",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("c",myArr);