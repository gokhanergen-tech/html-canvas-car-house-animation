class Tree {
  position;
  scale;

  generateIntegerPos(posMin, posMax) {
    return parseInt(randomNumber(posMin, posMax));
  }

  randomReset(canvasWidth) {
    this.scale = randomNumber(0.5, 1);
    this.xPos =
      this.generateIntegerPos(canvasWidth, canvasWidth + 1000) / this.scale;
    this.position = {
      y: this.generateIntegerPos(100, 250),
      x: this.xPos,
    };
  }

  update(ctx) {
    const canvasWidth = ctx.canvas.width;

    if (!this.position) this.randomReset(canvasWidth);

    this.position.x -= 2 / this.scale;

    if (this.position.x + 100 < 0) {
      this.randomReset(canvasWidth);
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.scale(this.scale, this.scale);

    ctx.drawImage(Assets.treeImage, this.position.x, this.position.y, 100, 100);

    ctx.restore();
  }
}
