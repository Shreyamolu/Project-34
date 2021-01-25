class Monster {

    constructor(x,y,r){
        var options ={
            density : 1,
            frictionAir : 0.005,
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/Monster-01.png")
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

}