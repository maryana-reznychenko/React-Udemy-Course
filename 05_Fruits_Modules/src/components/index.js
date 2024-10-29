//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//This file should import the fruits and both array helpers.It should then:

import foods from './foods'
import { choice, remove } from './helpers'

//Randomly draw a fruit from the array
let vego = choice(foods);

//Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I'd like one ${vego}, pleace.`)

//Log the message “Here you go: RANDOMFRUIT”
console.log(`Here yo go ${vego}!`)

//Log the message “Delicious! May I have another ?”
console.log('Delicious! May I have another?')


//Remove the fruit from the array of fruits
let remaining = remove(foods, vego);

//Log the message “I’m sorry, we’re all out.We have FRUITSLEFT left.”
console.log(`I'm sorry, we're all out.We have ${remaining.length} vegos left.`);

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =




