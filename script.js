console.log("Hello World. This is a Rock-Paper-Scissors Game. Type playGame() to start.")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const rps = ["Rock","Paper","Scissors"];
    const computerSelected = rps[Math.floor(Math.random() * rps.length)];
    alert(`Computer selects ${computerSelected}`);
    return computerSelected;
}

function getHumanChoice() {
    const humanSelected = prompt("Rock, Paper, Scissors?","");
    return humanSelected
}


function playRound (humanChoice,computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors");
        alert("You win! Rock beats Scissors");
        humanScore = humanScore + 1;
        alert(`Your score is ${humanScore}, Computer score is ${computerScore}`)
     } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock");
        alert("You win! Paper beats Rock");
        humanScore = humanScore + 1;
        alert(`Your score is ${humanScore}, Computer score is ${computerScore}`)
     } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win! Scissors beat Paper");
        alert("You Win! Scissors beat Paper");
        humanScore = humanScore + 1;
        alert(`Your score is ${humanScore}, Computer score is ${computerScore}`)
     } else if (computerChoice=== "Rock" && humanChoice === "Scissors") {
        console.log("You lose! Rock beats Scissors");
        alert("You lose! Rock beats Scissors");
        computerScore = computerScore + 1;
        alert(`Your score is ${humanScore}, Computer score is ${computerScore}`)
     } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("You lose! Paper beats Rock");
        alert("You lose! Paper beats Rock");
        computerScore = computerScore + 1;
        alert(`Your score is ${humanScore}, Computer score is ${computerScore}`)
     } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("You lose! Scissors beat Paper");
        alert("You lose! Scissors beat Paper")
        computerScore = computerScore + 1;
        alert(`Your score is ${humanScore}, Computer score is ${computerScore}`)
     } else {
        console.log("Pick again");
        alert("Pick again")
     }
}


function playGame () {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log(`Your score: ${humanScore} \nComputer Score: ${computerScore}\nYou win! Game over`);
        alert(`Your score: ${humanScore} \nComputer Score: ${computerScore}\nYou win! Game over`);
    } else if (computerScore > humanScore) {
        console.log(`Your score: ${humanScore} \nComputer Score: ${computerScore}\nYou lose! Game over`);
        alert(`Your score: ${humanScore} \nComputer Score: ${computerScore}\nYou lose! Game over`);
    } else {
        console.log(`Your score: ${humanScore} \nComputer Score: ${computerScore}\nIt's a tie! Game over`);
        alert(`Your score: ${humanScore} \nComputer Score: ${computerScore}\nIt's a tie! Game over`);
    }
}