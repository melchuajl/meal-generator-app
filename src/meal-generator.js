const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('result-btn')
const randomButton = document.getElementById('random-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainer = document.getElementById('question-container')
const resultContainer = document.getElementById('result-container')
const questionText = document.getElementById('question')
const optionButtons = document.getElementById('option-buttons')

var shuffledQuestions, currentQuestionIndex, userChoice;

const startGame = () => {
    console.log("Game has started");
    startButton.classList.add('hide');
    randomButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    getNextQuestion()
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
    userChoice = event.target.innerText;
    // event.target.classList.add('selected')
    setStatusClass(event.target);
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        nextButton.classList.add('hide')
        resultButton.classList.remove('hide')
    };
    return userChoice
}

const setStatusClass = (element) => {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected')
    } else {
        element.classList.add('selected')
    }
}

const getNextQuestion = () => {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
    console.log(userChoice);
}

const filterFoodOptions = () => {
    filteredFoodAray = foodOptions.filter(option => option.prop.includes(userChoice)); 
    foodOptions = filteredFoodAray; 
    console.log(filteredFoodAray) // just to check that the filter is working
}

const getResult = () => {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide'); 
    resultButton.classList.add('hide');
    let foodNames = filteredFoodAray.name;
    if (filteredFoodAray.length > 0) {
        resultContainer.innerText = foodNames
    } else {
        resultContainer.innerText = 'None of the food options match your selections!';
        randomButton.classList.remove('hide'); 
        randomButton.innerText = 'I give up! Give me something random'
    }
}

const randomOption = () => {
    startButton.classList.add('hide');
    randomButton.classList.add('hide');
    restartButton.classList.remove('hide');
    resultContainer.classList.remove('hide'); 
    let randomIndex = Math.floor(Math.random() * fullFoodOptions.length);
    let randomFood = fullFoodOptions[randomIndex].name; 
    resultContainer.innerText = randomFood
}

const restartGame = () => {
    startButton.classList.remove('hide');
    randomButton.classList.remove('hide');
    randomButton.innerText = 'Give me a random option!'
    restartButton.classList.add('hide');
    resultContainer.classList.add('hide'); 
}

startButton.addEventListener('click', startGame)
randomButton.addEventListener('click', randomOption)
nextButton.addEventListener('click', getNextQuestion)
nextButton.addEventListener('click', filterFoodOptions)
resultButton.addEventListener('click', filterFoodOptions)
resultButton.addEventListener('click', getResult)
restartButton.addEventListener('click', restartGame)

const fullFoodOptions = [
    {
        name: 'Fish soup',
        prop: ['Hot', 'Asian', 'None', 'No', 'Soupy', 'Non-spicy', 'I want to eat healthy', 'Low (<$8)']
    },
    {
        name: 'Nasi Lemak',
        prop: ['Hot', 'Asian', 'Rice', 'No', 'Saucy', 'I need comfort food', 'Low (<$8)']
    }
]

let foodOptions = [
    {
        name: 'Fish soup',
        prop: ['Hot', 'Asian', 'None', 'No', 'Soupy', 'Non-spicy', 'I want to eat healthy', 'Low (<$8)']
    },
    {
        name: 'Nasi Lemak',
        prop: ['Hot', 'Asian', 'Rice', 'No', 'Saucy', 'I need comfort food', 'Low (<$8)']
    }
]

let filteredFoodAray = []

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
        question: `Carb of choice?`,
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
        question: 'Which do you prefer?',
        options: [
            { text: 'Soupy' },
            { text: 'Saucy' }
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