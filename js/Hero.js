class Hero {

    constructor(x,y,r){
        var options ={
            density : 1,
            frictionAir : 0.005,
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/Superhero-01.png")
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x -300,this.body.position.y-500);
        image(this.image,0,0,this.r + 150,this.r);
        pop();
    }

}