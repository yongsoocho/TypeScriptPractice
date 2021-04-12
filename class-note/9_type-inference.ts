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
interface DetailDropdown<K> extends Dropdown<K>{
	description: string;
	tag: K;
}

const shoppingItem: Dropdown<string> = {
	value: 'abc',
	title: 'hello'
}

const detailedItem: DetailDropdown<string> {
	title: 'abc',
	description:'ab',
	value: 'a',
	tag: 'b'
}
const detailedItem2: DetailDropdown<number> {
	title: 'abc',
	description:'ab',
	value: '2',
	tag: '3'
}

//

let arr = [1, 2, 3]	// arr: number[]
let arr2 = [1, 2, true]	// arr: (number | boolean)[]