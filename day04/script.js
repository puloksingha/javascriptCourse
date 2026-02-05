// loops and functions
//what is loops in javascript
//loops are used to repeat a block of code multiple times until a certain condition is met
//there are different types of loops in javascript
// types of loops are:
/*
    for loop
    while loop
    do while loop
    for...in loop
    for...of loop 

*/
// for loop syntax
// for(initialization; condition; increment/decrement){
//     //code to be executed
// }    
// example of for loop
let hello = "Hello World";
for(let i = 0; i < 5; i++){
    console.log( hello);
}

// example
const items = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < items.length; i++) {
  console.log(`Index ${i}: ${items[i]}`);
}

// while loop syntax
// while(condition){
//     //code to be executed
// }
// example of while loop
let count = 0;
while(count < 5){
    console.log("Count is: " + count);
    count++;
}

// example
let number = 1;
while (number <= 5) {
  console.log(`Number: ${number}`);
  number++;
}

// do while loop syntax 
// do{
//     //code to be executed
// }while(condition);
// example of do while loop
let num = 0;
do{
    console.log("Number is: " + num);
    num++;
}while(num < 5);
// example
let n = 1;
do {
  console.log(`N: ${n}`);
  n++;
} while (n <= 5);

// for...in loop syntax
// for(variable in object){
//     //code to be executed
// }
// example of for...in loop
const person = {fname: "John", lname: "Doe", age: 25};
for(let key in person){
    console.log(key + ": " + person[key]);
}   
// example
const car = {make: "Toyota", model: "Corolla", year: 2020};
for (let prop in car) {
  console.log(`${prop}: ${car[prop]}`);
}
// for...of loop syntax
// for(variable of iterable){
//     //code to be executed    
// }
// example of for...of loop
const fruits = ["Apple", "Banana", "Cherry"];
for(let fruit of fruits){
    console.log(fruit);
}
// example
const colors = ["Red", "Green", "Blue"];    
for (let color of colors) {
  console.log(`Color: ${color}`);
}   
// functions in javascript
// functions are blocks of code that can be defined once and executed multiple times
// functions can take parameters and return values  
// function syntax
// function functionName(parameters){
//     //code to be executed
//     return value;
// }
// example of function
function greet(name){
    return "Hello " + name;
}   
console.log(greet("Alice"));
// example
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));
// example of function without return value
function sayHello(){
    console.log("Hello!");
}
sayHello();
// example
function multiply(x, y) {
  console.log(x * y);
}   
multiply(4, 6); 
// example of function expression
const square = function(num){
    return num * num;
};
console.log(square(4));
// example
const divide = function(a, b) {
  return a / b;
};   
console.log(divide(20, 4));
// example of arrow function
const cube = (num) => {
    return num * num * num;
};  
console.log(cube(3));
// example
const subtract = (a, b) => {
  return a - b;
};   
console.log(subtract(10, 4));
// example of arrow function with implicit return
const double = num => num * 2;
console.log(double(5));
// example
const increment = x => x + 1;   
console.log(increment(7));  
// combining loops and functions
function printNumbers(limit){
    for(let i = 1; i <= limit; i++){
        console.log(i);
    }   
}
printNumbers(5);
// example
function listItems(items){
    for(let item of items){
        console.log(item);
    }   
}
const myItems = ["Pen", "Pencil", "Eraser"];
listItems(myItems);
// example
function sumArray(arr) {
  let sum = 0;
    for (let num of arr) {  
        sum += num;
    }
  return sum;
}   
const numbersArray = [1, 2, 3, 4, 5];
console.log(sumArray(numbersArray));
// example
function factorial(n) {
  let result = 1;   
    for (let i = 1; i <= n; i++) {
        result *= i;
    }   
    return result;
}
console.log(factorial(5));      
// example
function findMax(arr) {
  let max = arr[0]; 
    for (let num of arr) {
        if (num > max) {
            max = num;
        }   
    }
    return max;
}
const sampleArray = [3, 7, 2, 9, 4];
console.log(findMax(sampleArray));
// example
function countVowels(str) {
  let count = 0;    
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }   
    }
    return count;
}
console.log(countVowels("Hello World"));
// example
function reverseString(str) {
  let reversed = "";    
    for (let char of str) {
        reversed = char + reversed;
    }   
    return reversed;
}
console.log(reverseString("JavaScript"));
// example
function isPrime(num) {
  if (num <= 1) return false;   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }   
    }
    return true;
}
console.log(isPrime(11));
console.log(isPrime(15));
// example
function generateFibonacci(n) {
  const fib = [0, 1];   
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}       
console.log(generateFibonacci(10));     
// example
function capitalizeWords(str) {
  const words = str.split(" ");     
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }   
    return words.join(" ");
}
console.log(capitalizeWords("hello world from javascript"));    
// example
function filterEvenNumbers(arr) {
  const evenNumbers = [];   
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }   
    return evenNumbers;
}   
const mixedNumbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(mixedNumbers));   
// example
function sumOfSquares(n) {
  let sum = 0;  
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }   
    return sum;
}
console.log(sumOfSquares(4)); // 30 (1^2 + 2^2 + 3^2 + 4^2)
// example
function printMultiplicationTable(num) {    
    for (let i = 1; i <= 10; i++) { 
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printMultiplicationTable(5);    
// example
function findLongestWord(words) {
  let longest = ""; 

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }   
    }
    return longest;
}       
const wordList = ["apple", "banana", "cherry", "watermelon"];
console.log(findLongestWord(wordList));         
// example
function calculateAverage(arr) {
  let sum = 0;
    for (let num of arr) {
        sum += num;
    }   
    return sum / arr.length;
}   
const scores = [90, 80, 85, 70, 95];
console.log(calculateAverage(scores));      
// example
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }       
        console.log(pattern);
    }   
}
printPattern(5);    
// example
function mergeArrays(arr1, arr2) {
  const merged = [];    
    for (let item of arr1) {
        merged.push(item);
    }
    for (let item of arr2) {
        merged.push(item);
    }
    return merged;
}   
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2));
// example
function countOccurrences(arr, target) {
  let count = 0;    
    for (let item of arr) {
        if (item === target) {
            count++;
        }
    }   
    return count;
}
const sampleArr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(sampleArr, 2)); // 3
// example
function printEvenNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }   
    }
}
printEvenNumbers(10);
// example
function calculateFactorial(n) {
  let result = 1;   
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}   
console.log(calculateFactorial(6)); // 720
// example
function findMin(arr) {
  let min = arr[0];     
    for (let num of arr) {
        if (num < min) {
            min = num;
        }   
    }
    return min;
}
const testArray = [5, 2, 9, 1, 5, 6];
console.log(findMin(testArray)); // 1
// example
function printSquares(limit) {
    for (let i = 1; i <= limit; i++) {  
        console.log(i * i);
    }   
}
printSquares(5);    
// example
function isPalindrome(str) {
  const len = str.length;   
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }   
    }
    return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
// example
function generateMultiples(num, count) {
  const multiples = [];
    for (let i = 1; i <= count; i++) {
        multiples.push(num * i);
    }       
    return multiples;
}       
console.log(generateMultiples(3, 5)); // [3, 6, 9, 12, 15]     
// example
function printAlphabet() {  
    for (let i = 65; i <= 90; i++) {
        console.log(String.fromCharCode(i));
    }   
}
printAlphabet();    
// example
function sumOfArray(arr) {
  let sum = 0;  
    for (let num of arr) {
        sum += num;
    }
    return sum;
}   
const arrayToSum = [10, 20, 30, 40];
console.log(sumOfArray(arrayToSum)); // 100 
// example
function printDescending(limit) {
    for (let i = limit; i >= 1; i--) {
        console.log(i);
    }   
}   
printDescending(5);    
// example
function countWords(str) {
    const words = str.split(" ");   
    return words.length;
}
console.log(countWords("Hello world from JavaScript")); // 4    
// example
function findAverage(arr) {
  let sum = 0;  
    for (let num of arr) {
        sum += num;
    }       
    return sum / arr.length;
}           
const values = [10, 20, 30, 40, 50];
console.log(findAverage(values)); // 30         
