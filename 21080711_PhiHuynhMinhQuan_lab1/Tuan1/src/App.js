import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");

  const printNumbers = () => {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += `${i} `;
    }
    setOutput(result);
  };

  const printOddNumbers = () => {
    let result = "";
    for (let i = 1; i < 100; i += 2) {
      result += `${i} `;
    }
    setOutput(result);
  };

  const printMultiplicationTable = () => {
    let result = "";
    const number = 7;
    for (let i = 1; i <= 10; i++) {
      result += `${number} x ${i} = ${number * i}\n`;
    }
    setOutput(result);
  };

  const printAllMultiplicationTables = () => {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += `Multiplication table for ${i}:\n`;
      for (let j = 1; j <= 10; j++) {
        result += `${i} x ${j} = ${i * j}\n`;
      }
      result += "\n"; // Print a blank line between tables
    }
    setOutput(result);
  };

  const calculateSum = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    setOutput(`Sum of numbers from 1 to 10 is ${sum}`);
  };

  const calculateFactorial = () => {
    const factorial = (n) => {
      if (n === 0) return 1;
      return n * factorial(n - 1);
    };

    setOutput(`10! is ${factorial(10)}`);
  };

  const sumEvenNumbers = () => {
    let sum = 0;
    for (let i = 12; i < 30; i += 2) {
      sum += i;
    }
    setOutput(`Sum of even numbers between 10 and 30 is ${sum}`);
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };

  const averageArray = (arr) => {
    return sumArray(arr) / arr.length;
  };

  const filterPositiveNumbers = (arr) => {
    return arr.filter((num) => num > 0);
  };

  const findMax = (arr) => {
    return Math.max(...arr);
  };

  const printFibonacci = () => {
    const fib = [0, 1];
    while (fib.length < 10) {
      const next = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(next);
    }
    return fib;
  };

  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  const handleIsPrime = () => {
    const number = 11;
    setOutput(`Is ${number} prime? ${isPrime(number)}`);
  };

  function sumOfDigits(num) {
    return num
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
  }

  const printPrimes = () => {
    const primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };

  const primesGreaterThan = (n, p) => {
    const primes = [];
    let num = n + 1;
    while (primes.length < p) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };

  const rotateLeft = (arr) => {
    return arr.slice(1).concat(arr[0]);
  };

  const rotateRight = (arr) => {
    return [arr[arr.length - 1]].concat(arr.slice(0, -1));
  };

  const reverseArray = (arr) => {
    return arr.slice().reverse();
  };

  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };

  const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
  };

  const symmetricDifference = (arr1, arr2) => {
    return arr1.filter((x) => !arr2.includes(x)).concat(arr2.filter((x) => !arr1.includes(x)));
  };

  const difference = (arr1, arr2) => {
    return arr1.filter((x) => !arr2.includes(x));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={printNumbers}>Print Numbers 1 to 10</button>
          <button onClick={printOddNumbers}>Print Odd Numbers &lt; 100</button>
          <button onClick={printMultiplicationTable}>Print Multiplication Table of 7</button>
          <button onClick={printAllMultiplicationTables}>Print All Multiplication Tables (1 to 10)</button>
          <button onClick={calculateSum}>Calculate Sum of Numbers 1 to 10</button>
          <button onClick={calculateFactorial}>Calculate 10!</button>
          <button onClick={sumEvenNumbers}>Sum of Even Numbers (10-30)</button>
          <button onClick={() => setOutput(celsiusToFahrenheit(25))}>Convert 25°C to Fahrenheit</button>
          <button onClick={() => setOutput(fahrenheitToCelsius(77))}>Convert 77°F to Celsius</button>
          <button onClick={() => setOutput(sumArray([1, 2, 3, 4]))}>Sum of Array [1, 2, 3, 4]</button>
          <button onClick={() => setOutput(averageArray([1, 2, 3, 4]))}>Average of Array [1, 2, 3, 4]</button>
          <button onClick={() => setOutput(filterPositiveNumbers([-1, 2, -3, 4]))}>
            Filter Positive Numbers [-1, 2, -3, 4]
          </button>
          <button onClick={() => setOutput(findMax([1, 2, 3, 4]))}>Find Max in Array [1, 2, 3, 4]</button>
          <button onClick={() => setOutput(printFibonacci().join(", "))}>First 10 Fibonacci Numbers</button>
          <button onClick={() => setOutput(fibonacci(10))}>10th Fibonacci Number</button>
          <button onClick={handleIsPrime}>Is Number Prime (11)</button>

          <button onClick={() => setOutput(sumOfDigits(1234))}>Sum of Digits (1234)</button>
          <button onClick={() => setOutput(printPrimes().join(", "))}>First 100 Prime Numbers</button>
          <button onClick={() => setOutput(primesGreaterThan(10, 5).join(", "))}>First 5 Primes Greater Than 10</button>
          <button onClick={() => setOutput(rotateLeft([1, 2, 3, 4]).join(", "))}>Rotate Array Left [1, 2, 3, 4]</button>
          <button onClick={() => setOutput(rotateRight([1, 2, 3, 4]).join(", "))}>
            Rotate Array Right [1, 2, 3, 4]
          </button>
          <button onClick={() => setOutput(reverseArray([1, 2, 3, 4]).join(", "))}>Reverse Array [1, 2, 3, 4]</button>
          <button onClick={() => setOutput(reverseString("hello"))}>Reverse String 'hello'</button>
          <button onClick={() => setOutput(mergeArrays([1, 2], [3, 4]).join(", "))}>
            Merge Arrays [1, 2] and [3, 4]
          </button>
          <button onClick={() => setOutput(symmetricDifference([1, 2, 3], [3, 4, 5]).join(", "))}>
            Symmetric Difference [1, 2, 3] and [3, 4, 5]
          </button>
          <button onClick={() => setOutput(difference([1, 2, 3], [2, 3, 4]).join(", "))}>
            Difference [1, 2, 3] and [2, 3, 4]
          </button>
        </div>
        <pre>{output}</pre>
      </header>
    </div>
  );
}

export default App;
