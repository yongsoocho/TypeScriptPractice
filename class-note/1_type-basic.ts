// ES5-
const str = 'hello';

// TS ES6+
const hi: string = 'hello';
const num: number = 7;
const arr: Array<number> = [1, 2, 3];
const arr2: Array<string> = ['cap', 'thor', 'hulk'];
const item: number[] = [1, 2, 3];

// Tuple
const address: [string, number] = ['gangnam', 10];

// Object
const obj: object = {};
// let person: object = {
// 	name: 'cap',
// 	age: 100
// };
let person: { name: string, age: number } = {
	name: 'thor',
	age: 1000
};

// Boolean
let show: boolean = true;