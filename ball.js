class Ball{
    constructor(x, y, r, color){
var options = { 
restitution:  0.01,
density :0.5,
friction:0.09
}
   this.body = Bodies.circle(x, y, r, options)
    this.x = x;
    this.y = y;
    this.color = color;
    this.r = r;
    World.add(world, this.body)

    }
display(){
  ellipseMode(RADIUS)
  fill(this.color);
  ellipse(this.body.position.x, this.body.position.y, this.r, this.r)


}


}