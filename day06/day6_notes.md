# JavaScript Arrays and Array Methods

A complete guide to arrays and the most important array methods in JavaScript.

---

## Table of Contents
1. [What are Arrays?](#what-are-arrays)
2. [Creating Arrays](#creating-arrays)
3. [Accessing Array Elements](#accessing-array-elements)
4. [Array Properties](#array-properties)
5. [forEach()](#foreach)
6. [map()](#map)
7. [filter()](#filter)
8. [reduce()](#reduce)
9. [Other Important Methods](#other-important-methods)
10. [Method Chaining](#method-chaining)
11. [Practice Exercises](#practice-exercises)

---

## What are Arrays?

Arrays are ordered collections of values. They can store multiple values in a single variable and are one of the most commonly used data structures in JavaScript.

```javascript
// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// An array of strings
const fruits = ['apple', 'banana', 'orange'];

// An array can contain different data types
const mixed = [1, 'hello', true, null, { name: 'John' }];
```

---

## Creating Arrays

### Array Literal (Most Common)
```javascript
const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
```

### Array Constructor
```javascript
const arr1 = new Array();           // Empty array
const arr2 = new Array(5);          // Array with 5 empty slots
const arr3 = new Array(1, 2, 3);    // [1, 2, 3]
```

### Array.from()
```javascript
// Create array from string
const chars = Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']

// Create array with a mapping function
const numbers = Array.from([1, 2, 3], x => x * 2);  // [2, 4, 6]
```

### Array.of()
```javascript
const arr = Array.of(1, 2, 3, 4);   // [1, 2, 3, 4]
```

---

## Accessing Array Elements

Arrays use zero-based indexing (first element is at index 0).

```javascript
const fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits[0]);     // 'apple' (first element)
console.log(fruits[2]);     // 'orange' (third element)
console.log(fruits[10]);    // undefined (doesn't exist)

// Negative indexing (using at method)
console.log(fruits.at(-1));  // 'mango' (last element)
console.log(fruits.at(-2));  // 'orange' (second to last)
```

---

## Array Properties

### length
Returns the number of elements in an array.

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length);  // 3

// Modifying length
fruits.length = 2;
console.log(fruits);  // ['apple', 'banana']

fruits.length = 5;
console.log(fruits);  // ['apple', 'banana', empty × 3]
```

---

## forEach()

**Purpose**: Executes a provided function once for each array element.

**Returns**: `undefined` (it doesn't return a new array)

**Use When**: You want to perform an action for each element without creating a new array.

### Syntax
```javascript
array.forEach(callback(element, index, array))
```

### Examples

```javascript
// Basic usage
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});
// Output: 1, 2, 3, 4, 5


// Using arrow function
numbers.forEach(number => console.log(number * 2));
// Output: 2, 4, 6, 8, 10


// With index parameter
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: orange


// Modifying external variable (side effect)
let sum = 0;
numbers.forEach(num => {
    sum += num;
});
console.log(sum);  // 15
```

### Important Notes
- Cannot break out early (no `break` or `return` to stop iteration)
- Always returns `undefined`
- Doesn't create a new array

---

## map()

**Purpose**: Creates a new array by applying a function to each element.

**Returns**: A new array with transformed elements.

**Use When**: You need to transform every element in an array.

### Syntax
```javascript
const newArray = array.map(callback(element, index, array))
```

### Examples

```javascript
// Basic transformation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]


// Transforming objects
const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' }
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames);  // ['John Doe', 'Jane Smith']


// Extracting property values
const prices = [
    { item: 'apple', price: 1.50 },
    { item: 'banana', price: 0.75 },
    { item: 'orange', price: 2.00 }
];

const priceValues = prices.map(product => product.price);
console.log(priceValues);  // [1.5, 0.75, 2]


// With index
const letters = ['a', 'b', 'c'];
const indexed = letters.map((letter, index) => `${index}-${letter}`);
console.log(indexed);  // ['0-a', '1-b', '2-c']


// Converting strings to numbers
const stringNumbers = ['1', '2', '3', '4'];
const numbers2 = stringNumbers.map(str => parseInt(str));
// or even simpler:
const numbers3 = stringNumbers.map(Number);
console.log(numbers3);  // [1, 2, 3, 4]
```

### Important Notes
- **Always returns a new array** (same length as original)
- Original array is not modified
- If you don't return anything, you get `undefined` for that element

---

## filter()

**Purpose**: Creates a new array with elements that pass a test.

**Returns**: A new array containing only elements that returned `true` from the callback.

**Use When**: You need to select specific elements based on a condition.

### Syntax
```javascript
const newArray = array.filter(callback(element, index, array))
```

### Examples

```javascript
// Basic filtering
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4, 6, 8, 10]


// Filtering objects
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 16 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);
// [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }]


// Filtering by string property
const products = [
    { name: 'Laptop', category: 'electronics', price: 1000 },
    { name: 'Shirt', category: 'clothing', price: 30 },
    { name: 'Phone', category: 'electronics', price: 500 },
    { name: 'Shoes', category: 'clothing', price: 80 }
];

const electronics = products.filter(product => product.category === 'electronics');
console.log(electronics);
// [{ name: 'Laptop', ... }, { name: 'Phone', ... }]


// Filtering out null/undefined/falsy values
const mixedArray = [1, null, 2, undefined, 3, 0, 4, '', 5, false];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues);  // [1, 2, 3, 4, 5]


// Complex conditions
const scores = [45, 67, 89, 92, 55, 78, 85, 90];
const passing = scores.filter(score => score >= 60 && score < 90);
console.log(passing);  // [67, 89, 55, 78, 85]


// Removing duplicates (with indexOf)
const numbersWithDupes = [1, 2, 2, 3, 4, 4, 5];
const unique = numbersWithDupes.filter((num, index, arr) => {
    return arr.indexOf(num) === index;
});
console.log(unique);  // [1, 2, 3, 4, 5]
```

### Important Notes
- Returns a new array (can be shorter, same length, or empty)
- Original array is not modified
- Callback should return `true` or `false` (truthy/falsy values work too)

---

## reduce()

**Purpose**: Reduces an array to a single value by applying a function cumulatively.

**Returns**: A single value (can be number, string, object, or even array).

**Use When**: You need to combine all elements into one result.

### Syntax
```javascript
const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

- **accumulator**: The accumulated value (starts as `initialValue`)
- **currentValue**: The current element being processed
- **initialValue**: Starting value for the accumulator (optional but recommended)

### Examples

```javascript
// Sum of all numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15


// Product of all numbers
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);  // 120


// Finding maximum value
const max = numbers.reduce((acc, num) => num > acc ? num : acc, numbers[0]);
console.log(max);  // 5


// Counting occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }


// Flattening an array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened);  // [1, 2, 3, 4, 5, 6]


// Grouping objects by property
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {});

console.log(groupedByAge);
// {
//   25: [{ name: 'John', age: 25 }, { name: 'Jane', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 30 }]
// }


// Calculating total price in shopping cart
const cart = [
    { item: 'Laptop', price: 1000, quantity: 1 },
    { item: 'Mouse', price: 25, quantity: 2 },
    { item: 'Keyboard', price: 75, quantity: 1 }
];

const total = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
}, 0);
console.log(total);  // 1125


// Building a query string
const params = { name: 'John', age: 25, city: 'NYC' };
const queryString = Object.entries(params).reduce((acc, [key, value], index) => {
    const separator = index === 0 ? '?' : '&';
    return acc + `${separator}${key}=${value}`;
}, '');
console.log(queryString);  // '?name=John&age=25&city=NYC'


// Removing duplicates (alternative method)
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = nums.reduce((acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}, []);
console.log(uniqueNums);  // [1, 2, 3, 4, 5]
```

### Important Notes
- **Always provide an initial value** to avoid unexpected results
- Can return any data type
- Very powerful but can be harder to read than other methods

---

## Other Important Methods

### find()
Returns the **first element** that satisfies a condition.

```javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

const user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: 'Jane' }
```

### findIndex()
Returns the **index** of the first element that satisfies a condition.

```javascript
const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex(num => num > 25);
console.log(index);  // 2
```

### some()
Returns `true` if **at least one** element passes the test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);  // true
```

### every()
Returns `true` if **all** elements pass the test.

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);  // true
```

### includes()
Returns `true` if array contains a specific value.

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));  // true
console.log(fruits.includes('grape'));   // false
```

### indexOf()
Returns the first index of a value, or -1 if not found.

```javascript
const numbers = [10, 20, 30, 20, 40];
console.log(numbers.indexOf(20));     // 1
console.log(numbers.indexOf(50));     // -1
```

### slice()
Returns a shallow copy of a portion of an array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4);
console.log(sliced);  // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (original unchanged)
```

### splice()
Changes array by removing or replacing elements (modifies original).

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2);  // Remove 2 elements starting at index 2
console.log(numbers);  // [1, 2, 5]
```

### concat()
Merges arrays into a new array.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log(merged);  // [1, 2, 3, 4, 5, 6]

// Or using spread operator
const merged2 = [...arr1, ...arr2];
```

