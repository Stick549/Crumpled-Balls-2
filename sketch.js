const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var bird;
var box1, box2, box3;
var paper, dust;
function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(90, 690, 50, 50)
    ground = new Ground(600, 700, 1200, 20);
    box1 = new Box(550 ,680, 200, 20)
    box2 = new Box(450 ,540, 20, 320)
    box3 = new Box(650 ,540, 20, 320)
    paper = loadImage("paper.png")
    dust = loadImage("dustbingreen.png")
}

function draw(){
    background("white");
    Engine.update(engine);
    if (keyIsDown(UP_ARROW)){
        Matter.Body.applyForce(bird.body, bird.body.position, {x:25, y:-100})
    }
    ground.display();
    bird.display()
    box1.display()
    box2.display()
    box3.display()
    imageMode(CENTER)
    image(dust, box1.body.position.x, 540);
    320
}