function sum(number1) {
  return function(number2) {
    return number1 + number2; 
  }
}
const resultSum = sum(10);
console.log(resultSum(453));