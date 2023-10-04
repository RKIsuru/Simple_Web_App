const questions = [
    {
        question: "Which is the biggest continent in the world ?",
        answers: [
            {text: "North America", correct: false},
            {text: "Asia", correct: true},
            {text: "Africa", correct: false},
            {text: "Europe", correct: false},
        ]
    },
    {
        question: "Which is the longest river in the world ?",
        answers: [
            {text: "Great Ganga", correct: false},
            {text: "NIle", correct: true},
            {text: "Niger", correct: false},
            {text: "Amazon", correct: false},
        ]
    },
    {
        question: "Which is the largest ocean in the world ?",
        answers: [
            {text: "Indian Pacific", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Atlantic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
        ]
    },
    {
        question: "Which is largest desert in the world ?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {question: "Which is the largest animal in the world ?",
    answers: [
        {text: "Shark", correct: false},
        {text: "Blue whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false},
    ]
    },
    {question: "Which continent is known as Dark Continent ?",
    answers: [
        {text: "Asia", correct: false},
        {text: "South America", correct: false},
        {text: "Africa", correct: true},
        {text: "Australia", correct: false},
    ]
    },
    {question: "Which is the smallest country in the world ?",
    answers: [
        {text: "Sri Lanka", correct: false},
        {text: "Vatican City", correct: true},
        {text: "Bhutan", correct: false},
        {text: "Nepal", correct: false},
    ]
    },
    {question: "Which metal is the lightest metal in world ?",
    answers: [
        {text: "Lithium", correct: true},
        {text: "Zinc", correct: false},
        {text: "Platinum", correct: false},
        {text: "Gold", correct: false},
    ]
    },
    {question: "Which is smallest planet in our solar system ?",
    answers: [
        {text: "Mercury", correct: true},
        {text: "Earth", correct: false},
        {text: "Saturn", correct: false},
        {text: "Mars", correct: false},
    ]
    },
    {question: "The Moon is the natural satellite of which planet ?",
    answers: [
        {text: "Mercury", correct: false},
        {text: "Venus", correct: false},
        {text: "Pluto", correct: false},
        {text: "Earth", correct: true},
    ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored "+score+" out of "+questions.length+" !";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();
