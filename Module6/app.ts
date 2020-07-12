import { PI, calculateCircumference } from "./math/circle"; 

//   /// <reference path="circleMath.ts" />
//   /// <reference path="rectangleMath.ts" />

// import CircleMath = MyMath.Circle;

// Namespaces and Modules - An Introduction To Namespaces

//namespace MyMath {
//	const PI = 3.14;
//
//	export function calculateCircumference(diameter: number) {
//		return diameter * PI;
//	}
//
//	export function calculateRectangle(width: number, length: number) {
//		return width * length;
//	}
//}

// const PI = 2.99;

// console.log(MyMath.calculateRectangle(10,20));
// console.log(CircleMath.calculateCircumference(3));
// console.log(PI);

// run tsc


// - Namespaces And Multiple Files

//let's create two files like this

// touch circleMath.ts rectangleMath.ts

//and put in each respective function.

// run tsc, before insert in index.html  <script src="circleMath.js"></script> & <script src="rectangleMath.js"></script>

// Or run tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts


// - Namespace Imports

// add two references like this /// <reference path="circleMath.ts" /> /// <reference path="rectangleMath.ts" />

// and run tsc app.ts --outFile app.js


// - More On Namespaces
//create namespace Circle like this in circleMath.ts
// Next import CircleMath = MyMath.Circle; in app.ts
// Next change console.log() like this -> console.log(CircleMath.calculateCircumference(3));
// Next run run tsc app.ts --outFile app.js


// Limitations Of Namespaces
// namespaces will hit their end-of-life soon, basically they solved a problem that now can be solved with classical ES6 syntax. Even if the import/export keyword is not working in all browsers out of the box, that’ the road they are covering so it’s just a matter of time and we’ll get rid of any other solution we had to manage complexity.


// Modules
// let's create the math directory with these two (circle, rectangle).ts  inside.
console.log(PI);
console.log(calculateCircumference(10));
// run tsc You see "Uncaught ReferenceError: require is not defined"
// console.log()


// Loading Modules 👇

// [Learn more about module loader](https://github.com/systemjs/systemjs) 

// install systemjs like this ->  npm i systemjs --save

// in our index.html add these two scripts js

// <script src="node_modules/systemjs/dist/system.js"></script>
// <script>
	// set our baseURL reference path
	//SystemJS.config({
	//	baseURL: '/',
	//	defaultJSExtensions: true
//	});
//	System.import('app.js');
//</script>

// and run tsc