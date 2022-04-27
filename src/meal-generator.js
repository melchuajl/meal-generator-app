const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('result-btn')
const questionContainer = document.getElementById('question-container')
const questionText = document.getElementById('question')
const optionButtons = document.getElementById('option-buttons')

let shuffledQuestions, currentQuestionIndex, selectedOption

const startGame = () => {
    console.log("Game has started");
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    getNextQuestion()
}

const getNextQuestion = () => {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]); 
    currentQuestionIndex++; 
    // let choice = 
    // return choice
}

const showQuestion = (question) => {
    questionText.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.classList.add('option-btn');
        optionButtons.appendChild(button);
        button.addEventListener('click', selectOption)
    })
}

const resetState = () => {
    nextButton.classList.add('hide');
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild)
    }
}

const selectOption = (event) => {
    nextButton.classList.remove('hide');
    selectedOption = event.target;
    // console.log(selectedButton); 
    selectedOption = true;
    setStatusClass(optionButtons);
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        nextButton.classList.add('hide')
        resultButton.classList.remove('hide')
    }
}

const setStatusClass = (element) => {
    if (element) {
        element.classList.add('selected')
    } else {
        element.classList.add('disabled');
        element.disabled = true;
    }
}

const questions = [
    {
        question: 'Hot or cold?',
        options: [
            { text: 'Hot' },
            { text: 'Cold' }
        ]
    },
    {
        question: 'Asian or Westerm?',
        options: [
            { text: 'Asian' },
            { text: 'Western' }
        ]
    },
    {
        question: `What's your carb of choice?`,
        options: [
            { text: 'Noodles' },
            { text: 'Rice' },
            { text: 'Bread or potatoes' },
            { text: 'None' }
        ]
    },
    {
        question: 'Do you need a vegetarian option?',
        options: [
            { text: 'Yes' },
            { text: 'No' }
        ]
    },
    {
        question: 'Do you feel like something soupy?',
        options: [
            { text: 'Yes' },
            { text: 'No' }
        ]
    },
    {
        question: 'Spicy or non-spicy?',
        options: [
            { text: 'Spicy' },
            { text: 'Non-spicy' }
        ]
    },
    {
        question: `What's your mood today?`,
        options: [
            { text: 'I want to eat healthy' },
            { text: 'I need comfort food' }
        ]
    },
    {
        question: `What's your budget?`,
        options: [
            { text: 'High (>$17)' },
            { text: 'Middle ($8-$17)' },
            { text: 'Low (<$8)' }
        ]
    }
]

