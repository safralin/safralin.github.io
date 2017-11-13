var input, button, greeting, r, g, b, x, y;

function setup() {

  // create canvas
  createCanvas(1024, 768);
    
  x = width / 2;
  y = height;
  
  r = random(255);
  g = random(255);
  b = random(255);
    
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h1', 'Hi, what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(75);
}

function greet() {
  var name = input.value();
  greeting.html('Hi '+name+' !');
  input.value('');

  for (var i=0; i<15; i++) {
    push();
    stroke(0,0,0);
    fill(r, g, b, 127);
    translate(random(width), random(height));
    rotate(random(3*PI));
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

