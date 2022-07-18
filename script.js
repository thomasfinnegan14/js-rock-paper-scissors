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

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock")
    {
        if (computerSelection == "rock")
        {
            return "Tie! You both chose rock!"
        }
        else if (computerSelection == "paper")
        {
            return "You Lose! Paper beats rock!"
        }
        else
        {
            return "You Win! Rock beats scissors!"
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            return "You Win! Paper beats rock!"
        }
        else if (computerSelection == "paper")
        {
            return "Tie! You both chose paper!"
        }
        else
        {
            return "You Lose! Scissors beats paper!"
        }
    }
    else
    {
        if (computerSelection == "rock")
        {
            return "You Lose! Rock beats scissors!"
        }
        else if (computerSelection == "paper")
        {
            return "You Win! Scissors beats paper!"
        }
        else
        {
            return "Tie! You both chose scissors!"
        }
    }
}