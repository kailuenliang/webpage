let count = 0;
var canvas;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  console.log("resized");
}

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(255);
}

function draw() {
  frameRate(24);
  // put drawing code here

  noStroke();

  var spaceX = map(mouseX,0,width,0,50);



  if((count%2) == 0){
    for(var x = 0; x < width; x+= random(200)) { 
      // avoid calling no stroke more often than needed
      noStroke();
      fill(0,0,random(255),random(200));
      ellipse(x,int(random(height)),random(7));

      //  stroke(255,random(10));
      //  line(0,mouseY,mouseX,height/2);

    }
    for(var y = 0 ; y < height; y+=random(200)){
      noStroke();
      fill(0,random(100));
      ellipse(int(random(width)),y,int(random(2)));
    }
  } else {
    for(var x = 0; x < width; x+=100){
      noStroke();
      fill(0,random(200));
      rect(x,int(random(height)),int(random(20)),2);
    //  stroke(200,150,random(0,100),2);
      //line(width,mouseY,mouseX,height/2);
    //rect(random(width),x,random(50));
    }
  }

  var ranNum = int(random(200));
  if(ranNum == 6){
    background(255);

  }
  if(ranNum < 10){

    count++;
  }

}

function mouseClicked() {

    background(255,200);

}
