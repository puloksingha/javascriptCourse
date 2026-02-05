//primitive data types in javascript
//1. String
let name = "John Doe"
console.log("Name:", name)
console.log("Type of name:", typeof name)
//2. Number
let age = 25
console.log("Age:", age)
console.log("Type of age:", typeof age)
//3. Boolean    
let isStudent = true
console.log("Is Student:", isStudent)
console.log("Type of isStudent:", typeof isStudent)
//4. Undefined
let address
console.log("Address:", address)
console.log("Type of address:", typeof address)
//5. Null   
let phoneNumber = null
console.log("Phone Number:", phoneNumber)
console.log("Type of phoneNumber:", typeof phoneNumber) // Note: typeof null returns 'object' due to a historical bug in JavaScript 
//6. Symbol
let uniqueId = Symbol("id")
console.log("Unique ID:", uniqueId)
console.log("Type of uniqueId:", typeof uniqueId)
//7. BigInt
let bigNumber = BigInt(9007199254740991)
console.log("Big Number:", bigNumber)
console.log("Type of bigNumber:", typeof bigNumber)
// This script demonstrates the different primitive data types in JavaScript.
//object data type in javascript
//1. Object
let person = {  
    firstName: "Jane",
    lastName: "Doe",
    age: 30
}
console.log("Person Object:", person)
console.log("Type of person:", typeof person)

//2. Array
let colors = ["Red", "Green", "Blue"]
console.log("Colors Array:", colors)
console.log("Type of colors:", typeof colors)   
//3. Function
function greet() {
    return "Hello, World!"
}
console.log("Greet Function Output:", greet())
console.log("Type of greet:", typeof greet)
// This script demonstrates the object data types in JavaScript.


console.log("End of Day 2 Script")
console.log("Happy Coding!")
console.log("Keep Learning JavaScript!")