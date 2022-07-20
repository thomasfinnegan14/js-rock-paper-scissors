// function that chooses computer's choice randomly
function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let chosen = options[Math.floor(Math.random() * options.length)];

    return chosen;
}

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";

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
            computerScore += 1;
            return "You Lose! Paper beats rock!"
        }
        else
        {
            playerScore += 1;
            return "You Win! Rock beats scissors!"
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            playerScore += 1;
            return "You Win! Paper beats rock!"
        }
        else if (computerSelection == "paper")
        {
            return "Tie! You both chose paper!"
        }
        else
        {
            computerScore += 1;
            return "You Lose! Scissors beats paper!"
        }
    }
    else
    {
        if (computerSelection == "rock")
        {
            computerScore += 1;
            return "You Lose! Rock beats scissors!"
        }
        else if (computerSelection == "paper")
        {
            playerScore += 1;
            return "You Win! Scissors beats paper!"
        }
        else
        {
            return "Tie! You both chose scissors!"
        }
    }
}

// function that plays 5 rounds
function game()
{
        // call getComputerChoice and set it to computerSelection
        let computerSelection = getComputerChoice();

        // call playRound function and log it
        console.log(playRound(playerSelection, computerSelection));

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);


    if (playerScore > computerScore)
    {
        console.log("You Win!");
    }
    else if (computerScore > playerScore)
    {
        console.log("You Lose!");
    }
    else 
    {
        console.log("It's a tie!");
    }
}

const rockbtn = document.querySelector('#rock');

rockbtn.addEventListener("click", function()
{
    playerSelection = "rock";
    game();
});

const paperbtn = document.querySelector('#paper');

paperbtn.addEventListener("click", function()
{
    playerSelection = "paper";
    game();
});

const scissorbtn = document.querySelector('#scissors');

scissorbtn.addEventListener("click", function()
{
    playerSelection = "scissors";
    game();
});