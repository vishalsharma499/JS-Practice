let a=300
if (true) {
    const a=10
let b=20
// console.log("Inner:",a);
}
// console.log(a);
// console.log(b);
// console.log(c);


// inner scope 
// inner function child function access the data od parent function
function one(){  // parent Function
    const username="vishal"

    function two(){ // Child Function
        website="youtube"
        console.log(username);
    }
//    console.log(website);
   two()
}

// one()

if (true) {
    const username="vishal"
    if (username==="vishal") {
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++Intresting+++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
return num+1
}

addTwo(5) // showing error beacuse function decleration is hold inta a variable 
const addTwo=function(num){
    return num+2
}