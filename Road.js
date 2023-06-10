class Road{

  

    draw(ctx,time){
    
      ctx.save();
      ctx.lineDashOffset=Math.round(time/10);

      ctx.setLineDash([20,20]);
      
      ctx.lineWidth=1;

   
     
      ctx.beginPath();
      ctx.moveTo(0,375);
      ctx.lineTo(500,375);
      ctx.stroke();
      ctx.restore();
      
      ctx.save();
       ctx.beginPath();
       ctx.lineWidth=0.5;
       ctx.moveTo(0,350);
       ctx.lineTo(500,350);
       ctx.stroke();
      
       ctx.lineWidth=10;
       ctx.beginPath();
       ctx.moveTo(0,400);
       ctx.lineTo(500,400);
       ctx.stroke();
 
     
       
      ctx.restore();
    }
}