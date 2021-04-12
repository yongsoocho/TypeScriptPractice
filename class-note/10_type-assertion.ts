// type assertion
const a = 'a';
const b = a as string;

// DOM API , When use Developer better than TS
const div = document.querySelector('div') as HTMLDivElement;
if(div) {
	div.innerText	
}