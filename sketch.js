var bullet, wall, thickness;
var speed, weight;
var bulletSound;

function preload()
{
	bulletSound=loadSound("GunShotSound.mp3");
}

function setup() {
  createCanvas(1200,400);
  speed=random(223, 321);
  weight=random(20, 42);
  thickness=random(22, 83);
  
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor=("white");
  
  
  wall=createSprite(1000, 200, thickness, height/2);
  wall.shapeColor=("black");
}

function draw() {
  background("blue"); 
  
if(wall.x-bullet.x<(bullet.width+bullet.height)/2){
  bullet.SetVelocityX=0;
  var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
  
  
  if(damage<=10){
    bullet.velocityX=0;
    wall.shapeColor=("green");
    text("MATERIAL ACCEPTED!", 950, 50);
    }

  if(damage>=10){
    bullet.VelocityX=0;
    wall.shapeColor=("red");
    text("MATERIAL REJECTED!", 950, 50);
  }

  
  
}

  drawSprites();
}

function isTouching(bullet,wall){
  if(bullet.x - wall.x < bullet.width/2+  wall.width/2
    && wall.x - bullet.x < bullet.width/2 + wall.width/2
     && bullet.y - wall.y < bullet.height/2 + wall.height/2
     && wall.y - bullet.y < bullet.height/2 + wall.height/2){
  return true;
  bullet.SetVelocityX=0;
  }
  else{
    return false;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW && bullet.x<1200) {
    bullet.velocityX=speed;
    bulletSound.play();
 }
 
}