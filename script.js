const options = ["rock", "paper", "scissors"]
const display = document.querySelectorAll('#display span')
const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const congratsText = document.querySelector("#congrats-text")
const restartButton = document.querySelector("#restart")
const rockBtn = document.querySelector("#rock")
const scissorsBtn = document.querySelector("#scissors")
const paperBtn = document.querySelector("#paper")
let currentPlayerScore = 0
let currentComputerScore = 0

restartButton.addEventListener('click', () => {
    playerScore.textContent = "0"
    computerScore.textContent = "0"
    restartButton.style.display = "none"
    congratsText.textContent = ""
    display.forEach(dis => dis.textContent = "")
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
})

function getComputerChoice() {
    return options[parseInt(Math.random() * 3)]
}

function updateScore(player = 0, computer = 0) {
    currentPlayerScore += player
    currentComputerScore += computer
    playerScore.textContent = currentPlayerScore
    computerScore.textContent = currentComputerScore

    if (currentPlayerScore >= 5) congratsText.textContent = "Congratulation, You Win!"
    if (currentComputerScore >= 5) congratsText.textContent = "It was not this time, give another try!"

    if (currentPlayerScore >= 5 || currentComputerScore >= 5) {
        currentPlayerScore = 0
        currentComputerScore = 0
        restartButton.style.display = "block"
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true
    }
}

function playRound(playerSelection, computerSelection) {
    display[0].textContent = `You played ${playerSelection}!`
    display[1].textContent = `The computer played ${computerSelection}!`

    let userPoint = 0
    let computerPoint = 0

    if (playerSelection == "rock" && computerSelection == "paper") computerPoint = 1
    else if (playerSelection == "rock" && computerSelection == "scissors") userPoint = 1
    else if (playerSelection == "paper" && computerSelection == "rock") userPoint = 1
    else if (playerSelection == "paper" && computerSelection == "scissors") computerPoint = 1
    else if (playerSelection == "scissors" && computerSelection == "paper") userPoint = 1
    else if (playerSelection == "scissors" && computerSelection == "rock") computerPoint = 1

    if (userPoint > computerPoint) {
        display[2].textContent = `Player Won!`
    } else if (userPoint < computerPoint) {
        display[2].textContent = `Computer Won!`
    } else {
        display[2].textContent = `It's a tie, no one will gain points!`
    }
    updateScore(userPoint, computerPoint)
}

const buttonsClickTrigger = (e) => {
    const input = e.target.getAttribute("id")
    playRound(input, getComputerChoice())
}

rockBtn.addEventListener('click', buttonsClickTrigger)
scissorsBtn.addEventListener('click', buttonsClickTrigger)
paperBtn.addEventListener('click', buttonsClickTrigger)
