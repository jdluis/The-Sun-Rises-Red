class Structure {
    constructor () {
        this.img = new Image();
        this.img.src = '../assets/img/Structures/ground_decor.png';
        this.x = 0;
        this.y = 160 + 70; //heroe.y + 70
        this.w = 150;
        this.h = 100;
        this.alive = true;
    }

    draw () {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}