# WE COVER

*Understanding TypeScript Tutorial *

# Table of Contents


1. [Module 9: Behind the Scenes with Decorators]() 👇

	 
```bash
 - Introduction

Welcome to the Behind the Scenes with Decorators.
```


```bash
- Creating A Class Decorator 

function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class Person {
	constructor() {
		console.log("Hi");
	}
}

run tsc 
```


```bash
- Decorator Factories

function logging(value: boolean) {
	return value ? logged : null;
}

@logging(true)
class Car {
	
}

run tsc 
```


```bash
- Creating A Useful Decorator : Advanced

function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

@printable
class Plant {
	name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();

run tsc 
```


```bash
- Using Multiple Decorators

function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

@logging(true)
@printable
class Plant {
	name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();

run tsc 
```


```bash
- Method Decorators

function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	}
}


class Project {
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false)
	calcBudget() {
		console.log(1000000000000000000);
	}
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
	console.log(1000000000000000000000000000);
};
project.calcBudget();


run tsc 
```