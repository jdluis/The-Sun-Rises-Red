/* | | | |  -->> ªªª Global Variables ªªª <<-- | | | | */

//Canvas Init
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Views
const startGameView = document.getElementById("startGameView");
const gameView = document.querySelector(".canvas-container");
const winView = document.getElementById("startGameView");
const gameOverView = document.getElementById("gameOverView");

//Buttons
const startGameBtn = document.getElementById("startGame");
const restartGameBtn = document.getElementById("restartGame");
const playAgainBtn = document.getElementById("playAgain");

//DOM- Bar Game uses
const scoreSpan = document.getElementById("scoreSpan");
const hordeLvLSpan = document.getElementById("hordeLvLSpan");
const fianlScoreSpan = document.getElementById("fianlScoreSpan");
const finalLvLSpan = document.getElementById("finalLvLSpan");

//Game
let game;
const floorY = 200;
let alreadyShoot = false;

//Images | Sprites
const heroeSprites = {
  iddle: "./assets/img/heroe/iddle1/Elf_idle_sprites.png",
  sW: 429, //width de sprite / columnas de dibujos
  sH: 500, //height de sprite / rows
  sX: 1, //en la imagen
  sY: 1, //en la imagen
  sttaggedFrames: 10,
};

/* | | | |  -->> ªªª Main Functions ªªª <<-- | | | | */

const startGame = () => {
  //ViewLogic
  startGameView.style.display = "none";
  gameOverView.style.display = "none";
  gameView.style.display = "flex";

  //Create Game
  game = new Game();
  //Game Start
  game.gameLoop();
};

const restartGame = () => {
  startGame();
};

const drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

const randomNumber = (posibility) => {
  return Math.random() * -posibility;
};

/* | | | |  -->> ªªª Event Listeners ªªª <<-- | | | | */

startGameBtn.addEventListener("click", () => {
  startGame();
});

restartGameBtn.addEventListener("click", restartGame);

window.addEventListener("keyup", (e) => {
  let code = e.code;
  if (code === "Space" && alreadyShoot === false) {
    alreadyShoot = false;
    game.heroe.shoot();
  }
});

window.addEventListener("keypress", (e) => {
  let code = e.code;
  if (code === "KeyW") {
    game.heroe.moveUp();
  }

  if (code === "KeyS") {
    game.heroe.moveDown();
  }
});
