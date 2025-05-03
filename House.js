class House {
  xHousePos = 0;
  yHousePos = 0;
  lineWidth = 10;
  lineCap = "round";
  scaleSize = 0.2;
  translateHouse = 1200;

  constructor() {
    this.smokes = new Smokes();
  }

  update(canvasWidth) {
    this.xHousePos -= 2 / this.scaleSize;

    if (this.xHousePos <= -2000) {
      this.xHousePos = canvasWidth / this.scaleSize + 1000;
      this.smokes.reset();
    }
  }

  draw(ctx) {
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = this.lineCap;

    ctx.save();
    ctx.scale(this.scaleSize, this.scaleSize);

    ctx.translate(this.xHousePos, this.translateHouse);
    ctx.drawImage(Assets.houseImage, 100, 180);

    this.smokes.update();
    this.smokes.draw(ctx);

    ctx.restore();
  }
}
