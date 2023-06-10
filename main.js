const canvas=document.getElementById("canvas");


if(canvas.getContext){
    const ctx=canvas.getContext("2d");
   
    const road=new Road();
    const car=new Car();
    const house=new House();
    const greenTerrain=new GreenTerrain();
    const sky=new Sky();


    const animate=(time)=>{
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.globalAlpha=0.2;
    
        greenTerrain.draw(ctx);
        sky.draw(ctx);

        house.update(canvas.width);
        house.draw(ctx);

        road.draw(ctx,time);
        car.draw(ctx);

        window.requestAnimationFrame(animate);
    }

    animate();
 
   
}