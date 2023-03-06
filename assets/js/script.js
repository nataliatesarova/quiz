
let rightAnswersCount = 0;
let wrongAnswersCount = 0;
let checkedTheAnswer = false;

//Array incorporating capital city questions and answers.
let questionIndex = 0;
let questions = [
  {
    question: "What is the capital city of Japan?",
    answers: {
      Option1: "Tokyo",
      Option2: "Osaka",
      Option3: "Kyoto",
      Option4: "London",
    },
    rightAnswer: "Tokyo",
  },

  {
    question: "What is the capital city of Estonia?",
    answers: {
      Option1: "Tartu",
      Option2: "Riga",
      Option3: "Tallinn",
      Option4: "Vilnius",
    },
    rightAnswer: "Tallinn",
  },

  {
    question: "What is the capital city of Brazil?",
    answers: {
      Option1: "São Paulo",
      Option2: "Rio de Janeiro",
      Option3: "Brasília",
      Option4: "Buenos Aires",
    },
    rightAnswer: "Brasília",
  },

  {
    question: "What is the capital city of Israel?",
    answers: {
      Option1: "Cairo",
      Option2: "Damascus",
      Option3: "Tel Aviv-Yafo",
      Option4: "Jerusalem",
    },
    rightAnswer: "Jerusalem",
  },

  {
    question: "What is the capital city of Lebanon?",
    answers: {
      Option1: "Tripoli",
      Option2: "Beirut",
      Option3: "Ankara",
      Option4: "Baalbek",
    },
    rightAnswer: "Beirut",
  },

  {
    question: "What is the capital city of The United States of America?",
    answers: {
      Option1: "Los Angeles",
      Option2: "New York City",
      Option3: "Washington, D.C",
      Option4: "Chicago",
    },
    rightAnswer: "Washington, D.C",
  },

  {
    question: "What is the capital city of Jamaica?",
    answers: {
      Option1: "Hamilton",
      Option2: "Havana",
      Option3: "George Town",
      Option4: "Kingston",
    },
    rightAnswer: "Kingston",
  },

  {
    question: "What is the capital city of Greece?",
    answers: {
      Option1: "Patras",
      Option2: "Athens",
      Option3: "Larissa",
      Option4: "Thessaloniki",
    },
    rightAnswer: "Athens",
  },

  {
    question: "What is the capital city of Spain?",
    answers: {
      Option1: "Madrid",
      Option2: "Barcelona",
      Option3: "Seville",
      Option4: "Valencia",
    },
    rightAnswer: "Madrid",
  },

  {
    question: "What is the capital city of India?",
    answers: {
      Option1: "Kolkata",
      Option2: "Mumbai",
      Option3: "Bangalore",
      Option4: "New Delhi",
    },
    rightAnswer: "New Delhi",
  },
];
console.log(questions[9].rightAnswer);

//get elements from the DOM and store their values in variables
document.addEventListener("DOMContentLoaded", function () {
  
  let startButton = document.getElementById("start");
  
  // score and incorrect score
  let score = document.getElementById("score");
  

  // Set the score and incorrect score to 0
  score = 0;
 

  // event listener to start button for quiz start
  startButton.addEventListener("click", startQuiz);
  

  /**
   * start button overlay disappears and quiz appears
   */

  function startQuiz() {
    console.log("start");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("quiz").style.display = "block";
  }
});

function displayQuestion(questionIndex) {
  let question = questions[questionIndex];
  let questionContainer = document.querySelector(".question-container");
  let firstOption = document.querySelector("#first-option-text");
  let secondOption = document.querySelector("#second-option-text");
  let thirdOption = document.querySelector("#third-option-text");
  let fourthOption = document.querySelector("#fourth-option-text");
  let questionNumber = document.querySelector("#question-number");

  questionContainer.innerHTML = question.question;
  firstOption.innerHTML = question.answers.Option1;
  secondOption.innerHTML = question.answers.Option2;
  thirdOption.innerHTML = question.answers.Option3;
  fourthOption.innerHTML = question.answers.Option4;
  questionNumber.innerHTML = `${questionIndex + 1}/${questions.length}`;

  // condition to check if it is the last question
  // display none css for next button
  if (questionIndex == 9) {
    document.getElementById("next-btn").style.display = "none";
  }
  //check answer button
}

displayQuestion(questionIndex);

let nextbtn = document.querySelector("#next-btn");
nextbtn.addEventListener("click", () => {
  if (checkedTheAnswer) {
    //enable check answer button
    enableCheckAnswerButton();
    questionIndex++;
    displayQuestion(questionIndex);

    // remove classes for right or wrong answers
    removeClasses();
  }
});

