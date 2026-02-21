// Advanced JavaScript Concepts
console.log("Day 12: Advanced JavaScript Concepts");
// Exercise 1: Closures
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("Exercise 1 -> Counter:", counter());

// Exercise 2: Promises and Async/Await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }
        , 2000);
    });
}
async function getData() {
    const data = await fetchData();
    console.log("Exercise 2 ->", data);
}
getData();

// Exercise 3: Prototypes and Inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
const person1 = new Person("Alice", 25);
person1.greet();

// Exercise 4: Destructuring and Spread Operator
const grades = {
    math: 90,
    science: 85,
    literature: 92
};
const { math, science, literature } = grades;
console.log("Exercise 4 -> Math:", math, "Science:", science, "Literature:", literature);
const newGrades = { ...grades, history: 88 };
console.log("Exercise 4 -> New Grades:", newGrades);

// Exercise 5: Object Manipulation
const shoppingCart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    },
    calculateTotal() {        return this.items.reduce((total, item) => total + item.price, 0);
    }
};
shoppingCart.addItem({ name: "Book", price: 10 });
shoppingCart.addItem({ name: "Pen", price: 2 });
console.log("Exercise 5 -> Cart Items:", shoppingCart.items);
console.log("Exercise 5 -> Total Price:", shoppingCart.calculateTotal());
shoppingCart.removeItem({ name: "Pen", price: 2 });
console.log("Exercise 5 -> Cart Items after removal:", shoppingCart.items); 


