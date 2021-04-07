// ES6+
// class Person {
// 	constructor(name, age) {
// 		console.log('init');
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// TS
class Person {
	private name: string;	// It can use in class only
	public age: number;
	readonly log: string;	// non-changable 
	
	constructor(name: string, age: number) {
		console.log('init');
		this.name = name;
		this.age = age;
	}
}

const yong = new Person('yong', 24);
console.log(yong);