### sort()
Sorts array elements (modifies original).

```javascript
const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);  // Ascending
console.log(numbers);  // [1, 1, 3, 4, 5, 9]

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers);  // [9, 5, 4, 3, 1, 1]
```

### reverse()
Reverses array elements (modifies original).

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);  // [5, 4, 3, 2, 1]
```

### join()
Creates a string from array elements.

```javascript
const words = ['Hello', 'World', 'JavaScript'];
const sentence = words.join(' ');
console.log(sentence);  // 'Hello World JavaScript'
```

### push() / pop()
Add/remove elements from the end.

```javascript
const fruits = ['apple', 'banana'];
fruits.push('orange');    // ['apple', 'banana', 'orange']
const last = fruits.pop(); // returns 'orange'
```

### unshift() / shift()
Add/remove elements from the beginning.

```javascript
const fruits = ['banana', 'orange'];
fruits.unshift('apple');   // ['apple', 'banana', 'orange']
const first = fruits.shift(); // returns 'apple'
```

---

## Method Chaining

You can chain multiple array methods together since most return new arrays.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers, double them, and sum them
const result = numbers
    .filter(num => num % 2 === 0)    // [2, 4, 6, 8, 10]
    .map(num => num * 2)             // [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0);  // 60

console.log(result);  // 60


// More complex example
const users = [
    { name: 'John', age: 25, active: true },
    { name: 'Jane', age: 17, active: false },
    { name: 'Bob', age: 30, active: true },
    { name: 'Alice', age: 22, active: true }
];

const activeAdultNames = users
    .filter(user => user.active)          // Only active users
    .filter(user => user.age >= 18)       // Only adults
    .map(user => user.name)               // Extract names
    .sort();                               // Sort alphabetically

console.log(activeAdultNames);  // ['Alice', 'Bob', 'John']


// Calculate average price of electronics
const products = [
    { name: 'Laptop', category: 'electronics', price: 1000 },
    { name: 'Phone', category: 'electronics', price: 500 },
    { name: 'Shirt', category: 'clothing', price: 30 },
    { name: 'Tablet', category: 'electronics', price: 300 }
];

const avgElectronicsPrice = products
    .filter(p => p.category === 'electronics')
    .map(p => p.price)
    .reduce((sum, price, _, arr) => sum + price / arr.length, 0);

console.log(avgElectronicsPrice);  // 600
```

