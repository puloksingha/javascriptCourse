# JavaScript Objects and Object Manipulation

A complete guide to understanding and working with objects in JavaScript.

---

## Table of Contents
1. [What are Objects?](#what-are-objects)
2. [Creating Objects](#creating-objects)
3. [Accessing Object Properties](#accessing-object-properties)
4. [Adding and Modifying Properties](#adding-and-modifying-properties)
5. [Deleting Properties](#deleting-properties)
6. [Object Methods](#object-methods)
7. [The 'this' Keyword](#the-this-keyword)
8. [Looping Through Objects](#looping-through-objects)
9. [Object Destructuring](#object-destructuring)
10. [Copying and Cloning Objects](#copying-and-cloning-objects)
11. [Built-in Object Methods](#built-in-object-methods)
12. [Advanced Concepts](#advanced-concepts)
13. [Practice Exercises](#practice-exercises)

---

## What are Objects?

Objects are collections of key-value pairs. They're used to store related data and functionality together. Almost everything in JavaScript is an object!

```javascript
// A simple object representing a person
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Objects can contain different data types
const student = {
    name: 'Alice',              // string
    age: 20,                    // number
    isEnrolled: true,           // boolean
    grades: [85, 90, 92],      // array
    address: {                  // nested object
        street: '123 Main St',
        city: 'Boston'
    },
    sayHello: function() {      // method (function)
        console.log('Hello!');
    }
};
```

---

## Creating Objects

### 1. Object Literal (Most Common)
```javascript
const person = {
    name: 'John',
    age: 30
};
```

### 2. Object Constructor
```javascript
const person = new Object();
person.name = 'John';
person.age = 30;
```

### 3. Object.create()
```javascript
const personPrototype = {
    greet: function() {
        console.log('Hello!');
    }
};

const person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;
```

### 4. Constructor Function
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);
```

### 5. ES6 Class
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John', 30);
```

---

## Accessing Object Properties

### Dot Notation (Most Common)
```javascript
const person = {
    name: 'John',
    age: 30
};

console.log(person.name);  // 'John'
console.log(person.age);   // 30
```

### Bracket Notation
```javascript
const person = {
    name: 'John',
    age: 30,
    'favorite color': 'blue'  // property with space
};

console.log(person['name']);            // 'John'
console.log(person['favorite color']);  // 'blue'

// Useful with variables
const property = 'age';
console.log(person[property]);  // 30

// Useful with dynamic keys
const key = 'name';
console.log(person[key]);  // 'John'
```

### When to Use Bracket Notation
- Property names with spaces or special characters
- Property names stored in variables
- Dynamic property access
- Property names that are numbers or reserved keywords

```javascript
const user = {
    'first-name': 'John',  // Can't use dot notation
    '123': 'number key',
    'for': 'reserved word'
};

console.log(user['first-name']);
console.log(user['123']);
console.log(user['for']);
```

---

## Adding and Modifying Properties

### Adding Properties
```javascript
const person = {
    name: 'John'
};

// Using dot notation
person.age = 30;
person.city = 'New York';

// Using bracket notation
person['email'] = 'john@example.com';

console.log(person);
// { name: 'John', age: 30, city: 'New York', email: 'john@example.com' }
```

### Modifying Properties
```javascript
const person = {
    name: 'John',
    age: 30
};

// Update existing property
person.age = 31;
person['name'] = 'John Doe';

console.log(person);  // { name: 'John Doe', age: 31 }
```

### Dynamic Property Names
```javascript
const propertyName = 'favoriteFood';
const propertyValue = 'Pizza';

const person = {
    name: 'John',
    [propertyName]: propertyValue  // Computed property name
};

console.log(person);  // { name: 'John', favoriteFood: 'Pizza' }
```

### Adding Multiple Properties
```javascript
const person = { name: 'John' };

// Using Object.assign()
Object.assign(person, {
    age: 30,
    city: 'New York',
    email: 'john@example.com'
});

// Using spread operator (ES6+)
const updatedPerson = {
    ...person,
    phone: '555-1234',
    country: 'USA'
};
```

---

## Deleting Properties

### Using delete Operator
```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

delete person.age;
console.log(person);  // { name: 'John', city: 'New York' }

// Can also use bracket notation
delete person['city'];
console.log(person);  // { name: 'John' }
```

### Setting to undefined (Alternative)
```javascript
const person = {
    name: 'John',
    age: 30
};

person.age = undefined;  // Property still exists but value is undefined
console.log('age' in person);  // true

delete person.age;       // Property is completely removed
console.log('age' in person);  // false
```

---

## Object Methods

Methods are functions stored as object properties.

### Defining Methods

```javascript
// Method definition (ES5)
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

// Method shorthand (ES6)
const person2 = {
    name: 'Jane',
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();   // 'Hello, my name is John'
person2.greet();  // 'Hello, my name is Jane'
```

### Methods with Parameters
```javascript
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return b !== 0 ? a / b : 'Cannot divide by zero';
    }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.multiply(4, 7));  // 28
```

### Accessing Object Properties in Methods
```javascript
const bankAccount = {
    owner: 'John Doe',
    balance: 1000,
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    },
    
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient funds');
        }
    },
    
    getBalance() {
        return this.balance;
    }
};

bankAccount.deposit(500);   // Deposited $500. New balance: $1500
bankAccount.withdraw(200);  // Withdrew $200. New balance: $1300
```

---

## The 'this' Keyword

`this` refers to the object that is executing the current function.

### In Object Methods
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());  // 'John Doe'
```

### Arrow Functions and 'this'
Arrow functions don't have their own `this` - they inherit it from the parent scope.

```javascript
const person = {
    name: 'John',
    
    // Regular function - 'this' refers to person object
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    },
    
    // Arrow function - 'this' refers to parent scope (not person)
    greetArrow: () => {
        console.log(`Hello, I'm ${this.name}`);  // 'this' is undefined
    }
};

person.greet();       // 'Hello, I'm John'
person.greetArrow();  // 'Hello, I'm undefined'
```

### Common 'this' Pitfall
```javascript
const person = {
    name: 'John',
    hobbies: ['reading', 'gaming'],
    
    // Problem: 'this' inside forEach is not the person object
    showHobbiesWrong() {
        this.hobbies.forEach(function(hobby) {
            console.log(`${this.name} likes ${hobby}`);  // 'this.name' is undefined
        });
    },
    
    // Solution 1: Use arrow function
    showHobbiesArrow() {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);  // Works!
        });
    },
    
    // Solution 2: Save 'this' to a variable
    showHobbiesVar() {
        const self = this;
        this.hobbies.forEach(function(hobby) {
            console.log(`${self.name} likes ${hobby}`);  // Works!
        });
    }
};
```

---

## Looping Through Objects

### for...in Loop
```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York
```

### Object.keys()
Returns an array of property names (keys).

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const keys = Object.keys(person);
console.log(keys);  // ['name', 'age', 'city']

// Iterate over keys
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});
```

### Object.values()
Returns an array of property values.

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const values = Object.values(person);
console.log(values);  // ['John', 30, 'New York']

// Example: Calculate total
const prices = {
    laptop: 1000,
    mouse: 25,
    keyboard: 75
};

const total = Object.values(prices).reduce((sum, price) => sum + price, 0);
console.log(total);  // 1100
```

### Object.entries()
Returns an array of [key, value] pairs.

```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const entries = Object.entries(person);
console.log(entries);
// [['name', 'John'], ['age', 30], ['city', 'New York']]

// Iterate with destructuring
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Convert to Map
const personMap = new Map(Object.entries(person));
```

---

## Object Destructuring

Extract properties from objects into variables.

### Basic Destructuring
```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Without destructuring
const name = person.name;
const age = person.age;

// With destructuring
const { name, age, city } = person;
console.log(name);  // 'John'
console.log(age);   // 30
console.log(city);  // 'New York'
```

### Renaming Variables
```javascript
const person = {
    name: 'John',
    age: 30
};

const { name: personName, age: personAge } = person;
console.log(personName);  // 'John'
console.log(personAge);   // 30
```

### Default Values
```javascript
const person = {
    name: 'John',
    age: 30
};

const { name, age, city = 'Unknown' } = person;
console.log(city);  // 'Unknown' (default value)
```

### Nested Destructuring
```javascript
const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
    }
};

const { 
    name, 
    address: { city, zipCode } 
} = person;

console.log(name);     // 'John'
console.log(city);     // 'New York'
console.log(zipCode);  // '10001'
```

### Function Parameter Destructuring
```javascript
// Instead of this:
function displayUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}

// You can do this:
function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
}

const user = { name: 'John', age: 30, city: 'New York' };
displayUser(user);  // 'John is 30 years old'


// With default values
function createUser({ name, age = 18, role = 'user' }) {
    return { name, age, role };
}

console.log(createUser({ name: 'Alice' }));
// { name: 'Alice', age: 18, role: 'user' }
```

### Rest in Destructuring
```javascript
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    email: 'john@example.com'
};

const { name, age, ...rest } = person;
console.log(name);  // 'John'
console.log(age);   // 30
console.log(rest);  // { city: 'New York', country: 'USA', email: 'john@example.com' }
```

---

## Copying and Cloning Objects

### Shallow Copy

#### Using Spread Operator (ES6)
```javascript
const original = {
    name: 'John',
    age: 30
};

const copy = { ...original };
copy.age = 31;

console.log(original.age);  // 30 (unchanged)
console.log(copy.age);      // 31
```

#### Using Object.assign()
```javascript
const original = {
    name: 'John',
    age: 30
};

const copy = Object.assign({}, original);
```

### Problem with Shallow Copy
Nested objects are still referenced, not copied!

```javascript
const original = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

const shallowCopy = { ...original };
shallowCopy.address.city = 'Boston';

console.log(original.address.city);  // 'Boston' (also changed!)
```

### Deep Copy

#### Using JSON methods (Simple but Limited)
```javascript
const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York'
    }
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = 'Boston';

console.log(original.address.city);  // 'New York' (unchanged)
console.log(deepCopy.address.city);  // 'Boston'
```

**Limitations of JSON method:**
- Doesn't work with functions, undefined, symbols
- Doesn't preserve dates (converts to strings)
- Doesn't work with circular references

```javascript
const obj = {
    name: 'John',
    greet: function() { console.log('Hi'); },  // Lost
    birthDate: new Date(),                      // Becomes string
    value: undefined                            // Lost
};

const copy = JSON.parse(JSON.stringify(obj));
console.log(copy);
// { name: 'John', birthDate: '2024-...' }
// Functions and undefined are gone!
```

#### Using structuredClone() (Modern)
```javascript
const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York'
    },
    birthDate: new Date()
};