function removeClasses() {
  let allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    element.classList.remove("right-ans");
    element.classList.remove("wrong-ans");
  });

  // On  clicking the next button, we set the checked property of the radio button to false
  // so that no option will be selected on the next question
  document.getElementById("option1").checked = false;
  document.getElementById("option2").checked = false;
  document.getElementById("option3").checked = false;
  document.getElementById("option4").checked = false;

  checkedTheAnswer = false;
}

let ansbtn = document.querySelector("#answer-btn");
ansbtn.addEventListener("click", () => {
  let correctAnswer = questions[questionIndex].rightAnswer;
  /* 
    if answer is correct, update rightAnswersCount
    else update wrongAnswersCount
    */

  // If no answer is selected and the user clicks on the check answer button,
  // we shouldn't disable that button
  // to fix that, we need to move the disable function inside the if condition

  if (document.getElementById("option1").checked) {
    if (questions[questionIndex].answers.Option1 === correctAnswer) {
      incrementCorrectAnswer();
      let elementToStyle = document.getElementById("first-option-text");
      styleOptionsOnCorrect(elementToStyle);
    } else {
      incrementWrongAnswer();
      let elementToStyle = document.getElementById("first-option-text");
      styleOptionsOnIncorrect(elementToStyle);
    }
    // disable check answer button
    disableCheckAnswerButton();
  } else if (document.getElementById("option2").checked) {
    if (questions[questionIndex].answers.Option2 === correctAnswer) {
      incrementCorrectAnswer();
      let elementToStyle = document.getElementById("second-option-text");
      styleOptionsOnCorrect(elementToStyle);
    } else {
      incrementWrongAnswer();
      let elementToStyle = document.getElementById("second-option-text");
      styleOptionsOnIncorrect(elementToStyle);
    }
    // disable check answer button
    disableCheckAnswerButton();
  } else if (document.getElementById("option3").checked) {
    if (questions[questionIndex].answers.Option3 === correctAnswer) {
      incrementCorrectAnswer();
      let elementToStyle = document.getElementById("third-option-text");
      styleOptionsOnCorrect(elementToStyle);
    } else {
      incrementWrongAnswer();
      let elementToStyle = document.getElementById("third-option-text");
      styleOptionsOnIncorrect(elementToStyle);
    }
    // disable check answer button
    disableCheckAnswerButton();
  } else if (document.getElementById("option4").checked) {
    if (questions[questionIndex].answers.Option4 === correctAnswer) {
      incrementCorrectAnswer();
      let elementToStyle = document.getElementById("fourth-option-text");
      styleOptionsOnCorrect(elementToStyle);
    } else {
      incrementWrongAnswer();
      let elementToStyle = document.getElementById("fourth-option-text");
      styleOptionsOnIncorrect(elementToStyle);
    }
    // disable check answer button
    disableCheckAnswerButton();
  }

  // for last response, make restart display: block css
  if (questionIndex == 9) {
    document.getElementById("restart-btn").style.display = "inline-block";
    // make final score appear
    // make a summary text appear on game over
    let finalScoreSpanElement = document.querySelector("#final-score");
    finalScoreSpanElement.innerHTML = `${rightAnswersCount}`;
    document.getElementById("game-summary").style.display = "inline-block";
    console.log("changing final score");
  } else {
  }
});
//https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp#:~:text=The%20disabled%20property%20sets%20or,reflects%20the%20HTML%20disabled%20attribute.//
function enableCheckAnswerButton() {
  document.getElementById("answer-btn").disabled = false;
}

function disableCheckAnswerButton() {
  document.getElementById("answer-btn").disabled = true;
  checkedTheAnswer = true;
}

function incrementCorrectAnswer() {
  rightAnswersCount++;
  let rightCase = document.querySelector("#score");
  rightCase.innerHTML = rightAnswersCount;
}

function incrementWrongAnswer() {
  wrongAnswersCount++;
  let wrongCase = document.querySelector("#incorrect-score");
  wrongCase.innerHTML = wrongAnswersCount;
}

function styleOptionsOnCorrect(elementToStyle) {
  elementToStyle.classList.add("right-ans");
}

function styleOptionsOnIncorrect(elementToStyle) {
  elementToStyle.classList.add("wrong-ans");
}

//restart the quiz

let restartButton = document.getElementById("restart-btn");
restartButton.addEventListener("click", () => {
  location.reload();
});


