function myName(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}
// myName()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2){
    // let result=number1 + number2
    // return result
    return number1 + number2
}
const result=addTwoNumbers(3,7)

// console.log("Result:",result);


function loginUserMessage(userName="vis"){
    if(!userName){
        console.log("Please enter the user name");
        return

    }
return `${userName} just logged in`
}
// console.log(loginUserMessage("vishal"))
// console.log(loginUserMessage("Vishal")) // this value is over right to the above value
// (...) rest operator and spread operator
function calculateCartPrice(...num1){
return num1
}
// console.log(calculateCartPrice(200,400,500,3200));
const user = {
    username:"vishal",
    price:199
}
function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));