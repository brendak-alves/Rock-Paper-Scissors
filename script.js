function getRandomInt() {
    return Math.floor(Math.random() * 3);
}


let cc = "";

function getComputerChoice (){
    if (getRandomInt() === 0) {
        cc = "rock";
        return console.log("The computer choose rock");
    } else if (getRandomInt() === 1) {
        cc = "scissors";
        return console.log("The computer choose scissors");
    } else {
        cc = "paper";
        return console.log("The computer choose paper");
    }
}


function getHumanChoice() {
    let humanAnswer = prompt("Rock, Scissors or Paper?");
    return humanAnswer.toLowerCase();

}


let computerScore = 0;
let humanScore = 0;


function playRound(computerChoice, humanChoice) {
    computerChoice = cc;

    if (humanChoice === "rock" && cc === "scissors") {
        console.log ("You win! Rock beats Scissors.");
        humanScore += 1;
    } else if (humanChoice === "scissors" && cc === "paper") {
       console.log("You win! Scissors beats Paper.");
       humanScore+= 1;
    } else if (humanChoice === "paper" && cc === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore+= 1;
    } else if (humanChoice === cc) {
        console.log("Draw! No one scored.");
    } else {
        console.log("You lose!");
        computerScore+= 1;
    }

}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
}


function showScore() {
    console.log(computerScore);
    console.log(humanScore);

    if (humanScore > computerScore) {
        alert("Congratulations, you win! :D");
    } else {
        alert("Oh, no! You lose! D:");
    }
}


playGame();
showScore();