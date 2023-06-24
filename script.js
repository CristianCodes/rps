function getComputerChoice() {
  let randNum = Math.round(Math.random() * 2);
  if (randNum === 0) {
    return "Rock";
  } else if (randNum === 1) {
    return "Paper";
  } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  if (playerSelection === computerSelection) {
    return `Tie! You both chose ${playerSelection}.`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beat Paper";
  }
}


