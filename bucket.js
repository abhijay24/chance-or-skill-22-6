class Bucket{
 constructor(x, y, width, height, color){
  var options = {
    isStatic: true
  }
  this.color = "yellow";
  //constructor arguments will come in theis next line always(except colour)
  this.body = Bodies.rectangle(x, y, width, height, options)
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  World.add(world, this.body)
  }
 
 display(){
    fill(this.color) 
    rectMode (CENTER)
    rect(this.body.position.x, this.body.position.y, this.width, this.height)
    


    }



}