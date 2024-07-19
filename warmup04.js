 //1- Write a JavaScript function that will iterate from n to 0. For each iteration,
 // it will check if the current number is odd or even, and display a message to the screen.
 // iterateAndLog(3); =>
 // Sample Output :
 // "2 is even"
 // "1 is odd"
 // "0 is even"

function iterateAndLog(n) {

  // TODO: your work goes here
(``)
}
function iterateAndLog(n) {

  for (let i = n-1; i >= 0; i-- {
    if (i % 2 === 0) {
      console.log(i+"is even");
    }
    else {
      console.log(i+"is odd")
    }



 // RECURSIVELY
 //2- Write a JavaScript program to get the first n Fibonacci numbers
 // That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
 //  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
 //  with the exception of the first two: fib(0) and fib(1). More succinctly,
 //  fib(0) is 1
 //  fib(1) is 1
 //  fib(n) is fib(n - 1) + fib(n - 2)
 //  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
 

function fib(number) {
  function iterateAndLog(n) {
    if (n < 0) return;
  
    if (n % 2 === 0) {
    console.log("")



  // TODO: your work goes here

}
//3.Write a function called sumOfFirstAndLast that 
//takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.

function sumOfFirstAndLast(number) {
  number = Math.abs(number);
  const lastDigit = number % 10;

} 



://  Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:
function makeCounter() {
  let count = 0
  return function () {
    count +=1;
    return count;
  }
}
 var counter1= makeCounter();
 var counter2= makeCounter();
 console.log(counter1())

 function makeCounter(start = 0) {
  let count = start;  // Initialize count with the provided start value

  return function() {
      count += 1;  // Increment the count
      return count;  // Return the updated count
  };
}

var counter1 = makeCounter(100);
console.log(counter1()); // => 101
console.log(counter1()); // => 102




function pow(exponent) {
  return function(base) {  // The inner function takes 'base' as an argument
      return Math.pow(base, exponent);  // Use Math.pow to raise 'base' to 'exponent'
  };
}

var square = pow(2);
var cube = pow(3);
var power4 = pow(4);

console.log(square(5)); // => 25
console.log(cube(3));   // => 27
console.log(power4(4)); // => 256
