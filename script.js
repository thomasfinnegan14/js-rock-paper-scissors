// function that chooses computer's choice randomly
function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let chosen = options[Math.floor(Math.random() * options.length)];

    return chosen;
}

// prompt user for their choice
let playerSelection = prompt("Please type rock, paper, or scissors", "rock");

// set user input to lowercase
playerSelection = playerSelection.toLowerCase();

// make sure user made valid choice
while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
{
    playerSelection = prompt("Please type rock, paper, or scissors", "rock");
    playerSelection.toLowerCase();
}

// call getComputerChoice and set it to computerSelection
let computerSelection = getComputerChoice();

// function that compares player and computer selections and returns results
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