const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse= Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;
var world;
var engine;

function setup(){
    createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);



    bob1 = new Pendulum(200,575,50)
	bob2 = new Pendulum(250,575,50)
	bob3 = new Pendulum(300,575,50)
	bob4 = new Pendulum(350,575,50)
	bob5 = new Pendulum(400,575,50)

    sling1=new Sling(bob1.body,{x:200, y:50})
	sling2=new Sling(bob2.body,{x:250, y:50})
	sling3=new Sling(bob3.body,{x:300, y:50})
	sling4=new Sling(bob4.body,{x:350, y:50})
	sling5=new Sling(bob5.body,{x:400, y:50})
}
function draw(){
    rectMode(CENTER);
    background(0);

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();
}
function mouseDragged(){
    Matter.Body.setPosition()
}