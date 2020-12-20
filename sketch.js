var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1000,400);

  speed = random(223,321);
  weight = random(30,52);
 //weight =32;
  bullet = createSprite(50,200,30,10);
  bullet.shapeColor ="white";
  bullet.debug = true;

  thickness = random(22,83);
  //thickness = 40;
  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor=color('blue');
  wall.debug = true;
  bullet.velocityX = 223;
  console.log("Speed = "+speed);

}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    
    bullet.velocityX = 0;
    //bullet.x = wall.x-wall.width;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log("Touching ......"+ damage);
    if(damage < 10){
      console.log("Touching ...... less than"+ damage);
      wall.shapeColor =color('green');
    }
    else {
      wall.shapeColor ="red";
    }
   
    
  }
 
  drawSprites();
}