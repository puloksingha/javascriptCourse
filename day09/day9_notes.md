# Day 9: Asynchronous JavaScript

## Overview
Day 9 covers asynchronous programming in JavaScript, which is essential for handling operations that take time to complete (like API calls, file reads, timers). We explore three main patterns: callbacks, promises, and async/await.

---

## 1. Callbacks

### What are Callbacks?
A callback is a function passed as an argument to another function, to be executed after some operation is completed.

### Callback Syntax
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});
```

### Pros and Cons
- **Pros:** Simple, works well for single operations
- **Cons:** Can lead to "callback hell" with nested callbacks, harder to read

---

## 2. Promises

### What are Promises?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Promise States
- **Pending:** Initial state, operation hasn't completed yet
- **Resolved (Fulfilled):** Operation completed successfully
- **Rejected:** Operation failed

### Promise Syntax
```javascript
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Sample Data";
            resolve(data);  // Success
            // reject("Error message");  // Failure
        }, 1000);
    });
}

fetchDataPromise()
    .then((data) => {
        console.log("Data received with Promise:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

### Promise Methods
- `.then(onFulfilled, onRejected)` - Handle resolved/rejected promise
- `.catch(onRejected)` - Handle errors
- `.finally(callback)` - Execute code regardless of outcome
- `Promise.all()` - Wait for all promises
- `Promise.race()` - First promise wins

### Pros and Cons
- **Pros:** Better error handling, chainable, improves readability
- **Cons:** Still requires `.then()` chains which can be verbose

---

## 3. Async/Await

### What is Async/Await?
A cleaner syntax for working with promises. `async` declares an asynchronous function, and `await` pauses execution until a promise is resolved.

### Async/Await Syntax
```javascript
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log("Data received with Async/Await:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();
```

### Key Points
- `async` function always returns a Promise
- `await` can only be used inside `async` functions
- Use `try/catch` for error handling
- Makes asynchronous code look synchronous

### Pros and Cons
- **Pros:** Cleanest syntax, most readable, easier to debug
- **Cons:** Requires understanding of Promises, `await` pauses execution

---

## 4. Event Loop

### How JavaScript Handles Async Operations
JavaScript is single-threaded but uses the **Event Loop** to handle asynchronous operations.

### Execution Order
```javascript
console.log("Start of script");           // 1. Synchronous - executes immediately
setTimeout(() => {
    console.log("Inside setTimeout");     // 3. Asynchronous - goes to callback queue
}, 0);
console.log("End of script");             // 2. Synchronous - executes before setTimeout
```

**Output:**
```
Start of script
End of script
Inside setTimeout
```

### Event Loop Flow
1. **Call Stack** - Executes synchronous code
2. **Web APIs** - Handle async operations (setTimeout, fetch, etc.)
3. **Callback Queue** - Stores callbacks waiting to execute
4. **Event Loop** - Checks if call stack is empty, then moves callbacks to call stack

---

## Comparison: Callbacks vs Promises vs Async/Await

| Feature | Callbacks | Promises | Async/Await |
|---------|-----------|----------|------------|
| Readability | Poor (nested) | Good | Excellent |
| Error Handling | Try/catch needed | .catch() | Try/catch |
| Chaining | Difficult | Easy | Very Easy |
| Performance | Best | Medium | Medium |
| Debugging | Hard | Medium | Easy |

---

## Best Practices
1. **Use Async/Await** as your default for new code
2. **Avoid Callback Hell** - Use promises or async/await
3. **Always handle errors** with .catch() or try/catch
4. **Understand the Event Loop** - Know why async code executes out of order
5. **Use Promise.all()** when you need to wait for multiple async operations

---

## Summary
- **Callbacks:** Basic but can become messy
- **Promises:** Better structure and error handling
- **Async/Await:** Modern, clean, and most readable approach
- **Event Loop:** Understand how JavaScript executes async code to avoid bugs
