  var bgi
  var ghostjumping
  var climber
  var gameState = 'start'
  var doorsclimsGroup
  var doorsclimsGroup
function preload(){
  bgiImg=loadImage('tower.png')
  ghost = loadImage('ghost-jumping.png')
  door = loadImage('door.png'),clim = loadImage('climber.png')
  
}

function setup() {
  createCanvas(600,600);
  doorsclimsGroup=new Group()
  doorsclimsGroup = new Group()
  bgi = createSprite(300,300,600,600)
  bgi.addImage(bgiImg)
  bgi.velocityY = 2
  
 ghostjumping = createSprite(300,450,10,10)
 ghostjumping.addImage(ghost)
   ghostjumping.scale = 0.3

}


function draw() {
 
  background(255);
   
  if(gameState == 'start'){
    if(bgi.y > 400){
      bgi.y = height/2
    }
    if (keyDown('space')) {
      ghostjumping.velocityY = -4
    }
    ghostjumping.velocityY = ghostjumping.velocityY +0.5
    doorsclims()
    if(doorsclimsGroup.isTouching(ghostjumping)){
       gameState = 'END'
    }
    if(keyDown('right')){
     ghostjumping.velocityX = 2
    }
    if (keyDown('left')) {
      ghostjumping.velocityX = -2
    }
  }else{
    ghostjumping.destroy()
    doorsclimsGroup.destroyEach()
    bgi.destroy()
    doorsclimsGroup.destroyEach()
  }
  drawSprites()
}
function doorsclims(){
  if(frameCount % 60 === 0){
  var R = random(50,450)
    wondow = createSprite(R,100,20,20)
   wondow.velocityY = 3
   wondow.addImage(door)
   doorsclimsGroup.add(wondow)

   climber = createSprite(R,160)
   climber.addImage(clim)
   climber.scale = 0.5
   climber.velocityY = 3
   doorsclimsGroup.add(climber)
  }
  
  
}