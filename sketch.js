let x, y;
function setup() {
  createCanvas(400, 400, WEBGL);
  x = 600;
  y = 0;
  z = 600;
}

function draw() {
  background(0);
 
  x = x - 1;
  y = y + 1;
  z = z - 2;
  
  if (x < 0) {
    x = 600; 
  }
  if (y > 600) {
    y = 0
  }
  if (z < 0) {
    z = 600
  }
  noFill();
  strokeWeight(1);
  stroke(139);
  ellipse(0, 0, x);
  
  noFill();
  strokeWeight(2);
  stroke(139);
  ellipse(0, 0, y);
  
  
  noFill();
  strokeWeight(5);
  stroke(139);
  circle(0, 0, 200);
  
  noFill();
  strokeWeight(0.8);
  stroke(139);
  circle(0, 0, z);
  
  noFill();
  strokeWeight(1);
  rotateX(millis() / 20000);
  rotateY(millis() / 20000);
  rotateZ(millis() / 20000);
  stroke(255);
  noFill();
  push();
  translate(0, 0);
  sphere(90);
  pop();

  
  fill(255);
  sphere(10);
  
}