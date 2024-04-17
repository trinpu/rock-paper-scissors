// play a round by comparing the player and computer answer
function playRound(playerAnswer, computerAnswer) {

    let playerWins = 0;
    let computerWins = 0;
    let message = "";

    if (playerAnswer === computerAnswer) {
        message = "It's a tie!";
    } else if (playerAnswer === "rock" && computerAnswer === "scissors") {
        message = "You win! Rock beats Scissors!";
        playerWins++;
    } else if (playerAnswer === "rock" && computerAnswer === "paper") {
        message = "You lose! Paper beats Rock!";
        computerWins++;
    } else if (playerAnswer === "paper" && computerAnswer === "rock") {
        message = "You win! Paper beats Rock!";
        playerWins++;
    } else if (playerAnswer === "paper" && computerAnswer === "scissors") {
        message = "You lose! Scissors beats Paper!";
        computerWins++;
    } else if (playerAnswer === "scissors" && computerAnswer === "paper") {
        message = "You win! Scissors beats Paper!";
        playerWins++;
    } else if (playerAnswer === "scissors" && computerAnswer === "rock") {
        message = "You lose! Rock beats Scissors!";
        computerWins++;
    } else {
        message = "Invalid input!";
    }

    return { message, playerWins, computerWins };

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
    document.body.appendChild(resultParagrah);
}

// return the final result of the game
function showGameResult (gameResultMessage) {
    const resultParagrah = document.createElement("p");
    resultParagrah.textContent = `${gameResultMessage}`;
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
        playerScore += roundResult.playerWins;
        computerScore += roundResult.computerWins;

        showRoundResult(roundResult.message);
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
