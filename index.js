
getComputerChoice = () => {
    rpsList = ['rock','paper','scissors'];
    randomNumber = Math.floor(Math.random() * rpsList.length);
    return rpsList[randomNumber];
}

singleRound = (playerSelection,computerSelection) => {
    playerSelection = prompt("choose your weapon","").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection)

    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('Get Wrapped');
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You ROCK!')
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log('Smash Bros: fight again')
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('Get Cut')
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        console.log('Paper Mache')
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You wRap?!!')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('Get Stoned')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('Cutting Time')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        console.log('Scissoring')
    }
}