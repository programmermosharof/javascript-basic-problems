


function mileTokm(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(mileTokm(24));


function i(inch){
    return inch / 12 ;
}
console.log(i(90));

function f(feet){
    return feet * 12;
}
console.log(f(7));

function kmToMile(km){
    return km / 1.60934;
}
console.log(kmToMile(32));

function mileTokm(mile){
    return mile * 1.6;

}
console.log(mileTokm(32));



function inchToFeetInch(inch){
    const feet = Math.floor(inch / 12);
    const mahininInch = inch % 12 ;
    return `${feet} feet ${mahininInch} inch`;

}
console.log(inchToFeetInch(50));


