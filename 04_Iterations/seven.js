// flter and map
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=> num+10) 
// const newNums1=myNumbers.map((num)=>{ return num+10} )// when we use scope {} then we used return keyword to return the value in call back functions

const newNums = myNumbers
                        .map((num)=> num*10)
                        .map((num)=> num+1)
                        .filter((num)=>num>40)

console.log(newNums);