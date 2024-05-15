var humanScore = 0;
var computerScore = 0;

function getComputerChoice () {

    const choice = Math.random();

    if (choice <= 0.33){
        console.log('Comp: rock');
        return ('rock');
    }
    else if (choice <= 0.66){
        console.log('Comp: paper');
        return ('paper');
    }
    else {
        console.log('Comp: scissors');
        return ('scissors');
    }

}

function getHumanChoice () {
    let choice = prompt("rock, paper or scissors?").toLowerCase();
    const rps = ['rock', 'paper', 'scissors'];

    while(!rps.includes(choice)){
        console.log('Choose only rock, paper or scissors');
        choice = prompt("rock, paper or scissors?").toLowerCase();
    }

    console.log('Player: ' + choice);
    return choice;
}

function playRound (humanChoice, computerChoice) {

    if (humanChoice === computerChoice){
        console.log(`You tied! ${humanChoice} ties with ${computerChoice}`);
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

function playGame () {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 

    playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
    playGame();
}
if (humanScore > computerScore) {
    console.log(`You won with a score of ${humanScore} to ${computerScore}`);
}
else {
    console.log(`You lost with a score of ${humanScore} to ${computerScore}`);
}