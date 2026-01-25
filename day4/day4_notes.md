# Day 4: Loops and Functions in JavaScript

## Overview
Loops and functions are fundamental concepts in JavaScript that allow us to write DRY (Don't Repeat Yourself) code and automate repetitive tasks.

---

## 1. What are Loops?
Loops are used to repeat a block of code multiple times until a certain condition is met. They help avoid code duplication and make programs more efficient.

### Types of Loops:
1. **for loop**
2. **while loop**
3. **do...while loop**
4. **for...in loop**
5. **for...of loop**

---

## 2. For Loop

### Syntax:
```javascript
for(initialization; condition; increment/decrement){
    //code to be executed
}
```

### Examples:
- Repeat a statement 5 times:
```javascript
let hello = "Hello World";
for(let i = 0; i < 5; i++){
    console.log(hello);
}
```

- Iterate through array by index:
```javascript
const items = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < items.length; i++) {
  console.log(`Index ${i}: ${items[i]}`);
}
```

---

## 3. While Loop

### Syntax:
```javascript
while(condition){
    //code to be executed
}
```

### Examples:
```javascript
let count = 0;
while(count < 5){
    console.log("Count is: " + count);
    count++;
}
```

**Key Point:** Make sure the condition eventually becomes false, or the loop will run infinitely.

---

## 4. Do...While Loop

### Syntax:
```javascript
do{
    //code to be executed
}while(condition);
```

### Key Difference:
- The code block executes at least once, then checks the condition
- Useful when you want to run code at least one time

### Example:
```javascript
let num = 0;
do{
    console.log("Number is: " + num);
    num++;
}while(num < 5);
```

---

## 5. For...In Loop

### Syntax:
```javascript
for(variable in object){
    //code to be executed
}
```

### Purpose:
- Iterates over object properties/keys
- Works with objects and arrays (but returns indices for arrays)

### Example:
```javascript
const person = {fname: "John", lname: "Doe", age: 25};
for(let key in person){
    console.log(key + ": " + person[key]);
}
```

Output:
```
fname: John
lname: Doe
age: 25
```

---

## 6. For...Of Loop

### Syntax:
```javascript
for(variable of iterable){
    //code to be executed    
}
```

### Purpose:
- Iterates over values of iterable objects (arrays, strings)
- Simpler and cleaner than for loop for arrays

### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
for(let fruit of fruits){
    console.log(fruit);
}
```

---

## 7. Functions in JavaScript

Functions are blocks of code designed to perform specific tasks. They can be:
- Defined once and executed multiple times
- Pass data (parameters) to them
- Return values

### Benefits:
- Code reusability
- Better organization
- Easier maintenance
- Cleaner code structure

---

## 8. Function Declaration

### Syntax:
```javascript
function functionName(parameters){
    //code to be executed
    return value;
}
```

### Examples:
```javascript
function greet(name){
    return "Hello " + name;
}   
console.log(greet("Alice")); // Hello Alice

function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
```

### Function Without Return Value:
```javascript
function sayHello(){
    console.log("Hello!");
}
sayHello(); // Hello!
```

---

## 9. Function Expression

Functions can also be assigned to variables.

### Syntax:
```javascript
const functionName = function(parameters){
    return value;
};
```

### Example:
```javascript
const square = function(num){
    return num * num;
};
console.log(square(4)); // 16

const divide = function(a, b) {
  return a / b;
};   
console.log(divide(20, 4)); // 5
```

---

## 10. Arrow Functions

Introduced in ES6, arrow functions provide a concise syntax for writing functions.

### Syntax:
```javascript
const functionName = (parameters) => {
    return value;
};
```

### Examples:
```javascript
const cube = (num) => {
    return num * num * num;
};  
console.log(cube(3)); // 27

const subtract = (a, b) => {
  return a - b;
};   
console.log(subtract(10, 4)); // 6
```

### Arrow Function with Implicit Return:
When there's only one statement, you can omit the braces:
```javascript
const double = num => num * 2;
console.log(double(5)); // 10

const increment = x => x + 1;   
console.log(increment(7)); // 8
```

---

## 11. Combining Loops and Functions

Functions become more powerful when combined with loops.

### Example 1: Print Numbers
```javascript
function printNumbers(limit){
    for(let i = 1; i <= limit; i++){
        console.log(i);
    }   
}
printNumbers(5); // 1, 2, 3, 4, 5
```

### Example 2: Sum Array
```javascript
function sumArray(arr) {
  let sum = 0;
    for (let num of arr) {  
        sum += num;
    }
  return sum;
}   
const numbersArray = [1, 2, 3, 4, 5];
console.log(sumArray(numbersArray)); // 15
```

### Example 3: Factorial
```javascript
function factorial(n) {
  let result = 1;   
    for (let i = 1; i <= n; i++) {
        result *= i;
    }   
    return result;
}
console.log(factorial(5)); // 120
```

### Example 4: Find Maximum Value
```javascript
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
console.log(findMax(sampleArray)); // 9
```

### Example 5: Count Vowels
```javascript
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
console.log(countVowels("Hello World")); // 3
```

### Example 6: Reverse String
```javascript
function reverseString(str) {
  let reversed = "";    
    for (let char of str) {
        reversed = char + reversed;
    }   
    return reversed;
}
console.log(reverseString("JavaScript")); // tpircSavaJ
```

### Example 7: Check Prime Number
```javascript
function isPrime(num) {
  if (num <= 1) return false;   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }   
    }
    return true;
}
console.log(isPrime(11));  // true
console.log(isPrime(15));  // false
```

### Example 8: Filter Even Numbers
```javascript
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
console.log(filterEvenNumbers(mixedNumbers)); // [2, 4, 6]
```

### Example 9: Calculate Average
```javascript
function calculateAverage(arr) {
  let sum = 0;
    for (let num of arr) {
        sum += num;
    }   
    return sum / arr.length;
}   
const scores = [90, 80, 85, 70, 95];
console.log(calculateAverage(scores)); // 84
```

### Example 10: Fibonacci Sequence
```javascript
function generateFibonacci(n) {
  const fib = [0, 1];   
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}       
console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Example 11: Capitalize Words
```javascript
function capitalizeWords(str) {
  const words = str.split(" ");     
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }   
    return words.join(" ");
}
console.log(capitalizeWords("hello world from javascript"));
// Hello World From Javascript
```

