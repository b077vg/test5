let w=410,h=728; //only 10 
let img;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	img = loadImage("data/picture1/Movie100.jpg");
}

function draw() {
  background(200);
image(img, 0, 0,w,h); 
}
