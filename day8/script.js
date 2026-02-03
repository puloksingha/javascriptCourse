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
//accessing elements by ID
const header = document.getElementById("header");
console.log(header);
//changing the text content of the header
header.textContent = "Welcome to the Updated Page!";    
//accessing elements by class name
const items = document.getElementsByClassName("item");
console.log(items);
//changing the background color of the first item
items[0].style.backgroundColor = "lightblue";
//accessing elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
//changing the font size of all paragraphs
for (let p of paragraphs) {
    p.style.fontSize = "18px";
}
//using querySelector to access the first element that matches a CSS selector
const firstItem = document.querySelector(".item");
console.log(firstItem);
//changing the border of the first item
firstItem.style.border = "2px solid red";
//using querySelectorAll to access all elements that match a CSS selector
const allItems = document.querySelectorAll(".item");
console.log(allItems);
//changing the text color of all items
allItems.forEach(item => {
    item.style.color = "green";
});
//creating a new element and adding it to the document
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div added by JavaScript.";
document.body.appendChild(newDiv);  
//removing an element from the document
const footer = document.getElementById("footer");
document.body.removeChild(footer);
console.log("Footer removed from the document.");   
//adding an event listener to a button
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    alert("Button was clicked!");
});
//manipulating styles of the button on hover
myButton.addEventListener("mouseover", function() {
    myButton.style.backgroundColor = "yellow";
}); 
myButton.addEventListener("mouseout", function() {
    myButton.style.backgroundColor = "";
});
//logging the window dimensions
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);
//scrolling the window to the top
window.scrollTo(0, 0);
console.log("Scrolled to the top of the window.");
//accessing and modifying cookies
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
console.log("Cookies:", document.cookie);
//accessing local storage
localStorage.setItem("theme", "dark");
console.log("Local Storage Theme:", localStorage.getItem("theme"));
//accessing session storage
sessionStorage.setItem("sessionID", "123456");
console.log("Session Storage ID:", sessionStorage.getItem("sessionID"));
//navigating to a new URL
//window.location.href = "https://www.example.com"; // Uncomment to test navigation
console.log("Current URL:", window.location.href);
//manipulating history
console.log("History Length:", window.history.length);
//window.history.back(); // Uncomment to go back in history
//window.history.forward(); // Uncomment to go forward in history
//using setTimeout to execute code after a delay
setTimeout(function() {
    console.log("This message is displayed after a 2-second delay.");
}, 2000);
//using setInterval to execute code repeatedly at intervals
let count = 0;
const intervalId = setInterval(function() {
    count++;
    console.log("Interval count:", count);  
    if (count >= 5) {
        clearInterval(intervalId);
        console.log("Interval cleared after 5 counts.");
    }
}, 1000);   
//end of script.js      
