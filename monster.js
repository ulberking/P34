class Monster {
    constructor(x, y,w,h) {
      var monster_features = {
        restitution: 0.8,
        friction: 1,
      };
      this.monster = Bodies.rectangle(x, y,w,h, monster_features);
      World.add(myWorld, this.monster);
      this.imgg_ = loadImage("Monster-01.png");
     this.w = w
     this.h = h
    }
    display() {
      push();
      translate(this.monster.position.x, this.monster.position.y);
      rotate(this.monster.angle);
  
      imageMode(CENTER);
      image(this.imgg_, 0, 0 ,this.w,this.h);
      pop();
    }
  }
  