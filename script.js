function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let chosen = options[Math.floor(Math.random() * options.length)];

    return chosen;
}