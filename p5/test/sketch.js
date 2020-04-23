let x = 0;

function setup() {
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('test');
  background(200);
}

function draw() {
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}


