class Smokes {
  counter = 0;
  smokes = [...Array(5).keys()].map((i) => new Smoke(10, i * 100));

  update() {
    this.counter++;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.filter = "blur(1px)";

    this.smokes.forEach((smoke) => {
      smoke.update();
      smoke.draw(ctx, this.counter);
    });

    ctx.fill();
    ctx.restore();
  }

  reset() {
    this.smokes.forEach((smoke, i) => {
      smoke.value = 10;
    });

    this.counter = 0;
  }
}
