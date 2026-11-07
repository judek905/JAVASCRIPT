// JavaScript basics
// Run with Node.js or in a browser's developer console.

// 1. Variables: prefer const; use let when reassignment is needed.
const language = "JavaScript";
let year = 1995;
year += 1;

// var is function-scoped and usually avoided in modern JavaScript.

// 2. Primitive data types
const text = "Hello"; // string
const count = 42; // number (integers and decimals)
const active = true; // boolean
const missing = undefined; // not assigned
const empty = null; // intentional absence of a value
const largeNumber = 9007199254740993n; // bigint
const uniqueId = Symbol("id"); // symbol

// Check a value's type with typeof. (typeof null is "object" for historical reasons.)
console.log(typeof text, typeof count, typeof active);

// 3. Operators and comparisons
const sum = 2 + 3;
const isEqual = count === 42; // strict equality; generally prefer === over ==
const isDifferent = count !== 0;
const isInRange = count > 0 && count < 100;
const label = active ? "enabled" : "disabled"; // conditional (ternary) operator
const displayName = "" || "Guest"; // || uses the right side for any falsy value
const retries = 0 ?? 3; // ?? only uses the right side for null or undefined

// 4. Strings and template literals
const greeting = `Hello, ${language}!`;
console.log(greeting.toUpperCase());
console.log("apples,bananas".split(","));

// 5. Control flow
if (count > 10) {
  console.log("More than ten");
} else {
  console.log("Ten or less");
}

const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  default:
    console.log("Another day");
}

for (let i = 0; i < 3; i += 1) {
  console.log(i);
}

for (const item of ["a", "b"]) {
  console.log(item); // for...of iterates values
}

// 6. Functions
function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const subtract = (a, b) => a - b; // arrow function
const withDefault = (name = "Guest") => `Hi, ${name}`;
const total = (...numbers) => numbers.reduce((acc, number) => acc + number, 0); // rest parameter
console.log(add(2, 3), multiply(2, 3), subtract(5, 2), withDefault(), total(1, 2, 3));

// 7. Arrays
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits[0], fruits.length);

const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
const longFruits = fruits.filter((fruit) => fruit.length > 5);
const foundFruit = fruits.find((fruit) => fruit.startsWith("b"));
const fruitList = fruits.join(", ");
console.log(upperFruits, longFruits, foundFruit, fruitList);

// 8. Objects
const person = {
  name: "Ada",
  age: 36,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(person.name, person["age"], person.greet());
person.city = "London"; // add a property

// Destructuring extracts values; spread makes a shallow copy.
const { name, age } = person;
const personCopy = { ...person, age: age + 1 };
const [firstFruit, secondFruit] = fruits;
const moreFruits = [...fruits, "pear"];
console.log(name, firstFruit, secondFruit, personCopy, moreFruits);

// 9. Sets and maps
const uniqueValues = new Set([1, 1, 2]);
uniqueValues.add(3);
const lookup = new Map([["name", "Ada"]]);
lookup.set("language", language);
console.log(uniqueValues.has(2), lookup.get("name"));

// 10. Classes and inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}
console.log(new Dog("Rex").speak());

// 11. Errors
try {
  if (count < 0) throw new Error("Count cannot be negative");
} catch (error) {
  console.error(error.message);
}

// 12. Promises and async/await
const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function runExample() {
  await wait(10);
  return "Finished waiting";
}

runExample().then(console.log).catch(console.error);

// Fetch is available in browsers and modern Node.js. Always handle failures.
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

// 13. Modules (save these statements in separate module files to use them):
// export const answer = 42;
// import { answer } from "./answer.js";

// 14. Useful reminders
// - JavaScript is case-sensitive; use camelCase for variables and functions.
// - Arrays and objects are reference values; const prevents reassignment, not mutation.
// - Use === for strict comparisons and Number.isNaN(value) to check for NaN.
// - Use JSON.stringify(value) / JSON.parse(text) for JSON serialization and parsing.
// - Browser DOM example: document.querySelector("#app") (browser only).
