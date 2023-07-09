class Tree{
    constructor(position,scale=1){
        this.position=position;
        this.scale=scale;
        this.xPos=0;
    }

    update(ctx){
       ctx.save();
       const reversedScale=1/this.scale;
       this.xPos+=reversedScale;
       
       if(this.xPos-ctx.canvas.width*reversedScale>50*reversedScale*2){
        this.xPos=0;
       }

       ctx.scale(this.scale,this.scale);

       ctx.translate(0,Math.abs(1-reversedScale)*this.position.y);

       ctx.translate(-this.position.x*reversedScale-50*reversedScale,0);
       ctx.translate(this.xPos,0);
    
    }

    draw(ctx){
       ctx.fillStyle="gray";
       ctx.fillRect(this.position.x,this.position.y,10,60);
       ctx.fillStyle="lightgreen";
       ctx.beginPath();
       ctx.moveTo(this.position.x-20,this.position.y);
       ctx.lineTo(this.position.x+30,this.position.y);
       ctx.lineTo(this.position.x+5,this.position.y-50);
       ctx.fill();
       ctx.restore();
    }
}