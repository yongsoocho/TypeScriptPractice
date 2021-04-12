interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {
	return {
		name: 'Tony',
		age: 33,
		skill: 'Iron'
	}
}

const tony = introduce(); // introduce(): Developer | Person
console.log(tony.name);

//

// console.log(tony.skill); // occur Error , Because When using union type, you can use only common type EX) name
if((tony as Developer).skill) {
	return (tony as Developer).skill;
}
if((tony as Person).age) {
	return (tony as Person).age;
}


function isDeveloper(target: Developer | Person): target is Developer {
	return (target as Developer).skill !== undefined;
}
if(isDeveloper(tony)) {
	tony.skill
} else {
	tony.age
}