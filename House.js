class House {
  xHousePos = 0;
  yHousePos = 0;
  lineWidth = 10;
  lineCap = "round";
  scaleSize = 0.2;
  houseWidth = 100;
  translateHouse = 225;

  constructor() {
    this.smokes = new Smokes();
  }

  update(canvasWidth) {
    this.xHousePos -= 2 / this.scaleSize;

    if (this.xHousePos + this.houseWidth / this.scaleSize <= 0) {
      this.xHousePos =
        canvasWidth / this.scaleSize + this.houseWidth + 1000 * 10;
      this.smokes.reset();
    }
  }

  draw(ctx) {
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = this.lineCap;

    ctx.save();
    ctx.scale(this.scaleSize, this.scaleSize);
    ctx.translate(-this.translateHouse, this.translateHouse);
    ctx.translate(this.xHousePos, this.translateHouse);

    this.smokes.update();
    this.smokes.draw(ctx);

    ctx.drawImage(Assets.houseImage, 100, 180 / this.scaleSize);

    ctx.restore();
  }
}
