var fixrec,moveshrek;

function setup() {
  createCanvas(800,400);
  moveshrek=createSprite(400, 200, 50, 50);
fixrec=createSprite(200,100,80,25)
moveshrek.shapeColor="red";
fixrec.shapeColor="red";
}

function draw() {
  background(0);  
  drawSprites();
moveshrek.x=World.mouseX;
moveshrek.y=World.mouseY;
  if (moveshrek.x-fixrec.x<moveshrek.width/2+fixrec.width/2&&
    fixrec.x-moveshrek.x<moveshrek.width/2+fixrec.width/2&&
    moveshrek.y-fixrec.y<moveshrek.height/2+fixrec.height/2&&
    fixrec.y-moveshrek.y<moveshrek.height/2+fixrec.height/2 )
  {
    moveshrek.shapeColor="white";
    fixrec.shapeColor="green";
  }
  else{
moveshrek.shapeColor="red";
fixrec.shapeColor="red";
  }
}