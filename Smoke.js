class Smoke {
  value;
  maxSmokeCount;

  constructor(value, maxSmokeCount) {
    this.value = value;
    this.maxSmokeCount = maxSmokeCount;
  }

  update() {
    this.value += Math.round(Math.random() * 2);
  }

  draw(ctx, currentCounter) {
    if (currentCounter >= this.maxSmokeCount) {
      ctx.globalAlpha = 30 / (this.value * 2);
      ctx.save();

      ctx.translate(0, -this.value / 2);
      ctx.arc(
        100 + this.value / 15,
        100 - this.value / 15,
        this.value / 20,
        0,
        2 * Math.PI
      );
      this.value += Math.round(Math.random() * 2);
      ctx.restore();
    }
  }
}