const deepCopy = structuredClone(original);
deepCopy.address.city = 'Boston';

console.log(original.address.city);  // 'New York'
console.log(deepCopy.address.city);  // 'Boston'
```

#### Custom Deep Clone Function
```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj);
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}
```

---

## Built-in Object Methods

### Object.keys()
```javascript
const person = { name: 'John', age: 30, city: 'NYC' };
console.log(Object.keys(person));  // ['name', 'age', 'city']
```

### Object.values()
```javascript
const person = { name: 'John', age: 30, city: 'NYC' };
console.log(Object.values(person));  // ['John', 30, 'NYC']
```

### Object.entries()
```javascript
const person = { name: 'John', age: 30, city: 'NYC' };
console.log(Object.entries(person));
// [['name', 'John'], ['age', 30], ['city', 'NYC']]
```

### Object.assign()
Copies properties from source objects to target.

```javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target);  // { a: 1, b: 2, c: 3 }

// Create new object (common pattern)
const merged = Object.assign({}, source1, source2);
```

### Object.freeze()
Makes an object immutable (can't add, delete, or modify properties).

```javascript
const person = {
    name: 'John',
    age: 30
};

Object.freeze(person);

person.age = 31;           // Silently fails
person.city = 'NYC';       // Silently fails
delete person.name;        // Silently fails

