class Umbrella
{
    constructor(x,y,r)
    {
        var options = {
           'isStatic' : true,
       }
       
       this.umbrella=loadImage("walking_1.png")
       this.body = Matter.Bodies.circle(x,y,r, options);
       this.r=r
       World.add(world, this.body);
    }

    display()
    {
     imageMode(CENTER)
     image(this.umbrella, this.body.position.x,this.body.position.y+10,300,300)
    }
}