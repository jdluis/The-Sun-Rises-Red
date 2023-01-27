class Game {
    constructor () {
        this.bg = new Image();
        this.bg.src = "../assets/img/bg/battle1.png";
        this.heroe = new Heroe();
        this.structure = new Structure();
        this.warriors = [];
        this.horde = [];
        this.gameStatus = true; //game on or off
        this.hordeLvl = false;
        this.score = 0;
        this.frames = 1; //frames of game, when gameLoop init
    }

    collisionsPlataform = () => {
        this.horde.forEach(enemy => {
            if (
              enemy.x < this.structure.x + this.structure.w / 2 - 10 &&
              enemy.x + enemy.w > this.structure.x &&
              enemy.y < this.structure.y + this.structure.h &&
              enemy.h + enemy.y > this.structure.y
            ) {
              // Collision detected!
              alert("green");
            } else {
              // No collision
              console.log("blue");
            } 
        });
    }

    collisionsDefenders = () => {
        this.horde.forEach(enemy => {
            this.warriors.forEach(warrior => {
                if (
                  enemy.x < warrior.x + warrior.w / 2 - 10 &&
                  enemy.x + enemy.w > warrior.x &&
                  enemy.y < warrior.y + warrior.h &&
                  enemy.h + enemy.y > warrior.y
                ) {
                  // Collision detected!
                  alert("green");
                } else {
                  // No collision
                  console.log("blue");
                } 

            })
        });
    }


    drawBackground = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    };

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    createHorde = () => {
        let spawned = 3;
        if (this.horde.length <= spawned - 1 && this.hordeLvl === false) {
            this.horde.push(new Enemys());
        }

        if (this.horde.length === spawned) {
            this.horde[0].draw(20,50);
            this.horde[1].draw(40,30);
            this.horde[2].draw(60,10);
        }
    }

    generateDefenders = () => {
        let spawned = 3;
        if (this.warriors.length <= spawned - 1 && this.hordeLvl === false) {
            this.warriors.push(new Warrior());
        }

        if (this.warriors.length === spawned) {
            this.warriors[0].draw(20,50);
            this.warriors[1].draw(40,30);
            this.warriors[2].draw(60,10);
        }
    }

    cleanDeadSoldiers = () => {
        if (this.warriors.length <= 2 && this.hordeLvl === true) {
            this.warriors.forEach(warrior => {
               if (warrior.health <= 0) {
                this.warriors.shift(warrior);
                }
            })
        }
    }

    gameLoop = () => {
        this.frames++;
    
        //1º Clean Canvas
        this.clearCanvas();


        //2º Movement and Actions
        this.horde.forEach(enemy => {
            enemy.moveToAtack()
        });

        this.collisionsPlataform();
        this.collisionsDefenders();
    
        //3º Draw elements
        this.drawBackground();
        this.structure.draw();
        this.heroe.draw();
        this.generateDefenders();
        this.createHorde();

        /* this.heroe.iddleAnimation(); *///dident work
        
        //4º Recursion and Control of recursion.
        if (this.gameStatus === true) {
          requestAnimationFrame(this.gameLoop);
        }
      };
}