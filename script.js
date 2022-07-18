function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let chosen = options[Math.floor(Math.random() * options.length)];

    return chosen;
}

let playerSelection = prompt("Please type rock, paper, or scissors", "rock");

playerSelection = playerSelection.toLowerCase();

while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
{
    playerSelection = prompt("Please type rock, paper, or scissors", "rock");
    playerSelection.toLowerCase();
}

let computerSelection = getComputerChoice();