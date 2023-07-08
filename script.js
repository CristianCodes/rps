function getComputerChoice() {
  let randNum = Math.round(Math.random() * 2);
  if (randNum === 0) {
    return "Rock";
  } else if (randNum === 1) {
    return "Paper";
  } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  if (Number(rounds.textContent) < 5) {
    if (playerSelection === computerSelection) {
      winner.textContent = `TIE! you both chose ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
      cScore.textContent = `${Number(cScore.textContent) + 1}`;
      winner.textContent = `Round Lost - Computer chose ${computerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
      cScore.textContent = `${Number(cScore.textContent) + 1}`;
      winner.textContent = `Round Lost - Computer chose ${computerSelection}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      cScore.textContent = `${Number(cScore.textContent) + 1}`;
      winner.textContent = `Round Lost - Computer chose ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      pScore.textContent = `${Number(pScore.textContent) + 1}`;
      winner.textContent = `Round Won - Computer chose ${computerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      pScore.textContent = `${Number(pScore.textContent) + 1}`;
      winner.textContent = `Round Won - Computer chose ${computerSelection}`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
      pScore.textContent = `${Number(pScore.textContent) + 1}`;
      winner.textContent = `Round Won - Computer chose ${computerSelection}`;
    }
    rounds.textContent = `${Number(rounds.textContent) + 1}`;
  } else stateWinner();
}

function stateWinner(playerChoice) {
  let player = Number(pScore.textContent);
  let comp = Number(cScore.textContent);
  if (player > comp) {
    winner.textContent = "YOU BEAT THE COMPUTER!";
  } else if (comp > player) {
    winner.textContent = "THE COMPUTER BEAT YOU!";
  } else winner.textContent = "GAME ENDS IN A TIE";
}

// Button Selectors
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

// Score Diplay Selectors
const rounds = document.querySelector("#rounds");
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const winner = document.querySelector("#winner");

rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});
