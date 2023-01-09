/*Write a program to tell if someone is shouting (typing in all caps),
 whispering (typing in all lowercase), 
 or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally. */

// 
const userInput = prompt("Ohanah means family and family means...?");

function toneOfSpeech (userInput) {
    if (userInput === userInput.toUpperCase()) {
    return console.log("User is shouting")
    }

    if (userInput === userInput.toLowerCase()) {
    return console.log("User is whispering")
    }

    if (userInput !== userInput.toUpperCase() && userInput.toLowerCase()) {
    return console.log("User is talking normally")
    }
}


toneOfSpeech(userInput)
