function getInput() {
 console.log("Please choose rock, paper, or scissors.");   
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerMove(move) {
    return (move || getInput());
}

function getComputerMove(move){
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
   var winner;
    if (playerMove === computerMove){
        winner = 'tie';
    } else if (playerMove ==='rock' && computerMove ==='paper'){
        winner ='computer';
    } else if (playerMove ==='rock' && computerMove ==='scissors'){
        winner ='player';
    } else if (playerMove ==='paper' && computerMove ==='rock'){
        winner ='player';
    } else if (playerMove ==='paper' && computerMove ==='scissors'){
        winner ='computer';
    } else if (playerMove ==='scissors' && computerMove ==='paper'){
        winner ='player';
    } else if (playerMove ==='scissors' && computerMove ==='rock'){
        winner ='computer';
    }
    return winner;
}

function playToFive(){
    console.log("Let's play rock, paper, scissors!!");
    var playerWins=0;
    var computerWins=0;
    var winner;
    var playerMove;
    var computerMove;
    
while (playerWins < 5 && computerWins < 5) { 
   playerMove = getPlayerMove();
   computerMove = getComputerMove();
   
    winner = getWinner(playerMove, computerMove);
    
if (winner ==='player'){
    playerWins +=1;
} else if(winner ==='computer'){
    computerWins +=1;
}

    console.log("Player played " + playerMove +  " and computer played " + computerMove +".");
    console.log("The score is player " + playerWins + " and Computer " + computerWins + ".");
}
return [playerWins, computerWins];    
}

playToFive();

