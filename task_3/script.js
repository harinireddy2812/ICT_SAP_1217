// Quiz questions
const quiz = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: 0
    },
    {
        question: "Which HTML tag is used for headings?",
        options: ["<h1> to <h6>", "<p>", "<div>", "<span>"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

// Show question
function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.innerText = q.question;
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].innerText = q.options[i];
        optionBtns[i].disabled = false;
        optionBtns[i].style.backgroundColor = "#222";
    }
    feedbackEl.innerText = "";
    nextBtn.style.display = "none";
}

// Check answer
function checkAnswer(index) {
    const q = quiz[currentQuestion];
    if (index === q.answer) {
        score++;
        optionBtns[index].style.backgroundColor = "green";
        feedbackEl.innerText = "Correct!";
    } else {
        optionBtns[index].style.backgroundColor = "red";
        optionBtns[q.answer].style.backgroundColor = "green";
        feedbackEl.innerText = "Wrong!";
    }
    optionBtns.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "inline-block";
}

// Next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Show final score
function showScore() {
    questionEl.innerText = "Quiz Completed!";
    document.getElementById("options-container").style.display = "none";
    nextBtn.style.display = "none";
    feedbackEl.innerText = `Your Score: ${score} / ${quiz.length}`;
}

// Initialize quiz
showQuestion();
