//An array of nice color codes we shall pick from
let niceColors = ["red", "pink", "yellow", "green", "blue"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("cyan")
  //noLoop();  //uncomment this if you DON'T want animation
}

function draw() {
  noStroke();
  let chosenColor = random(niceColors);
  fill(chosenColor);
  let size = random(20, 80);
  square(mouseX, mouseY, size);
}

//Allow clearing the canvas by clicking...
function mousePressed() {
  background(255);
}
