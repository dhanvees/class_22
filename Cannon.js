class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("canon.png");
    this.cannonBase = loadImage("cannonBase.png");
  }
  
  show(){
   rectMode(CENTER);
   image(this.cannonImg,this.x,this.y,this.width,this.height);

   image(this.cannonBase,165,120,240,200);
   noFill();
  }
}
