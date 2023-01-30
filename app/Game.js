class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../assets/img/bg/battle1.png";
    this.heroe = new Heroe();
    this.killed = 0;
    this.structure = new Structure();
    this.warriors = [];
    this.horde = [];
    this.hordeLvl = 1;
    this.roundStatus = true;
    this.arrow = new Arrow(this.heroe);
    this.gameStatus = true; //game on or off, //Para la recursion
    this.gameRoundStatus = true; //false: gameOver || true: win
    this.score = 0;
    this.frames = 1; //frames of game, when gameLoop init
    this.collisionLogic = new Collisions(this.horde, this.heroe, this.arrow);
    this.randomX = randomNumber(20);
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  createHorde = () => {
    if (this.horde.length <= this.hordeLvl - 1 && this.roundStatus === true) {
      this.horde.push(new Enemys());
    }
  };

  renderHorde = () => {
    if (this.horde.length === this.hordeLvl && this.roundStatus === true) {
      for (let i = 0; i < this.horde.length; i++) {
        this.horde[i].draw();
      } 
    }
  };

  /* newRound = () => { //Deberia controlar cada ronda
    if ( this.killed.length === this.hordeLvl) { 
      console.log("fdsf")
      this.hordeLvl++;
    }
  }; */

  /*   generateDefenders = () => {
    let spawned = 2;
    if (this.warriors.length <= spawned - 1 ) {
      this.warriors.push(new Warrior());
    }

    if (this.warriors.length === spawned) {
      this.warriors[0].draw(20, 15);
      this.warriors[1].draw(40, 30);
      this.warriors[1].draw(20, 45);
    }
  }; */

  cleanDead = () => {
    /*     if (this.warriors.length <= 2) {
      this.warriors.forEach((warrior) => {
        if (warrior.health <= 0) {
          this.warriors.shift(warrior);
        }
      });
    } */

    if (this.horde.length <= this.hordeLvl && this.roundStatus === true) {
      this.horde.forEach((orc) => {
        if (orc.health <= 0) {
          this.killed++
          console.log(this.killed)
          this.hordeLvl++;
          this.horde.shift(orc);
        }
      });
    }
  };

  cleanArrows = (index) => {
    this.arrows.shift(this.arrows[index]);
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
   /*  this.newRound(); */
    this.createHorde()

    //3º Draw elements
    this.drawBackground();
    this.heroe.animate(this.frames);
    this.renderHorde();
    this.arrow.renderArrow();

    //4º Recursion and Control of recursion.
    if (this.gameStatus === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
