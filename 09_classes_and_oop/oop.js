const user ={
    userName:'vishal',
    loginCount:8,
    signedIn:true,
    getUserDetail:function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`); // This keyword use to refer the current context
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

//  Constructor Function- Its help to create multiple instances by the help of single object literals

function User(username,logincount,isloggedIn){
    this.username=username
    this.logincount=logincount
    this.isloggedIn=isloggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this

}
const userOne= new User("vishal",12,true) // New Keyword-JavaScript new keyword is used to create an instance of an object that has a constructor function
const userTwo = new User("Chai aur code",11,false)
console.log(userOne.constructor);
// console.log(userTwo);
