const guess = document.querySelector('.guess');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const lScore = document.querySelector('.score');
const heightScore = document.querySelector('.hightScore');
const input = document.querySelector('.input');
const body = document.querySelector('body');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let heightScorePoint = 0;
check.addEventListener('click', () => {
  const inputValue = Number(input.value);
  if (!inputValue || inputValue > 20) {
    message.textContent = 'Please Enter a number Between 1 and 20.....';
  } else if (inputValue === randomNumber) {
    message.textContent = 'Correct Number';
    body.style.backgroundColor = 'green';
    guess.style.width = '200px';
    guess.textContent = randomNumber;
    if (score > heightScorePoint) {
      heightScorePoint = score;
      heightScore.textContent = heightScorePoint;
    }
  } else if (inputValue !== randomNumber) {
    if (score > 0) {
      message.textContent =
        inputValue > randomNumber ? 'Too Height!' : 'Too Low!';
      score--;
      lScore.textContent = score;
    } else {
      message.textContent = 'Game Over !';
      lScore.textContent = '0';
    }
  }
  input.value = '';
});

again.addEventListener('click', () => {
  score = 20;
  message.textContent = 'Start Guessing.......';
  body.style.backgroundColor = 'black';
  guess.style.width = '150px';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  lScore.textContent = score;
  guess.textContent = '?';
});
