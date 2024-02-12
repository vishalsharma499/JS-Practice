// for each loop

const coding=["javascript","java","ruby","phyton","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })


// function printme(item){
// console.log(item);
// }
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[
    {
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"phyton",
    languageFileName:"py"
}
]

myCoding.forEach((item)=>{
console.log(item.languageName);
})