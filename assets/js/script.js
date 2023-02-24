//Array incorporating capital city questions and answers.
let questionIndex =0;
let questions = [

    {
        question: "What is the capital city of Japan?",
        answers: {
            Option1: "Tokyo",
            Option2: "Osaka",
            Option3: "Kyoto",
            Option4: "London",
        },
        rightAnswer: "1"
    },

    {
        question: "What is the capital city of Estonia?",
        answers: {
            Option1: "Tartu",
            Option2: "Riga",
            Option3: "Tallinn",
            Option4: "Vilnius",
        },
        rightAnswer: "3"
    },

    {
        question: "What is the capital city of Brazil?",
        answers: {
            Option1: "São Paulo",
            Option2: "Rio de Janeiro",
            Option3: "Brasília",
            Option4: "Buenos Aires",
        },
        rightAnswer: "3"
    },

    {
        question: "What is the capital city of Israel?",
        answers: {
            Option1: "Cairo",
            Option2: "Damascus",
            Option3: "Tel Aviv-Yafo",
            Option4: "Jerusalem",
        },
        rightAnswer: "4"
    },

    {
        question: "What is the capital city of Lebanon?",
        answers: {
            Option1: "Tripoli",
            Option2: "Beirut",
            Option3: "Ankara",
            Option4: "Baalbek",
        },
        rightAnswer: "2"
    },

    {
        question: "What is the capital city of The United States of America?",
        answers: {
            Option1: "Los Angeles",
            Option2: "New York City",
            Option3: "Washington, D.C",
            Option4: "Chicago",
        },
        rightAnswer: "3"
    },

    {
        question: "What is the capital city of Jamaica?",
        answers: {
            Option1: "Hamilton",
            Option2: "Havana",
            Option3: "George Town",
            Option4: "Kingston",
        },
        rightAnswer: "4"
    },

    {
        question: "What is the capital city of Greece?",
        answers: {
            Option1: "Patras",
            Option2: "Athens",
            Option3: "Larissa",
            Option4: "Thessaloniki",
        },
        rightAnswer: "2"
    },

    {
        question: "What is the capital city of Spain?",
        answers: {
            Option1: "Madrid",
            Option2: "Barcelona",
            Option3: "Seville",
            Option4: "Valencia",
        },
        rightAnswer: "1"
    },

    {
        question: "What is the capital city of India?",
        answers: {
            Option1: "Kolkata",
            Option2: "Mumbai",
            Option3: "Bangalore",
            Option4: "New Delhi",
        },
        rightAnswer: "4"
    },
];
console.log(questions[9].rightAnswer);

//get elements from the DOM and store their values in variables
document.addEventListener('DOMContentLoaded', function () {
    let overlay = document.getElementById('overlay');
    let startButton = document.getElementById('start');
    let primaryContainer = document.getElementById('primary-container');

    /* question counter 0/10 */
    let questionCounter = document.getElementById('question-number');

    // score and incorrect score 
    let score = document.getElementById('score');
    let incorrectScore = document.getElementById('incorrect-score');
    // questions, answers           
    let question = document.getElementById('quiz');
    let questionsContainerElement = document.getElementById('question-container');
    let choiceButtons = document.getElementById('option');
    let rightAnswer;
    let nextQuestion = document.getElementById('next-btn');


    // Set the score and incorrect score to 0
    score = 0;
    let incorrect = 0;

    let choices = document.getElementsByClassName('option');
    // let nextButton = document.getElementById('next-btn');
    let restartButton = document.getElementsByClassName('restart-btn')[0];
    
    // // event listener to start button for quiz start
    startButton.addEventListener('click', startQuiz);
    // // event listener for next button
    nextButton.addEventListener('click', nextQuestion);
    // //event listener for restart button
    restartButton.addEventListener('click', restartQuiz);


    /**
     * start button overlay disappears and quiz appears 
     */

    function startQuiz() {
        console.log('start')
        document.getElementById("overlay").style.display = "none";
        document.getElementById("quiz").style.display = "block";
    }
    
 })

let questionZone = document.querySelector(".question-zone");



  function displayQuestion(questionIndex) {
    let question = questions[questionIndex];
    // let questionZone = document.querySelector('.question-zone');
    let questionContainer = document.querySelector('.question-container');
    let firstOption = document.querySelector('#first-option-text');
    let secondOption = document.querySelector('#second-option-text');
    let thirdOption = document.querySelector('#third-option-text');
    let fourthOption = document.querySelector('#fourth-option-text');
    let questionNumber = document.querySelector('#question-number');
  
    //  questionZone.innerHTML = `${questionIndex + 1}`;
     questionContainer.innerHTML = question.question;
     firstOption.innerHTML = question.answers.Option1;
     secondOption.innerHTML = question.answers.Option2;
     thirdOption.innerHTML = question.answers.Option3;
     fourthOption.innerHTML = question.answers.Option4;
     questionNumber.innerHTML = `${questionIndex + 1}/${questions.length}`;
  }

  displayQuestion(questionIndex);

let nextbtn = document.querySelector('#next-btn');
nextbtn.addEventListener('click', () => {
    questionIndex++;
    displayQuestion(questionIndex);
});


// function checkAnswer() {
//     if(selectedAnswer === correctAnswer) {
//         userAnswer.classList.add('correct');
//         incrementScore();
//     } else {
//         userAnswer.classList.add('incorrect');
//         incrementWrongAnswer();
//     }
//   }


// function calculateCorrectAnswer(){

// }

// function incrementScore(){

// }

// function incrementWrongAnswer(){

// }

// function restartQuiz(){

// }

// function timer (){

// }