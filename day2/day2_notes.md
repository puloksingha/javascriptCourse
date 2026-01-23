# Day 2: JavaScript Data Types

## Overview
This tutorial covers the different data types available in JavaScript, divided into primitive and object types.

---

## Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They are immutable and stored directly in the variable.

### 1. String
- Represents textual data
- Enclosed in quotes (single, double, or backticks)
```javascript
let name = "John Doe"
console.log(typeof name) // "string"
```

### 2. Number
- Represents both integers and floating-point numbers
- JavaScript has only one number type
```javascript
let age = 25
console.log(typeof age) // "number"
```

### 3. Boolean
- Represents logical values: `true` or `false`
- Used for conditional logic
```javascript
let isStudent = true
console.log(typeof isStudent) // "boolean"
```

### 4. Undefined
- Represents a variable that has been declared but not assigned a value
- Default value for uninitialized variables
```javascript
let address
console.log(typeof address) // "undefined"
```

### 5. Null
- Represents the intentional absence of any value
- **Note:** `typeof null` returns `"object"` (a known JavaScript quirk/bug)
```javascript
let phoneNumber = null
console.log(typeof phoneNumber) // "object"
```

### 6. Symbol
- Introduced in ES6 (ES2015)
- Creates unique identifiers
- Useful for object property keys
```javascript
let uniqueId = Symbol("id")
console.log(typeof uniqueId) // "symbol"
```

### 7. BigInt
- Introduced in ES2020
- Represents integers larger than 2^53 - 1
- Created using `BigInt()` function or `n` suffix
```javascript
let bigNumber = BigInt(9007199254740991)
console.log(typeof bigNumber) // "bigint"
```

---

## Object Data Types

Object types are collections of data and can hold multiple values.

### 1. Object
- Collection of key-value pairs
- Most fundamental object type in JavaScript
```javascript
let person = {  
    firstName: "Jane",
    lastName: "Doe",
    age: 30
}
console.log(typeof person) // "object"
```

### 2. Array
- Ordered list of values
- Special type of object for storing collections
- **Note:** Arrays return `"object"` when using `typeof`
```javascript
let colors = ["Red", "Green", "Blue"]
console.log(typeof colors) // "object"
```

### 3. Function
- Block of reusable code
- Functions are first-class objects in JavaScript
```javascript
function greet() {
    return "Hello, World!"
}
console.log(typeof greet) // "function"
```

---

## Key Takeaways

✅ **7 Primitive Types:** String, Number, Boolean, Undefined, Null, Symbol, BigInt  
✅ **Object Types:** Objects, Arrays, Functions (and more)  
✅ **typeof operator:** Used to check the data type of a variable  
✅ **Important quirk:** `typeof null` returns `"object"` (historical bug in JavaScript)  
✅ **Important quirk:** Arrays have type `"object"` when using `typeof`

---

## Practice Exercises

1. Declare variables of each primitive type and log their types
2. Create an object with at least 3 properties
3. Create an array with mixed data types
4. Write a function that returns a greeting message
5. Experiment with Symbol to create unique identifiers

---

**Happy Coding! Keep Learning JavaScript! 🚀**
