
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey=createSprite(100,500,10,10);
  monkey.scale=0.2
  monkey.addAnimation("running",monkey_running)
  
  ground=createSprite(300,570,1200,20)
  ground.velocityX=-7;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();

  
}


function draw() {
  background("white");

  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }

  monkey.velocityY=monkey.velocityY+0.5;
 monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();
  
      stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("survival time "+survivalTime,430,40)
}

function food(){
  if(frameCount%80===0){
    var banana=createSprite(650,Math.round(random(300,450)))
    banana.addImage(bananaImage)
    banana.scale=0.2;
    banana.velocityX=-5
    banana.setLifetime=300;
    bananaGroup.add(banana);
    

  }
}

function obstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(650,525)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2;
    obstacle.velocityX=-5
    obstacle.setLifetime=300;
    obstacleGroup.add(obstacle);
  }
}





