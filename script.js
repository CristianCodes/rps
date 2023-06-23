function getComputerChoice() {
  let randNum = Math.round(Math.random() * 2);
  if (randNum === 0) {
    return "Rock";
  } else if (randNum === 1) {
    return "Paper";
  } else return "Scissors";
}

console.log(getComputerChoice());