//variables//
var startButton = document.getElementById("btn-start");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var questionP = document.getElementById("question");
var answersDiv = document.getElementById("answer-buttons");
var displayTimer = document.getElementById("timerDisplay");
var displayScore = document.getElementById("scoreDisplay"); 
var endScreen = document.getElementById("end-screen");
var displayResults = document.getElementById("results");
var scoreTracker = 0;
var quesCount = 0;
var timeLeft = 30;


var questions = [{
    question: "1.) What does HTML stand for?",
    answers:{ 
        a: "Hypertext Makeup Language", 
        b:"Hypertext Markdown Language ", 
        c: "Hypertext Markup Language",
        d: "Hypertype Meaning Language",
    },
    correctAnswer: "Hypertext Markup Language"
},
{
    question: "2.) What is the purpose of JavaScript?",
    answers: {
        a: "For webpage styling",
        b: "For webpage sturcture & markup", 
        c: "For webpage interaction & functionality", 
        d: "For displaying static information",
    },
    correctAnswer: "For webpage interaction & functionality"
    
},
{
    question: "3.) A ___ allows users to move from one page to another.",
    answers: {
        a: "browser",
        b: "video ",
        c: "HTML",
        d: "hyperlink",
    },
    correctAnswer: "hyperlink"
    
},
{
    question: "4.) Which is the proper CSS syntax?",
    answers: {
        a: "{p:color=pink}",
        b: "p {color: pink;}", 
        c: "p: {color=pink}",
        d: "{p;color: pink}",
    },
    correctAnswer: "p {color: pink;}"   
}
]


//add event listner for start button//
startButton.addEventListener("click", startGame);


//functions//
function startGame() { //code to start timer and gets to 1st question//  
    startScreen.style.display ="none";
    quizScreen.setAttribute("class", "quiz");
    timer();
}

function timer() { //counts down from 30 secs && -5 secs when wrong choice// //if this runs out before finish answering, show scores & end of quiz// 
    nextQuestion();
    var gameTimer = setInterval(function() {
        if (timeLeft === 0) {
            clearInterval(gameTimer); 
            quizScreen.style.display ="none";
            endScreen.style.display = "block";
            displayResults
            //add a results function//
            // show results 
        } else {
            timeLeft--;
            displayTimer.textContent = timeLeft;
        }
    }, 1000);
}
function nextQuestion() {
    questionP.textContent = question.question;
    answersDiv.innerHTML = "";
    question.answers.forEach(function(answer) {
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-secondary");
        button.setAttribute("value", answer.correct);
        button.textContent = answer.text;
        answersDiv.appendChild(button);
    });
    questionIndex++;
}



function checkAnswer(e) { 
    var click = document.getElementById(e.id).value;
    if (click === corrAnswer) {
        scoreTracker++;
    }
    
    //this sets the next question//
    //if correct, set next question//
    //if wrong, set next question && subtract 5 seconds//
    //onclick for each button//
    // button.onclick("click", nextQuestion);

    // if (button.answers.correct === question.answers.correct) 
    //     alert("Correct!");
    // else{
    //     alert("Wrong!");
    // }
}
function presentScore() { //alert/show score as "0%, 25%, 75%, or 100%" correct etc//
    scoreTracker++ 
     
}
function intials() { //promt (input) initials//
}

function saveScoreAndInitilas() { //save to local drive//

}