---

## Practice Exercises

### Exercise 1: Basic forEach
Print each number in the array multiplied by its index.
```javascript
const numbers = [5, 10, 15, 20];
// Expected output: 0, 10, 30, 60
```

### Exercise 2: map
Convert an array of temperatures from Celsius to Fahrenheit.
```javascript
const celsius = [0, 10, 20, 30, 40];
// Formula: (C × 9/5) + 32
// Expected: [32, 50, 68, 86, 104]
```

### Exercise 3: filter
Get all products that are in stock and cost less than $50.
```javascript
const products = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: true },
    { name: 'Keyboard', price: 75, inStock: false },
    { name: 'Webcam', price: 45, inStock: true }
];
// Expected: Mouse and Webcam
```

### Exercise 4: reduce
Calculate the average of all numbers.
```javascript
const grades = [85, 92, 78, 90, 88];
// Expected: 86.6
```

### Exercise 5: Chaining
Get the total price of all electronics in the cart.
```javascript
const cart = [
    { name: 'Laptop', category: 'electronics', price: 1000, quantity: 1 },
    { name: 'Shirt', category: 'clothing', price: 30, quantity: 2 },
    { name: 'Phone', category: 'electronics', price: 500, quantity: 1 },
    { name: 'Shoes', category: 'clothing', price: 80, quantity: 1 }
];
// Expected: 1500
```

