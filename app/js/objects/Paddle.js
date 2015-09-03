import {paddleAssets} from '../config';

class Paddle extends Phaser.Sprite {

  constructor(game, x, y, speed = 500) {
    super(game, x, y, paddleAssets.graphic.paddle.name);

    this.game.stage.addChild(this);
    this.anchor.set(0.5, 0.5);
    this.speed = speed;
  }

  update() {
    if (this.isMovingDown()) {
      this.moveDown();
    } else if (this.isMovingUp()) {
      this.moveUp();
    } else {
      this.stop();
    }

  }

  initPhysics() {
    this.game.physics.enable(this);
    this.checkWorldBounds = true;
    this.body.collideWorldBounds = true;
    this.body.immovable = true;
  }

  setKeys(upKey, downKey) {
    this.up = this.game.input.keyboard.addKey(upKey);
    this.down = this.game.input.keyboard.addKey(downKey);
  }


  // Helper methods
  isMovingUp() {
    return this.up.isDown;
  }

  isMovingDown() {
    return this.down.isDown;
  }

  moveUp() {
    this.body.velocity.y = -this.speed;
  }

  moveDown() {
    this.body.velocity.y = this.speed;
  }

  stop() {
    this.body.velocity.y = 0;
  }
}

export default Paddle;
