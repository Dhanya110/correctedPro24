var paper1,groundSprite,world,waste1,waste2,waste3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,690,1600,20);
	paper1 = new Paper(100,360,25);

	
	waste1=new Waste (800,670,200,20);
	waste2=new Waste (700,630,20,100);
   	waste3=new Waste (900,630,20,100);

	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  paper1.display();
  
 waste1.display();
 waste2.display();
 waste3.display();
 ground.show();
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});
}

}

