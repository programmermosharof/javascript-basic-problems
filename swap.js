let a = 5;
let b = 9;

const temp = a;
a = b;
b = temp;
console.log(a, b);

let c = 3;
let d = 5;
[c, d ] = [d, c];

console.log(c, d);

let mahinAge = 20;

let munsefAge = 14;

let ulta = mahinAge ;

mahinAge = munsefAge;

munsefAge = ulta ;

console.log("mahin",mahinAge,  "monsef", munsefAge);