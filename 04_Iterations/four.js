//  for in loop

const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
//    console.log(myObject[key]);
// console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map ()
// map.set('IN',"India")
// map.set('USA',"United state of america")
// map.set('FR',"France")
// map.set('IN',"India")
// // console.log(map);
// for (const key of map) {
//     console.log(key);
// } //not iterable by for in
