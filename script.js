const options = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return options[parseInt(Math.random() * 3)]
}

console.log("Welcome, type the function playGame() in the console to start playing!")

function playSingleRound(playerSelection, computerSelection) {
    if (typeof playerSelection != "string") {
        return "User input should be a text"
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

function playGame() {
    userScore = 0
    computerScore = 0

    let i = 0
    while (i < 5) {
        let userInp = prompt("Type rock, paper or scissors")
        if (userInp == null) {
            console.log("You must type!")
            continue
        }
        const response = playSingleRound(userInp, getComputerChoice())
        console.log(response)
        switch (response) {
            case "It's a Tie":
                userScore++
                computerScore++
                break
            case "You Lose! Paper beats Rock":
                computerScore++
                break
            case "You Lose! Rock beats Scissors":
                computerScore++
                break
            case "You Lose! Scissors beats Paper":
                computerScore++
                break
            case "You Yin! Paper beats Rock":
                userScore++
                break
            case "You Yin! Rock beats Scissors":
                userScore++
                break
            case "You Yin! Scissors beats Paper":
                userScore++
                break
            default:
                continue
        }
        i++
    }

    console.log("Your score: ", userScore);
    console.log("Computer score: ", computerScore)

    if (userScore > computerScore) {
        console.log("Congratulations, you won!");
    } else if (userScore < computerScore) {
        console.log("The computer won!")
    } else {
        console.log("A tie happened, both you and the computer won!")
    }

}