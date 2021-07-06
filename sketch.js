var dog ,happydog, foodS,foodStock
var database,stock
 var feddog,addfood
 var fedatime,lastFed
 var foodObj
 var bedroom,garden,washroom
 var gameState
function preload()
{
  dogImg =loadImage("images/dogImg.png")
  happydogImg=loadImage("images/dogImg1.png")
  milkImg=loadImage("images/Milk(1).png")
  bedroonm=loadImage("virtual pet images/Bed Room.png")
  garden=loadImage("virtual pet images/Garden.png")
  washroom=loadImage("virtual pet images/Wash Room.png")
}

function setup() {
	createCanvas(500,500);

  database=firebase.database()
 var foodObj =new Food()
  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  dog=createSprite(410,500,20,20)
  dog.addImage=loadImage("images/dogImg.png")

  foodStock=database.ref('Food')
  foodStock.on("value", readStock )

  readState=database.ref('gamestate');
  readState.on("value",function(data){
    gameState=data.val();
  })
  
}


function draw() {  
  background(46,139,87)
  fedTime=database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
 
foodObj.display()

  drawSprites();
fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed:"+lastFed%12+"PM",350,30);
}
else if(lastFed==0){
  text("Last Feed:12 AM",350,30)
}
else{
  text("Last Feed:"+ lastFed+"AM",350,30);
}

}



function readStock(x){
  if(x<=0){
x=0
  }
else{
  x=x-1
}
 database.ref('/').update({
   food:x
 })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

  }


function feedTheDog(){
  dog.addImage(happydog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    fedTime:hour()
  })

}
