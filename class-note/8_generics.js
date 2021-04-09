// function logText(text) {
// 	console.log(text);
// 	return text;
// }
// logText(10);
// logText(true);
// logText('hi');
function logText(text) {
    console.log(text);
    return text;
}
logText(24); //	logText<string>(text: string): string
var str = logText('hi'); //	logText<"hi">(text: "hi"): "hi" , text type define when function called
str.split('');
//
function logValue(value) {
    console.log(value);
    return value;
}
var a = logValue('abc');
// a.split('') // Throw Error - return error
logValue(24);
var obj = {
    value: 10,
    selected: true
};
function logTextLength(text) {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength(['hi', 'abc']);
function logTextLength2(text) {
    console.log(text.length);
    return text;
}
console.log('===');
logTextLength2('abc');
logTextLength2('12345');
logTextLength2({ length: 10 });
function getShoppingItemOption(itemOption) {
    console.log(itemOption);
    return itemOption;
}
var price = 123;
var prr = 456;
getShoppingItemOption('name');
getShoppingItemOption('price');
