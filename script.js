'use strict';

let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
