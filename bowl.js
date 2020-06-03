class Bowl{
 constructor(x, y, width, height){
  var options ={
  density : 0.05,
  resitution : 0,
  friction : 0.02,
  isStatic:true
  }
 this.image = loadImage("bowl.png")   
 this.body = Bodies.rectangle(x, y, width, height, options)
 this.x = x;
 this.y = y;
 this.width = width;
 this.height = height;
 
 World.add(world, this.body)

 }



 display(){

  angleMode(DEGREES)
  var angle = this.body.angle
  push()
 //canvas will move  but looks like the body is moving
  translate(this.body.position.x, this.body.position.y)
  rotate(angle)
  
  imageMode(CENTER)
  image(this.image, 0, 0 , this.width, this.height);



  pop();
}


}