"use strict"
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message'). textContent = 'Correct Number! ☺️'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value = 23;
*/

 let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message){
  document.querySelector('.message').textContent =  message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
// WHEN THERE IS NO INPUT
  if(!guess){
    // document.querySelector('.message').textContent = ' Non Number!'
    displayMessage(`No Number!`)
    // WHEN PLAYER WINS
  } else if ( guess === secretNumber){
    // document.querySelector('.message').textContent = `Correct Number!`
    displayMessage(`Correct Number!`)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

document.querySelector('.number').style.width='30rem'
if(score > highScore){
  highScore = score
  document.querySelector('.highscore').textContent = highScore;
}
// WHEN GUESS IS WRONG 
  } else if (guess != secretNumber){

    if (score > 1){
      // document.querySelector('.message').textContent = guess > secretNumber ? `📈 Too high!` : `📉 Too Low!`
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too Low!`)
      score--;
      document.querySelector('.score').textContent = score;
    } else{
      // document.querySelector('.message').textContent = `💥 You lost the game!`
      displayMessage(`💥 You lost the game!`)
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // WHEN GUESS IS TOO HIGH
  // }else if(
  //   guess > secretNumber
  // ){ if (score > 1){
  //   document.querySelector('.message').textContent = `📈 Too high!`
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else{
  //   document.querySelector('.message').textContent = `💥 You lost the game!`
  //   document.querySelector('.score').textContent = 0;
  // }
  //   // WHEN GUESS IS TOO LOW
  // } else if(
  //   guess < secretNumber
  // ){
  //   if (score > 1){
  //     document.querySelector('.message').textContent = `📉 Too Low!`
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else{
  //     document.querySelector('.message').textContent = `💥 You lost the game!`
  //     document.querySelector('.score').textContent = 0;
  //   }
   
  // }
});

const againBtn = document.querySelector('.again').addEventListener('click', function (){

score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.message').textContent = `Start guessing...`
displayMessage(`Start guessing...`)
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = `?`;

document.querySelector('.guess').value = '';



  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width ='15rem';
 

})