class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../assets/img/bg/battle1.png";
    this.heroe = new Heroe();
    this.structure = new Structure();
    this.warriors = [];
    this.horde = [];
    this.gameStatus = true; //game on or off
    this.hordeLvl = false;
    this.gameRoundStatus = false; //false: gameOver || true: win
    this.score = 0;
    this.frames = 1; //frames of game, when gameLoop init
  }

  collisionsPlataform = () => {
    this.horde.forEach((orc) => {
      if (
        orc.x < this.structure.x + this.structure.w / 2 &&
        orc.x + orc.w > this.structure.x &&
        orc.y < this.structure.y + this.structure.h &&
        orc.h + orc.y > this.structure.y
      ) {
        orc.isMoving = false;
        orc.isAtacking = true;
        this.gameOver();
      } else {
        orc.isAtacking = false;
        orc.isMoving = true;
      }
    });
  };

/*   collisionsDefenders = () => {
    this.horde.forEach((orc) => {
      this.warriors.forEach((warrior) => {
        if (
          orc.x < warrior.x + warrior.w / 2 &&
          orc.x + orc.w > warrior.x &&
          orc.y < warrior.y + warrior.h &&
          orc.h + orc.y > warrior.y
        ) {
          orc.isMoving = false;
          orc.isAtacking = true;
          orc.attackWarrior(warrior, this.frames);
        } else {
          orc.isAtacking = false;
          orc.isMoving = true;
        }
      });
    });
  }; */

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

  cleanDeadSoldiers = () => {
/*     if (this.warriors.length <= 2 && this.hordeLvl === true) {
      this.warriors.forEach((warrior) => {
        if (warrior.health <= 0) {
          this.warriors.shift(warrior);
        }
      });
    } */

    if (this.horde.length <= 2 && this.hordeLvl === true) {
      this.horde.forEach((orc) => {
        if (orc.health <= 0) {
          this.horde.shift(orc);
        }
      });
    }
  };

  newRound = () => {
    if (this.gameRoundStatus === true) this.hordeLvl = true;
    if (this.gameRoundStatus === false) {
      this.hordeLvl = false;
    }
  };

  gameOver = () => {
    this.gameRoundStatus = false;
    this.gameStatus = false;
    gameView.style.display = 'none';
    gameOverView.style.display = 'flex';
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

    this.collisionsPlataform();
   /*  this.collisionsDefenders(); */
    this.cleanDeadSoldiers();

    //3º Draw elements
    this.drawBackground();
    /* this.structure.draw(); */
    this.heroe.animate(this.frames);
    /* this.generateDefenders(); */
    this.createHorde(1);

    //4º Recursion and Control of recursion.
    if (this.gameStatus === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
