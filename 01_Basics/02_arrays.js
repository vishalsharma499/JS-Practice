const marvel_heros = ["Ironman","Thor","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros)
// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);
const all_new_heros=[...marvel_heros, ...dc_heros] //[...] spread operator its used to concatenate the array
// console.log(all_new_heros);
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // It is used to convert string into array output-[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting output-[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
