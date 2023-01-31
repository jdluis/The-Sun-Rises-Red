class Enemys {
  constructor() {
    //Render Positions and Size
    this.x = randomNumber(150) + 900;
    this.y = 300 + randomNumber(150);
    this.w = 60;
    this.h = 80;

    //Img
    this.img = new Image();
    this.img.src = "../assets/img/Orc/orc.png";

    //Skills
    this.strength = 1;
    this.health = 3;
    this.agility = 0.6; //.4 default
    this.attackSpeed = 120;

    //Actions
    this.isAtacking = false;
    this.isMoving = false;
  }

  //Render
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
