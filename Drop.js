class Drop {
    constructor(x,y,r) {
      var options = {
        'restitution':0.1,
        'friction':0.1
      }
      this.drop = Matter.Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world, this.drop);
    }

    update()
    {
      if(this.drop.position.y > height){
        Matter.Body.setPosition(this.drop,{x:random(0, 650), y:random(0, 650)});
      }
    }

    display()
    {
      var pos = this.drop.position
      strokeWeight(1)
      stroke("blue")
      fill("blue")
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r, this.r)
    }
  };