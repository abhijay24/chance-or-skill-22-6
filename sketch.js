const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var balls = []
var engine, world;
var bg;
var ball;
var bowl;
var angle = 45;

function preload(){
  bg = loadImage("images/mygame_bg.png")



}

function setup() {
  createCanvas(displayWidth , displayHeight - 150);
  engine = Engine.create()
  world = engine.world
  
  
  bowl = new Bowl(650, 250, 300, 300)

}



function draw() {
  background(bg);  
  Engine.update(engine)
fill("black")
textSize(30)
text(" space to rotate the box", 400, 50)

if(frameCount %10 === 0){
  ball = new Ball(random(400, 700), -50, 10, "red")
  balls.push(ball)

}
  for(var i = 0;i<balls.length;i++){
    balls[i].display();

  }

if(keyCode === UP_ARROW){
 Matter.Body.setAngle(bowl.body, angle)
 Matter.Body.setAngularVelocity(bowl.body, 1.0)
 angle = angle + 10
}
if(keyCode === DOWN_ARROW){
  Matter.Body.setAngle(bowl.body, angle)
  Matter.Body.setAngularVelocity(bowl.body, 1.0)
  angle = angle - 10
 }



 bowl.display();
}