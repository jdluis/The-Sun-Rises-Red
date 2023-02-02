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
const levels = [0,1,2,3,4,5,6,7,8,9,10];
let heroeIsFemale = false;

//Images | Sprites

const spritesImages = {
  maleHero: {
    simple: "./assets/img/heroe/simple.png",
    iddle: {
      img: "./assets/img/heroe/iddleSprite.png",
      sW: 473, //width de sprite / image cols
      sH: 537, //height de sprite / image rows
      sX: 0, //en la imagen
      sY: 0, //en la imagen
      sttaggedFrames: 10,
    },
    /*
    walking: ,
    atacking: ,
    dieying: , */
  },
  femaleHero: {
    simple: "./assets/img/heroe-female/simple.png",
    iddle: {
      img: "./assets/img/heroe-female/iddleSprite.png",
      sW: 746, //width de sprite / image cols
      sH: 943, //height de sprite / image rows
      sX: 0, //en la imagen
      sY: 0, //en la imagen
      sttaggedFrames: 10,
    },
    /* walking: ,
    atacking: ,
    dieying: , */
  },
  orc: {
    simple: "./assets/img/Orc/simple.png",
    walking: {
      img: "./assets/img/Orc/spriteWalk.png",
      sW: 685, //width de sprite / image cols
      sH: 632, //height de sprite / image rows
      sX: 0, //en la imagen
      sY: 0, //en la imagens
      sttaggedFrames: 10,
    },
    run: {
      img: "./assets/img/Orc/spriteRun.png",
      sW: 685, //width de sprite / image cols
      sH: 608, //height de sprite / image rows
      sX: 0, //en la imagen
      sY: 0, //en la imagens
      sttaggedFrames: 9,
    }
    /*
    iddle: ,
    atacking: ,
    dieying: , */
  },
};

const heroSelected = {
  img: spritesImages.maleHero.iddle.img,
  sW: null,
  sH: null,
  sX: null,
  sY: null,
  sttaggedFrames: null,
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
    }, 6000);
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

highScoreSpan.innerText = window.localStorage.getItem("highScore");
finalHighScoreSpan.innerText = window.localStorage.getItem("highScore");
/* | | | |  -->> ªªª Event Listeners ªªª <<-- | | | | */

//Game settings
startGameBtn.addEventListener("click", () => {
  startGame();
});

restartGameBtn.addEventListener("click", restartGame);

//Choose Hero****

maleHeroBtn.addEventListener("click", () => {
  heroeIsFemale = false;
  heroSelected.img = spritesImages.maleHero.iddle.img;
  imgMaleDOM.style.opacity = "1";
  maleHeroBtn.classList.add("activeHero");

  imgFemaleDOM.style.opacity = ".8";
  femaleHeroBtn.classList.remove("activeHero");
});

femaleHeroBtn.addEventListener("click", () => {
  heroeIsFemale = true;
  heroSelected.img = spritesImages.femaleHero.iddle.img;
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
