function preload(){

}

function setup(){
canvas = createCanvas(300,300)
canvas.center();
}

function draw(){
background(255, 255, 255);
rect(0, 0, 50, 50);
rect(250, 0, 50, 50);
rect(0, 250, 50, 50);
rect(250, 250, 50, 50);
line(250,0,0,0)
line(0,0,0,250)
line(300,250,300,0)
line(0,300,250,300)
circle(150,150,100,100)
}