console.log(person);  // { name: 'John', age: 30 } (unchanged)
console.log(Object.isFrozen(person));  // true
```

**Note**: Freeze is shallow - nested objects can still be modified.

```javascript
const person = {
    name: 'John',
    address: {
        city: 'NYC'
    }
};

Object.freeze(person);
person.address.city = 'Boston';  // This works!
console.log(person.address.city);  // 'Boston'
```

### Object.seal()
Prevents adding or deleting properties, but allows modifying existing ones.

```javascript
const person = {
    name: 'John',
    age: 30
};

Object.seal(person);

person.age = 31;       // Works!
person.city = 'NYC';   // Fails
delete person.name;    // Fails

console.log(person);  // { name: 'John', age: 31 }
console.log(Object.isSealed(person));  // true
```

### Object.hasOwn() / hasOwnProperty()
Checks if object has a specific property (not inherited).

```javascript
const person = {
    name: 'John',
    age: 30
};

console.log(Object.hasOwn(person, 'name'));     // true
console.log(Object.hasOwn(person, 'toString')); // false (inherited)

// Old way (still works)
console.log(person.hasOwnProperty('name'));  // true
```

### Object.fromEntries()
Creates an object from an array of key-value pairs.

```javascript
const entries = [
    ['name', 'John'],
    ['age', 30],
    ['city', 'NYC']
];

