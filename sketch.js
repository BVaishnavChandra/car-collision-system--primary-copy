var car , wall ;
var wallImage ;
var carImage , carImage1 , carImage2 , carImage3 , backgr , backgrImage ;
var speed , weight , deformation ; 

function preload(){
backgrImage = loadImage("backgr.png") ;
wallImage = loadImage("wall.png") ;
carImage = loadImage("car.png") ;
carImage1 = loadImage("car2.png") ;
carImage2 = loadImage("car3.png") ;

}


function setup() {
  createCanvas(1600,400);

  backgr = createSprite(800 , 10 ) ;
  backgr.addImage(backgrImage);
  backgr.scale = 1.75 ;

  car = createSprite(110, 300, 50, 50);
  car.addImage(carImage) ;
  car.scale = 0.1 ;

  wall = createSprite(1500 , 320 , 60 , height/2) ;
  wall.addImage(wallImage) ;
  wall.scale = 0.3 ;
 
  deformation = 0 ;

}

function draw() {
  background("cyan");    
  
  car.velocityX = speed ; 
 
  speed = random(55 , 90) ;
  weight = random(400 , 1500) ; 


 if(wall.x - car.x < (car.width + wall.width)/2 ){
    car.velocityX = 0 ;

    var deformation = 0.5 * weight * speed * speed/22500 ;

    if(deformation > 180)
    {
    car.addImage(carImage1) ; 
    car.scale = 0.15 ;
    }

    if(deformation < 180  &&  deformation > 100)
    {
    car.addImage(carImage2) ; 
    car.scale = 0.4 ;
    }
    if(deformation < 100)
    {
      car.addImage(carImage) ; 
      car.scale = 0.1 ;
    }

 }


  drawSprites();
}