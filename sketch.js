var myFont;
var mic

function preload() {
	myFont = loadFont('fonts/Viga/Viga-Regular.ttf');
  }

function setup() {
	createCanvas(1080, 1080);
	textFont(myFont);
	textSize(width/10);
	  
	mic = new p5.AudioIn()
	mic.start();
}

function draw() {

	background(0);
  
	
	var amp = mic.getLevel();

	fill(0);

	translate(width/2, height/2)
	var a = map(amp, 0, 0.2, -0.4, 0.4)
	
	textAlign(CENTER, CENTER)

	strokeWeight(amp*30)
	stroke(255)
	text("FIER·E·X·S",sin(millis()) ,0 );


}

function windowResized() {
	resizeCanvas(1080, 1080);
  }