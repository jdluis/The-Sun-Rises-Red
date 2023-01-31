class Arrow {
  constructor(heroe) {
    //Render Positions and Size
    this.heroe = heroe;
    this.x = heroe.x;
    this.y = heroe.y;
    this.w = 30;
    this.h = 10;

    //Img
    this.img = new Image();
    this.img.src = "../assets/img/Arrow/Arrow.png";

    //Skills
    this.speed = 5;
    this.damage = 1;

    //Actions
    this.isShot = false;
  }

  //Render
  draw = () => {
    ctx.drawImage(this.img, this.x + 35, this.y + 30, this.w, this.h);
  };

  renderArrow = () => {
    if (this.isShot === true) {
      this.draw();
      this.fly();
    }
  };

  //Actions
  fly = () => {
    this.x = this.x + this.speed;
  };
}