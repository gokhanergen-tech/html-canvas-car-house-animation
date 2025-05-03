class GreenTerrain {
  constructor() {
    this.trees = [...Array(1000).keys()].map(() => new Tree());
    this.house = new House();
  }

  update(canvasWidth) {
    this.house.update(canvasWidth);
  }

  draw(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.moveTo(0, 350);
    ctx.lineTo(0, 100);
    ctx.lineTo(500, 100);
    ctx.lineTo(500, 350);
    ctx.fill();
    ctx.restore();

    this.trees.forEach((tree) => {
      tree.update(ctx);
      tree.draw(ctx);
    });

    this.house.draw(ctx);
  }
}
