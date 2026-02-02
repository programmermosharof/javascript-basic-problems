// function inchToFeetAndInch(inch) {
//   const feet = Math.floor(inch / 12);
//   const remainInch = inch % 12;
//   return `${feet} feet ${remainInch} inch`;
// }

// console.log(inchToFeetAndInch(95));


function inchToFeetAndInch(inch){
    const feet = Math.floor(inch / 12);
    const remainInch = inch % 12 ;
    const result = feet + " Feet " + remainInch + " Inch ";
    return result;
}

console.log(inchToFeetAndInch(70));


function feetToinch(feet){
    return feet * 12;
}
console.log(feetToinch(10));


function mileTokm(mile){
    const km = mile * 1.6;
    return km.toFixed(2)
}

console.log(mileTokm(5));

function kmToMile(km){
    const mile = km / 1.6;

    return mile;
}

console.log(kmToMile(16));


function convert(type, value){
    if(type === "InchFeet"){
        return value / 12;
    }

    else if(type === "FeetToInch"){
        return value * 12;
    }
    else if ( type === "MileTokm"){
        return value * 1.6;
    }
    else if(type === "kmToMile"){
        return value / 1.6;
    }
}
console.log(convert("kmToMile", 20));

console.log(convert("FeetToInch", 8));

let km = 8;

let all = km / 1.6;

console.log("total",all);