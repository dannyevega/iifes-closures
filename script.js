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

// passing the callback to this function is returning the 'score' value from inside the calculateScore function -- need to save that returned value into a variable to use later
// after saving 'score' value into new variable within this method, pass another function to display the score
	Question.prototype.checkUserAnswer = function(ans, callback){
		var scr;
		if(ans === this.answer){
			console.log("-------------------------");
			console.log("Correct!");
			console.log("-------------------------");
			scr = callback(true);
		} else {
			console.log("-------------------------");
			console.log("Better luck next time.");
			console.log("-------------------------");
			scr = callback(false);
		}
		this.displayScore(scr);
	}

	Question.prototype.displayScore = function(score){
		console.log("Your current score is: " + score);
		console.log("-------------------------");
	}

	function nextQuestion(){
		var random = Math.floor((Math.random() * questionsArray.length));
		var currentQuestion = questionsArray[random];
		currentQuestion.displayQuestion();
		var userInput = prompt("Please enter the correct answer to question in the console. Enter 'exit' to quit the game." );
		if(userInput !== "exit"){
			currentQuestion.checkUserAnswer(parseInt(userInput), runningScore);
			nextQuestion();
		} else {
			console.log("-------------------------");
			console.log("Thanks for playing!");
			console.log("-------------------------");
		}
	}

	function calculateScore(){
		var score = 0;
		return function(correct){
			if(correct){
				score++;
			}
			return score;
		}
	}

// return the inner function and save it in a variable to use later
	var runningScore = calculateScore();

	nextQuestion();
})();