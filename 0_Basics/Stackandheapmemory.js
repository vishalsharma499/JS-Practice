// *****************************************
 
// stack and heap memory

// Heap memory - It is used in Non primitive DataTypes It gives a Reference of variable
let userOne = {
    email: "user@google.com",
    upi: "user@icici"
}
let userTwo = userOne
userTwo.email = "Vishal@google.com"
console.log(userOne.email);

// Stack memory - It is used in primitive DataTypes and It gives a copy of and original value does not changed changed in copy value

let myName="Vishal"

let anothername = myName
console.log(myName);
anothername="vis"
console.log(anothername);