const person = Object.fromEntries(entries);
console.log(person);  // { name: 'John', age: 30, city: 'NYC' }

// Useful for converting Maps to objects
const map = new Map([
    ['name', 'John'],
    ['age', 30]
]);
const obj = Object.fromEntries(map);
```

### Object.defineProperty()
Defines a property with specific attributes.

```javascript
const person = {};

Object.defineProperty(person, 'name', {
    value: 'John',
    writable: false,     // Can't change value
    enumerable: true,    // Shows up in loops
    configurable: false  // Can't delete or redefine
});

person.name = 'Jane';  // Fails (writable: false)
console.log(person.name);  // 'John'
```

---

## Advanced Concepts

### Property Existence Check

```javascript
const person = {
    name: 'John',
    age: 30
};

// Using 'in' operator
console.log('name' in person);     // true
console.log('email' in person);    // false

// Using hasOwnProperty
console.log(person.hasOwnProperty('age'));  // true

// Checking for undefined (not reliable)
console.log(person.email !== undefined);  // false
```

### Optional Chaining (?.)
Safely access nested properties that might not exist.

```javascript
const person = {
    name: 'John',
    address: {
        city: 'NYC'
    }
};

// Without optional chaining
const street = person.address && person.address.street;

// With optional chaining
const street2 = person.address?.street;  // undefined (no error)

// Works with methods too
const result = person.greet?.();  // undefined (no error if greet doesn't exist)
```

### Nullish Coalescing (??)
Provides default value only for null/undefined.

```javascript
const person = {
    name: 'John',
    age: 0,
    city: null
};

// Using || (problem: treats 0, '', false as falsy)
const age1 = person.age || 18;  // 18 (not what we want!)

// Using ?? (only null/undefined)
const age2 = person.age ?? 18;  // 0 (correct!)
const city = person.city ?? 'Unknown';  // 'Unknown'
```

### Computed Property Names
```javascript
const propertyName = 'favoriteColor';

const person = {
    name: 'John',
    [propertyName]: 'blue',
    ['is' + 'Adult']: true
};

console.log(person);
// { name: 'John', favoriteColor: 'blue', isAdult: true }
```

### Getters and Setters
```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);  // 'John Doe' (calls getter)

person.fullName = 'Jane Smith';  // Calls setter
console.log(person.firstName);   // 'Jane'
console.log(person.lastName);    // 'Smith'
```

### Object as Map Alternative
```javascript
// Objects can be used as simple maps
const userRoles = {
    'user1': 'admin',
    'user2': 'editor',
    'user3': 'viewer'
};

console.log(userRoles['user1']);  // 'admin'

// But Map is better for this purpose
const roleMap = new Map([
    ['user1', 'admin'],
    ['user2', 'editor'],
    ['user3', 'viewer']
]);
```

### Merging Objects
```javascript
const defaults = {
    theme: 'light',
    language: 'en',
    notifications: true
};

const userPreferences = {
    theme: 'dark',
    fontSize: 14
};

// Merge (userPreferences overrides defaults)
const settings = {
    ...defaults,
    ...userPreferences
};

console.log(settings);
// {
//   theme: 'dark',
//   language: 'en',
//   notifications: true,
//   fontSize: 14
// }
```

### Filtering Object Properties
```javascript
const user = {
    id: 1,
    name: 'John',
    password: 'secret123',
    age: 30,
    email: 'john@example.com'
};

// Remove password from object
const { password, ...safeUser } = user;
console.log(safeUser);
// { id: 1, name: 'John', age: 30, email: 'john@example.com' }

