var humanScore = 0;
var computerScore = 0;

function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

const playerSection = document.querySelectorAll('.selector');

playerSection.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
}
);

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');

    if (humanScore === 5 || computerScore === 5) {
        resetGame();
    }

    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie! You both chose ${playerSelection}.`;
        gameWinner(humanScore, computerScore);
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        humanScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        gameWinner(humanScore, computerScore);
    }
    else {
        computerScore++;
        result.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        gameWinner(humanScore, computerScore);
    }

    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    result.textContent = '';
    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;
}

function gameWinner(humanScore, computerScore) {
    const result = document.querySelector('#result');
    if (humanScore === 5) {
        result.textContent = 'You are the winner!';
    }
    else if (computerScore === 5) {
        result.textContent = 'Computer is the winner!';
    }
}

