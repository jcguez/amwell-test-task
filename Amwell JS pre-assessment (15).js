// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.

const isPrimaryNumber = function(num) {
  for(var i = 2; i < num; i++)
    if  (num % i === 0) return false;
  return num > 1;
};

const fibonacciValidation = function(num) {
  if (num <= 1) return 1;
  return fibonacciValidation(num - 1) + fibonacciValidation(num - 2);
};

function nextPrimeAndFibonacci(number) {
  let rightDelimiter = 0;
  let leftDelimiter = 1;
  while (true) {
    let fibonacciNumber = fibonacciValidation(leftDelimiter);
    console.log('fib', fibonacciNumber, number);
    if (fibonacciNumber > number) {
      if (isPrimaryNumber(fibonacciNumber)) {
        rightDelimiter = fibonacciNumber;
        break;
      } else {
        leftDelimiter += 1;    
        console.warn('bumping to ', fibonacciNumber);
      }
    } else {
      leftDelimiter += 1;
      console.warn('bumping to', fibonacciNumber);
    }
  }
  console.warn('Next prime fib ', rightDelimiter);
}

nextPrimeAndFibonacci(20);