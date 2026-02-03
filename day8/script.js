//window object represents the browser window
console.log(window);
//document object represents the HTML document loaded in the browser
console.log(document);
//accessing elements using document object
console.log(document.head);
console.log(document.body);
console.log(document.title);
//modifying the title of the document
document.title = "New Title Set by JavaScript";
console.log("Updated Title:", document.title);
//children of an element
console.log("Children of body:", document.body.children);
//child nodes of an element
console.log("Child nodes of body:", document.body.childNodes);
//descendant nodes of an element
console.log("Descendant nodes of body:", document.body.getElementsByTagName("*"));
// firstchild, lastchild & childnodes
console.log("First child of body:", document.body.firstChild);
console.log("Last child of body:", document.body.lastChild);
console.log("All child nodes of body:", document.body.childNodes);
//parent node
console.log("Parent of body:", document.body.parentNode);
//sibling nodes
console.log("Next sibling of body:", document.body.nextSibling);
console.log("Previous sibling of body:", document.body.previousSibling);
//node type
console.log("Node type of body:", document.body.nodeType);
//node value
console.log("Node value of body:", document.body.nodeValue); // usually null for element nodes
//node name
console.log("Node name of body:", document.body.nodeName);
//searching the DOM 
//document.getElementById()
const header = document.getElementById("header");
console.log("Element with ID 'header':", header);
//document.getElementsByClassName()
const items = document.getElementsByClassName("item");
console.log("Elements with class 'item':", items);
//document.getElementsByTagName()
const div = document.getElementsByTagName("div");
console.log("All div elements:", div);
//document.querySelector()
const firstItem = document.querySelector(".item");
console.log("First element with class 'item':", firstItem);
//document.querySelectorAll()
const allItems = document.querySelectorAll(".item");
console.log("All elements with class 'item':", allItems);
