class Arrow {
  constructor(heroe) {
    //Render Positions and Size
    this.x = heroe.x;
    this.y = heroe.y + 30;
    this.w = 30;
    this.h = 10;

    //Img
    this.img = new Image();
    this.img.src = "./assets/img/Arrow/Arrow.png";

    //Skills
    this.speed = arrowsSpeed;
    this.damage = arrowsDamage;

    //Actions
    this.isShot = false;
  }

  //Render
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  drawArrowsInOrc = (orcX) => {
    ctx.drawImage(this.img, orcX, this.y, this.w, this.h);
  }

  renderArrow = () => {
    if (this.isShot === true) {
      this.draw();
      this.fly();
    }
  };

  cleanArrow = (arrow) => {
    game.arrows.splice(arrow, 1);
  }

  //Actions
  fly = () => {
    this.x = this.x + this.speed;
  };

  //Skills

  upgradeSpeed = () => {
    this.speed++
  }

  upgradeDamage = () => {
    this.damage++
  }
}
