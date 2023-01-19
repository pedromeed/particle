var seed = Math.random() * 1643;
var t;
var num, vNum;
var radius, mySize, margin;
var sizes = [];

let colors = [];
let colors0 = "281914-1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
let colors2 = "7382ce-9fb7f4-12177d-9bb5e9-7486af".split("-").map((a) => "#" + a);
let colors3 = "82d362-5c5190-6c6dd1-3d6966-5967ca".split("-").map((a) => "#" + a);
let colors4 = "8c75ff-c553d2-2dfd60-2788f5-23054f".split("-").map((a) => "#" + a);
let colors5 = "f21252-8834f1-c4dd92-184fd3-f9fee2".split("-").map((a) => "#" + a);
let colors6 = "2E294E-541388-F1E9DA-FFD400-D90368".split("-").map((a) => "#" + a);
let colors7 = "fefefe-fffffb-fafdff-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
let colors11 = "025159-3E848C-7AB8BF-C4EEF2-A67458".split("-").map((a) => "#" + a);
let colors12 = "10454F-506266-818274-A3AB78-BDE038".split("-").map((a) => "#" + a);
let colors13 = "D96690-F28DB2-F2C9E0-89C2D9-88E8F2".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	frameRate(50);
	// pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	margin = mySize / 1200;
	createCanvas(windowWidth, windowHeight, WEBGL);
	color_setup1 = colors7;
	color_setup2 = random([colors4, colors5, colors6, colors11, colors2, colors12, colors3, colors13]);
	color_bg = "#202020";
	background(color_bg);
	// num = 50;
	num = int(random(70, 20));
	radius = mySize * 0.75;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 0.5))
	}
	t = 0;
  
}

function draw() {
	randomSeed(seed);
	background(color_bg);
  
  if (mouseX > 300) {
 background("#f72585")
 }
  
  if (mouseY > 600) {
 background("#051923")
 }
  
   //if (mouseX > 600) {
 //background("#4cc9f0")
 //}
  
   //if (mouseX > 900) {
 //background("#c200fb")
 //}
  
    if (mouseX > 1200) {
 background("#c77dff")
 }
  
 
  
  
  lights();
  rotateX(millis() /4000)
  rotateY(millis() / 2000);
  rotateZ(millis() / 2000); 
  lights(128,128,128);
  directionalLight( 100, 100, -1)
  
   fill(255,5,255,);
  stroke('red');
  sphere(100,100,100);
  
  
   if (mouseX > 300) {
     lights(128,128,128);
  directionalLight( 100, 100, -144)
 fill("#820263")
    sphere(100,100,100);
 }
  
  
    if (mouseX > 600) {
 fill("#10002b")
    sphere(100,100,100);
 }
  
  
   //  if (mouseX > 900) {
 //fill("#10002b")
    //sphere(100,100,100);
 //}
  
  
  
  if (mouseX > 1200) {
 fill("#10002b")
    sphere(100,100,100);
 }
  
   
    
  
    
  
  

	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i;
		let x = radius * sin(a + t) / random(5, 2) / 2.0;
		let y = radius * cos(a + t) / random(2, 5) / 2.0;
		v_planet[i] = createVector(x, y);
	}
	push();

	for (let q = 0; q < 1 / 5; q += 4 * random(0.01, 0.02)) {
		for (let j = 0; j < 1; j++) {

			rotateX(t / 100 + q);
			rotateY(t / 100 + q);
			rotateZ(random(TAU) + t + q);
			// noFill();
			strokeWeight(4 * random(0.2, 0.6));
			fill(color_bg);

			for (let i = 0; i < num; i += 2) {
				let d = random(radius / 2, radius / 4);
				let x_plus = 1.25 * random(-d, d) / 5;
				let y_plus = 1.25 * random(-d, d) / 5;
				let z_plus = 1.25 * random(-d, d) / 2;
				push();
				translate(v_planet[i].x, v_planet[i].y, z_plus);
				rotateX(sin(-t) / 20);
				rotateY(cos(t) / 20);
				rotateZ(sin(2 * t + q));
				stroke(random(color_setup2));
              if(mouseX > 300)
                stroke("#ffd500")
              if(mouseX > 600)
                stroke("#f72585")
              //if(mouseX > 900)
                //stroke("#f72585")
              strokeWeight(2);
              if (mouseX > 1200)
                stroke ("yellow")

				// stroke(random(colors7));
				//circle(x_plus, y_plus, random(z_plus));
				// strokeWeight(1 * random(0.2, 0.6));
				//line(x_plus, y_plus, random(-z_plus, 0) / 4, x_plus, y_plus, random(-0, z_plus) / 4);
              //sphere(random(-x_plus, 2)/ random(-0, y_plus) / 20)
              sphere(random(20))
				pop();
			}   

			for (let i = 0; i < num; i += 2) {
				let d = (1.0 + sin(t)) * random(radius / 2, radius / 1);
				let x_plus = 0.75 * random(-d, d) / 1;
				let y_plus = 0.75 * random(-d, d) / 1;
				let z_plus = 0.75 * random(-d, d) / 1;
				// noStroke();
				noStroke()
				fill(random(color_setup2))
				push();
				translate(v_planet[i].x + x_plus, v_planet[i].y + y_plus, z_plus);
				rotateX(t);
				rotateY(t);
				rotateZ(t);
              lights(128,128,128);
  directionalLight( 100, 100, -1)
              if(mouseX > 300){
                fill("#3a86ff");}
              if(mouseX > 600){
                fill("#70e000");}
              //if(mouseX > 900){
                //("#70e000");}
              if(mouseX > 1200){
                fill("#240046");}
              
				sphere(random(2,20));
				pop();
			}
		}
	}
	pop();

	t += 2 * random(0.001, 0.005);
}

