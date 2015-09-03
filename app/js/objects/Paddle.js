import {paddleAssets} from '../config';

class Paddle extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, paddleAssets.graphic.paddle.name);

    this.game.stage.addChild(this);
    this.anchor.set(0.5, 0.5);
  }
}

export default Paddle;