// Keep only specific properties
function pick(obj, keys) {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

const publicUser = pick(user, ['id', 'name', 'email']);
console.log(publicUser);
// { id: 1, name: 'John', email: 'john@example.com' }
```

---

## Practice Exercises

### Exercise 1: Object Creation and Access
Create an object representing a book with properties: title, author, pages, and isRead. Add a method to toggle the isRead status.

### Exercise 2: Object Manipulation
Given this object:
```javascript
const product = {
    name: 'Laptop',
    price: 1000,
    category: 'electronics'
};
```
Add a `discount` property (10), calculate and add a `finalPrice` property, and create a method `applyDiscount()`.

### Exercise 3: Looping Through Objects
Given an object of student grades, calculate the average grade.
```javascript
const grades = {
    math: 85,
    english: 92,
    science: 88,
    history: 90
};
```

### Exercise 4: Object Destructuring
Extract firstName, lastName, and city from this nested object:
```javascript
const user = {
    id: 1,
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        address: {
            city: 'New York',
            country: 'USA'
        }
    }
};
```

### Exercise 5: Object Methods
Create a shopping cart object with methods to add items, remove items, and calculate total price.

### Exercise 6: Deep Clone
Create a function to deep clone an object (including nested objects and arrays).

---

## Solutions to Exercises

### Solution 1
```javascript
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    isRead: false,
    
    toggleRead() {
        this.isRead = !this.isRead;
    }
};

book.toggleRead();
console.log(book.isRead);  // true
```

### Solution 2
```javascript
const product = {
    name: 'Laptop',
    price: 1000,
    category: 'electronics'
};

product.discount = 10;
product.finalPrice = product.price - (product.price * product.discount / 100);

product.applyDiscount = function(discountPercent) {
    this.discount = discountPercent;
    this.finalPrice = this.price - (this.price * this.discount / 100);
};

console.log(product.finalPrice);  // 900
product.applyDiscount(20);
console.log(product.finalPrice);  // 800
```

### Solution 3
```javascript
const grades = {
    math: 85,
    english: 92,
    science: 88,
    history: 90
};

const values = Object.values(grades);
const average = values.reduce((sum, grade) => sum + grade, 0) / values.length;

console.log(average);  // 88.75
```

### Solution 4
```javascript
const user = {
    id: 1,
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        address: {
            city: 'New York',
            country: 'USA'
        }
    }
};

const { 
    profile: { 
        firstName, 
        lastName, 
        address: { city } 
    } 
} = user;

console.log(firstName, lastName, city);  // 'John' 'Doe' 'New York'
```

### Solution 5
```javascript
const shoppingCart = {
    items: [],
    
    addItem(name, price, quantity = 1) {
        this.items.push({ name, price, quantity });
    },
    
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    },
    
    calculateTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    },
    
    displayCart() {
        this.items.forEach(item => {
            console.log(`${item.name} x${item.quantity} - $${item.price * item.quantity}`);
        });
        console.log(`Total: $${this.calculateTotal()}`);
    }
};

shoppingCart.addItem('Laptop', 1000, 1);
shoppingCart.addItem('Mouse', 25, 2);
shoppingCart.displayCart();
```

### Solution 6
```javascript
function deepClone(obj) {
    // Handle null and non-objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }
    
    // Handle Array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    // Handle Object
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

// Test
const original = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'gaming'],
    address: {
        city: 'NYC',
        zipCode: '10001'
    }
};

const copy = deepClone(original);
copy.address.city = 'Boston';
console.log(original.address.city);  // 'NYC' (unchanged)
console.log(copy.address.city);      // 'Boston'
```

---

## Quick Reference

### Common Operations
| Operation | Syntax | Example |
|-----------|--------|---------|
| Create object | `{}` | `const obj = { key: 'value' }` |
| Access property | `.` or `[]` | `obj.key` or `obj['key']` |
| Add property | Assignment | `obj.newKey = 'value'` |
| Delete property | `delete` | `delete obj.key` |
| Check property | `in` | `'key' in obj` |
| Copy object | Spread | `{ ...obj }` |
| Get keys | `Object.keys()` | `Object.keys(obj)` |
| Get values | `Object.values()` | `Object.values(obj)` |
| Get entries | `Object.entries()` | `Object.entries(obj)` |

### Key Concepts to Remember
1. Objects store key-value pairs
2. Properties can be accessed with dot or bracket notation
3. Methods are functions stored as properties
4. `this` refers to the object cal
Taking longer than usual. Trying again shortly (attempt 10 of 10)