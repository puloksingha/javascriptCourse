// strings are used to store and manipulate  text data
// string can be created using the following ways:
// 1. Using single quotes  ' '
// 2. Using double quotes  " " 
// 3. Using backticks  ` `  (template literals)


// Example 1: Using single quotes
let singleQuoteString = 'Hello, World!';
console.log(singleQuoteString);

// Example 2: Using double quotes
let doubleQuoteString = "Hello, World!";
console.log(doubleQuoteString);

// Example 3: Using backticks (template literals)
let name = 'Alice';
let backtickString = `Hello, ${name}! Welcome to the world of JavaScript.`;
console.log(backtickString);

// escape sequences characters in strings
// \n - New Line
// \t - Tab
// \' - Single Quote
// \" - Double Quote
// \\ - Backslash
// \r - Carriage Return
// \b - Backspace
// \f - Form Feed
// Example: Using escape sequences

let escapeString = 'He said, \'JavaScript is awesome!\'\nLet\'s learn it together.\tHappy coding!';
console.log(escapeString);

// string properties and methods
let sampleString = "  Hello, JavaScript!  ";
console.log("Length of the string:", sampleString.length); // Length of the string

// Convert to uppercase
console.log("Uppercase:", sampleString.toUpperCase());
// Convert to lowercase
console.log("Lowercase:", sampleString.toLowerCase());
// Trim whitespace  
console.log("Trimmed string:", sampleString.trim());
// Replace substring
console.log("Replaced string:", sampleString.replace("JavaScript", "World"));
// Split string into an array
console.log("Split string:", sampleString.split(","));
// Get character at specific index
console.log("Character at index 7:", sampleString.charAt(7));
//reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed string:", reverseString(sampleString.trim()));
//slice a string
console.log("Sliced string (7, 17):", sampleString.slice(7, 17));

// Get substring
console.log("Substring (7, 17):", sampleString.substring(7, 17));
// Check if string includes a substring
console.log("Includes 'JavaScript':", sampleString.includes("JavaScript"));

// Concatenate strings
let greet = "Hello";
let place = "World";
let concatenatedString = greet + ", " + place + "!";
console.log("Concatenated String:", concatenatedString);
// Using template literals for concatenation
let templateLiteralString = `${greet}, ${place}!`;
console.log("Template Literal String:", templateLiteralString);
// Accessing characters using bracket notation
console.log("Character at index 1:", sampleString[1]);
// Iterating over each character in a string
console.log("Characters in the string:");
for (let char of sampleString) {
    console.log(char);
}   
// String comparison
let string1 = "apple";
let string2 = "banana";
console.log("Is string1 equal to string2?", string1 === string2);
console.log("Is string1 less than string2?", string1 < string2);
console.log("Is string1 greater than string2?", string1 > string2);
// String immutability
let immutableString = "Immutable";
immutableString[0] = "i";
console.log("After attempting to change first character:", immutableString); // remains unchanged
// To change a string, we need to create a new one
let newString = "i" + immutableString.slice(1);
console.log("New string after modification:", newString);       
// Conclusion: Strings are a fundamental part of JavaScript and are used extensively for handling text data. Understanding their properties and methods is essential for effective programming. 
