class Smokes{

    counter=0;
    smokes=[{value:10,counter:400},{value:10,counter:300},{value:10,counter:200},{value:10,counter:100},{value:10,counter:1}]

    update(){
        this.counter++;
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.filter="blur(1px)"
    
        this.smokes.forEach(smoke=>{

            if(this.counter>=smoke.counter){
                ctx.globalAlpha=30/(smoke.value*2)
                ctx.save();
                
                ctx.translate(0,-smoke.value/2);
                ctx.arc(100+smoke.value/15,100-smoke.value/15, smoke.value/20, 0, 2 * Math.PI);
                smoke.value+=Math.round(Math.random()*2);
                ctx.restore();
            }
          
        })
        
  
        ctx.fill();
        ctx.restore();
    }

    reset(){
        this.smokes=[{value:10,counter:400},{value:10,counter:300},{value:10,counter:200},{value:10,counter:100},{value:10,counter:0}]
        this.counter=0;
    }
}