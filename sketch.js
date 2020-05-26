const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var bg;
var ball;
var bowl;


function preload(){
  bg = loadImage("images/mygame_bg.png")



}

function setup() {
  createCanvas(displayWidth , displayHeight - 150);
  engine = Engine.create()
  world = engine.world
  
  ball = new Ball(750, 150, 50, "blue")
  bowl = new Bowl(700, 195, 150)

}



function draw() {
  background(bg);  
  Engine.update(engine)

if(keyDown(RIGHT_ARROW)){
  bowl.move(2,0)

}


ball.display();

 bowl.display();
}