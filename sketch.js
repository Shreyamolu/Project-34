/*
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;

function preload() {
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    text("Score - " + score,width - 300,50)

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x: 200, y:50});
    }
}

async function getTime()
{
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime
    var hour = dateTime.slice(11,13);
    if(hour > 06 && hour < 19)
    {
        bg = "sprites/bg.png"
    }else
    {
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);
}
*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var superhero,superheroImage,monsterImage,monster;
var bgImg,bg;

function preload()
{
    superheroImage = loadImage("sprites/Superhero-01.png");
    bgImg = loadImage("sprites/GamingBackground.png");
    monsterImage = loadImage("sprites/Monster-01.png");
}

function setup()
{

    engine = Engine.create();
    world = engine.world;

    createCanvas(3000,800)

    box1 = new Block(900, 100, 70, 70);
    box2 = new Block(900, 100, 70, 70); 
    box3 = new Block(900, 100, 70, 70); 
    box4 = new Block(900, 100, 70, 70); 
    box5 = new Block(900, 100, 70, 70); 
    box6 = new Block(900, 100, 70, 70);
    box7 = new Block(800, 100, 70, 70); 
    box8 = new Block(800, 100, 70, 70); 
    box9 = new Block(800, 100, 70, 70); 
    box10 = new Block(800, 100, 70, 70); 
    box11 = new Block(800, 100, 70, 70); 
    box12 = new Block(800, 100, 70, 70); 
    box13 = new Block(700, 100, 70, 70); 
    box14 = new Block(700, 100, 70, 70); 
    box15 = new Block(700, 100, 70, 70); 
    box16 = new Block(700, 100, 70, 70); 
    box17 = new Block(700, 100, 70, 70); 
    box18 = new Block(700, 100, 70, 70); 
    box19 = new Block(700, 100, 70, 70); 
    box20 = new Block(700, 100, 70, 70);

    ground = new Ground (600, 600, 1200, 20);

    superhero = new Hero(400,800,250);
    monster = new Monster(1100,550,300);

    flying = new Fly(superhero.body,{x:500,y:50});

}

function draw()
{
    bg = bgImg;
    background(bg);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    superhero.display();
    monster.display();

    flying.display();

}

function mouseDragged(){
    Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}