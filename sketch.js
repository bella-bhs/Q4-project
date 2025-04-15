let x; 
let y;
let player1Score = 0;
let player2Score = 0;
function setup() {
  createCanvas(800, 400,);
  x =390
  y = 80
}

function draw() {
  background('#0082cb');
  
 
  textSize(20);
  
  text("player 1: " +player1Score, 10, 20);
  text("player 2: " + player2Score,400,20)
  
 
  fill('white');
  line(385,0,388,400)
  
       
  
  stroke(255);
  strokeWeight(1);

  
  fill('rgb(138,253,104)');
  circle(x,y, 80);
  
  fill('black')
  rect(1,150,40,150)

  rect(758,100,40,150)
  
  noFill();
  circle(x-20,y-5,13)
  circle(x+20,y-10,13)
  circle(x+10,y+20,13)
  circle(x-7,y-30,13)
 
 
  
  
}
