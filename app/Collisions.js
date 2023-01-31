class Collisions {
  constructor(horde, heroe, arrows) {
    this.heroe = heroe;
    this.horde = horde;
    this.arrows = arrows;
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
    this.arrows.forEach(arrow => {
        this.horde.forEach((orc, index) => {
          if (
            arrow.x < orc.x + orc.w / 2 &&
            arrow.x + arrow .w > orc.x &&
            arrow.y < orc.y + orc.h &&
            arrow.h + arrow .y > orc.y
          ) {

            this.heroe.shootDamage(arrow, this.horde[index]);
            arrow.x = orc.x -30;
            this.arrows.shift(arrow);
          } else {
            if (arrow.x > canvas.width) {
                //logica para quitar flechas
            }
          }
        });
    })
  };
}