//  for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5 ) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j} and outer loop value: ${i} `);
    // console.log(i + '*' + j +' = ' + i*j);
}
    
}

let myarr=["flash","superman","batman"]
// console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
}

//  break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 detected");
//         break
//     }
// console.log(`value of index is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 detected");
        continue
    }
console.log(`value of index is ${index}`);
    
}