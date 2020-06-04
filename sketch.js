const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var balls = []
var engine, world;
var bg;
var ball;
var bowl;
var angle = 45;
var score = 0;

var fakebuck1;


function preload(){
 bg = loadImage("images/mygame_bg.png")

 }

function setup() {
 createCanvas(displayWidth , displayHeight - 150);
 engine = Engine.create()
 world = engine.world
 
 bowl = new Bowl(650, 250, 300, 300)

 
 box1up = new Bucket(50, 500, 10, 100, "blue", PI/2); 
 box2up = new Bucket(300, 500, 10, 100, "blue", PI/2);
 box3down = new Bucket(175, 550, 255, 10 , "blue", PI);

 box4up = new Bucket(450, 500, 10, 100, "yellow", PI/2);
 box5up = new Bucket(750, 500, 10, 100, "yellow", PI/2);
 box6down = new Bucket(600, 550, 310, 10, "yellow", PI);

 box7up = new Bucket(850, 500, 10, 100, "orange", PI/2);
 box8up = new Bucket(1250, 500, 10, 100, "orange", PI/2);
 box9down = new Bucket(1050, 550, 410, 10, "green", PI);

 fakebuck1 = new Bucket(175, 430, 255, 10, -PI/4)

}



function draw() {
 background(bg);  


 Engine.update(engine)
 fill("black")
 textSize(30)
 text(" space to rotate the box", 400, 50)
 text("SCORE " + score, 1050, 100)

 if(frameCount %10 === 0){
  ball = new Ball(random(400, 700), -50, 10, "red")
  balls.push(ball)
  }
  for(var i = 0;i<balls.length;i++){
   balls[i].display();
   var collision = Matter.SAT.collides(bowl.body , balls[i].body)
   if(collision.collided){
    Matter.Body.setVelocity(balls[i].body, {x: 20, y: 20})
   }
 }
 
  /* for(var i = 0; i < balls.length ;i++){
    var collision1 = Matter.SAT.collides(fakebuck1, balls[i].body)
    if(collision1.collided){
      score = score + 1

    }
 */


//   }

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

 box1up.display();
 box2up.display();
 box3down.display();

 box4up.display();
 box5up.display();
 box6down.display();

 box7up.display();
 box8up.display();
 box9down.display();

 fakebuck1.display(); 

 
}