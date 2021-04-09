
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(350,100,600,100);
  bobObject1 = new Bob(150,550,100);
  bobObject2 = new Bob(250,550,100);
  bobObject3 = new Bob(350,550,100);
  bobObject4 = new Bob(450,550,100);
  bobObject5 = new Bob(550,550,100);

  rope1= new Rope(bobObject1.body, ground.body,-200 ,0);
  rope2= new Rope(bobObject2.body, ground.body,-100,0);
  rope3= new Rope(bobObject3.body, ground.body,0,0);
  rope4= new Rope(bobObject4.body, ground.body,100,0);
  rope5= new Rope(bobObject5.body, ground.body,200,0);

  var render = Matter.Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	});
	Matter.Render.run(render);
	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
								{x:-80,y:-85});
	
		  }
	}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}


