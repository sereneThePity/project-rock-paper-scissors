
getComputerChoice = () => {
    rpsList = ['rock','paper','scissors'];
    randomNumber = Math.floor(Math.random() * rpsList.length);
    return rpsList[randomNumber];
}

singleRound = (playerSelection,computerSelection) => {
    playerSelection = prompt("choose your weapon","").toLowerCase();
    computerSelection = getComputerChoice();
    let win = 0, loss = 0, draw = 0
    console.log(computerSelection)

    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('Get Wrapped');
        loss++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You ROCK!');
        win++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log('Smash Bros: fight again');
        draw++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('Get Cut');
        loss++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        console.log('Paper Mache');
        draw++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You wRap?!!');
        win++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('Get Stoned');
        loss++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('Cutting Time');
        win++;
    }
    else {
        console.log('Scissoring');
        draw++;
    }

    score = [win,loss,draw]

    return score
}

game = ()=> {
    
    let w,l,d;
    for(i=1;i<4;i++){
        singleRound()
        w=score[0],l=score[1],d=score[2];
        w+=score[0];
        l+=score[1];
        d+=score[2];
    }

    if (w>l && w>d){
        console.log('You win');
    }
    else if (l>w && l>d){
        console.log('Computer wins');
    }
    else console.log('Draw');
}