# JavaScript Course

Welcome to the JavaScript Course! This repository contains a comprehensive learning path for mastering JavaScript fundamentals.

## 📚 Course Overview

This course is structured as a day-by-day tutorial series, covering essential JavaScript concepts from the ground up. Each day focuses on specific topics with practical code examples and detailed notes.

## 🗂️ Course Structure

### [Day 1: JavaScript Basics](day1/)
**Topics Covered:**
- Introduction to JavaScript
- Console output with `console.log()`
- Variables: `var`, `let`, and `const`
- Comments (single-line and multi-line)

**Files:**
- [script.js](day1/script.js) - Practical code examples
- [day1_notes.md](day1/day1_notes.md) - Detailed learning notes

**Key Learnings:**
- Understanding how to output data to the console
- Declaring and reassigning variables
- Difference between let, const, and var
- Writing clean code with comments

---

### [Day 2: Data Types](day2/)
**Topics Covered:**
- Primitive Data Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt)
- Object Data Types (Objects, Arrays, Functions)
- The `typeof` operator
- JavaScript type system quirks

**Files:**
- [script.js](day2/script.js) - Data type demonstrations
- [day2_notes.md](day2/day2_notes.md) - Comprehensive data types guide

**Key Learnings:**
- Understanding all 7 primitive types in JavaScript
- Working with objects, arrays, and functions
- Using `typeof` to check data types
- Important quirks: `typeof null` returns "object"

---

### [Day 3: Expressions & Conditionals](day3/)
**Topics Covered:**
- Comparisons with `if/else` and ternary operators
- `switch` statements, grouped cases, and nested switches
- Logical operators `&&`, `||`, `!`
- Practical checks: max value, grades, discounts, even/odd, sign, leap year, month/day lookup

**Files:**
- [script.js](day3/script.js) - Conditional logic examples
- [day3_notes.md](day3/day3_notes.md) - Summary notes

**Key Learnings:**
- Choose between `if/else`, ternary, and `switch` for control flow
- Prevent fallthrough with `break` and group cases for shared outcomes
- Combine logical operators to build concise conditions

---

### [Day 4: Loops and Functions](day4/)
**Topics Covered:**
- Loop types: `for`, `while`, `do...while`, `for...in`, `for...of`
- Function declaration, expression, and arrow functions
- Parameters and return values
- Combining loops and functions with practical examples
- Prime checking, array operations, string manipulation

**Files:**
- [script.js](day4/script.js) - Loop and function examples
- [day4_notes.md](day4/day4_notes.md) - Comprehensive learning guide

**Key Learnings:**
- Choose the right loop type for different scenarios
- Write reusable functions with meaningful names
- Use arrow functions for concise syntax
- Master common patterns: accumulator, filtering, transformation
- Understand function scope and return values

---

