var hue;
var rainbow = true;
var rate = 1;
var swi = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(360);
  hue = 0;
}

function draw() {
  // background(220);
}

function mouseMoved() {
  if (rainbow + swi) {
    if (hue > 360) {
      hue = 0;
}
    else {
    hue+=rate;}

  }


  colorMode(HSL, 360,);
  noStroke();
  fill(hue, 350, 220, 5 );
  ellipse(mouseX, mouseY, 700 , 700);
}


function mouseDragged() {
  if (mouseIsPressed) {
    if (hue > 360) {
      hue = 0;
      swi= tr;
      hue+=rate*20;
}
    else {
    hue+=rate*20;}

  }


  colorMode(HSL, 360,);
  noStroke();
  fill(360);
  ellipse(mouseX, mouseY, 700 , 700);
}
