/* | | | |  -->> ªªª Global Variables ªªª <<-- | | | | */

//Canvas Init
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Views
const startGameView = document.getElementById('startGameView');
const gameView = document.querySelector('.canvas-container');
const winView = document.getElementById('startGameView');
const gameOverView = document.getElementById('startGameView');

//Buttons
const startGameBtn = document.getElementById('startGame');
const restartGame = document.getElementById('restartGame');
const playAgain = document.getElementById('playAgain');
/* | | | |  -->> ªªª Main Functions ªªª <<-- | | | | */



/* | | | |  -->> ªªª Event Listeners ªªª <<-- | | | | */

startGameBtn.addEventListener('click', () => {
    startGameView.style.display = 'none';
    gameView.style.display = 'flex';
});