const user={
username:"Vishal",
price:999,
welcomeMessage:function(){
    console.log(`${this.username}, welcome to website`); // this is using to refer the current context 
    // console.log(this);
}
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this); // output-{}

// function chai(){
//     let username="vishal"
//     console.log(this.username);
// }
// chai()

const chai = () => { //arrow function
        let username="vishal"
    console.log(this);

}
// chai()

// arrow function
//  const addTwo=(num1,num2) =>{
// return num1+num2 // we used return keyword because we write code inside {}
//  }

//  const addTwo=(num1,num2) => num1+num2 //  implicit arrow function used when we a single line inside the function and there is no need to return the function
// const addTwo=(num1,num2) => (num1+num2) //  we do not used return keyword because we write code inside ()
const addTwo=(num1,num2) => ({username:"vishal"}) // ()-It is used to return the object in arrow function
 console.log(addTwo(4,6));

 
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()