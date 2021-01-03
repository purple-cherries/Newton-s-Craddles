
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);
	
    bobDiameter=60

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob(260,500,60)
	Bob2 = new Bob(320,500,60)
	Bob3 = new Bob(380,500,60)
	Bob4 = new Bob(440,500,60)
	Bob5 = new Bob(500,500,60)
	roof = new Roof(380,125,400,30)


	rope1 = new Rope(Bob1.body, roof.body,-bobDiameter*2,0)
	rope2 = new Rope(Bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Rope(Bob3.body,roof.body,0,0)
	rope4 = new Rope(Bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Rope(Bob5.body,roof.body,bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  Engine.update(engine);
  drawSprites();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45})
	}
}


