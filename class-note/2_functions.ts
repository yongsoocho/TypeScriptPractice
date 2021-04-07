function sum(a: number, b: number): number {
	return a + b;
};

// JS allow sum(10, 20, 30, 40..) But, TS is not
// sum(10) will throw the error in TS

function log(a: string, b?: string) {
	return a + b;
};

// log('hi', 'world') is allowed
// log('One') is allowed

