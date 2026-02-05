// javascript in the browser
//javascript was initially created to make web pages interactive and alive
//javascript runs in the browser and can manipulate the DOM (Document Object Model) to change the content, style, and behavior of web pages 
//javascript can also handle events like clicks, form submissions, and keyboard input to create dynamic user experiences

//script tag
//the <script> tag is used to embed or reference javascript code in an HTML document
//to include javascript in an HTML document, we use the <script> tag
//the <script> tag can be placed in the <head> or <body> section of the HTML document
//it is common practice to place the <script> tag just before the closing </body> tag to ensure that the HTML content loads before the javascript is executed   
//example of embedding javascript code in an HTML document
/*
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
*/
//example of referencing an external javascript file in an HTML document
/*
<!DOCTYPE html>
<html>      
<head>
    <title>My Web Page</title>  
</head>
<body>
    <h1>Hello, World!</h1>
    <script src="script.js"></script>
</body>
</html>
*/
//in this example, the external javascript file "script.js" is referenced using the src attribute of the <script> tag

//note: make sure to create a file named "script.js" in the same directory as your HTML file to see the external script in action
console.log("This is a message from the external JavaScript file!");    
//this line will log a message to the console when the HTML document is loaded in the browser

//console object methods
//the console object provides various methods to log information to the browser's console
//some commonly used console methods include:
//console.log(): used to log general information to the console
//console.error(): used to log error messages to the console
//console.warn(): used to log warning messages to the console
//console.info(): used to log informational messages to the console
//example usage of console methods
console.log("This is a log message.");  
console.error("This is an error message.");  
console.warn("This is a warning message.");  
console.info("This is an informational message.");  
//these lines will log different types of messages to the console when the HTML document is loaded in the browser   
//to view the console output, open the browser's developer tools (usually by pressing F12 or right-clicking on the page and selecting "Inspect") and navigate to the "Console" tab
//the console is a powerful tool for debugging and testing javascript code in the browser
//interation :alert, prompt, confirm
//javascript provides built-in functions to interact with users through dialog boxes
//these functions include alert(), prompt(), and confirm()
//alert(): displays a message to the user in a dialog box with an OK button
alert("This is an alert message!");  
//this line will display an alert dialog box with the specified message when the HTML document is loaded in the browser
//prompt(): displays a dialog box that prompts the user for input
var userInput = prompt("Please enter your name:");  
//this line will display a prompt dialog box asking the user to enter their name and store the input in the variable userInput
//confirm(): displays a dialog box with a message and OK and Cancel buttons
var userConfirmed = confirm("Do you want to proceed?");  
//this line will display a confirm dialog box asking the user if they want to proceed and store the user's response (true for OK, false for Cancel) in the variable userConfirmed
//these dialog boxes can be used to interact with users and gather input or confirmation for actions in a web application
//note: excessive use of alert, prompt, and confirm can disrupt the user experience, so use them judiciously in your web applications
//window object
//the window object represents the browser window and provides various properties and methods to interact with it
//some commonly used properties and methods of the window object include:   
//window.innerWidth and window.innerHeight: return the width and height of the browser window's content area
console.log("Window width:", window.innerWidth);  
console.log("Window height:", window.innerHeight);
//window.location: provides information about the current URL and allows navigation to different URLs
console.log("Current URL:", window.location.href);  
//window.alert(), window.prompt(), window.confirm(): the dialog box functions mentioned earlier are part of the window object
//window.setTimeout() and window.setInterval(): used to schedule functions to be executed after a specified delay or at regular intervals
//example usage of window object methods
window.setTimeout(function() {
    console.log("This message is displayed after a 2-second delay.");
}   , 2000);
//this line will log a message to the console after a 2-second delay when the HTML document is loaded in the browser
//the window object is the global object in a browser environment, so its properties and methods can be accessed directly without the "window." prefix
//for example, you can use alert() instead of window.alert()
//the window object is essential for interacting with the browser and controlling various aspects of the web page's behavior and appearance
//arrays in javascript
//arrays are used to store multiple values in a single variable
//they are ordered collections of elements that can be of any data type, including numbers, strings, objects, and even other arrays
//arrays are created using square brackets [] and elements are separated by commas
let fruits = ['apple', 'banana', 'cherry'];
console.log("Fruits array:", fruits);
//accessing array elements
console.log("First fruit:", fruits[0]); 
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]); 
//modifying array elements
fruits[1] = 'blueberry';
console.log("Modified fruits array:", fruits);
//array properties and methods
console.log("Array length:", fruits.length);
//adding elements to the end of the array
fruits.push('date');    
console.log("Fruits array after push:", fruits);
//removing the last element from the array
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("Fruits array after pop:", fruits);
//adding elements to the beginning of the array
fruits.unshift('avocado');  
console.log("Fruits array after unshift:", fruits);
//removing the first element from the array
let shiftedFruit = fruits.shift();
console.log("Removed fruit:", shiftedFruit);
console.log("Fruits array after shift:", fruits);
//finding the index of an element
let index = fruits.indexOf('cherry');
console.log("Index of cherry:", index); 
//removing elements from the array using splice
fruits.splice(1, 1);    
console.log("Fruits array after splice:", fruits);
//slicing the array to create a new array
let citrusFruits = fruits.slice(0, 2);
console.log("Citrus fruits array:", citrusFruits);
//iterating over the array using forEach
console.log("Iterating over fruits array:");    
fruits.forEach(function(fruit, index) {
    console.log("Index:", index, "Fruit:", fruit);
});
//mapping the array to create a new array
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log("Uppercase fruits array:", upperCaseFruits);
//filtering the array based on a condition
let longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log("Fruits with long names:", longNamedFruits);
//arrays are versatile data structures that allow you to store and manipulate collections of data efficiently in javascript 


