var bullet, wall;

var speed, weight, thickness;

function setup() {
  createCanvas(1200,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
   
  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1100, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0); 

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage > 10){
      wall.shapeColor = "red";
   }
   else{
     wall.shapeColor = "green";
   }
  }

  drawSprites();
}

function hasCollided(b,w){
  if(b.x + b.width >= w.x){
    return true;
  }
  return false;
}
