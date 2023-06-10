class Car{
   
    lineWidth=2;


    draw(ctx){
      
        ctx.save();
       
    
        ctx.transform(0.5, 0, 0, 0.5, 0,0);
        ctx.transform(1, 0, 0, 1, 20, 375);

        ctx.beginPath();
  
        ctx.lineWidth=this.lineWidth;
        ctx.globalAlpha=1;
        ctx.moveTo(20,375);
        ctx.lineTo(30,360);
        ctx.lineTo(50,360);
        ctx.lineTo(70,375);
        ctx.lineTo(80,375);
        ctx.lineTo(80,385);
        ctx.lineTo(70,385);
        ctx.arc(66,385, 4, 0, 2 * Math.PI);
        ctx.lineTo(40,385);
        ctx.arc(36,385, 4, 0, 2 * Math.PI);
        ctx.lineTo(10,385);
        ctx.lineTo(10,375);
        ctx.lineTo(20,375);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}