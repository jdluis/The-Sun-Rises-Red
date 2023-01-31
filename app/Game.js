class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../assets/img/bg/battle1.png";
    this.heroe = new Heroe();
    this.killed = 0;
    this.structure = new Structure();
    this.warriors = [];
    this.horde = [];
    this.hordeLvl = 0;
    this.roundStatus = true;
    this.spawn = 1;
    this.arrows = [];
    /* this.arrow = new Arrow(this.heroe); */
    this.gameStatus = true; //game on or off, //Para la recursion
    this.gameRoundStatus = true; //false: gameOver || true: win
    this.score = 0;
    this.frames = 1; //frames of game, when gameLoop init
    this.collisionLogic = new Collisions(this.horde, this.heroe, this.arrows);
    this.randomX = randomNumber(20);
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  createHorde = () => { //problema con renderizado o con cleanHorde
    if (this.frames % 120 === 0 &&this.horde.length <= this.spawn - 1 && this.roundStatus === true) {
      this.horde.push(new Enemys());
    }
  };

  
  renderHorde = () => {
    console.log(this.horde.length ,  this.spawn )
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
  /* newRound = () => { //Deberia controlar cada ronda
    if ( this.killed.length === this.spawn) { 
      console.log("fdsf")
      this.spawn++;
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

    if (this.horde.length <= this.spawn && this.roundStatus === true) {
      this.horde.forEach((orc, index) => {
        if (orc.health <= 0) {
          this.killed++;
          console.log(this.killed);
          if (this.spawn < 20)  {
            this.spawn++;
          }
          this.horde.splice(index, 1);
        }
      });
    }
  };

  cleanArrows = () => {
    this.arrows.forEach((arrow) => {
      if (arrow.x > canvas.width) {
        console.log("borrada la  flecha");
        this.arrows.shift(arrow);
      }
    });
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
    scoreSpan.innerText = this.killed;
  };

  updateLvL = () => {
    //PENDIENTE
    hordeLvLSpan.innerText = this.hordeLvl;
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
  /*   this.collisionLogic.collisionArrowToOrc(); */
    this.cleanDead();
    this.cleanArrows();
    /*  this.newRound(); */
    this.createHorde();
    this.updateScore();
    this.updateLvL();

    //3º Draw elements
    this.drawBackground();
    this.heroe.animate(this.frames);
    this.renderHorde();
    this.arrows.forEach((arrow) => {
      arrow.renderArrow();
    });

    //4º Recursion and Control of recursion.
    if (this.gameStatus === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
