class PaperBall{
    constructor(x,y,radius){
        var options = {
             isStatic:false,
            'restitution' : 1,
            'friction' : 0.3,
            'density' : 1.2
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    };
};