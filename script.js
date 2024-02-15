const options = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return options[parseInt(Math.random() * 3)]
}

function playSingleRound(playerSelection, computerSelection) {
    if (typeof playerSelection != "string") {
        return "User input is not a string"
    }
    let userInput = playerSelection.toLowerCase()
    if (!options.find((v) => v == userInput)) {
        return "You have to type \"rock\", \"paper\" or \"scissors\""
    }

    if (userInput == computerSelection) return "It's a Tie"
    if (userInput == "rock" && computerSelection == "paper") return "You Lose! Paper beats Rock"
    if (userInput == "rock" && computerSelection == "scissors") return "You Yin! Rock beats Scissors"
    if (userInput == "paper" && computerSelection == "rock") return "You Yin! Paper beats Rock"
    if (userInput == "paper" && computerSelection == "scissors") return "You Lose! Scissors beats Paper"
    if (userInput == "scissors" && computerSelection == "rock") return "You Lose! Rock beats Scissors"
    if (userInput == "scissors" && computerSelection == "paper") return "You Yin! Scissors beats Paper"
}
