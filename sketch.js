const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var score = 0;

function setup() {
  createCanvas(800,800);
  

  	engine = Engine.create();
	world = engine.world;
  



  ground = new Ground(600,600,200,20);
  
  ground2 = new Ground(600,200,200,20);
  
  box1 = new Box (570,170,30,30);
   box2 = new Box (600,170,30,30);
 box3 = new Box (630,170,30,30);
   box4 = new Box (585,140,30,30);
   box5 = new Box (615,140,30,30);
   box6 = new Box (600,110,30,30);
  
   box7 = new Box (570,570,30,30);
   box8 = new Box (600,570,30,30);
   box9 = new Box (630,570,30,30);
   box10 = new Box (585,540,30,30);
   box11 = new Box (615,540,30,30);
   box12 = new Box (600,510,30,30);
 poly = new Balls (100,500,20)
  chai = new Chain (poly.body,{x:100,y:500});

 
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("white");  

  
  Engine.update(engine);


 ground.display();
  ground2.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
  
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
 poly.display();
  chai.display();
   
  
  box1.score();
  box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
  
   box7.score();
   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();
  
       text(" SCORE : " + score ,width-750,50)
  
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
  
}


function mouseReleased(){

	chai.fly();
}

function keyPressed(){

if(keyCode === 32){
  
chai.attach(poly.body)

}

}
async function getTime(){

    var datetime = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata ")
    var Jason = await datetime.json()
   
    var slice = Jason.datetime;

    var slice2 = slice.slice(11,13);

    if (slice2 >=06&&slice2<=19){

 bg = "sprites/bg.png"

    }
    
    else{

      bg = "sprites/bg2.jpg"
    }
    
 backgroundimage = loadImage (bg)

console.log(backgroundimage)

    }