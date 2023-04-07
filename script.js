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

//This function manipulates the DOM to show both player and computer choices on screen:
function manipulateDom(player,computer){

    if (player === "rock"){
        playerImage.src = "Icons/fist.png";
    }
    else if (player === "paper"){
        playerImage.src = "Icons/hand-palm.png";
    }
    else{
        playerImage.src = "Icons/peace.png";
    }

    if (computer === "rock"){
        computerImage.src = "Icons/fist.png";
    }
    else if (computer === "paper"){
        computerImage.src = "Icons/hand-palm.png";
    }
    else{
        computerImage.src = "Icons/peace.png";
    }


}

//Create function to play a round of Rock Paper Scissors, 
//that receive playerSelection and computerSelection
//and return the result (win/lose/draw + winningSelection beats losingSelection)

function playRound(playerChoice,computerChoice){
    let result;

    if (playerChoice === computerChoice){
        result = "Draw! Try again"
    }
    else if (playerChoice === "rock" && computerChoice ==="scissors"){
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
    resultContainer.textContent = result;
    playerScore.textContent ="Your Score: " + playerCount;
    computerScore.textContent = "Computer's Score: " + computerCount;
    
    manipulateDom(playerChoice,computerChoice);
    keepScore(playerCount,computerCount)
}

//This function reset the scores for players to be able play again
function resetGame(){
    //set player score to 0
    playerCount = 0;
    playerScore.textContent ="Your Score: " + playerCount;

    //set computer score to 0
    computerCount = 0;
    computerScore.textContent = "Computer's Score: " + computerCount;
}

const playerContainer = document.querySelector('#player');
const computerContainer = document.querySelector('#computer');
const resultContainer = document.querySelector('#result');

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");

const playerImage = document.createElement("img");
const computerImage =document.createElement("img");


resetGame();


playerContainer.appendChild(playerImage);
computerContainer.appendChild(computerImage);
let btns = document.querySelectorAll('#rock, #paper, #scissors');
for(btn of btns){
    playerChoice = btn.addEventListener('click',getPlayerChoice)
}




