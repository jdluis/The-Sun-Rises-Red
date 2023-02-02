class Enemys {
  constructor() {
    //Render Positions and Size
    this.x = randomNumber(150) + 900;
    this.y = 300 + randomNumber(150);
    this.w = 60;
    this.h = 80;

    //Img
    this.img = new Image();
    this.img.src = spritesImages.orc.walking.img;

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

  animate = (gameFrame, killedCount) => {
    if (killedCount <= 10) {
      this.walkingAnimation(gameFrame);
    } else if (killedCount > 10) {
      this.runAnimation(gameFrame);
    }

    this.impactedArrows.forEach(arrow => {
      arrow.drawArrowsInOrc(this.x)
    })
  };

  walkingAnimation = (gameFrame) => {
    let position = Math.floor(gameFrame / spritesImages.orc.walking.sttaggedFrames) % 4;
    spritesImages.orc.walking.sX = spritesImages.orc.walking.sW * position;
  
    this.img.src = spritesImages.orc.walking.img;
    this.agility = 1.5;
    drawSprite(
      this.img,
      spritesImages.orc.walking.sX,
      spritesImages.orc.walking.sH * spritesImages.orc.walking.sY,
      spritesImages.orc.walking.sW,
      spritesImages.orc.walking.sH,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  runAnimation = (gameFrame) => {
    let position = Math.floor(gameFrame / spritesImages.orc.run.sttaggedFrames) % 3;
    spritesImages.orc.run.sX = spritesImages.orc.run.sW * position;
  
    this.img.src = spritesImages.orc.run.img;
    this.agility = 2.2;

    drawSprite(
      this.img,
      spritesImages.orc.run.sX,
      spritesImages.orc.run.sH * spritesImages.orc.run.sY,
      spritesImages.orc.run.sW,
      spritesImages.orc.run.sH,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

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
