var spaceship, ship;
var spaceImg, space;
var starImg, star;

var gameState = "play"
var score=0;



function preload(){
  spaceImg = loadImage("back.png");
  starImg = loadImage("star.png");
  spaceship = loadAnimation("spaceship.png");

}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 1;

  ship = createSprite(300,300);
  ship.addAnimation("ship", spaceship);
  ship.scale = 0.1;

  starsGroup = new Group();
  score = 0;

}

function draw() {
  background(200);

  text("Pontuação: "+ score, height-100,50);

  if (keyDown("d")){
     ship.x = ship.x + 3;
  }
  if (keyDown("a")){
    ship.x = ship.x - 3;
 }


  if(gameState == "play") {

    score = score + Math.round(getFrameRate()/60);
    space.velocityY = -(6 + 3*score/100);

    drawSprites();
    if(ship.isTouching(starsGroup)){
     gameState = "fim";
     
    }
    if(keyDown("d")){
      ship.velocityX = 4;
  
    }
    Obs();  
    if(keyDown("a")) {
       ship.velocityX = -4;
    }
    if(keyDown("w")) {
      ship.velocityY = -4;

    }
    if(keyDown("s")){
      ship.velocityY = 4;
    }
   
  }
  else if(gameState == "fim") {
    textSize(20);
    text("Fim de jogo", 200, 200);
    

  }

 

  ship.velocityY = ship.velocityY + 0.5;
  if(space.y > 400){
      space.y = 200
    }
   
}

function Obs() {
  
  if(frameCount % 100 == 0) {
    star = createSprite(Math.round(random(140,500)),-15);
   star.addImage("star", starImg);
    star.scale = 0.1;
    star.velocityY = 3;
    star.lifetime = 750;
   starsGroup.add(star);
   
  }
}
