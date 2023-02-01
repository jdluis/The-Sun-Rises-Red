class Heroe {
  constructor() {
    //Render Positions and Size
    this.x = 70;
    this.y = floorY;
    this.w = 60;
    this.h = 80;

    //Img
    this.img = new Image();
    this.img.src = heroeSprites.sprite; //w: 1744 px | h: 1000 px

    //Skills
    this.lifes = 3;
    this.fireRatio = 1;
    this.playerSpeed = 6;

    //Actions
  }

  //render
  animate = (gameFrame) => {
    let position = Math.floor(gameFrame / heroeSprites.sttaggedFrames) % 4;
    heroeSprites.sX = heroeSprites.sW * position;

    drawSprite(
      this.img,
      heroeSprites.sX,
      heroeSprites.sH * heroeSprites.sY,
      heroeSprites.sW,
      heroeSprites.sH,
      this.x,
      this.y,
      this.w,
      this.h
    );
  };

  animateAtack = () => {};

  hurtAnimation = () => {};

  diedAnimation = () => {};

  //actions
  moveUp = () => {
    if (this.y > topLimit) {
      this.y = this.y - this.playerSpeed;
    }
  };

  moveDown = () => {
    if (this.y < bottomLimit) {
    this.y = this.y + this.playerSpeed;
    }
  };

  shootDamage = (arrow, objetive) => {
    objetive.health = objetive.health - arrow.damage;
  };

  lostLife = () => {
    this.lifes = this.lifes - 1;
  };

  shoot = () => {
    if (alreadyShoot === false) {
      const wait = setInterval(() => {
        alreadyShoot = false;
        game.createArrows();
        clearInterval(wait);
      }, 500);
      alreadyShoot = true;
    }
  };
}
