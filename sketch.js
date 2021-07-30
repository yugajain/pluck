const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground,stone,mango1,mango2,mango3,mango4,mango5
var boyimg
function preload()
{
	boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	Engine.run(engine);
  tree = new Tree(600,490,350,450)
  ground = new Ground(400,690,800,50)
  stone = new Stone(200,400,30,30)
  mango1 = new Mango(500,450,30,30)
  mango2 = new Mango(550,450,30,30)
  mango3 = new Mango(450,450,30,30)
  mango4 = new Mango(650,400,30,30)
  mango5 = new Mango(600,380,30,30)
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display()
  ground.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  image(boyimg, 200, 600,150,250)
  drawSprites();
 
}



