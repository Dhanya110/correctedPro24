class Paper
{
constructor (x,y,r)
{
    var options={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic': false
    }
    
    this.r=r;
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body);
}
display()
{
    var pappos=this.body.position;
    push()
    translate(pappos.x,pappos.y);
    
    strokeWeight(3);
    fill(255,0,255)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop()
  }

}