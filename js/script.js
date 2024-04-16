// evaulaute player answer
function determineRoundResult(playerAnswer, computerAnswer) {

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


// player can play a maximum if 5 rounds
// get the players answer
// calculate computers answer
// keep track of score
// return the score of each game to the screen
// return the final score
// prevent players to play again after 5 attempts
