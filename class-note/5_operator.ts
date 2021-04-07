// union type '|' make allow available both type

function logMessage(value: string | number) {
	if(typeof value === 'number') {	// type gaurd
		value.toLocaleString();
	}
	if(typeof value === 'string') {	// type gaurd
		value.toString();
	}
	throw new TypeError('value must be num or str');
}

logMessage('hello');
logMessage(100);

//

interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function askSomeone(someone: Developer | Person) {
	someone.name
	// someone.skill throw TypeError
	// someone.age	throw TypeError
}

// const test: ㅌ	 & number & boolean => test: never , intersection

function askSomeone2(someone: Developer & Person) {
	someone.name
	someone.skill
	someone.age
}