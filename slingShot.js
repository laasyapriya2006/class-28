class SlingShot{
    constructor(bodyAobj, pointBobj){
        var options = {
            bodyA: bodyAobj,
            pointB: pointBobj,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointBobj;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    birdFly(){
        //detaches bird from slingshot
        this.chain.bodyA = null; 
    }

    display(){
        //only when the bird position is not null line doesnt appear
        if(this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    
}