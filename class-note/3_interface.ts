interface User {
	age: number;
	name: string;
}

const yong: User = {
	age: 24,
	name: 'yongsoo'
}

function getUser(user: User) {
	console.log(user);
}
const capt = {
	name:'captain',
	age:100
}

getUser(capt);

//

interface sumFunc {
	(a: number, b: number): number; 
}

// const sum: sumFunc;
const sum = function(a: number, b: number): number {
	return a + b;
}

//

interface StringArray {
	[index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 'a' , arr[1] = 'b' , arr[2] = 'c'

//

interface StringRegexArray {
	[key: string]: RegExp;
}

const obj: StringRegexArray = {
	css: /\.css$/,
	jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value) {
	
})

//

interface Person {
	name: string;
	age: number;
}

// interface Developer {
// 	name: string;
// 	age: number;
// 	lang: string;
// }

interface Developer extends Person {
	lang: string;
}

const thor: Developer = {
	lang: 'ts',
	name: 'thor',
	age: 10000
}