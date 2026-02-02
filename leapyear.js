function isLeapYear(year){
    if(year % 4 ===0){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYear(2011));

let year = 2027;

if (year % 400 === 0) {
  console.log("Leap Year");
} else if (year % 100 === 0) {
  console.log("Not a Leap Year");
} else if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}



function checkLeapYear(year){
  if(year % 400 === 0 ){
    return "Leap Year";
  }
  else if (year % 100 === 0){
    return "Not Leap Year"
  }
  else if (year % 4 === 0){
    return "Leap Year";
  }else{
    return"Not Leap Year";
  }
}
const result = checkLeapYear(2004);
console.log(result);