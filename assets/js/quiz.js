const questionElement = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');
const nextButton = document.getElementById('next-btn');

const questions = [
    {
        question: 'Os planetas mais próximos do Sol apresentam uma constituição formada por diversas rochas e minerais. Portanto, são chamados de planetas rochosos:',
        answers: [
            { text: 'Mercúrio, Vênus, Urano e Marte.', correct: false },
            { text: 'Mercúrio, Vênus, Saturno e Terra.', correct: true },
            { text: 'Mercúrio, Vênus, Terra e Marte.', correct: false },
            { text: 'Mercúrio, Vênus, Urano e Netuno.', correct: false },
        ]
    },
    {
        question: 'A Terra é um planeta formado por diferentes tipos de rochas, e seus interiores são divididos em três camadas principais. Quais são essas camadas internas da Terra?',
        answers: [
            { text: 'litosfera, manto e núcleo', correct: true },
            { text: 'subsolo, litosfera e núcleo', correct: false },
            { text: 'biosfera, hidrosfera e manto', correct: false },
            { text: 'manto, núcleo e subsolo', correct: false },
        ]
    },
    {
        question: 'Os planetas gasosos são conhecidos pela sua formação constituída por diversos gases, como hidrogênio, hélio e metano. Os planetas gasosos são:',
        answers: [
            { text: 'Júpiter, Saturno, Urano e Netuno', correct: true },
            { text: 'Marte, Saturno, Vênus e Netuno', correct: false },
            { text: 'Júpiter, Terra, Urano e Plutão', correct: false }, 
            { text: 'Mercúrio, Júpiter, Netuno e Terra', correct: false }, 
        ]
    },
    {
        question: 'O movimento de rotação realizado pelo planeta Terra tem como consequência principal a',
        answers: [
            { text: 'Ocorrência das fases da Lua.', correct: false },
            { text: 'Sucessão dos dias e das noites', correct: true },
            { text: 'Definição das temperaturas.', correct: false }, 
            { text: 'Divisão das estações do ano.', correct: false }, 
        ]
    },
    {
        question: 'O planeta Terra realiza vários movimentos, sendo os dois principais o de rotação, realizado em torno de si mesmo, e o movimento realizado em torno do Sol, sendo chamado de',
        answers: [
            { text: 'Transformação.', correct: false },
            { text: 'Movimentação.', correct: false },
            { text: 'Translação.', correct: true }, 
            { text: 'Rotação.', correct: false }, 
        ]
    },
    {
        question: 'O Sistema Solar é composto pelo Sol e pelos planetas que orbitam ao seu redor, Qual é o principal astro do Sistema Solar?',
        answers: [
            { text: 'Terra.', correct: false },
            { text: 'Lua.', correct: false },
            { text: 'Sol.', correct: true }, 
            { text: 'Marte.', correct: false }, 
        ]
    },
    {
        question: 'Qual dessas afirmações é verdadeira sobre o Sol?',
        answers: [
            { text: 'É um planeta.', correct: false },
            { text: 'É um satélide.', correct: false },
            { text: 'É uma estrela.', correct: true }, 
            { text: 'É um asteroide.', correct: false }, 
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Próximo';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectedBtn.classList.add('correct'); 
        score++;
    } else {
        selectedBtn.classList.add('incorrect'); 
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = 'Jogar Novamente';
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore()
    }
}

startQuiz();