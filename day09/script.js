console.log("Script loaded successfully.");

function greet(name) {
    return `Hello, ${name}!`;
}   
console.log(greet("World"));

// callbacks, promises, async/await

// Callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);   
}

fetchData((data) => {
    console.log("Data received:", data);
});

// Promise example
function fetchDataPromise() {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            const data = "Sample Data";
            resolve(data);
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

// Async/Await example
async function fetchDataAsync() {
    try {       
        const data = await fetchDataPromise();
        console.log("Data received with Async/Await:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAsync();   

// Event Loop example
console.log("Start of script");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);
console.log("End of script");

