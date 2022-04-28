const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('result-btn')
const randomButton = document.getElementById('random-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainer = document.getElementById('question-container')
const resultContainer = document.getElementById('result-container')
const questionText = document.getElementById('question')
const optionButtons = document.getElementById('option-buttons')
const loadingGIF = document.getElementById('loading')

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
    // resetButtonClass();
    setButtonClass(event.target);
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        nextButton.classList.add('hide')
        resultButton.classList.remove('hide')
    };
    return userChoice
}

const setButtonClass = (element) => {
    // if (element.classList.includes('selected')) {
    //     element.classList.remove('selected')
    // } else {
    element.classList.add('selected')
}
// }

// const resetButtonClass = () => {
//     const indvBtn = Array.from(optionButtons.children).map(e => e);
//     indvBtn.forEach(button => {
//         if (button.classList.includes('selected')) {
//             button.classList.remove('selected')
//         }
//     })
// }

const getNextQuestion = () => {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
    console.log(userChoice)
}

const filterFoodOptions = () => {
    filteredFoodArray = foodOptions.filter(option => option.prop.includes(userChoice));
    foodOptions = filteredFoodArray;
    console.log(filteredFoodArray) // just to check that the filter is working
}

const getResult = () => {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultButton.classList.add('hide');
    loadingGIF.classList.remove('hide')
    let foodNames = filteredFoodArray.map(({ name }) => name).join('\n');
    setTimeout(() => {
        if (filteredFoodArray.length > 0) {
            resultContainer.innerText = foodNames
        } else {
            resultContainer.innerText = 'None of the food options match your selections!';
            randomButton.classList.remove('hide');
            randomButton.innerText = 'I give up! Give me something random'
        };
        restartButton.classList.remove('hide');
        loadingGIF.classList.add('hide')
    }, 3000)
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
    resultContainer.innerText = "";
    resultContainer.classList.add('hide');
    loadingGIF.classList.add('hide')
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
        prop: ['Hot', 'Asian', 'None', 'No', 'Soupy', 'Non-spicy', 'I want to eat healthy', 'Low']
    },
    {
        name: 'Nasi lemak',
        prop: ['Hot', 'Asian', 'Rice', 'No', 'Non-spicy', 'Saucy', 'I need comfort food', 'Low']
    },
    {
        name: 'Mee soto',
        prop: ['Hot', 'Asian', 'Noodles', 'Spicy', 'No', 'Soupy', 'I need comfort food', 'Low']
    },
    {
        name: 'Soup Spoon',
        prop: ['Hot', 'Western', 'Bread or potatoes', 'Yes', 'Soupy', 'Non-spicy', 'I need comfort food', 'Middle']
    },
    {
        name: 'Subway',
        prop: ['Cold', 'Western', 'Bread or potatoes', 'Yes', 'Saucy', 'Non-spicy', 'I want to eat healthy', 'Low']
    },
    {
        name: 'Salad Stop',
        prop: ['Cold', 'Western', 'None', 'Yes', 'Saucy', 'Non-spicy', 'I want to eat healthy', 'High']
    },
    {
        name: 'Chicken chop',
        prop: ['Hot', 'Western', 'Bread or potatoes', 'No', 'Saucy', 'Non-spicy', 'I need comfort food', 'Middle']
    },
    {
        name: 'Poke bowl',
        prop: ['Cold', 'Asian', 'Rice', 'No', 'Saucy', 'Non-spicy', 'I want to eat healthy', 'Middle']
    },
    {
        name: 'Sushi Tei',
        prop: ['Cold', 'Asian', 'Rice', 'No', 'Saucy', 'Non-spicy', 'I want to eat healthy', 'High']
    },
    {
        name: 'Mixed veg rice',
        prop: ['Hot', 'Asian', 'Rice', 'Yes', 'Saucy', 'Non-spicy', 'I need comfort food', 'Low']
    },
    {
        name: 'Minced meat noodle',
        prop: ['Hot', 'Asian', 'Noodles', 'No', 'Saucy', 'Spicy', 'I need comfort food', 'Low']
    },
    {
        name: 'Tom yum goong',
        prop: ['Hot', 'Asian', 'None', 'No', 'Soupy', 'Spicy', 'I need comfort food', 'Low']
    },
    {
        name: 'Wanton mee',
        prop: ['Hot', 'Asian', 'Noodles', 'No', 'Saucy', 'Non-spicy', 'I need comfort food', 'Low']
    },
    {
        name: 'Chicken rice',
        prop: ['Hot', 'Asian', 'Rice', 'No', 'Saucy', 'Non-spicy', 'I need comfort food', 'Low']
    },
    {
        name: 'Popiah',
        prop: ['Hot', 'Asian', 'None', 'Yes', 'Saucy', 'Non-spicy', 'I want to eat healthy', 'Low']
    },
    {
        name: 'Pasta',
        prop: ['Hot', 'Western', 'Noodles', 'Yes', 'Saucy', 'Non-spicy', 'I need comfort food', 'Middle']
    },
    {
        name: `Cold and soupy? I think you're looking for dessert!`,
        prop: ['Cold', 'Western', 'Asian', 'Noodles', 'Rice', 'Bread or potatoes', 'None', 'Yes', 'No', 'Soupy', 'Non-spicy', 'I want to eat healthy', 'I need comfort food', 'Low', 'Middle', 'High']
    }
]

let foodOptions = [...fullFoodOptions]

let filteredFoodArray = []

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
        question: `What's your budget? \n 
        High (>$17) \n
        Middle ($8-$17) \n
        Low (<$8)`,
        options: [
            { text: 'High' },
            { text: 'Middle' },
            { text: 'Low' }
        ]
    }
]