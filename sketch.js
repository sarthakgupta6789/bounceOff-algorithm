var mr;
var fr;


function setup() {
  createCanvas(1200,800);
  mr=createSprite(400, 200, 80,30);
  mr.shapeColor="green";
  mr.debug=true;
  fr=createSprite(200, 200, 50,80);
  fr.shapeColor="green";
 fr.debug=true;
 mr.velocityX=-10;
 fr.velocityY=10;
}

function draw() {
  background(0,0,0);  
 bounceOff(mr,fr);
 
  
  

  drawSprites();
}
function bounceOff(o1,o2){
  
  if(o1.x-o2.x<o2.width/2+o1.width/2&&
    o2.x-o1.x<o2.width/2+o1.width/2){
    o1.velocityX=o1.velocityX*(-1);
    o2.velocityX=o2.velocityX*(-1);  
    }
    if(o1.y-o2.y<o2.height/2+o1.height/2&&
    o2.y-o1.y<o2.height/2+o1.height/2){
  o1.velocityY=o1.velocityY*(-1);
  o2.velocityY=o2.velocityY*(-1);
 }
}