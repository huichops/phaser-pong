import {gameSettings, ballAssets} from '../config';

class Ball extends Phaser.Sprite {

  constructor(game, x, y, speed = 500, delay = 2) {
    super(game, x, y, ballAssets.graphic.ball.name);

    this.speed = speed;
    this.delay = delay;

    this.startAngles = {
      left: [120, -120],
      right: [60, -160]
    };

    this.game.stage.addChild(this);
    this.anchor.set(0.5, 0.5);


  }

  initPhysics() {
    this.game.physics.enable(this);
    this.checkWorldBounds = true;
    this.body.collideWorldBounds = true;
    this.body.immovable = true;
    this.body.bounce.set(1);
  }

  create() {
    var randomAngle = this.game.rnd.pick(this.startAngles.left.concat(this.startAngles.right));

    this.visible = true;
    this.game.physics.arcade.velocityFromAngle(randomAngle, this.speed, this.body.velocity);
  }

  restart() {
    this.reset(this.x, this.y);
    this.visible = false;
    this.game.time.events.add(Phaser.Timer.SECOND * this.delay, this.create, this);
  }

}

export default Ball;
