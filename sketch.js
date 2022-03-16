
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var newBall;
var stick;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   newBall = Bodies.circle(300,20,30,ball_options);
   World.add(world,newBall);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  stick = Bodies.rectangle(350,200,200,10,ground_options)
  World.add(world,stick);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(newBall.position.x,newBall.position.y,30);
  rect(stick.position.x,stick.position.y,200,10);
 
}

