class Hero {
  constructor(x, y,w,h) {
    var hero_features = {
      restitution: 0.8,
      friction: 1,
    };
    this.hero = Bodies.rectangle(x, y,w,h, hero_features);
    World.add(myWorld, this.hero);
    this.img_ = loadImage("Superhero-01.png");
   this.w = w
   this.h = h
  }
  display() {
    push();
    translate(this.hero.position.x, this.hero.position.y);
    rotate(this.hero.angle);

    imageMode(CENTER);
    image(this.img_, 0, 0 ,this.w,this.h);
    pop();
  }
}
