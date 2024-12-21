const questions = [
    {
        Question: 'Which is the largest animal in the world?',
        Answers: [
            { text: "shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        Question: 'Which is the smallest country in the world?',
        Answers: [
            { text: "Vatican city", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false }
        ]
    },
    {
        Question: 'Which is the largest desert in the world?',
        Answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },
    {
        Question: 'Which is the smallest continent in the world?',
        Answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    }
];

const questionelement = document.getElementById("ques");
const answerbutton = document.getElementById("answer");
const nextbutton = document.getElementById("next");

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    Score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentquestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNo + ". " + currentquestion.Question;

    currentquestion.Answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectbutton = e.target;
    const isCorrect = selectbutton.dataset.correct === "true";
    if (isCorrect) {
        selectbutton.classList.add("correct");
        Score++;
    } else {
        selectbutton.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

nextbutton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        showScore();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionelement.innerHTML = `You scored ${Score} out of ${questions.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
    // nextbutton.removeEventListener("click", handleNextButton);
    nextbutton.addEventListener("click", startQuiz);
}

startQuiz();

function resetState() {
    nextbutton.style.display = "none";
    while (answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
// hjjfhfhjg
//train