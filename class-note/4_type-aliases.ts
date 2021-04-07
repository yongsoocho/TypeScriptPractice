type Person = {
	name: string;
	age: number;
}

interface IPerson = {
	name: string;
	age: number;
}

const yong: IPerson = {
	name: 'yong',
	age: 24
}

const cho: Person = {
	name: 'cho',
	age: 24
}

type MyString = string;
const str: MyString = 'hello';

type Todo = {
	id: string;
	title: string;
	done: boolean;
}
function getTodo(todo: Todo) {
	
}