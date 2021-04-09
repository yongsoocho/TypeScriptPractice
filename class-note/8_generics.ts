// function logText(text) {
// 	console.log(text);
// 	return text;
// }

// logText(10);
// logText(true);
// logText('hi');

function logText<T>(text: T): T {
	console.log(text);
	return text;
}

logText<number>(24);	//	logText<string>(text: string): string
const str = logText<string>('hi');	//	logText<"hi">(text: "hi"): "hi" , text type define when function called
str.split('')

//

function logValue(value: string | number) {
	console.log(value);
	return value;
}

const a = logValue('abc');
// a.split('') // Throw Error - return error
logValue(24);

//

// interface Dropdown {
// 	value: string;
// 	selected: boolean;
// }

interface Dropdown<T> {
	value: T;
	selected: boolean;
}

const obj: Dropdown<number> = {
	value: 10,
	selected: true
}

function logTextLength<T>(text: T[]): T[] {	// type hint T[]
	console.log(text.length);
	text.forEach(function (text) {
		console.log(text);
	})
	return text;
}
logTextLength<string>(['hi', 'abc']);

interface LengthType {
	length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
	console.log(text.length);
	return text;
}

console.log('===');
logTextLength2('abc');
logTextLength2('12345');
logTextLength2({ length: 10 });
						
//

interface ShoppingItem {
	name: string;
	price: number;
	stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
	console.log(itemOption);
	return itemOption;
}

getShoppingItemOption('name');
getShoppingItemOption('price');