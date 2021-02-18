class Monster{

constructor(x,y,angle){
var options= {
    density:1.8
}
this.body = Bodies.rectangle(x,y,options)
this.image = loadImage("Monster.png"); 
World.add(world,this.body);
}
display(){
    if(this.body.speed < 3){
    this.body.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
   }
 
   score(){
     if (this.Visiblity < 0 && this.Visiblity > -1005){
       score++;
     }
   }
 
 
 
 };






