class Arrow {
  constructor(heroeX, heroeY) {
    this.x = heroeX;
    this.y = heroeY;
    this.w = 30;
    this.h = 10;
    this.img = new Image();
    this.img.src = "../assets/img/Arrow/Arrow.png";
    this.speed = 1;
    this.damage = 1;
  }

  draw = () => {
    ctx.drawImage(this.img, this.x + 35, this.y + 30, this.w, this.h);
  };

  fly = () => {
    this.x++;
  }

  renderArrow = () => {
    this.arrow.draw();
    this.arrow.fly();
  }


}