### [Day 5: JavaScript Strings](day5/)
**Topics Covered:**
- Escape sequences (\n, \t, \', \", \\, \r, \b, \f)
- String properties and methods
- String manipulation (toUpperCase, toLowerCase, trim, replace, split, slice, substring)
- Character access (charAt, bracket notation)
- String concatenation (traditional and template literals)
- String iteration with for...of loops
- String comparison operators
- String immutability concept

**Files:**
- [script.js](day5/script.js) - String manipulation examples
- [day5_notes.md](day5/day5_notes.md) - Comprehensive strings guide

**Key Learnings:**
- Strings are immutable - modifications create new strings
- Template literals provide a modern way to concatenate strings
- JavaScript offers numerous built-in methods for string manipulation
- Understanding escape sequences for special characters
- Strings can be compared using standard comparison operators

---

### [Day 6: JavaScript Arrays](day6/)
**Topics Covered:**
- Array creation (literal and constructor)
- Array properties (length)
- Adding/removing elements (push, pop, shift, unshift)
- Finding elements (indexOf, includes, find)
- Modifying arrays (splice, slice, delete)
- Combining arrays (concat, spread operator)
- Converting arrays (toString, join, split)
- Sorting and reversing arrays
- Array iteration methods (forEach, map, filter, reduce)
- Multidimensional arrays
- Array destructuring and copying
- Creating arrays with Array.from()

**Files:**
- [script.js](day6/script.js) - Array manipulation examples
- [day6_notes.md](day6/day6_notes.md) - Comprehensive arrays guide

**Key Learnings:**
- Arrays are essential data structures for storing collections
- Methods like push, pop, splice modify the original array
- Map, filter, and reduce create new arrays without modifying the original
- Spread operator provides a modern way to copy and combine arrays
- Understanding the difference between shallow and deep copies
- Iteration methods are fundamental for processing array data

---

### [Day 7: JavaScript in the Browser & Arrays](day7/)
**Topics Covered:**
- JavaScript in the browser and the DOM
- Using the `<script>` tag (inline and external)
- Console object methods for debugging
- User interaction: `alert`, `prompt`, and `confirm`
- The `window` object and common properties

**Files:**
- [script.js](day7/script.js) - Browser-focused examples
- [day7_notes.md](day7/day7_notes.md) - Detailed notes

**Key Learnings:**
- How JavaScript runs in the browser and interacts with pages
- Best practices for loading scripts in HTML
- Using console methods to debug effectively
- Capturing user input with built-in dialog methods
- Accessing browser information via the `window` object

---

### [Day 8: DOM (Document Object Model) Basics](day8/)
**Topics Covered:**
- Window and Document objects
- Accessing document properties (head, body, title)
- DOM tree navigation (children, childNodes, parent, siblings)
- Node properties (nodeType, nodeValue, nodeName)
- Searching the DOM: getElementById, getElementsByClassName, getElementsByTagName
- Modern selectors: querySelector and querySelectorAll
- HTMLCollection vs NodeList

**Files:**
- [script.js](day8/script.js) - DOM manipulation examples
- [day8_notes.md](day8/day8_notes.md) - Comprehensive DOM guide
- [index.html](day8/index.html) - HTML file for DOM practice

**Key Learnings:**
- Understanding the window and document objects in the browser
- Navigating the DOM tree using parent, children, and sibling properties
- Different methods to select elements from the DOM
- Differences between live collections (HTMLCollection) and static collections (NodeList)
- querySelector/querySelectorAll provide flexible CSS-based selection
- Understanding node types and properties for DOM manipulation

---

## 🚀 How to Use This Repository

### Prerequisites
- Node.js installed on your system
- A code editor (VS Code recommended)
- Basic understanding of programming concepts

### Running the Code

1. **Clone the repository:**
   ```bash
   git clone https://github.com/puloksingha/javascriptCourse.git
   cd javascriptCourse
   ```

2. **Run individual day scripts:**
   ```bash
   # Day 1
   node day1/script.js
   
   # Day 2
   node day2/script.js

   # Day 3
   node day3/script.js
   
   # Day 4
   node day4/script.js
   
   # Day 5
   node day5/script.js
   
   # Day 6
   node day6/script.js

   # Day 7
   node day7/script.js
   
   # Day 8 (requires browser)
   # Open day8/index.html in a browser
   ```

3. **Read the notes:**
   - Each day folder contains a detailed notes file
   - Review the notes before and after running the code
   - Practice with the exercises provided

## 📖 Learning Path

1. Start with Day 1 to understand the basics
2. Run the code examples and observe the output
3. Read the corresponding notes file
4. Complete the practice exercises
5. Move to the next day when comfortable

## 🎯 Learning Objectives

By completing this course, you will:
- ✅ Understand JavaScript fundamentals
- ✅ Master variables and data types
- ✅ Write clean, commented code
- ✅ Use the console for debugging
- ✅ Build a strong foundation for advanced topics

## 📝 Course Progress

- [x] Day 1: JavaScript Basics
- [x] Day 2: Data Types
- [x] Day 3: Expressions & Conditionals
- [x] Day 4: Loops and Functions
- [x] Day 5: JavaScript Strings
- [x] Day 6: JavaScript Arrays
- [x] Day 7: JavaScript in the Browser & Arrays
- [x] Day 8: DOM (Document Object Model) Basics
- [ ] Day 9: Coming Soon...

## 🔗 Additional Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Node.js Documentation](https://nodejs.org/docs/)

## 👨‍💻 Author

**Pulok Singha**
- GitHub: [@puloksingha](https://github.com/puloksingha)
- LinkedIn: [Pulok Singha](https://www.linkedin.com/in/pulok-singha)
- Repository: [javascriptCourse](https://github.com/puloksingha/javascriptCourse)

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Coding! Keep Learning JavaScript! 🚀**
