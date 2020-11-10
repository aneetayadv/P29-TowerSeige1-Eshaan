class Block{
    constructor( x , y,img ){

        var options={
            'restitution' : 0.7,
            'friction' : 0.9,
            'density' : 0.8
        }
        this.body = Bodies.rectangle(x, y, 50 , 70, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(img);

        World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x ,pos.y);
        imageMode(CENTER);
        image(this.image, 0 , 0 , 50 , 70);
        pop();

    }
}