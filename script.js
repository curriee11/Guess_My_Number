'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number' 
console.log(document.querySelector('.message').textContent); 

document.querySelector('.number').textContent=11;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;


*/

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// Multiplying the result of Math.random() by 20 gives a random number between 0 (inclusive) and 20 (exclusive).
// Math.trunc() rounds down to the nearest integer, so the result will be a random integer between 0 and 19 (inclusive).

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    // console.log(guess,typeof guess);
//when no input
    if(!guess){
        displayMessage('⛔️ No Number!') ;
        
    }
    //when player wins
    else if(guess===secretNumber){
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.message').textContent='🎉CorrectNumber';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    //guess too high
    else if(guess>secretNumber){
        if(score>1){
            displayMessage('📈Too High') ;
            // document.querySelector('.message').textContent='📈Too High';
            score-=1;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='💥You lost the game';
            document.querySelector('.score').textContent=0;
        }
       
    }
    //guess too low
    else if(guess<secretNumber){
        if(score>1){
            displayMessage('📉Too Low') ;
        // document.querySelector('.message').textContent='📉Too Low';
        score--;
        document.querySelector('.score').textContent=score;}
        else{
            displayMessage('💥You lost the game') ;
            // document.querySelector('.message').textContent='💥You lost the game';
            document.querySelector('.score').textContent=0;
        }
    }
    
})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

    document.querySelector('.score').textContent=score;
    displayMessage('Start guessing...') ;
    // document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';


})
