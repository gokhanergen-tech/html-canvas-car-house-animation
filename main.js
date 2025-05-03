const canvas = document.getElementById("canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  const road = new Road();
  const car = new Car();
  const sky = new Sky();

  const greenTerrain = new GreenTerrain();

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  tree = new Image();
  house = new Image();

  const animate = (time) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    greenTerrain.update(ctx.canvas.width);

    sky.draw(ctx);
    greenTerrain.draw(ctx);

    road.draw(ctx, time);
    car.draw(ctx);

    window.requestAnimationFrame(animate);
  };

  Promise.all([
    loadImage("./assets/tree.png"),
    loadImage("./assets/house.png"),
  ]).then(([tree, house]) => {
    Assets.treeImage = tree;
    Assets.houseImage = house;
    window.requestAnimationFrame(animate);
  });
}
