// expressions and conditional statements

let a = 10;
let b = 20;
let max;    
if (a > b) {
    max = a;
} else {
    max = b;
}   
console.log("The maximum value is: " + max);
// Output: The maximum value is: 20

// using ternary operator
let maxTernary = (a > b) ? a : b;
console.log("The maximum value using ternary operator is: " + maxTernary);
// Output: The maximum value using ternary operator is: 20
// switch statement
let day = 3;
let dayName;    
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";    
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6: 
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("The day is: " + dayName);
// Output: The day is: Wednesday
// nested conditional statements
let score = 85;
let grade;
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
}   else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log("The grade is: " + grade);
// Output: The grade is: B
// using logical operators in conditional statements
let isMember = true;
let purchaseAmount = 150;
let discount;
if (isMember && purchaseAmount > 100) {
    discount = 20; 
} else if (isMember) {
    discount = 10; 
} else {
    discount = 0; 
}   
console.log("The discount is: $" + discount);
// Output: The discount is: $20
// using NOT operator
let isRaining = false;
if (!isRaining) {
    console.log("It's a sunny day, let's go outside!");
}
// Output: It's a sunny day, let's go outside!
// using nested ternary operators
let age = 25;
let category = (age < 13) ? 'Child' : (age < 20) ? 'Teenager' : (age < 65) ? 'Adult' : 'Senior';
console.log("The age category is: " + category);
// Output: The age category is: Adult       
// using switch statement with multiple cases
let fruit = 'apple';
let color;
switch (fruit) {    
    case 'apple':
    case 'cherry':
    case 'strawberry':
        color = 'red';
        break;
    case 'banana':
    case 'lemon':
        color = 'yellow';
        break;
    case 'kiwi':
    case 'lime':    
        color = 'green';
        break;
    default:
        color = 'unknown';
}
console.log("The color of the fruit is: " + color);
// Output: The color of the fruit is: red
// using conditional statements to check even or odd
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}
// Output: 7 is an odd number.  
// using nested switch statements
let vehicleType = 'car';
let vehicleModel = 'sedan';
let vehicleInfo;
switch (vehicleType) {
    case 'car':
        switch (vehicleModel) {
            case 'sedan':
                vehicleInfo = 'A sedan car has four doors and a trunk.';
                break;
            case 'suv': 
                vehicleInfo = 'An SUV car is larger and has more cargo space.';
                break;
            default:
                vehicleInfo = 'Unknown car model.';
        }
        break;
    case 'bike':
        switch (vehicleModel) { 
            case 'mountain':
                vehicleInfo = 'A mountain bike is designed for off-road cycling.';
                break;
            case 'road':
                vehicleInfo = 'A road bike is designed for speed on paved roads.';
                break;
            default:
                vehicleInfo = 'Unknown bike model.';
        }
        break;
    default:
        vehicleInfo = 'Unknown vehicle type.';
}
console.log(vehicleInfo);
// Output: A sedan car has four doors and a trunk.
// using conditional statements to determine leap year
let year = 2020;
let isLeapYear;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}
console.log(year + " is a leap year: " + isLeapYear);
// Output: 2020 is a leap year: true    
// using ternary operator to determine leap year
let isLeap = ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) ? true : false;
console.log(year + " is a leap year (using ternary): " + isLeap);
// Output: 2020 is a leap year (using ternary): true    
// using switch statement to determine month name
let month = 4;
let monthName;
switch (month) {
    case 1:
        monthName = "January";  
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5: 
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month";
}
console.log("The month is: " + monthName);
// Output: The month is: April
// using conditional statements to check positive, negative or zero
let num = -5;
let result; 
if (num > 0) {
    result = "Positive number";
} else if (num < 0) {
    result = "Negative number";
} else {
    result = "Zero";
}   
console.log(num + " is a " + result);
// Output: -5 is a Negative number

// using ternary operator to check positive, negative or zero
let resultTernary = (num > 0) ? "Positive number" : (num < 0) ? "Negative number" : "Zero";
console.log(num + " is a " + resultTernary);
// Output: -5 is a Negative number


