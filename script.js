//Create function getComputerChoice that will randomly return text "rock", 
//"paper" or "scissors"
function getComputerChoice(){
    let choice = Math.floor(Math.random *3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors"
            break;
    }
}

//Create a function called game. A game should be best of 5 and the function should 
//report who won at the end.

function game(){
    playerCount = 0;
    computerCount = 0;
    for (i=0;i<5;i++){

        playRound(getPlayerChoice(),getComputerChoice());
    }
}
//Get player selection, which should be case insensitive, and validate if the
//input was correct. Use "prompt()"

function getPlayerChoice(){
    keepGoing = true
    while(keepGoing){
        let playerChoice = prompt("Type in your choice between Rock, Paper or Scissors")

        if (playerChoice === "rock" || 
            playerChoice === "paper" || 
            playerChoice === "scissors") return playerChoice
        else alert("Invalid option! try again!")
    }
   
}

//Create function to play a round of Rock Paper Scissors, 
//that receive playerSelection and computerSelection
//and return the result (win/lose/draw + winningSelection beats losingSelection)


getPlayerChoice();
let playerCount = 0;
let computerCount = 0;


