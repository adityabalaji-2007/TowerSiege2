class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        friction: 2,
        restitution: 0.4
    }
    this.Visibility = 255
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    fill("blue");
    if(this.body.speed < 3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }else{
      World.remove(world,this.body);
      this.Visibility = this.Visibility - 5;
    }
  }
};

