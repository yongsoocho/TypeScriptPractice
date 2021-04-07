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

