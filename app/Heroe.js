class Heroe {
  constructor() {
    //Render Positions and Size
    this.x = 70;
    this.y = floorY;
    this.w = 60;
    this.h = 80;

    //Img
    this.img = new Image();
    this.img.src = heroSelected.img;

    //Skills
    this.lifes = 3;
    this.fireRatio = 1;
    this.playerSpeed = 6;

    //Actions
  }

  //render
  animate = (gameFrame) => {

    if (heroeIsFemale === false) {
      let position = Math.floor(gameFrame / spritesImages.maleHero.iddle.sttaggedFrames) % 4;
      spritesImages.maleHero.iddle.sX = spritesImages.maleHero.iddle.sW * position;
  
      drawSprite(
        this.img,
        spritesImages.maleHero.iddle.sX,
        spritesImages.maleHero.iddle.sH * spritesImages.maleHero.iddle.sY,
        spritesImages.maleHero.iddle.sW,
        spritesImages.maleHero.iddle.sH,
        this.x,
        this.y,
        this.w,
        this.h
      );
    } else {
      let position = Math.floor(gameFrame / spritesImages.femaleHero.iddle.sttaggedFrames) % 4;
      spritesImages.femaleHero.iddle.sX = spritesImages.femaleHero.iddle.sW * position;
  
      drawSprite(
        this.img,
        spritesImages.femaleHero.iddle.sX,
        spritesImages.femaleHero.iddle.sH * spritesImages.femaleHero.iddle.sY,
        spritesImages.femaleHero.iddle.sW,
        spritesImages.femaleHero.iddle.sH,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
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

  winLife = () => {
    this.lifes++;
  }

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
