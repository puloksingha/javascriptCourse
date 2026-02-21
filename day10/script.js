console.log("Day 10: JavaScript Objects Practice");

// Exercise 1: Object Creation and Access
const book = {
	title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	pages: 180,
	isRead: false,

	toggleRead() {
		this.isRead = !this.isRead;
	}
};

book.toggleRead();
console.log("Exercise 1 -> isRead:", book.isRead);

// Exercise 2: Object Manipulation
const product = {
	name: "Laptop",
	price: 1000,
	category: "electronics"
};

product.discount = 10;
product.finalPrice = product.price - (product.price * product.discount / 100);

product.applyDiscount = function (discountPercent) {
	this.discount = discountPercent;
	this.finalPrice = this.price - (this.price * this.discount / 100);
};

console.log("Exercise 2 -> finalPrice (10%):", product.finalPrice);
product.applyDiscount(20);
console.log("Exercise 2 -> finalPrice (20%):", product.finalPrice);

// Exercise 3: Looping Through Objects
const grades = {
	math: 85,
	english: 92,
	science: 88,
	history: 90
};

const values = Object.values(grades);
const average = values.reduce((sum, grade) => sum + grade, 0) / values.length;

console.log("Exercise 3 -> average grade:", average);

// Exercise 4: Object Destructuring
const user = {
	id: 1,
	profile: {
		firstName: "John",
		lastName: "Doe",
		address: {
			city: "New York",
			country: "USA"
		}
	}
};

const {
	profile: {
		firstName,
		lastName,
		address: { city }
	}
} = user;

console.log("Exercise 4 ->", firstName, lastName, city);

// Exercise 5: Object Methods
const shoppingCart = {
	items: [],

	addItem(name, price, quantity = 1) {
		this.items.push({ name, price, quantity });
	},

	removeItem(name) {
		this.items = this.items.filter((item) => item.name !== name);
	},

	calculateTotal() {
		return this.items.reduce((total, item) => {
			return total + (item.price * item.quantity);
		}, 0);
	},

	displayCart() {
		this.items.forEach((item) => {
			console.log(`${item.name} x${item.quantity} - $${item.price * item.quantity}`);
		});
		console.log(`Total: $${this.calculateTotal()}`);
	}
};

shoppingCart.addItem("Laptop", 1000, 1);
shoppingCart.addItem("Mouse", 25, 2);
shoppingCart.displayCart();

// Exercise 6: Deep Clone
function deepClone(obj) {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	if (obj instanceof Date) {
		return new Date(obj);
	}

	if (Array.isArray(obj)) {
		return obj.map((item) => deepClone(item));
	}

	const cloned = {};
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			cloned[key] = deepClone(obj[key]);
		}
	}

	return cloned;
}

const original = {
	name: "John",
	age: 30,
	hobbies: ["reading", "gaming"],
	address: {
		city: "NYC",
		zipCode: "10001"
	}
};

const copy = deepClone(original);
copy.address.city = "Boston";

console.log("Exercise 6 -> original city:", original.address.city);
console.log("Exercise 6 -> copied city:", copy.address.city);

