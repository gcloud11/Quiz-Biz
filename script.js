//The array of questions for the quiz game.
var questions = [ 

    {question: "1.) What does HTML stand for?", 
    answers:[ "Hypertext Makeup Language", "Hypertext Markdown Language ", "Hypertext Markup Language", "Hypertype Meaning Language"],
    correctAnswer: "Hypertext Markup Language"},

    {question: "2.) What is the purpose of JavaScript?",
    answers: ["For webpage styling", "For webpage sturcture & markup", "For webpage interaction & functionality", "For displaying static information"],
    correctAnswer: "For webpage interaction & functionality"},

    {question: "3.) A ___ allows users to move from one page to another.",
    answers: {a: "browser", b: "video ", c: "HTML", d: "hyperlink"},
    correctAnswer: "hyperlink"},

    {question: "4.) Which is the proper CSS syntax?",
    answers: {a: "{p:color=pink}", b: "p {color: pink;}", c: "p: {color=pink}", d: "{p;color: pink}"},
    correctAnswer: "p {color: pink;}"}
]


//Elements pulled bt ID from the HTML DOM.
var startButton = document.getElementById("btn-start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var questionP = document.getElementById("question");
var answersDiv = document.getElementById("answer-buttons");
var displayTimer = document.getElementById("timerDisplay");
var displayHighScore = document.getElementById("highScoreDisplay"); 
var endScreen = document.getElementById("end-screen");
var displayResults = document.getElementById("results");
var scoreTracker = 0;
var questionIndex = 0;
var timeLeft = 45;


//Event listner for start button//
startButton.addEventListener("click", startGame);
// timer().style.display = "block";


//Functions//
function startGame() { //code to start timer and gets to 1st question//  
    startScreen.style.display ="none";
    timer();
    nextQuestion();
    // answersButtons();
}


function nextQuestion() {
  
        
        questionP.textContent = questions[questionIndex].question;

        answersDiv.innerHTML = "";
        questions[questionIndex].answers.forEach(function(x) {
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-secondary");
            button.setAttribute("value", questions[questionIndex].correctAnswer);
            button.textContent = x;
            answersDiv.appendChild(button); 
        });

        questionIndex++;
        
        
        //x is a placeholder
    }


//Timer counts down from ? secs & -5 secs when wrong choice// //if this runs out before finish answering, show scores & end of quiz// 
function timer() { 
    
    var gameTimer = setInterval(function() {
        if (timeLeft === 0) {
            clearInterval(gameTimer); 
            quizScreen.style.display ="none";
            endScreen.style.display = "block";
            var scoreText = "You Scored: " + scoreTracker + "/4"
            displayResults.textContent = scoreText
        } else {
            timeLeft--;
            displayTimer.textContent = timeLeft;
        }
    }, 1000);
}

answersDiv.addEventListener("click", function (event) {
    // console.log(event.target.value);
    // answersButtons("hello"); //prevents nesting functions and passes other functions
    // answersButtons("old school");
    answersButtons(event);
});
    

function answersButtons (e) { 
    console.log(e);
    var target = e.target.textContent

    if (questions[questionIndex].correctAnswer === target) {
        console.log("Correct!");
        scoreTracker++;
        console.log(scoreTracker++);
        
        
    }else {
        console.log("Wrong!");
        timeLeft-5
        console.log(timeLeft-5);
        nextQuestion()
    }
    questionIndex++;
    

   
    // var click = document.getElementById(e.id).value;
    // if (click === corrAnswer) {
    //     scoreTracker++;
    // }
    
    // this sets the next question//
    // if correct, set next question//
    // if wrong, set next question && subtract 5 seconds//
    // onclick for each button//
    // button.onclick("click", nextQuestion);

    // if (button.answers.correct === question.answers.correct) 
    //     alert("Correct!");
    // else{
    //     alert("Wrong!");
    // }
    
}


function correctAnswers() {

};


function presentScore() { //alert/show score as "0%, 25%, 75%, or 100%" correct etc//
    // scoreTracker++ 
     
}

function intials() { //promt (input) initials//
}

//save to local drive//
function saveScoreAndInitilas() {};
