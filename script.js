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
    console.log(`Tie! You both chose ${playerSelection}`);
    return 0;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats Rock");
    return 1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beat Paper");
    return 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("You lose! Rock beats Scissors");
    return 1;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats Scissors");
    return 2;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats Rock");
    return 2;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You win! Scissors beat Paper");
    return 2;
  }
}

function game() {
  let comp = 0;
  let player = 0;
  for (rounds = 0; rounds < 5; rounds++) {
    let playerChoice = prompt("Type in Rock Paper or Scissors");
    let result = playRound(playerChoice, getComputerChoice());
    console.log(result);
    if (result === 1) {
      comp++;
    } else if (result === 2) {
      player++;
    }
    console.log(`Player Score:${player} Computer Score:${comp}`);
  }
  if (player > comp) {
    console.log(
      `You beat the Computer -Final Score- Player Score:${player} Computer Score ${comp}`
    );
  } else if (comp > player) {
    console.log(
      `The Computer beat You -Final Score- Player Score:${player} Computer Score ${comp}`
    );
  } else
    console.log(
      `The game ends in a Tie -Final Score- Player Score:${player} Computer Score ${comp} `
    );
}
