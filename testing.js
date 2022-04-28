const filteredFoodArray = [
    {
        name: 'Fish soup',
        prop: ['Hot', 'Asian', 'None', 'No', 'Soupy', 'Non-spicy', 'I want to eat healthy', 'Low']
    },
    {
        name: 'Nasi lemak',
        prop: ['Hot', 'Asian', 'Rice', 'No', 'Saucy', 'I need comfort food', 'Low (<$8)']
    }, 
    {
        name: 'Soup Spoon',
        prop: ['Hot', 'Western', 'Bread or potatoes', 'Yes', 'Soupy', 'Non-spicy', 'I need comfort food', 'Middle']
    }
]

let foodNames = filteredFoodArray.map(({name}) => name).join('\n');

console.log(foodNames)
