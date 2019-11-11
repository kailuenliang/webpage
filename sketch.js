

// how does mouseIsPressed work for mobile?
// maybe use accelerationX or touch

var count = 0;
var canvas;

var tileCount = 10;
var actRandomSeed = 0; // noise seed

var rectSize = 2;

var randomRange =5;


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  console.log("resized");
}
function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth,windowHeight);

  var x = (windowWidth - width) / 2;
var y = (windowHeight - height) / 2;
  //canvas.position(0, 0); dont want absolute position

  canvas.style('display', 'block'); //this fixes the issue i was having with positioning....or maybe it was taking out the absolute position(0,0)
  //canvas.position(0,0);

  canvas.style('z-index','-1');
  //canvas.parent("home-container");
  background(0); // like the black background
}



function draw() {
// background(0);

  strokeWeight(1);

  var c1 = color(200);
  var c2 = color(255);
  var c3 = color(0);

  randomSeed(actRandomSeed);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = gridX * width / tileCount;
      var posY = gridY * height / tileCount;

      var shiftX = mouseY / tileCount * random(-randomRange, randomRange);
      var shiftY = mouseX / tileCount * random(-randomRange, randomRange);
      var shiftX2 = mouseX / tileCount * random(-randomRange, randomRange);
      var shiftY2 = mouseY / tileCount * random(-randomRange, randomRange);
      var shiftX3 = mouseX / tileCount * random(-randomRange, randomRange);
      var shiftY3 = mouseY / tileCount * random(-randomRange, randomRange);
      var shiftX4 = mouseX / tileCount * random(-randomRange, randomRange);
      var shiftY4 = mouseY / tileCount * random(-randomRange, randomRange);
      var shiftX5 = mouseX / tileCount * random(-randomRange, randomRange);
      var shiftY5 = mouseY / tileCount * random(-randomRange, randomRange);
      var shiftX6 = mouseX / tileCount * random(-randomRange, randomRange);
      var shiftY6 = mouseY / tileCount * random(-randomRange, randomRange);


      var toggle = int(random(0,3));

      if(toggle == 0){
        fill(c1);
        stroke(255);
      }

      if(toggle == 1){
         fill(c2);
        //stroke(c1);
      }

      if(toggle == 2){
         fill(c3);
        //stroke(c2);
      }


      push();
      translate(posX,posY);

      beginShape();
      vertex(shiftX,shiftY);
      vertex(rectSize + shiftX2,shiftY2);
      vertex(rectSize + shiftX3,rectSize + shiftY3);
      vertex(shiftX4, rectSize + shiftY4);
      vertex(rectSize + shiftX5 -20, rectSize + shiftY5);
            vertex(shiftX4, rectSize + shiftY4);
      vertex(shiftX6 ,shiftY6);
      endShape();
      pop();

      fill(255);
      ellipseMode(CENTER);
      //strokeWeight(0.5);
      //stroke(183,87,200);
      noStroke();
      ellipse(posX+tileCount*2,posY + tileCount*2,10,10);

    }
  }

  rectMode(CENTER);
  noFill();
  strokeWeight(30);
  stroke(255);
  rect(width/2,height/2,width/1.5,height/1.5);

}

function mousePressed() {
  actRandomSeed = random(100000);

clear(); //clear the canvas....

 // background(0);
}
