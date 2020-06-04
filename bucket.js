class Bucket{
 constructor(x, y, width, height, color, angle){
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
  this.angle = angle;
  World.add(world, this.body)

  }
 
 display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color) 
    rectMode (CENTER)
    rect(0, 0, this.width, this.height)
    pop();


    }



}