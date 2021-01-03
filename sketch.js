const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2,polygon;
var engine, world;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    stand1 = new Ground(550,300,200,20);
    stand2 = new Ground(1000,200,200,20);
    //Level 1 Blocks
    block1 = new Block(480,299,30,40);
    block2 = new Block(505,299,30,40);
    block3 = new Block(535,299,30,40);
    block4 = new Block(565,299,30,40);
    block5 = new Block(595,299,30,40);
    block6 = new Block(620,299,30,40);
    block7 = new Block(505,269,30,40);
    block8 = new Block(535,269,30,40);
    block9 = new Block(565,269,30,40);
    block10 = new Block(595,269,30,40);
    block11 = new Block(535,239,30,40);
    block12 = new Block(565,239,30,40);
    //Level 2 Blocks
    block13 = new Block(930,199,30,40);
    block14 = new Block(960,199,30,40);
    block15 = new Block(990,199,30,40);
    block16 = new Block(1020,199,30,40);
    block17 = new Block(1050,199,30,40);
    block18 = new Block(1080,199,30,40);
    block19 = new Block(960,169,30,40);
    block20 = new Block(990,169,30,40);
    block21 = new Block(1020,169,30,40);
    block22 = new Block(1050,169,30,40);
    block23 = new Block(990,129,30,40);
    block24 = new Block(1020,129,30,40);
    //Polygon
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
    Engine.update(engine);
    background('black');
    ground.display();
    stand1.display();
    stand2.display();
    //Displaying Level 1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    //Displaying Level 2
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    //Displaying Polygon
    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40); 
    //Displaying SlingShot
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}