const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};;
let acceptingAwnsers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []; 

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        awnser: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js?",
        choice1: "<script href ='xxx.js'>",
        choice2: "<script name ='xxx.js'>",
        choice3: "<script src = 'xxx.js'>",
        choice4: "<script file = 'xxx.js'>",
        awnser: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1:"msgBox('hello world');",
        choice2:"alertBox('hello world');",
        choice3:"msg('hello world');",
        choice4: "alert('hello world');",
        awnser: 4
    }
];

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS){
        //go to end page
        return window.location.assign('/end.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAwnsers = true;
};

choices.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAwnsers) return;

        acceptingAwnsers = false;
        const selectedChoice = e.target;
        const selectedAwnser = selectedChoice.dataset('number');

        const classToApply = 'incorrect';
        if(selectedAwnser == currentQuestion.awnser){
            classToApply = 'correct';
        };

        selectedChoice.parentElement.classList.add(classToApply);

        getNewQuestion();
    })
})

startGame();;