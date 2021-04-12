interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
}

let developer: Developer;
let personL: Person;

// developer = person; // Error occur
person = developer;

class Human {
	name: string;
	skill: string;
}

developer = new Human();

//

const add = function(a: number): number {
	return a;
}

const sum = function(a: number, b: number): number {
	return a + b;
}

// add = sum // Error occur

sum = add;

//

interface Empty<T> {

}
const emp1: Empty<string>;
const emp2: Empty<number>;
emp1 = emp2;
emp2 = emp1;

interface NotEmpty<T> {
	data: T;
}
const notemp1: NotEmpty<string>;
const notemp2: NotEmpty<number>;
// notemp1 = notemp2;	// Error Occur
// notemp2 = notemp1;	// Error Occur