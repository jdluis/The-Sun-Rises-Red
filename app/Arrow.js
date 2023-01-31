class Arrow {
  constructor(heroe) {
    this.heroe = heroe;
    this.x = heroe.x;
    this.y = heroe.y;
    this.w = 30;
    this.h = 10;
    this.img = new Image();
    this.img.src = "../assets/img/Arrow/Arrow.png";
    this.speed = 5;
    this.damage = 1;
    this.isShot = false;
  }

  draw = () => {
    ctx.drawImage(this.img, this.x + 35, this.y + 30, this.w, this.h);
  };

  fly = () => {
    this.x = this.x + this.speed;
  };

  renderArrow = () => {
    if (this.isShot === true) {
      this.draw();
      this.fly();
    }
  };

}
