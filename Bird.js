class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage ("sprites/smoke.png");
    this.path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var position = [this.body.position.x,this.body.position.y];   
    if (this.body.position.x > 200 && this.body.speed >10 && gamestate === "launch"){
      this.path.push(position);
      
    }
    

    for(var i=0;i<this.path.length;i=i+1){
      image (this.smokeImg,this.path [i][0],this.path [i][1])
    }
  }
}
