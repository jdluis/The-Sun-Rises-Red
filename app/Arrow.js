class Arrow {
    constructor (heroeX,heroeY) {
        this.dX = heroeX;
        this.dY = heroeY;
        this.dW = 20;
        this.dW = 5;
        this.img = new Image();
        this.src = ''
    }

    draw = () => {
        ctx.drawImage(
          this.img,
          this.dX,
          this.dY,
          this.w,
          this.h
        );
      };
}