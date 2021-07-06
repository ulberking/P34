const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand, box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,hero,monster,back
function preload(){
back = loadImage("GamingBackground.png")
}
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  myWorld = engine.world;
  Engine.run(engine);
  ground = new Ground(500,595,1000,10)
  box1 = new Box(500,575,50,50)
  box2 = new Box(500,525,50,50)
  box3 = new Box(500,475,50,50)
  box4 = new Box(500,425,50,50)
  box5 = new Box(500,375,50,50)
  box6 = new Box(600,575,50,50)
  box7 = new Box(600,525,50,50)
  box8 = new Box(600,475,50,50)
  box9 = new Box(600,425,50,50)
  box10 = new Box(700,575,50,50)
  box11 = new Box(700,525,50,50)
  box12 = new Box(700,475,50,50)
  box13 = new Box(700,425,50,50)
  box14 = new Box(700,375,50,50)
  hero = new Hero(100,500,500,250)
  monster = new Monster(920,500,250,250)
}
function draw() {
 background(back)
 ground.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 hero.display()
 monster.display()
}
function mouseDragged() {
Matter.Body.setPosition(hero.hero, { x: mouseX, y: mouseY });
}
