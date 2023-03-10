//Create function getComputerChoice that will randomly return text "rock", 
//"paper" or "scissors"
function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);
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
    let keepGoing =true;
    while (keepGoing){
        playRound(getPlayerChoice(),getComputerChoice());
        console.log("playerCount: " + playerCount);
        console.log("computerCount: " + computerCount)

        if (playerCount === 3 || computerCount === 3) keepGoing =false;
    }
    if (playerCount > computerCount) return alert("You won! :D")
    else return alert("You lost! :/")
}
//Get player selection, which should be case insensitive, and validate if the
//input was correct. Use "prompt()"

function getPlayerChoice(){
    keepGoing = true
    while(keepGoing){
        let playerChoice = prompt("Type in your choice between Rock, Paper or Scissors")
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice === "rock" || 
            playerChoice === "paper" || 
            playerChoice === "scissors") return playerChoice
        else alert("Invalid option! Try again!")
    }
   
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


let playerCount = 0;
let computerCount = 0;

let keepGoing = true;
while (keepGoing){
    game();
    let playAgain = prompt("Play again? Yes or No?");
    console.log(playAgain);
    if (playAgain.toLowerCase() === "no") keepGoing = false;
}

