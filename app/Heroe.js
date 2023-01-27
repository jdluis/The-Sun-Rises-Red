class Heroe {
  constructor() {
      this.x = 10;
      this.y = 160;
      this.w = 200;
      this.h = 120;
      this.img = new Image();
      this.img.src = "../assets/img/heroe/iddle1/Elf_01__IDLE_000.png";
      this.iddleImgs = [
        "../assets/img/heroe/iddle1/Elf_01__IDLE_000.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_001.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_002.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_003.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_004.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_005.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_006.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_007.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_008.png",
        "../assets/img/heroe/iddle1/Elf_01__IDLE_009.png",
      ];
    this.isAlive = true;
    this.lifes = 3;
    this.fireRatio = 1;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  fireArrow() {}

  drawArray(img) {
    this.img.src = img;
  }

/*   iddleAnimation() { //dident work
    switch (image) {
      case this.iddleImgs[0]:
        this.drawArray(this.iddleImgs[1]);
        break;
      case this.iddleImgs[1]:
        this.drawArray(this.iddleImgs[2]);
        break;
      case this.iddleImgs[2]:
        this.drawArray(this.iddleImgs[3]);
        break;
      case this.iddleImgs[3]:
        this.drawArray(this.iddleImgs[4]);
        break;
      case this.iddleImgs[4]:
        this.drawArray(this.iddleImgs[5]);
        break;
      case this.iddleImgs[5]:
        this.drawArray(this.iddleImgs[6]);
        break;
      case this.iddleImgs[6]:
        this.drawArray(this.iddleImgs[7]);
        break;
      case this.iddleImgs[7]:
        this.drawArray(this.iddleImgs[8]);
        break;
      case this.iddleImgs[8]:
        this.drawArray(this.iddleImgs[9]);
        break;
      case this.iddleImgs[9]:
        this.drawArray(this.iddleImgs[0]);
        break;
    }
  } */
  /*
    hurtAnimation () {

    }

    diedAnimation () {

    } 
    */
}
