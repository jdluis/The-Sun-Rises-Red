/* | | | |  -->> ªªª Global Variables ªªª <<-- | | | | */

//Canvas Init
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Views
const startGameView = document.getElementById("startGameView");
const gameView = document.querySelector(".canvas-container");
const pauseView = document.getElementById("pauseView");
const gameOverView = document.getElementById("gameOverView");

//Buttons
const startGameBtn = document.getElementById("startGame");
const restartGameBtn = document.getElementById("restartGame");
const playAgainBtn = document.getElementById("playAgain");
const pauseBtn = document.getElementById("pause");
const maleHeroBtn = document.getElementById("selectMale");
const femaleHeroBtn = document.getElementById("selectFemale");

//DOM- Bar Game uses
const scoreSpan = document.getElementById("scoreSpan");
const highScoreSpan = document.getElementById("highScoreSpan");
const fianlScoreSpan = document.getElementById("fianlScoreSpan");
const finalHighScoreSpan = document.getElementById("finalHighScoreSpan");
const lifesLeftsDOM = document.getElementById("lifeSpan");

//DOM-Style
const imgFemaleDOM = document.querySelector(".heroe-female");
const imgMaleDOM = document.querySelector(".heroe-male");
const instructionInGameDOM = document.querySelector(".objetiv-container");

//Game
let game;
const floorY = 200;
let alreadyShoot = false;
const topLimit = 130;
const bottomLimit = 360;

//Images | Sprites
const heroeSprites = {
  sprite: "./assets/img/heroe/iddle1/Elf_idle_sprites.png",
  sW: 429, //width de sprite / columnas de dibujos
  sH: 500, //height de sprite / rows
  sX: 1, //en la imagen
  sY: 1, //en la imagen
  sttaggedFrames: 10,
};

const chooseHero = {
  male: {
    /* simple: , */
    iddle: "./assets/img/heroe/iddle1/Elf_idle_sprites.png",
  },
  female: {
    simple: "./assets/img/heroe-female/elf.png",
    /* iddle: , */
  },
};

/* | | | |  -->> ªªª Main Functions ªªª <<-- | | | | */

const startGame = () => {
  //ViewLogic
  startGameView.style.display = "none";
  gameOverView.style.display = "none";
  gameView.style.display = "flex";

  if (gameView.style.display === "flex") {
    setTimeout(() => {
      instructionInGameDOM.style.display = "none";
    }, 6000)
  }

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

highScoreSpan.innerText = window.localStorage.getItem('highScore');
finalHighScoreSpan.innerText = window.localStorage.getItem('highScore');
/* | | | |  -->> ªªª Event Listeners ªªª <<-- | | | | */

//Game settings
startGameBtn.addEventListener("click", () => {
  startGame();
});

restartGameBtn.addEventListener("click", restartGame);

//Choose Hero****

maleHeroBtn.addEventListener("click", () => {
  heroeSprites.sprite = chooseHero.male.iddle;
  imgMaleDOM.style.opacity = "1";
  maleHeroBtn.classList.add("activeHero");

  imgFemaleDOM.style.opacity = ".8";
  femaleHeroBtn.classList.remove("activeHero");
});

femaleHeroBtn.addEventListener("click", () => {
  heroeSprites.sprite = chooseHero.female.simple;
  imgFemaleDOM.style.opacity = "1";
  femaleHeroBtn.classList.add("activeHero");

  imgMaleDOM.style.opacity = ".8";
  maleHeroBtn.classList.remove("activeHero");
});

// Movement and Actions
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

// Pause Icon toggle & Pause init
pauseBtn.addEventListener("click", () => {
  game.gamePause();
  if (pauseBtn.innerHTML === '<i class="fa-solid fa-circle-pause"></i>') {
    pauseBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  } else {
    pauseBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    game.gameStatus = true;
  }
});
