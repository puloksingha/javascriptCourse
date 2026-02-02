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


