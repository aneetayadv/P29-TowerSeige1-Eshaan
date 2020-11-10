class Rope{
    constructor(bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.08,
            length: 140
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,options);
    }

    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }


    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(5);
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}