### Exercise 6: Advanced
Find the most expensive product in each category.
```javascript
const products = [
    { name: 'Laptop', category: 'electronics', price: 1000 },
    { name: 'Phone', category: 'electronics', price: 500 },
    { name: 'Shirt', category: 'clothing', price: 30 },
    { name: 'Jeans', category: 'clothing', price: 80 }
];
// Expected: { electronics: { name: 'Laptop', ... }, clothing: { name: 'Jeans', ... } }
```

---

## Solutions to Exercises

### Solution 1
```javascript
const numbers = [5, 10, 15, 20];
numbers.forEach((num, index) => {
    console.log(num * index);
});
```

### Solution 2
```javascript
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit);
```

### Solution 3
```javascript
const affordableInStock = products.filter(p => p.inStock && p.price < 50);
console.log(affordableInStock);
```

### Solution 4
```javascript
const grades = [85, 92, 78, 90, 88];
const average = grades.reduce((sum, grade, _, arr) => {
    return sum + grade / arr.length;
}, 0);
console.log(average);
```

### Solution 5
```javascript
const total = cart
    .filter(item => item.category === 'electronics')
    .reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(total);
```

### Solution 6
```javascript
const mostExpensive = products.reduce((acc, product) => {
    const cat = product.category;
    if (!acc[cat] || product.price > acc[cat].price) {
        acc[cat] = product;
    }
    return acc;
}, {});
console.log(mostExpensive);
```

---

## Quick Reference Table

| Method | Returns | Modifies Original | Use Case |
|--------|---------|-------------------|----------|
| `forEach()` | undefined | No | Execute code for each element |
| `map()` | New array | No | Transform each element |
| `filter()` | New array | No | Select elements by condition |
| `reduce()` | Single value | No | Combine elements into one result |
| `find()` | Single element | No | Find first matching element |
| `some()` | Boolean | No | Check if any element matches |
| `every()` | Boolean | No | Check if all elements match |
| `includes()` | Boolean | No | Check if value exists |
| `slice()` | New array | No | Extract portion of array |
| `splice()` | Removed elements | **Yes** | Add/remove elements |
| `sort()` | Sorted array | **Yes** | Sort elements |
| `reverse()` | Reversed array | **Yes** | Reverse order |

---

## Key Takeaways

1. **forEach**: Use when you need to do something with each element (side effects)
2. **map**: Use when you need to transform every element
3. **filter**: Use when you need to select certain elements
4. **reduce**: Use when you need to combine all elements into one value

5. Most methods don't modify the original array (except `splice`, `sort`, `reverse`, `push`, `pop`, `shift`, `unshift`)

6. You can chain methods together for powerful data transformations

7. Always consider performance: chaining many methods creates intermediate arrays

8. Use arrow functions for concise callbacks: `arr.map(x => x * 2)`

---

Happy coding! 🚀