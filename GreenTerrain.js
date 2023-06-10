class GreenTerrain{
    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="green";
        ctx.moveTo(0,350);
        ctx.lineTo(0,100);
        ctx.lineTo(500,100);
        ctx.lineTo(500,350);
        ctx.fill();
        ctx.restore();
    }
}