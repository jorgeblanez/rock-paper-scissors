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


function getPlayerChoice(event){
    let playerChoice = event.target.alt;
    playRound(playerChoice,getComputerChoice())

}

//Create function to play a round of Rock Paper Scissors, 
//that receive playerSelection and computerSelection
//and return the result (win/lose/draw + winningSelection beats losingSelection)

function playRound(playerChoice,computerChoice){
    let result;

    //Manipulate DOM to appear both player and computer choices

    if (playerChoice === computerChoice){
        
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
    
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
}

//This function reset the scores for players to be able play again
function resetGame(){
    //set player score to 0
    playerCount = 0;
    playerScore.classList.add('content');
    playerScore.textContent = playerCount;
    playerContainer.appendChild(playerScore);

    //set computer score to 0
    computerCount = 0;
    computerScore.classList.add('content');
    computerScore.textContent = computerCount;
    computerContainer.appendChild(computerScore);
}

function keepScore(){

}

const playerContainer = document.querySelector('#player');
const computerContainer = document.querySelector('#computer');
let playerScore = document.createElement('div');
let computerScore = document.createElement('div');

resetGame();

let btns = document.querySelectorAll('#rock, #paper, #scissors');
for(btn of btns){
    playerChoice = btn.addEventListener('click',getPlayerChoice)
}




;