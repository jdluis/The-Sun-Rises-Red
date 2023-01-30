class Collisions {
  constructor(horde, heroe, arrow) {
    this.heroe = heroe;
    this.horde = horde;
    this.arrow = arrow;
  }
  collisionHeroe = (gameOver) => {
    this.horde.forEach((orc) => {
      if (
        orc.x < this.heroe.x + this.heroe.w / 2 &&
        orc.x + orc.w > this.heroe.x &&
        orc.y < this.heroe.y + this.heroe.h &&
        orc.h + orc.y > this.heroe.y
      ) {
        orc.isMoving = false;
        orc.isAtacking = true;
        gameOver();
      } else {
        orc.isAtacking = false;
        orc.isMoving = true;
      }
    });
  };

  collisionArrow = () => {
    this.horde.forEach((orc) => {
      if (
        this.arrow .x < orc.x + orc.w / 2 &&
        this.arrow .x + this.arrow .w > orc.x &&
        this.arrow .y < orc.y + orc.h &&
        this.arrow .h + this.arrow .y > orc.y
      ) {
        console.log("diana");
        this.heroe.fireArrow(this.arrow, orc);
        this.arrow.x = orc.x -30
      } else {
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
}
