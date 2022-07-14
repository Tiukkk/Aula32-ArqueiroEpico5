class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.r=40;
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Player", 280, 40);
    fill("green");
    rect(180,60,70,30);
    rect(250,60,70,30);
    rect(320,60,70,30);
    // crie a vida em forma de retângulo
    pop();
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
