class Warrior {
    constructor () {
        this.x = 120;
        this.y = 220;
        this.w = 200;
        this.h = 120;
        this.isAlive = true;
        this.img = new Image();
        this.img.src = '../assets/img/Warriors/1_KNIGHT/Knight_01__IDLE_000.png';
        this.strength = 1;
        this.health = 3;
    }

    draw(x, y) {
        ctx.drawImage(this.img,this.x + x,this.y + y, this.w, this.h);
    }

    attackAnimation () {

    }

    defendAnimation () {
        
    }

    attack (enemy) {
        enemy.health -= this.strength;
    }

    died () {
        if(this.health <= 0) {
            console.log("Muere Warrior")
        }
    }
}
