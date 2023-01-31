class Warrior {
  constructor() {
    //Render Positions and Size
    this.x = 120;
    this.y = floorY;
    this.w = 200;
    this.h = 120;

    //Img
    this.img = new Image();
    this.img.src = "../assets/img/Warriors/1_KNIGHT/Knight_01__IDLE_000.png";

    //Skills
    this.strength = 1;
    this.health = 9;
  }

  //Render
  draw = (x, y) => {
    ctx.drawImage(this.img, this.x + x, this.y + y, this.w, this.h);
  }

  //Actions
  attack = (enemy) => {
    enemy.health -= this.strength;
  };
}
