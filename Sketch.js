function setup() {
createCanvas(720, 400); 
  noStroke();
  rectMode(CENTER);
}

function draw() {
	background(230); 
  fill(255,0,255);
  ellipse(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(0,255,255);
  var inverseX = width-mouseX;
  var inverseY = height-mouseY;
  ellipse(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
}
