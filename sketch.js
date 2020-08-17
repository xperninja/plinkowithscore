const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var turn=0;
var gameState="play";
var score=0;

var divisionHeight=300;

divisions=[];
function setup() {
  createCanvas(620,700);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  


   for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {  
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {   
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {    
       plinkos.push(new Plinko(j,375));
    }
 
}





function draw() {
  background(0);  
  //drawSprites();
 Engine.update(engine);
 
 textSize(35)
  text("Score : "+score,20,40);

 if ( turn>= 5) {
  gameState ="end";
  textSize(60);
  text("GameOver", 150, 250);
}

textSize(20);
text("500",20,400);
text("500",100,400);
text("500",180,400);
text("500",260,400);
text("200",340,400);
text("200",420,400);
text("200",500,400);
text("100",580,400);
text("100",660,400);
text("100",740,400);
ground.display();

 for (var i = 0; i < plinkos.length; i++) {    
  plinkos[i].display();
}
/*
for (var j = 0; j < particles.length; j++) { 
  particles[j].display();
}
*/
for (var k = 0; k < divisions.length; k++) {    
  divisions[k].display();
}


if(particle!=null){
 // World.add(particle,world);
  particle.display();
  if(particle.body.position.y>660)
  {
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
     }
     else if(particle.body.position.x<550 ){
      score=score+200;
      particle=null;
     }
     else if(particle.body.position.x<650 && particle.body.position.x>550 ){
      score=score+100;
      particle=null;
     } 
  }
}
}
function mousePressed(){
  if(gameState!=="end"){
      turn++;
     particle=new Particle(mouseX, 10, 10); 
  }   
}


