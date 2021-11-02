let m;

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
}

function draw() {
  background(220);
  m.update();
  m.show();

  if (mouseIsPressed) {
    //make attract to mouse position
    let mousePos = createVector(mouseX, mouseY);
    let f = p5.Vector.sub(mousePos, m.pos);
    m.applyForce(f);
  }
}
