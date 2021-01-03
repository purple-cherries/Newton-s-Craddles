class Bob {
  constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution:1.0,
          friction:0,
          density:0.8,
          
      } 
      this.body = Bodies.circle(x, y,r, options);
      this.r=r

      
      
      World.add(world, this.body);
  }e

display(){
push();
translate(this.body.position.x,this.body.position.y,)
 ellipseMode(CENTER);
  fill("green");
  ellipse(0,0,this.r,this.r)
  pop();
}



}



