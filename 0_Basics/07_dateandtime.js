// Dates

let myDate = new Date
console.log(typeof myDate); // date type is object  
// console.log(myDate.toString()); // output-Thu Feb 08 2024 16:11:06 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // output-Thu Feb 08 2024
// console.log(myDate.toISOString()); // output-2024-02-08T16:11:06.765Z
// console.log(myDate.toLocaleDateString()); // output-2/8/2024
// console.log(myDate.toLocaleString()); // output-2/8/2024, 4:11:06 PM
// let myCreatedate = new Date (2023,0,23,5,3)
let myCreatedate = new Date ("01-14-2023")

// console.log(myCreatedate.toDateString());
// console.log(myCreatedate.toLocaleString());
// let timeStamp = Date.now()
// // console.log(timeStamp);
// // console.log(myCreatedate.getTime()); // It gives the values in miliseconds
// console.log(Math.floor(Date.now()/1000)) // it is used to convert mili second to second

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
    
})