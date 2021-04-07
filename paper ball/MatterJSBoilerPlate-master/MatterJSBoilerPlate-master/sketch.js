const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var box1,box2,box3,groundSprite;
var box1Body,box2Body,box3Body;
var paperball1;
var groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(width/2,height,100,20);
	box2 = createSprite(350,height-35,20,100);
	box3 = createSprite(450,height-35,20,100);

	box1.shapeColor = "red";
	box2.shapeColor = "red";
	box3.shapeColor = "red";

	box1Body = Bodies.rectangle(width/2,height,100,20,{isStatic : true});
	box2Body = Bodies.rectangle(350,height-35,20,100,{isStatic : true});
	box3Body = Bodies.rectangle(450,height-35,20,100,{isStatic : true});

	World.add(world,box1Body);
    World.add(world,box2Body);
	World.add(world,box3Body);

	 paperball1 = new PaperBall(100,250,25);
     ground = new Ground(width/2,height,800,20);
  
}


function draw() {
   background(0);

  Engine.update(engine);

  ground.display();
  paperball1.display();

  drawSprites();
 
}

