import {gameSettings, ballAssets} from '../config';

class Ball extends Phaser.Sprite {

  constructor(game, x, y, speed = 300) {
    super(game, x, y, ballAssets.graphic.ball.name);
    this.game.stage.addChild(this);
    this.speed = speed;
    this.startAngles = {
      left: [120, -120],
      right: [60, -160]
    };

    this.anchor.set(0.5, 0.5);


  }

  initPhysics() {
    var randomAngle = this.game.rnd.pick(this.startAngles.left.concat(this.startAngles.right));

    this.game.physics.enable(this);
    this.checkWorldBounds = true;
    this.body.collideWorldBounds = true;
    this.body.immovable = true;
    this.body.bounce.set(1.01);
    this.game.physics.arcade.velocityFromAngle(randomAngle, this.speed, this.body.velocity);
  }
}

export default Ball;
