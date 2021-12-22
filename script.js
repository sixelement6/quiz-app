const quizData = [
    {
        question: "Qual minha cor preferida?",
        a: "Vermelho",
        b: "Laranja",
        c: "Preto",
        d: "Azul",
        correct: "b",
    },

    {
        question: "Qual modelo do meu carro?",
        a: "Vectra",
        b: "Corsa",
        c: "Celta",
        d: "Civic",
        correct: "c",
    },

    {
        question: "Quantos anos eu tenho?",
        a: "25",
        b: "27",
        c: "31",
        d: "19",
        correct: "b",
    },

    {
        question: "Quantos metros eu tenho?",
        a: "1,92",
        b: "1,89",
        c: "1,57",
        d: "2,10",
        correct: "a",
    },

    {
        question: "Qual lugar eu sonho conhecer?",
        a: "Paris",
        b: "Egito",
        c: "Cancun",
        d: "Chile",
        correct: "c",
    },

    {
        question: "Qual pais eu desejo morar?",
        a: "Estados Unidos",
        b: "Canadá",
        c: "México",
        d: "Panamá",
        correct: "b",
    }

];


const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
    
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};
    
submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {

            if (score == 6) {
                quiz.innerHTML = `<h2>Você teve  
                ${score} Respostas corretas de ${quizData.length}! Acertou todas parabéns!!</h2>
                
                <button onclick="location.reload()">Reiniciar Quiz</button>`
            }
            if (score == 5) {
                quiz.innerHTML = `<h2>Você teve  
                ${score} Respostas corretas de ${quizData.length}! Tudo bem, você me conhece...</h2>
                
                <button onclick="location.reload()">Reiniciar Quiz</button>`
            }
            if (score < 4) {
                quiz.innerHTML = `<h2>Você teve  
                ${score} Respostas corretas de ${quizData.length}! Você ainda não me conhece...</h2>
                
                <button onclick="location.reload()">Reiniciar Quiz</button>`
            }
        }
    }

        
});