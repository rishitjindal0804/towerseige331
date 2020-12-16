class Box {
    constructor(x, y, width, height) {
      var options = {
      //  isStatic:true,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }

    score(){

  if (this.visibility<0 && this.visibility>-105){

score++;

  }
  }
  
      display(){     
        var pos =this.body.position;
      var angle = this.body.angle;
   
        if(this.body.speed<3){
        push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     
      rect(0, 0, this.width, this.height);
      pop();
    
      }
    else{
      
   World.remove(world,this.body);
push()
this.visibility= this.visibility-5 
tint(255,this.visibility);
pop()
      
      
    }
  }
 

}
