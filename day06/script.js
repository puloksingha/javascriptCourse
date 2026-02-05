//arrays
// defination of array 
//arrays are used to store multiple values in a single variable
//arrays can be created using the following ways:
//1. Using array literal []
//2. Using Array constructor new Array()
// Example 1: Using array literal
let fruits = ['Apple', 'Banana', 'Orange'];
console.log("Fruits array:", fruits);
// Example 2: Using Array constructor
let vegetables = new Array('Carrot', 'Broccoli', 'Spinach');
console.log("Vegetables array:", vegetables);
// array properties and methods
let sampleArray = [10, 20, 30, 40, 50];
console.log("Length of the array:", sampleArray.length); // Length of the array

// Add element to the end
sampleArray.push(60);
console.log("After push:", sampleArray);
// Remove element from the end
sampleArray.pop();
console.log("After pop:", sampleArray);
// Add element to the beginning
sampleArray.unshift(0);
console.log("After unshift:", sampleArray); 
// Remove element from the beginning
sampleArray.shift();
console.log("After shift:", sampleArray);
// Find index of an element
console.log("Index of 30:", sampleArray.indexOf(30));
// Remove element by index
sampleArray.splice(2, 1);
console.log("After splice:", sampleArray);  
// Slice array
let slicedArray = sampleArray.slice(1, 3);
console.log("Sliced array (1,3):", slicedArray);
// tostring
console.log("Array to string:", sampleArray.toString());
//delete element
delete sampleArray[1];
console.log("After delete:", sampleArray);
//populate array with values
sampleArray = Array.from({length: 5}, (v, i) => i * 10);
console.log("Populated array:", sampleArray);

// Iterate over array
console.log("Iterating over array:");
sampleArray.forEach(function(value, index) {
    console.log("Index:", index, "Value:", value);
});
// Map array
let mappedArray = sampleArray.map(function(value) {
    return value * 2;
});
console.log("Mapped array (values * 2):", mappedArray);
// Filter array
let filteredArray = sampleArray.filter(function(value) {
    return value > 20;
});
console.log("Filtered array (values > 20):", filteredArray);
// Reduce array
let sum = sampleArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);  
console.log("Sum of array elements:", sum);
// Find element
let foundElement = sampleArray.find(function(value) {
    return value > 25;
});
console.log("First element greater than 25:", foundElement);
// Sort array
let unsortedArray = [40, 10, 30, 20, 50];
unsortedArray.sort(function(a, b) {
    return a - b;
});
console.log("Sorted array:", unsortedArray);
// Reverse array
unsortedArray.reverse();
console.log("Reversed array:", unsortedArray);  
// Concatenate arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
console.log("Concatenated array:", concatenatedArray);
// Check if array includes an element
console.log("Array includes 3:", array1.includes(3));
// Join array elements into a string
let joinedString = array1.join('-');
console.log("Joined string:", joinedString);
// Convert array to string
console.log("Array to string:", array1.toString());
// Convert string to array
let stringToArray = 'a,b,c,d'.split(',');
console.log("String to array:", stringToArray); 
// Multidimensional array
let multiArray = [
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Multidimensional array:", multiArray);
console.log("Element at (1,2):", multiArray[1][2]); // Accessing element 6
// Nested iteration
console.log("Iterating over multidimensional array:");  
for (let i = 0; i < multiArray.length; i++) {
    for (let j = 0; j < multiArray[i].length; j++) {
        console.log(`Element at (${i},${j}):`, multiArray[i][j]);
    }
}   
// Spread operator with arrays
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
let combinedArray = [...arrayA, ...arrayB];
console.log("Combined array using spread operator:", combinedArray);    
// Destructuring arrays
let [first, second, third] = arrayA;
console.log("Destructured values:", first, second, third);
// Copying arrays
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log("Copied array:", copiedArray);  
// Modifying copied array
copiedArray.push(4);
console.log("Original array after modifying copied array:", originalArray);
console.log("Modified copied array:", copiedArray); 
// Conclusion: Arrays are versatile data structures in JavaScript that allow you to store and manipulate multiple values efficiently using various built-in methods and properties. They are essential for handling collections of data in web development and programming in general.
