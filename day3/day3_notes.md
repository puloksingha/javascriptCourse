# Day 3 Notes: Expressions & Conditionals

## Max values
- `if/else` compares `a` and `b` then prints the larger; ternary one-liner does the same.

```js
let a = 10;
let b = 20;
let max = a > b ? a : b;
console.log(`The maximum value is: ${max}`);
```

## Switch basics
- Map numeric `day` to weekday using `switch`; remember each `case` needs `break` to avoid fallthrough.
- Switch also handles shared outcomes: `apple|cherry|strawberry` all set `color = 'red'`.

```js
let day = 3;
let dayName;
switch (day) {
	case 1: dayName = "Monday"; break;
	case 2: dayName = "Tuesday"; break;
	case 3: dayName = "Wednesday"; break;
	default: dayName = "Invalid day";
}
console.log(`The day is: ${dayName}`);
```

## Chained conditionals
- Score to grade uses `if/else if` ladder (90+ A, 80+ B, 70+ C, 60+ D, else F).
- Discount logic combines membership and purchase amount: `isMember && purchaseAmount > 100` yields highest discount.
- Even/odd check via `number % 2 === 0`.
- Positive/negative/zero check shown in both ladder and ternary styles.

## Logical NOT and ternary nesting
- `!isRaining` guard flips a boolean to run sunny-day message.
- Nested ternary categorizes `age` into Child / Teenager / Adult / Senior in a compact (but less readable) form.

## Nested switches
- Vehicle example nests a `switch` for `vehicleModel` inside a `vehicleType` switch, returning model-specific text for cars vs bikes.

## Leap year rule
- Leap year if divisible by 4 and not by 100, unless also divisible by 400.

```js
let year = 2020;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`${year} is a leap year: ${isLeapYear}`);
```

## Month name lookup
- `switch (month)` maps 1–12 to month names; `default` handles invalid values.
