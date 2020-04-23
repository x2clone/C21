var mrec , frec; 
var ob1,ob2,ob3,ob4


function setup() {
  createCanvas(800,400);

  mrec = createSprite(200,200, 50,50);
  mrec.shapeColor = "red";

  frec = createSprite(250,250.50,50);
  frec.shapeColor = "blue";

  ob1 = createSprite(300,100,50,50);
  ob1.shapeColor = "black";

  ob2 = createSprite(350,150,50,50);
  ob2.shapeColor = "brown";

  ob3 = createSprite(500, 300, 50,50);
  ob3.shapeColor = "grey";

  ob4 = createSprite(550, 350, 50,50);
  ob4.shapeColor = "pink";
}

function draw() {
  background(255,255,255); 
  console.log(mrec.x-frec.x);

  mrec.x = World.mouseX;
  mrec.y = World.mouseY;

  if(isTouching(ob1,mrec)){
    mrec.shapeColor = "yellow";
    ob1.shapeColor = "green";
  }
  else{

    mrec.shapeColor = "red";

    ob1.shapeColor = "black"; 

  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
    }
    else{
      return false; 
    }
    
}