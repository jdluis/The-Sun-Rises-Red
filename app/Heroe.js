class Heroe {
  constructor() {
    this.x = 70;
    this.y = floorY;
    this.w = 60;
    this.h = 80;
    this.img = new Image();
    this.img.src = heroeSprites.iddle; //w: 1744 px | h: 1000 px
    this.isAlive = true;
    this.lifes = 3;
    this.fireRatio = 1;
    this.playerSpeed = 6;
  }

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
 
  fireArrow = (arrow, objetive) => {
    objetive.health = objetive.health - arrow.damage;
  };

  hurtAnimation = () => {};

  diedAnimation = () => {};
}
