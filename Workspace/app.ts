// string
let myName = "Max";
// myName = 28;

// number
let myAge = 27;
// myAge = 'Max';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
//myRealAge = "27";

// array and types
let hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
//hobbies = [100];

//you can see error in your console because typeof hobbies is a string. but if i change like this :

let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
console.log(hobbies[2]);

// tuples
let address: [string, number] = ["Superstreet", 99];

//enum
 enum Color {
 	Gray, //0
 	Green, //1
 	Blue //2
 }

 let myColor: Color = Color.Green;
 console.log(myColor);

 You see 1 in your console. because number assign automatically.

 // any
 let car: any = "BWM";
 console.log(car);
 car = { brand: "BWM", series: 3};
 console.log(car);

  You see Object

  // Using Types For A Better Code - Understanding The Created JavaScript Code

  - In order to understand the JavaScript code created, it is important to know beforehand the basics and therefore the types of data to be created and manipulated.


// functions

function returnMyname()
{
	retrun myName;
}
console.log(returnMyname());

You see 'Max'

a character string created at the beginning of this course.

// void
function sayHello(): void 
{
	console.log("Hello");	
}

// argument types
function multiply(value1: number, value2: number): number 
{
	return value1 + value2;	
}

console.log(multiply(2, 10));

// function types

```bash
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply();

-------------function types-------------

let myMultiply: (a: number, b: number) => number;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

You see error type 'void' is not assignable to type 'number'
```

// objects

```bash
let userData: { name: string, age: number } = {
	name: "Max",
	age: 27
};
userData = {};
You see error Type '{}' is not assignable to type '{ name: string; age: number;}'

if you write like this:
userData = {
	a: "Hello",
	b: 25
};

you see error type '{a: string; b: number;}' is 
not assignable to type '{ name: string; age: number;}'
```

// complex object

```bash
let complex: {data: number[], output: (all: boolean) => number[]} = {
	data: [100, 3.85, 15],

	output: function (all: boolean): number[] {
	return this.data;
	}
};
```