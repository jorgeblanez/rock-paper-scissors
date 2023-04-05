//Create function getComputerChoice that will randomly return text "rock", 
//"paper" or "scissors"
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
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
    /*let keepGoing =true;
    /*while (keepGoing){
        playRound(getPlayerChoice(),getComputerChoice());
        console.log("playerCount: " + playerCount);
        console.log("computerCount: " + computerCount)

        if (playerCount === 3 || computerCount === 3) keepGoing =false;
    }
    if (playerCount > computerCount) return alert("You won! :D")
    else return alert("You lost! :/")*/

}


function getPlayerChoice(){

}

//Create function to play a round of Rock Paper Scissors, 
//that receive playerSelection and computerSelection
//and return the result (win/lose/draw + winningSelection beats losingSelection)

function playRound(playerChoice,computerChoice){
    let result;
    console.log("playerChoice: " + playerChoice);
    console.log("computerChoice: " + computerChoice);
    if (playerChoice === computerChoice){
        return alert ("Draw! Try again");
    }

    if (playerChoice === "rock" && computerChoice ==="scissors"){
        playerCount++;
        result = "You won! Rock beats Scissors!";
    }
    else if (playerChoice === "rock" && computerChoice ==="paper"){
        computerCount++;
        result = "You lost! Paper beats Rock!";
    }
    else if (playerChoice === "paper" && computerChoice ==="rock"){
        playerCount++;
        result = "You won! Paper beats Rock!";
    }
    else if (playerChoice === "paper" && computerChoice ==="scissors"){
        computerCount++;
        result = "You lost! Scissors beats Paper!";
    }
    else if (playerChoice === "scissors" && computerChoice ==="paper"){
        playerCount++;
        result = "You won! Scissors beats Paper!";
    }
    else{
        computerCount++;
        result = "You lost! Rock beats Scissors!";
    }
    return alert(result);

}

//This function reset the scores for players to be able play again
function resetGame(){
    //set player score to 0
    playerScore.classList.add('content');
    playerScore.textContent = '0';
    playerContainer.appendChild(playerScore);

    //set computer score to 0
    computerScore.classList.add('content');
    computerScore.textContent = '0';
    computerContainer.appendChild(computerScore);
}

const playerContainer = document.querySelector('#player');
const computerContainer = document.querySelector('#computer');
let playerScore = document.createElement('div');
let computerScore = document.createElement('div');

resetGame();
