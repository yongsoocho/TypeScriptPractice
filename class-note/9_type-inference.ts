let a = 10; // a: number

function getB(b = 10) {	// b: number
	let c = 'hi'; // c: string
	return b + c;	// (b?: number): string
}

//

interface Dropdown<T> {
	value: T;
	title: string;
}
const shoppingItem: Dropdown<string> = {
	value: 'abc',
	title: 'hello'
}