// play a round by comparing the player and computer answer
function playRound(playerAnswer, computerAnswer) {

    let playerResult = 0;
    let computerResult = 0;
    let outcome = "";

    if (playerAnswer === computerAnswer) {
        outcome = "It's a tie!";
    } else if (playerAnswer === "rock" && computerAnswer === "scissors") {
        outcome = "You win! Rock beats Scissors!";
        playerResult++;
    } else if (playerAnswer === "rock" && computerAnswer === "paper") {
        outcome = "You lose! Paper beats Rock!";
        computerResult++;
    } else if (playerAnswer === "paper" && computerAnswer === "rock") {
        outcome = "You win! Paper beats Rock!";
        playerResult++;
    } else if (playerAnswer === "paper" && computerAnswer === "scissors") {
        outcome = "You lose! Scissors beats Paper!";
        computerResult++;
    } else if (playerAnswer === "scissors" && computerAnswer === "paper") {
        outcome = "You win! Scissors beats Paper!";
        playerResult++;
    } else if (playerAnswer === "scissors" && computerAnswer === "rock") {
        outcome = "You lose! Rock beats Scissors!";
        computerResult++;
    } else {
        outcome = "Invalid input!";
    }

    return { outcome, playerResult, computerResult };

}

// calculate computers answer
function getComputerAnswer () {
    let possibleAnswers = ["rock", "paper", "scissors"];
    let computerAnswer = Math.floor(Math.random() * possibleAnswers.length);
    computerAnswer = possibleAnswers[computerAnswer];
    return computerAnswer
}


// get the players answer
function getPlayerAnswer() {
    let playerAnswer = document.getElementById("playerAnswer").value;
    playerAnswer = playerAnswer.trim().toLowerCase();
    return playerAnswer;
}

// determine the winner of the game
function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `You win the game ${playerScore}:${computerScore}!`;
    } else if (playerScore < computerScore) {
        return `You lost. The computer won the game ${playerScore}:${computerScore} :(`;
    } else {
        return `It's a ${playerScore}:${computerScore} tie!`;
    }
}

// return the score of each game to the screen
function showRoundResult (resultMessage) {
    const resultParagrah = document.createElement("p");
    resultParagrah.textContent = `${resultMessage}`;
    document.getElementById("game-container").appendChild(resultParagrah);
}

// return the final result of the game
function showGameResult (gameResultMessage) {
    const resultParagrah = document.createElement("p");
    resultParagrah.innerHTML = `<strong>${gameResultMessage}</strong>`;
    document.body.appendChild(resultParagrah);
}


// Core game logic
let numberOfGames = 0;
let playerScore = 0;
let computerScore = 0;

document.getElementById("submitAnswer").addEventListener("click", function () {

    if (numberOfGames < 5) {
        let playerAnswer = getPlayerAnswer();
        let computerAnswer = getComputerAnswer();
        let roundResult = playRound(playerAnswer, computerAnswer);

        // keep track and update the score
        playerScore += roundResult.playerResult;
        computerScore += roundResult.computerResult;

        showRoundResult(roundResult.outcome);
        numberOfGames++;

        if (numberOfGames === 5) {
            let gameResult = determineWinner(playerScore, computerScore);
            showGameResult(gameResult);
        }

    } else {
        // prevent players to play again after 5 attempts
        alert("You have played 5 games already. Please refresh the page to play again.");
    }

});
