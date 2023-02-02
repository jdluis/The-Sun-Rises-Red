class Enemys {
  constructor() {
    //Render Positions and Size
    this.x = randomNumber(150) + 900;
    this.y = 300 + randomNumber(150);
    this.w = 60;
    this.h = 80;

    //Img
    this.img = new Image();
    this.img.src = chooseImages.orc.simple;

    //Skills
    this.strength = 1;
    this.health = 3;
    this.agility = 1; //.4 default
    this.attackSpeed = 120;

    //Actions
    this.isAtacking = false;
    this.isMoving = false;
    this.impactedArrows = [];
  }

  //Render

  animate = (gameFrame) => {
    let position = Math.floor(gameFrame / orcSprites.sttaggedFrames) % 4;
    orcSprites.sX = orcSprites.sW * position;
  
    this.img.src = chooseImages.orc.walking;
    
    drawSprite(
      this.img,
      orcSprites.sX,
      orcSprites.sH * orcSprites.sY,
      orcSprites.sW,
      orcSprites.sH,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.impactedArrows.forEach(arrow => {
      arrow.drawArrowsInOrc(this.x)
    })
  };

  //Actions
  attackWarrior = (enemy, frames) => {
    if (
      this.isAtacking === true &&
      this.isMoving === false &&
      frames % this.attackSpeed === 0
    ) {
      enemy.health = enemy.health - this.strength;
    }

    if (enemy.health <= 0) {
      this.isAtacking = false;
      this.isMoving = true;
    }
  };

  moveToAtack = () => {
    if (this.isAtacking === false && this.isMoving === true) {
      this.x = this.x - this.agility;
    }
  };
}
