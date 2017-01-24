(function(){
	var Question = function(question, choices, answer){
		this.question = question;
		this.choices = choices;
		this.answer = answer;
	}

	var one = new Question("What is the best programming language in the world?", {0: "JavaScript", 1: "Ruby", 2: "Python"}, 0);
	var two = new Question("What does the acronymn IIFE stand for?", {0: "I\'m In Fudgy Environment", 1: "I\'ll Incubate From Exterior", 2: "Immediately Invoked Function Expression"}, 2);
	var three = new Question("What browser should be removed from the Internet completely?", {0: "Chrome", 1: "Internet Explorer", 2: "Safari"}, 1);
	var questionsArray = [one, two, three];

	Question.prototype.displayQuestion = function(){
		console.log(this.question);
		for(var key in this.choices){
			console.log(key + ". -- " + this.choices[key]);
		}
	}

	Question.prototype.checkUserAnswer = function(ans){
		if(ans === this.answer){
			console.log("-----------------------");
			console.log("Correct!");
			console.log("-----------------------");
		} else {
			console.log("-----------------------");
			console.log("Better luck next time.");
			console.log("-----------------------");
		}
	}

	function nextQuestion(){
		var random = Math.floor((Math.random() * questionsArray.length));
		var currentQuestion = questionsArray[random];
		currentQuestion.displayQuestion();
		var userInput = prompt("Please enter the correct answer to question in the console:");
		if(userInput !== "exit"){
			currentQuestion.checkUserAnswer(parseInt(userInput));
			nextQuestion();
		} else {
			console.log("Thanks for playing!");
		}
	}

	nextQuestion();
})();