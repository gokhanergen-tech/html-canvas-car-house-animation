class Sky{
    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="skyblue";
        ctx.moveTo(0,100);
        ctx.lineTo(0,0);
        ctx.lineTo(500,0);
        ctx.lineTo(500,100);
        ctx.fill();
        ctx.restore();
    }
}