// let & const
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

//tsc -w

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; Won't work



// Block scope -> it is the access to our local and global variables manipulated here.

function reset() 
{
	//console.log(variable);
	let variable = null;
	console.log(variable);	
}
reset();
console.log(variable);


// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
	return number1 + number2;	
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));


// Arrow Functions - Variations
const greet = () => {
	console.log("Hello");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Patrick");


// TypeScript And ES6 - Functions And Default Parameters
console.log("Default Parameters");
const countdown = (start: number = 10): void => {
	console.log(start);
	while(start > 0) {
		start--;
	}
	console.log("Done!", start);	
};
countdown();



// TypeScript And ES6 - The Spread Operator
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));


// TypeScript And ES6 - The Rest Operator
console.log("REST & SPREAD");
function makeArray(...args: number[]) {
	return args;
}
console.log(makeArray(1, 2, 6));



// TypeScript And ES6 - Destructuring Arrays
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// TypeScript And ES6 - Template Literals
const userName = "Patrick";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);


// TypeScript And ES6 - Other ES6 Features.

[subscribe to our newsletter](https://thenavigo.substack.com/p/coming-soon)


// TypeScript And ES6 - Module Exercise: Solution

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

