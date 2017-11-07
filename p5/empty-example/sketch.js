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

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    stroke(r, g, b);
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

