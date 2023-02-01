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

  collisionOutOfMap = (gameOver) => {
    this.horde.forEach((orc) => {
      if (orc.x <= 0) {
        this.heroe.lostLife();
        if (this.heroe.lifes <= 0) {
          gameOver();
        }
      } else {
      }
    });
  };

  collisionArrow = () => {
    this.arrows.forEach((arrow, indexArrow) => {
      this.horde.forEach((orc, index) => {
        if (
          arrow.x < orc.x + orc.w / 2 &&
          arrow.x + arrow.w > orc.x &&
          arrow.y < orc.y + orc.h &&
          arrow.h + arrow.y > orc.y
        ) {
          this.heroe.shootDamage(arrow, this.horde[index]);
          arrow.x = orc.x - 30; //ajuste al cuerpo
          orc.impactedArrows.push(arrow); //TESTING
          arrow.cleanArrow(indexArrow);
        } else {
          if (arrow.x > canvas.width) {
            arrow.cleanArrow(indexArrow);
          }
        }
      });
    });
  };
}
