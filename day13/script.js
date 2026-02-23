console.log("Day 13 -> JavaScript Concepts");
// Exercise 1: Event Loop and Callbacks
console.log("Exercise 1 -> Start");
setTimeout(() => {
    console.log("Exercise 1 -> Timeout callback executed");
}, 1000);
console.log("Exercise 1 -> End");
// Exercise 2: Higher-Order Functions
function higherOrderFunction(callback) {
    console.log("Exercise 2 -> Inside higher-order function");
    callback();
}   
higherOrderFunction(() => {
    console.log("Exercise 2 -> Callback function executed");
});
// Exercise 3: Modules and Import/Export
// Assuming we have a module file named 'module.js' with the following content:
// export function greet(name) {    
//     return `Hello, ${name}!`;
// }
// We can import and use the function as follows:   
// import { greet } from './module.js';
// console.log("Exercise 3 ->", greet("Alice"));
// Exercise 4: Error Handling with Try/Catch
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Exercise 4 -> Caught an error:", error.message);
}
// Exercise 5: Asynchronous Iteration with for-await-of
async function* asyncGenerator() {
    yield "First value";
    yield "Second value";
    yield "Third value";
}
(async () => {
    for await (const value of asyncGenerator()) {
        console.log("Exercise 5 ->", value);
    }
})();

