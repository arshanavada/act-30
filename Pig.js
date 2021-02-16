class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.transperancy=255

      }
   display(){ 
   if (this.body.speed<3){
     super.display();
     }
     else{
      World.remove(world,this.body)
      push()
       this.transperancy=this.transperancy-5;
       tint(255,this.transperancy);

       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop()
     }
   }
};