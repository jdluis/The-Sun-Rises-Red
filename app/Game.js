class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../assets/img/bg/battle1.png";
    this.heroe = new Heroe();
    this.structure = new Structure();
    this.warriors = [];
    this.horde = [];
    this.arrow = new Arrow(this.heroe);
    this.gameStatus = true; //game on or off, //Para la recursion
    this.hordeLvl = false;
    this.gameRoundStatus = true; //false: gameOver || true: win
    this.score = 0;
    this.frames = 1; //frames of game, when gameLoop init
    this.collisionLogic = new Collisions(
      this.horde,
      this.heroe,
      this.arrow
    );
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  createHorde = (spawn) => {
    if (this.horde.length <= spawn - 1 && this.hordeLvl === false) {
      this.horde.push(new Enemys());
    }

    if (this.horde.length === spawn) {
      for (let i = 0; i < this.horde.length; i++) {
        this.horde[i].draw();
      }
    }
  };

  /*   generateDefenders = () => {
    let spawned = 2;
    if (this.warriors.length <= spawned - 1 && this.hordeLvl === false) {
      this.warriors.push(new Warrior());
    }

    if (this.warriors.length === spawned) {
      this.warriors[0].draw(20, 15);
      this.warriors[1].draw(40, 30);
      this.warriors[1].draw(20, 45);
    }
  }; */

  cleanDead = () => {
    /*     if (this.warriors.length <= 2 && this.hordeLvl === true) {
      this.warriors.forEach((warrior) => {
        if (warrior.health <= 0) {
          this.warriors.shift(warrior);
        }
      });
    } */

    if (this.horde.length <= 2) {
      this.horde.forEach((orc) => {
        if (orc.health <= 0) {
          this.horde.shift(orc);
        }
      });
    }
  };

  cleanArrows = (index) => {
    this.arrows.shift(this.arrows[index]);
  };

  newRound = () => {
    if (this.gameRoundStatus === true) this.hordeLvl = true;
    if (this.gameRoundStatus === false) {
      this.hordeLvl = false;
    }
  };

  gameOver = () => {
    if (this.gameStatus === true) {
      gameView.style.display = "none";
      gameOverView.style.display = "flex";
    } 
    this.gameStatus = false; //Para la recursion
  };

  roundWin = () => {
    this.gameRoundStatus = true;
  };

  updateScore = () => {
    this.score++;
  };

  gameLoop = () => {
    this.frames++;

    //1º Clean Canvas
    this.clearCanvas();

    //2º Movement and Actions
    this.horde.forEach((enemy) => {
      enemy.moveToAtack();
    });

    this.collisionLogic.collisionHeroe(this.gameOver);
    this.collisionLogic.collisionArrow();
    this.cleanDead();

    //3º Draw elements
    this.drawBackground();
    this.heroe.animate(this.frames);
    this.createHorde(1);
    this.arrow.renderArrow()

    //4º Recursion and Control of recursion.
    if (this.gameStatus === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
