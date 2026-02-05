# Day 8: DOM (Document Object Model) Basics

## Window and Document Objects

### Window Object
- The `window` object represents the browser window
- It is the global object in the browser environment
- All global variables and functions are properties of the window object
```javascript
console.log(window);
```

### Document Object
- The `document` object represents the HTML document loaded in the browser
- It is a property of the window object
- Provides methods and properties to access and manipulate the HTML content
```javascript
console.log(document);
```

## Accessing Document Properties

### Basic Document Properties
```javascript
console.log(document.head);   // Access the <head> element
console.log(document.body);   // Access the <body> element
console.log(document.title);  // Get the document title
```

### Modifying Document Properties
```javascript
document.title = "New Title Set by JavaScript";
console.log("Updated Title:", document.title);
```

## DOM Tree Navigation

### Children and Child Nodes
- **children**: Returns only element nodes (HTMLCollection)
- **childNodes**: Returns all nodes including text nodes and comments (NodeList)
```javascript
console.log(document.body.children);     // Only element children
console.log(document.body.childNodes);   // All child nodes
```

### Descendant Nodes
```javascript
// Get all descendant elements with a specific tag
console.log(document.body.getElementsByTagName("*")); // All descendants
```

### First and Last Child
```javascript
console.log(document.body.firstChild);  // First child node
console.log(document.body.lastChild);   // Last child node
```

### Parent Node
```javascript
console.log(document.body.parentNode);  // Gets the parent (<html>)
```

### Sibling Navigation
```javascript
console.log(document.body.nextSibling);      // Next sibling node
console.log(document.body.previousSibling);  // Previous sibling node
```

## Node Properties

### Node Type
- Returns a number representing the node type
- Element nodes: 1
- Text nodes: 3
- Comment nodes: 8
```javascript
console.log(document.body.nodeType);  // Returns 1 for element
```

### Node Value
- Contains the value of a node
- For element nodes, it's usually `null`
- For text nodes, it contains the text content
```javascript
console.log(document.body.nodeValue);  // null for element nodes
```

### Node Name
- Returns the name of the node
- For element nodes, returns the tag name in uppercase
```javascript
console.log(document.body.nodeName);  // Returns "BODY"
```

## Searching the DOM

### getElementById()
- Selects an element by its ID attribute
- Returns a single element or `null` if not found
- Most efficient way to select a single element
```javascript
const header = document.getElementById("header");
console.log("Element with ID 'header':", header);
```

### getElementsByClassName()
- Selects all elements with a specific class name
- Returns an HTMLCollection (live collection)
- Updates automatically when the DOM changes
```javascript
const items = document.getElementsByClassName("item");
console.log("Elements with class 'item':", items);
```

### getElementsByTagName()
- Selects all elements with a specific tag name
- Returns an HTMLCollection (live collection)
```javascript
const div = document.getElementsByTagName("div");
console.log("All div elements:", div);
```

### querySelector()
- Uses CSS selector syntax to select elements
- Returns the **first** matching element
- More flexible than the methods above
```javascript
const firstItem = document.querySelector(".item");
console.log("First element with class 'item':", firstItem);
```

### querySelectorAll()
- Uses CSS selector syntax to select elements
- Returns **all** matching elements
- Returns a static NodeList (doesn't update automatically)
```javascript
const allItems = document.querySelectorAll(".item");
console.log("All elements with class 'item':", allItems);
```

## Key Differences to Remember

### HTMLCollection vs NodeList
- **HTMLCollection**: Live collection, only contains elements
- **NodeList**: Can be live or static, can contain any node type

### querySelector vs getElementById
- **querySelector**: More flexible (CSS selectors), slightly slower
- **getElementById**: Faster, but only works with IDs

### querySelector vs querySelectorAll
- **querySelector**: Returns first match or `null`
- **querySelectorAll**: Returns all matches as NodeList (can be empty)

## Summary
Day 8 covered the fundamentals of DOM manipulation:
- Understanding the window and document objects
- Navigating the DOM tree (parent, children, siblings)
- Understanding node properties (type, value, name)
- Different methods to search and select elements in the DOM
- Differences between various selection methods and return types