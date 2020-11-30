var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(600, 300, 50, 50);


}
function draw() {
  background(255,255,255); 
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 ) {
   moving.shapeColor = "blue";
   fixed.shapeColor = "yellow";
  }else {
    moving.shapeColor = ("grey");
    fixed.shapeColor = ("grey");
  }

  drawSprites();
}