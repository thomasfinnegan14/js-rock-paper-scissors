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


function game()
{
        // call getComputerChoice and set it to computerSelection
        let computerSelection = getComputerChoice();

        const displayText = document.querySelector("#results");

        const roundwin = document.createElement('h2');
        roundwin.textContent = playRound(playerSelection, computerSelection);
        displayText.appendChild(roundwin);

        const playercurrent = document.createElement('h4');
        playercurrent.textContent = "Player Score: " + playerScore;
        displayText.appendChild(playercurrent);

        const compcurrent = document.createElement('h4');
        compcurrent.textContent = "Computer Score: " + computerScore;
        displayText.appendChild(compcurrent);

        if (playerScore >= 5)
        {
            rockbtn.remove();
            paperbtn.remove();
            scissorbtn.remove();
        
            const playerwin = document.createElement('h1');
            playerwin.textContent = "You Win!";
            displayText.appendChild(playerwin);
        }
        else if (computerScore >= 5)
        {
            rockbtn.remove();
            paperbtn.remove();
            scissorbtn.remove();
            
            const compwin = document.createElement('h1');
            compwin.textContent = "You Lose!";
            displayText.appendChild(compwin);
        }
        
}

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorbtn = document.querySelector('#scissors');

    rockbtn.addEventListener("click", function()
    {
        playerSelection = "rock";
        game();
    });
    
    
    paperbtn.addEventListener("click", function()
    {
        playerSelection = "paper";
        game();
    });
    
    
    scissorbtn.addEventListener("click", function()
    {
        playerSelection = "scissors";
        game();
    });
