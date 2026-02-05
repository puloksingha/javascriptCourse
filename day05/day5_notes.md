# Day 5 Notes - JavaScript Strings

## Overview
Day 5 focused on working with strings in JavaScript, covering escape sequences, string properties, methods, and important concepts like immutability.

---

## Escape Sequences
Escape sequences allow special characters to be included in strings:
- `\n` - New Line
- `\t` - Tab
- `\'` - Single Quote
- `\"` - Double Quote
- `\\` - Backslash
- `\r` - Carriage Return
- `\b` - Backspace
- `\f` - Form Feed

**Example:**
```javascript
let escapeString = 'He said, \'JavaScript is awesome!\'\nLet\'s learn it together.\tHappy coding!';
```

---

## String Properties and Methods

### Basic Property
- **`length`** - Returns the length of the string

### Common String Methods

#### Case Conversion
- **`toUpperCase()`** - Converts string to uppercase
- **`toLowerCase()`** - Converts string to lowercase

#### Whitespace Management
- **`trim()`** - Removes whitespace from both ends

#### String Manipulation
- **`replace(oldValue, newValue)`** - Replaces a substring with a new value
- **`split(separator)`** - Splits a string into an array
- **`slice(start, end)`** - Extracts a section of a string
- **`substring(start, end)`** - Similar to slice (extracts substring)

#### Character Access
- **`charAt(index)`** - Returns character at specified index
- **Bracket notation** - `string[index]` - Alternative way to access characters

#### String Searching
- **`includes(substring)`** - Checks if string contains a substring

---

## String Concatenation

### Traditional Concatenation
```javascript
let greet = "Hello";
let place = "World";
let concatenatedString = greet + ", " + place + "!";
```

### Template Literals (Modern Approach)
```javascript
let templateLiteralString = `${greet}, ${place}!`;
```

---

## Custom String Functions

### Reverse String Function
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```
This function:
1. Splits string into array of characters
2. Reverses the array
3. Joins the array back into a string

---

## String Iteration
Strings can be iterated using `for...of` loop:
```javascript
for (let char of sampleString) {
    console.log(char);
}
```

---

## String Comparison
Strings can be compared using comparison operators:
```javascript
let string1 = "apple";
let string2 = "banana";
console.log(string1 === string2); // Equality check
console.log(string1 < string2);   // Lexicographic comparison
console.log(string1 > string2);   // Lexicographic comparison
```

---

## String Immutability
**Important Concept:** Strings in JavaScript are **immutable** - they cannot be changed once created.

```javascript
let immutableString = "Immutable";
immutableString[0] = "i";  // This will NOT change the string
console.log(immutableString); // Still "Immutable"
```

To "modify" a string, you must create a new one:
```javascript
let newString = "i" + immutableString.slice(1);
console.log(newString); // "immutable"
```

---

## Key Takeaways
- Strings are a fundamental data type in JavaScript used for handling text
- Strings are immutable - modifications create new strings
- JavaScript provides numerous built-in methods for string manipulation
- Template literals offer a modern, cleaner way to concatenate strings
- Understanding string methods is essential for effective JavaScript programming
