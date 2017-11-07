var input, button, greeting, r, g, b;

function setup() {

  // create canvas
  createCanvas(1024, 768);
  
  r = random(255);
  g = random(255);
  b = random(255);
    
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your favorite color?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('No way I love '+name+' too !');
  input.value('');

  for (var i=0; i<15; i++) {
    push();
    stroke(0,0,0);
    fill(r, g, b, 127);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

function mousePressed() {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
}

