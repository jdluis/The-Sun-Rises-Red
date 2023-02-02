class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./assets/img/bg/battle1.png";

    //Arrays
    this.arrows = [];
    this.warriors = [];
    this.horde = [];

    // Obj Creation
    this.heroe = new Heroe();
    this.collisionLogic = new Collisions(this.horde, this.heroe, this.arrows);
    this.structure = new Structure();

    //Logic Boolean
    this.roundStatus = true;
    this.gameStatus = true; //game on or off, //Para la recursion
    this.gameRoundStatus = true; //false: gameOver || true: win

    //Counters
    this.spawn = 1;
    this.killed = 0;
    this.hordeLvl = 0;
    this.score = 0;
    this.frames = 1; //frames of game, when gameLoop init

    //Others
    this.randomX = randomNumber(20);
  }

  //  ----------- Methods --------------

  // Canvas render
  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  //Creation of new Objs
  createHorde = () => {
    //create objs
    if (
      this.frames % 120 === 0 &&
      this.horde.length <= this.spawn - 1 &&
      this.roundStatus === true
    ) {
      this.horde.push(new Enemys());
    }

    //render
    if (this.horde.length <= this.spawn && this.roundStatus === true) {
      for (let i = 0; i < this.horde.length; i++) {
        this.horde[i].draw();
      }
    }
  };

  createArrows = () => {
    if (this.arrows.length >= 0 && this.roundStatus === true) {
      this.arrows.push(new Arrow(this.heroe));
    }
    game.arrows.forEach((arrow) => {
      arrow.isShot = true;
    });
  };

  //Clean Methods
  cleanDead = () => {
    if (this.horde.length <= this.spawn && this.roundStatus === true) {
      this.horde.forEach((orc, index) => {
        if (orc.health <= 0 || orc.x < 0) {
          if (orc.health <= 0) {
            this.killed++;
          }
          if (this.spawn < 20) {
            this.spawn++;
          }
          this.horde.splice(index, 1);
        }
      });
    }
  };


  //Game Logic Methods
  gameOver = () => {
    if (this.gameStatus === true) {
      gameView.style.display = "none";
      gameOverView.style.display = "flex";
    }
    this.gameStatus = false; //Stop recursion
  };

  gamePause = () => {
    this.gameStatus = !this.gameStatus;
    this.gameLoop();
  }

  updateScore = () => {
    scoreSpan.innerText = this.killed;
    fianlScoreSpan.innerText = this.killed;
  };

  updateHighScore = () => {
    //PENDIENTE
    let highScore = localStorage.getItem('highScore');

    if (highScore > this.killed) {
      localStorage.setItem('highScore', highScore);
    } else {
      localStorage.setItem('highScore', this.killed);
    }

    finalHighScoreSpan.innerText = window.localStorage.getItem('highScore');

  };

  updateLifesLefts = () => {
    lifesLeftsDOM.innerHTML =
      this.heroe.lifes === 3
        ? `<i class="fa-solid fa-heart"></i><i class="fa-solid fa-heart"></i><i class="fa-solid fa-heart"></i>`
        : this.heroe.lifes === 2
        ? `<i class="fa-solid fa-heart"><i class="fa-solid fa-heart"></i>`
        : `<i class="fa-solid fa-heart"></i>`;
  };

  //Main Method
  gameLoop = () => {
    this.frames++;

    //1º Clean Canvas
    this.clearCanvas();

    //2º Movement and Actions
    this.horde.forEach((enemy) => {
      enemy.moveToAtack();
    });

    //collisions
    this.collisionLogic.collisionHeroe(this.gameOver);
    this.collisionLogic.collisionOutOfMapLeft(this.gameOver);
    this.collisionLogic.collisionArrow();
    this.collisionLogic.collisionOutMapRight();

    this.updateScore();
    this.updateHighScore();
    this.updateLifesLefts();

    this.cleanDead();

    //3º Draw elements
    this.drawBackground();
    this.heroe.animate(this.frames);
    this.createHorde();
    this.arrows.forEach((arrow) => {
      arrow.renderArrow();
    });

    //4º Recursion and Control of recursion.
    if (this.gameStatus === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
