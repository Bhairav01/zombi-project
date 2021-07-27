const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;

var bg_img;
var food;
var rabbit;





var zombie
var zombieimg
var bg


function preload(){
zombieimg =loadImage("assets/zombie.png")

bg =loadImage("assets/background.png")
}


function setup(){
   createCanvas(800,600)
 zombie =createSprite(600,580,10,20)

 zombie.addImage(zombieimg)
 zombie.scale=0.1 



}





   function draw() {
    background(bg)
zombie(zombieimg)
  for (var stone of stones){
   stone.show();
var distance = dist(zombie.position.x,zombie.position.y,pos.x,pos.y);
if (distance<= 50){
zombie.velocityX=0;
Matter.Body.setVelocity(stone.Body,{x: 10,y: -10});
zombie.changeImage("sad")
collided=true;
}

}
drawSprites()
}


















