

function setup() {
  createCanvas(800,1600);

 hr = hour();
mn = minute();
sc = second();

  
  


}


function draw() {
  background(178,190,181);  
  scAngle = map(sc,0,60,0,360);
  fill(255, sc, 0);
  push();
 
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7)
  line(400,800,100,0)
  
  pop();
 
 
 
  
  
  drawSprites();
}