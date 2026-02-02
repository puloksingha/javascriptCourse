# Day 7: JavaScript in the Browser & Arrays

## 1. JavaScript in the Browser

### Overview
- JavaScript was created to make web pages interactive and dynamic
- JavaScript runs in the browser and manipulates the DOM (Document Object Model)
- Can change content, style, and behavior of web pages
- Handles events like clicks, form submissions, and keyboard input

---

## 2. Script Tag

### What is the `<script>` Tag?
The `<script>` tag is used to embed or reference JavaScript code in HTML documents.

### Placement
- Can be placed in the `<head>` or `<body>` section
- **Best Practice**: Place just before closing `</body>` tag to ensure HTML loads first

### Embedding JavaScript (Inline)
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <script>
        console.log("This is a message from JavaScript!");
    </script>
</body>
</html>
```

### Referencing External Files
```html
<script src="script.js"></script>
```
- Create a `script.js` file in the same directory as your HTML file
- The external script will execute when the HTML document loads

---

## 3. Console Object Methods

### What is the Console?
- Powerful tool for debugging and testing JavaScript code
- Access via browser's Developer Tools (Press F12 or Inspect)
- Navigate to the "Console" tab

### Common Console Methods

| Method | Purpose |
|--------|---------|
| `console.log()` | Log general information |
| `console.error()` | Log error messages (appears in red) |
| `console.warn()` | Log warning messages (appears in yellow) |
| `console.info()` | Log informational messages |

### Example Usage
```javascript
console.log("This is a log message.");
console.error("This is an error message.");
console.warn("This is a warning message.");
console.info("This is an informational message.");
```

---

## 4. User Interaction: Alert, Prompt, Confirm

JavaScript provides built-in dialog box functions for user interaction.

### `alert()`
- Displays a message with an OK button
- Blocks further execution until user clicks OK
```javascript
alert("This is an alert message!");
```

### `prompt()`
- Displays a dialog asking for user input
- Returns the input as a string (or `null` if cancelled)
```javascript
var userInput = prompt("Please enter your name:");
```

### `confirm()`
- Displays a dialog with OK and Cancel buttons
- Returns `true` if OK, `false` if Cancel
```javascript
var userConfirmed = confirm("Do you want to proceed?");
```

### Important Note
- Excessive use of these functions can disrupt user experience
- Use them judiciously in web applications

---

## 5. Window Object

### Overview
- Represents the browser window
- Global object in a browser environment
- Properties and methods accessible without "window." prefix

### Common Properties

| Property | Purpose |
|----------|---------|
| `window.innerWidth` | Width of the browser window's content area |
| `window.innerHeight` | Height of the browser window's content area |
| `window.location.href` | Current URL of the page |

### Example Usage
```javascript
console.log("Window width:", window.innerWidth);
console.log("Window height:", window.innerHeight);
console.log("Current URL:", window.location.href);
```

### Common Methods

| Method | Purpose |
|--------|---------|
| `window.alert()` | Display alert dialog |
| `window.prompt()` | Display prompt dialog |
| `window.confirm()` | Display confirm dialog |
| `window.setTimeout()` | Execute function after delay |
| `window.setInterval()` | Execute function at regular intervals |

### Example: setTimeout
```javascript
window.setTimeout(function() {
    console.log("This message is displayed after a 2-second delay.");
}, 2000);  // 2000 milliseconds = 2 seconds
```

---

## 6. Arrays in JavaScript

### What are Arrays?
- Ordered collections used to store multiple values in a single variable
- Can contain any data type: numbers, strings, objects, other arrays
- Created using square brackets `[]` with comma-separated elements

### Creating Arrays
```javascript
let fruits = ['apple', 'banana', 'cherry'];
console.log("Fruits array:", fruits);
```

### Accessing Array Elements
- Arrays are zero-indexed (first element is at index 0)
```javascript
console.log("First fruit:", fruits[0]);   // 'apple'
console.log("Second fruit:", fruits[1]);  // 'banana'
console.log("Third fruit:", fruits[2]);   // 'cherry'
```

### Modifying Array Elements
```javascript
fruits[1] = 'blueberry';
console.log("Modified fruits array:", fruits);  // ['apple', 'blueberry', 'cherry']
```

### Array Properties
```javascript
console.log("Array length:", fruits.length);  // Returns number of elements
```

---

## 7. Array Methods

### Adding Elements

#### `push()` - Add to end
```javascript
fruits.push('date');
console.log("After push:", fruits);  // [..., 'date']
```

#### `unshift()` - Add to beginning
```javascript
fruits.unshift('avocado');
console.log("After unshift:", fruits);  // ['avocado', ..., 'date']
```

### Removing Elements

#### `pop()` - Remove from end
```javascript
let removedFruit = fruits.pop();
console.log("Removed:", removedFruit);
console.log("After pop:", fruits);
```

#### `shift()` - Remove from beginning
```javascript
let shiftedFruit = fruits.shift();
console.log("Removed:", shiftedFruit);
console.log("After shift:", fruits);
```

### Finding Elements

#### `indexOf()` - Find element's index
```javascript
let index = fruits.indexOf('cherry');
console.log("Index of cherry:", index);  // Returns index or -1 if not found
```

#### `splice()` - Remove elements at specific position
```javascript
fruits.splice(1, 1);  // Remove 1 element starting at index 1
console.log("After splice:", fruits);
```

#### `slice()` - Create a new array (doesn't modify original)
```javascript
let citrusFruits = fruits.slice(0, 2);  // Get elements 0-1
console.log("Sliced array:", citrusFruits);
```

---

## 8. Array Iteration Methods

### `forEach()` - Loop through each element
```javascript
fruits.forEach(function(fruit, index) {
    console.log("Index:", index, "Fruit:", fruit);
});
```

### `map()` - Transform array to create new array
```javascript
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log("Uppercase fruits:", upperCaseFruits);
```

### `filter()` - Create new array with filtered elements
```javascript
let longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log("Fruits with long names:", longNamedFruits);
```

---

## 9. Key Takeaways

✓ JavaScript makes web pages interactive by manipulating the DOM
✓ Always place `<script>` tags before closing `</body>` tag
✓ Use console methods for debugging
✓ Dialog boxes (alert, prompt, confirm) are for user interaction
✓ The window object is the global object in the browser
✓ Arrays are versatile for storing and manipulating collections of data
✓ Array methods like forEach, map, and filter enable efficient data processing
✓ Learn to use both mutating methods (push, pop) and non-mutating methods (slice, map)
