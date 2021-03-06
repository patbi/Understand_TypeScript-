# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 4: TypeScript and ES6]() 👇

	 
```bash
- TypeScript And ES6 - Introduction


welcome to the next module in this course,
now that we know the types and how to use them, to be able to go further we need to master ES6 + Features now. 
```

 [TypeScript support ES6](http://kangax.github.io/compat-table/es6/)


 ```bash
- TypeScript And ES6 - "Let" And "Const"

Rules for using let and const
let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

//tsc -w

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; Won't work

you see err
```

```bash
- TypeScript And ES6 - Block Scope

// Block scope -> it is the access to our local and global variables manipulated here.

function reset() 
{
	//console.log(variable);
	let variable = null;
	console.log(variable);	
}
reset();
console.log(variable);
```


```bash
 - TypeScript And ES6 - Arrow Functions

 console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
	return number1 + number2;	
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

```


```bash
 - TypeScript And ES6 - Arrow Functions - Variations

 const greet = () => {
	console.log("Hello");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Patrick");
```

```bash
 - TypeScript And ES6 - Functions And Default Parameters

console.log("Default Parameters");
const countdown = (start: number = 10): void => {
	console.log(start);
	while(start > 0) {
		start--;
	}
	console.log("Done!", start);	
};
countdown();
```

```bash
 - TypeScript And ES6 - The Spread Operator

console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));
```


```bash
 - TypeScript And ES6 - The Rest Operator

console.log("REST & SPREAD");
function makeArray(...args: number[]) {
	return args;
}
console.log(makeArray(1, 2, 6));
```


```bash
 - TypeScript And ES6 - Destructuring Arrays
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
```

```bash
 - TypeScript And ES6 - Template Literals
const userName = "Patrick";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);
```


```bash
 - TypeScript And ES6 - Other ES6 Features 👇

```
 [subscribe to our newsletter](https://thenavigo.substack.com/p/coming-soon)

```bash
 - TypeScript And ES6 - Module Exercise: Solution


// Module Exercise

rewrite this JavaScript code with TypeScript


// Exercice 1
var double = function(value) {
	return value * 2;
}
console.log(double(10));

// Exercice 2
var greet = function(name) {
	if (name === undefined) {name = "Patrick";}
	console.log("Hello, " + name);
};
greet();
greet("Anna");

//Exercice 3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));


//Exercice 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

//Exercice 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

//Exercice 6
var scientist = {firstName: "John", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);

```


```bash
 - TypeScript And ES6 - Module Exercise: Solution


// Module Solutions
// Exercice 1 - As Arrow Function
const double = (value: number) => value * 2;
console.log(double(10));

// Exercice 2 - Default Params
const greet = (name = "Max") => {
	console.log("Hello " + name);
};
greet();
greet("Anna");

// Exercice 3 - Spread Operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercice 4 Spread Operator
const newArray = [66, 2];
newArray.push(...numbers);
console.log(newArray);

// Exercice 5 - Destructuring Arrays
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercice 6 - Destructuring Objects
const scientist = {firstName: "John", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
```

	 
```bash
- TypeScript And ES6 - Module Summary

Congratulations we just finished with TypeScript and ES6.
```