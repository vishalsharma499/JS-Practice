// Two ways to declare object 
// 1-Singleton

// 2-object literals
const mySym = Symbol("key1")

const jsUser = {
    name:"Vishal",
    "full name":"Vishal Sharma",
    [mySym]: "mykey1", //we acces symbol inside obect by the help of []
    age:23,
    location:"Lucknow",
    email:"vishal@google.com",
    isLoggedIn:false,
    lastLoginDay:["monday","tuesday"]
}
// console.log(jsUser.name)
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
jsUser.email = "vishal@chatgpt.com"
// Object.freeze(jsUser) // It is used to freeze the object       
jsUser.email = "vishal@microsoft.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());