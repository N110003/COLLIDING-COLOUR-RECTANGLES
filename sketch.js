var movingRect, fixedRect;

function setup() {
  createCanvas(1000,800);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "red";
}

function draw() {
  background("blue");  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2  + movingRect.width / 2
    && movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2
    && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2){
      movingRect.shapeColor = "black";
      fixedRect.shapeColor = "black";
    }else{
      movingRect.shapeColor = "orange";
      fixedRect.shapeColor = "red";
    }

  drawSprites();
}