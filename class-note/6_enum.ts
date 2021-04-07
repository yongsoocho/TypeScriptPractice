enum Shoes {
	  Nike = 'nike',
		  Adidas = 'adidas'
	 }
// if Nike = 10 , Adidas will be 11 autometically

const myShoes = Shoes.Nike;
console.log(myShoes);

//
enum Answer {
	  Yes = 'Y',
		  No = 'N'
	 }


function askQuestion(answer: Answer) {
	if(answer === Answer.Yes) {
		console.log('True!');
	}
	if(answer === Answer.No) {
		console.log('False!');
	}
}

askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Y');