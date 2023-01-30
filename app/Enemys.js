class Enemys {
  constructor() {
    this.x = 600;
    this.y = floorY;
    this.w = 60;
    this.h = 80;
    this.isAlive = true;
    this.img = new Image();
    this.img.src = "../assets/img/Orc/orc.png";
    this.strength = 1;
    this.health = 3;
    this.agility = 1; //.4 default
    this.attackSpeed = 120;
    this.isAtacking = false;
    this.isMoving = false;
    this.randomX = randomNumber(20);
  }

  draw = () => {
    ctx.drawImage(
      this.img,
      this.x + this.randomX,
      this.y,
      this.w,
      this.h
    );
  };

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
