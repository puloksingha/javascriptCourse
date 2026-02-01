# Day 6: JavaScript Arrays

## What are Arrays?
Arrays are used to store multiple values in a single variable. They are one of the most important data structures in JavaScript for handling collections of data.

## Creating Arrays

### 1. Array Literal (Recommended)
```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
```

### 2. Array Constructor
```javascript
let vegetables = new Array('Carrot', 'Broccoli', 'Spinach');
```

## Array Properties

### length
Returns the number of elements in an array.
```javascript
let arr = [10, 20, 30];
console.log(arr.length); // 3
```

## Common Array Methods

### Adding/Removing Elements

**push()** - Adds element(s) to the end
```javascript
arr.push(60); // [10, 20, 30, 60]
```

**pop()** - Removes element from the end
```javascript
arr.pop(); // [10, 20, 30]
```

**unshift()** - Adds element(s) to the beginning
```javascript
arr.unshift(0); // [0, 10, 20, 30]
```

**shift()** - Removes element from the beginning
```javascript
arr.shift(); // [10, 20, 30]
```

### Finding Elements

**indexOf()** - Returns the index of an element
```javascript
arr.indexOf(30); // 2
```

**includes()** - Checks if array contains an element
```javascript
arr.includes(20); // true
```

**find()** - Returns the first element that matches a condition
```javascript
let found = arr.find(value => value > 25); // 30
```

### Modifying Arrays

**splice()** - Removes/adds elements at a specific index
```javascript
arr.splice(2, 1); // Removes 1 element at index 2
```

**slice()** - Returns a portion of the array (doesn't modify original)
```javascript
let sliced = arr.slice(1, 3); // Elements from index 1 to 2
```

**delete** - Removes element but leaves undefined
```javascript
delete arr[1]; // Creates a hole in the array
```

### Combining Arrays

**concat()** - Merges two or more arrays
```javascript
let combined = array1.concat(array2);
```

**Spread operator (...)** - Modern way to combine arrays
```javascript
let combined = [...array1, ...array2];
```

### Converting Arrays

**toString()** - Converts array to comma-separated string
```javascript
arr.toString(); // "10,20,30"
```

**join()** - Joins array elements with a specified separator
```javascript
arr.join('-'); // "10-20-30"
```

**split()** - Converts string to array (String method)
```javascript
'a,b,c'.split(','); // ['a', 'b', 'c']
```

### Sorting and Reversing

**sort()** - Sorts array elements
```javascript
arr.sort((a, b) => a - b); // Ascending order
```

**reverse()** - Reverses array order
```javascript
arr.reverse();
```

## Array Iteration Methods

### forEach()
Executes a function for each array element
```javascript
arr.forEach(function(value, index) {
    console.log(index, value);
});
```

### map()
Creates a new array by transforming each element
```javascript
let doubled = arr.map(value => value * 2);
```

### filter()
Creates a new array with elements that pass a test
```javascript
let filtered = arr.filter(value => value > 20);
```

### reduce()
Reduces array to a single value
```javascript
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```

## Advanced Array Concepts

### Multidimensional Arrays
Arrays containing other arrays
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Access: matrix[1][2] = 6
```

### Array Destructuring
Extract values from arrays into variables
```javascript
let [first, second, third] = [1, 2, 3];
```

### Copying Arrays
```javascript
let original = [1, 2, 3];
let copy = [...original]; // Shallow copy
```

### Creating Arrays with Array.from()
```javascript
let arr = Array.from({length: 5}, (v, i) => i * 10);
// [0, 10, 20, 30, 40]
```

## Key Takeaways

1. Arrays are essential for storing collections of data
2. Many methods modify the original array (push, pop, splice), while others return new arrays (map, filter, slice)
3. Array methods can be chained together for powerful data manipulation
4. Modern features like spread operator and destructuring make working with arrays easier
5. Iteration methods (forEach, map, filter, reduce) are fundamental for processing array data

## Important Notes

- Arrays are zero-indexed (first element is at index 0)
- `delete` operator leaves holes in arrays (use `splice` instead)
- `sort()` without a comparison function converts elements to strings
- Array methods like `map`, `filter`, and `reduce` don't modify the original array
- Spread operator creates a shallow copy (nested objects/arrays are still referenced)