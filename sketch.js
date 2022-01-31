var guardian,ajolote,ajolote_moviendo,mar,elder_guardian,guardian_antiguo;
var guardianImg,ajoloteImg,ajolote_moviendoImg,marImg,elder_guardianImg,guardian_antiguoImg;

var score
function preload(){
    guardianImg = loadImage("Guardian.png");
    ajoloteImg = loadImage("Ajolote2.png");
    ajolote_moviendoImg = loadImage("Ajolote.png");
    marImg = loadImage("Mar.png");
    elder_guardianImg=loadImage("elder-guardian-minecraft.png")
    guardian_antiguoImg=loadImage("Guardian antiguo.png");
}

function setup() {
 createCanvas(400,400);
 ajolote2 = createSprite(50,160,20,50);
 ajolote2.addAnimation("ajolote_moviendo", ajolote_moviendo);
 ajolote2.scale = 0.5;
mar=createSprite(200,200);
mar.addImage("mar",marImg);
mar = ground.width /2;
mar.velocityX = -4;

guadiansGroup=newGroup();
score=0;
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;
}

function draw() {
    background(180);
    text("Puntuación: "+ score, 500,50);
    score = score + Math.round(frameCount/60);
  
    if(keyDown("space")&& ajolote2.y >= 100) {
        ajolote2.velocityY = -10;
      }
      
    ajolote2.velocityY = ajolote2.velocityY + 0.8
      
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
      ajolote.collide(invisibleGround);
  
 
 
drawSprites();
function spawnGuardians(){
  if (frameCount % 60 === 0){
    var guardian = createSprite(400,165,10,40);
    guardian.velocityX = -6;
  


 
var rand = Math.round(random(1,3));
switch(rand) {
  case 1: guardian.addImage(guardian);
          break;
  case 2: guardian.addImage(elder-guardian-minecraft);
          break;
  case 3: guardian.addImage(Guardian_antiguo);
          break;
}
obstacle.scale = 0.5;
obstacle.lifetime = 300;
obstaclesGroup.add(obstacle);
}
}
trex.depth = trex.depth + 1;
guardiansGroup.add(guardian)

}