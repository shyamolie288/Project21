var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,50,50);
  wall  = createSprite(200,200,thickness,height/2);
  bullet.velocityX = speed;
  thickness = random(22,83);
}



function draw() {
  background(255,255,255);  
  drawSprites();
 

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  
  bullet  = (0.5 * weight * speed* speed)/22509;
  if (deformation>180)
  {
       bullet.shapeColor = color(255,0,0);
  }

  if(deformation<180 && deformation>100)
  {
    bullet.shapeColor=color(230,230,0);
  }

  if(deformation<100)
{ 
    bullet.shapeColor=color(0,225,0);
}
 

}
}

function hasCollided(lbullet,lwall)
{
    bulletRighrEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>= wallLeftEdge)
    {
       return true
    }
    return false;

    if(hasCollided(bullet,wall))
    {
     
      var damage= 0.5 * weight*speed*speed/(thickness * thickness*thickness);
    }
    if(damagte>10){
      wall.shapecolor = color(255,0,0);
    }
}

if (damage<10){
  wall.shapecolor = color(0,255,0);
}



