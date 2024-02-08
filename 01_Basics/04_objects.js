// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.IsLoggedIn=false

// console.log(tinderuser);
const regularUser={
    email:"vis@google.com",
    fullname:{
        userName:{
            firstName:"Vishal",
            lastname:"Sharma"
        }

    }
}
// console.log(regularUser.fullname.userName.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"c",6:"d"}
// const obj3={obj1 , obj2}
// const obj3=Object.assign({}, obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);
const user=[
    {
        id:1,
        email:"vishal@.com"
    },
    {
        id:1,
        email:"vishal@.com"
    },
    {
        id:1,
        email:"vishal@.com"
    }
]
user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

// object destructure
const course={
    coursename:"chai with js",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
// json
// {
// "name":"hitesh",
// "coursename":"chai with js",
// "price":"free"

// }
[
    {},
    {},
    {}
]
