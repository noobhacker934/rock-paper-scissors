let score = {
    wins: 0,
    losess: 0,
    ties: 0
};
saveScore();
getscore();
displayScore();
function displayScore(){
    document.querySelector('.display-score').innerHTML = `Wins:${score.wins}; Losses:${score.losess}; Ties:${score.ties}`;
}
function moveSelector(){
    let tok = Math.random();
    let compMove = '';
    if(tok < 0.33){
        compMove = 'rock';
    }
    else if(tok < 0.66){
        compMove = 'paper';
    }
    else{
        compMove = 'scissors';
    }
    return compMove;
}

function playGame(userMove){

    let compMove = moveSelector();
    let result = '';
    if(userMove === 'rock'){
        if(userMove === compMove){
            score.ties += 1;
            result = 'Tie';
        }
        else if(compMove == 'paper'){
            score.losess += 1;
            result = 'You lose';
        }
        else{
            score.wins += 1;
            result = 'You win';
        }
    }

    if(userMove == 'paper'){
        if(userMove === compMove){
            score.ties += 1;
            result = 'Tie';
        }
        else if(compMove == 'scissors'){
            score.losess += 1;
            result = 'You lose';
        }
        else{
            score.wins += 1;
            result = 'You win';
        }
    }

    if(userMove == 'scissors'){
        if(userMove === compMove){
            score.ties += 1;
            result = 'Tie';
        }
        else if(compMove == 'rock'){
            score.losess += 1;
            result = 'You lose';
        }
        else{
            score.wins += 1;
            result = 'You win';
        }
    }
    saveScore();
    document.querySelector('.cur-score').innerHTML 
    =`${result}<br>You <img src = "${userMove}-emoji.png" class = "move-icon">  <img src = "${compMove}-emoji.png" class = "move-icon"> Computer`;

    document.querySelector('.display-score').innerHTML = `Wins:${score.wins}; Losses:${score.losess}; Ties:${score.ties}`;

    console.log(score);
}

function saveScore(){
    localStorage.setItem("totScore",JSON.stringify(score));
}
function getscore(){
    const sobj = localStorage.getItem("totScore");
    score = JSON.parse(sobj);
}
function resetScore(){
    score.wins = 0;
    score.losess = 0;
    score.ties = 0;
    localStorage.setItem("totScore",JSON.stringify(score));
}