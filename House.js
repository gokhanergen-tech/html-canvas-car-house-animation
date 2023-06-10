class House{
    xHousePos=0;
    lineWidth=10;
    lineCap="round";

    constructor(){
        this.lineDrawer=new LineDrawer();
        this.smokes=new Smokes();
    }

    update(canvasWidth){
        this.xHousePos+=2;
        if(this.xHousePos-100-canvasWidth*2===0){
            this.xHousePos=0;
            this.smokes.reset();
        }
    }

    draw(ctx){
        ctx.lineWidth=this.lineWidth;
        ctx.lineCap=this.lineCap;
       
    
        ctx.save();
        ctx.scale(0.5,0.5);
        ctx.translate(-200,200)
        ctx.translate(this.xHousePos,200)
       
        this.smokes.update();
        this.smokes.draw(ctx);
        this.lineDrawer.draw(ctx,100,100,150,50);
        this.lineDrawer.draw(ctx,110,70,110,80);
        
        this.lineDrawer.draw(ctx,150,50,200,100);
        this.lineDrawer.draw(ctx,100,100,200,100);
        this.lineDrawer.draw(ctx,100,100,100,200);
        this.lineDrawer.draw(ctx,100,200,200,200);
        this.lineDrawer.draw(ctx,200,200,200,100);
        ctx.restore();

    }
}