### Example 12: Find Longest Word
```javascript
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
console.log(findLongestWord(wordList)); // watermelon
```

---

## 12. Key Concepts Summary

| Concept | Use Case |
|---------|----------|
| **for loop** | When you know how many times to iterate |
| **while loop** | When condition-based iteration is needed |
| **do...while** | When code must run at least once |
| **for...in** | Iterating over object properties |
| **for...of** | Iterating over array/iterable values |
| **Function** | Reusable block of code |
| **Arrow Function** | Concise function syntax |

---

## 13. Best Practices

1. **Use meaningful function names** - `calculateAverage()` not `calc()`
2. **Keep functions focused** - One function, one responsibility
3. **Use for...of for arrays** - Cleaner than traditional for loops
4. **Return values when appropriate** - Makes functions more versatile
5. **Avoid infinite loops** - Always ensure loop conditions can be met
6. **Use arrow functions** - For simpler, shorter functions
7. **Add comments** - Especially in complex loops and functions

---

## 14. Common Patterns

### Pattern 1: Accumulator (Sum, Count)
```javascript
let sum = 0;
for (let item of array) {
    sum += item;
}
```

### Pattern 2: Finding Max/Min
```javascript
let max = arr[0];
for (let item of arr) {
    if (item > max) max = item;
}
```

### Pattern 3: Filtering
```javascript
const filtered = [];
for (let item of array) {
    if (condition) filtered.push(item);
}
```

### Pattern 4: Transformation
```javascript
const transformed = [];
for (let item of array) {
    transformed.push(transform(item));
}
```

---

## Practice Exercises
- Write a function to check if a number is perfect square
- Create a function that removes duplicates from an array
- Write a function to find GCD of two numbers
- Create a function to convert decimal to binary
- Write a function to find all prime numbers up to n
