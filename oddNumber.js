function averageofodd(numbers){
  let sum = 0;
  let count = 0;

  for(const number of numbers){
    if(number % 2 === 1){
      sum = sum + number;
      count ++;
    }
  }
  const average = sum / count;

  return average;
}
const numbers = [23,34, 67, 89, 32 ];
const avg = averageofodd(numbers);
console.log('Average of odd numberse', avg.toFixed(2));
