class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.02
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
      //  ellipseMode(CENTER);
      //  ellipse(0,0,this.r,this.r);
        pop();
      }
}

