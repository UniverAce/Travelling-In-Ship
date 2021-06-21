var ship,ship_moving,sea;
var seaImage;

function preload(){

  
  
  ship_moving = loadAnimation("ship-1.png","ship-2.png");
  seaImage = loadImage("sea.png")
  
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,180,400,20);
  sea.addImage(seaImage);
  
  ship=createSprite(200,210,20,50);
  ship.addAnimation("moving", ship_moving);
  edges= createEdgeSprites();
  
  ship.scale=0.3;
  
  sea.velocityX=-3
  
}

function draw() {
  background("blue");
  
  if (sea.x<0) {
     sea.x=sea.width/2
  }
 
  drawSprites();
}