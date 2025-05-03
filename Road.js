class Road {
  draw(ctx, time) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.rect(0, 350, 500, 50);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.lineDashOffset = Math.round(time / 10);
    ctx.strokeStyle = "white";
    ctx.setLineDash([20, 20]);
    ctx.lineWidth = 1;
    LineDrawer.draw(ctx, 0, 375, 500, 375);
    ctx.restore();

    ctx.save();
    ctx.lineWidth = 0.5;
    LineDrawer.draw(ctx, 0, 350, 500, 350);
    ctx.lineWidth = 10;
    LineDrawer.draw(ctx, 0, 400, 500, 400);
    ctx.restore();
  }
}
