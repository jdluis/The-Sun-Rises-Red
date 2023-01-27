class Enemys {
    constructor () {
        this.x = 600;
        this.y = 230;
        this.w = 200;
        this.h = 120;
        this.isAlive = true;
        this.img = new Image();
        this.img.src = '../assets/img/Orc/2_ORK/ORK_02_IDLE_000.png';
        this.strength = 1;
        this.health = 3;
        this.velocity = 1;
    }

    draw(x, y) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    attack (enemy) {
        enemy.health -= this.strength;
    }

    moveToAtack () {
        this.x = this.x - this.velocity;
    }
}
