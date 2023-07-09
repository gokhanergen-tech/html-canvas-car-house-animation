class GreenTerrain{
    
    constructor(){
    
        this.trees=[
            new Tree({
                x:100,y:250
            },0.2),
            new Tree({
                x:150,y:250
            },0.5),
            new Tree({
                x:100,y:200
            },0.2),
            new Tree({
                x:23,y:250
            },1),
            new Tree({
                x:189,y:250
            },0.8)
        ]
        this.house=new House();
    }

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
        this.house.update(ctx.canvas.width);
        this.house.draw(ctx);
        this.trees.forEach(tree=>{
            tree.update(ctx);
            tree.draw(ctx);
        })

     
    }
}