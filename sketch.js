var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var snow = [];

function preload(){
  bg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1280,720);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);
  
  Engine.update(engine);
   
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-10,width/2+10),10,10))
  }

  for(var l = 0; l < snow.length; l++){
    snow[l].display();
  }

  drawSprites();
}