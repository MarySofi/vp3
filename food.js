class Food{
    constructor(x,y){
     var foodStock=[];
     var lastFed=[];
        this.image=loadImage("images/Milk(1).png")
        getFoodStock=[];
        updateFoodStock=[];
        deductFood=[];
        
    }
    

     bedroom(){
         background(bedroom,550,500);
     }
     garden(){
         background(garden,550,500);
     }
     washroom(){
         background(washroom,550,500);
     }
    display(){
        fill(255,255,254);
        textSize(15)
        if(lastFed>=12){
            text("Last Fed :"+lastFed%12+ "PM",350,30);
        }
        else if(lastFed===0){
            text("Last Fed:12AM",350,30)

        }
        else{
            text("lastFed" + lastFed+"AM",350,30)
        }
    }
}