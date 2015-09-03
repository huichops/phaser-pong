import {gameSettings} from '../config';

class Background extends Phaser.Graphics {

  constructor(game, dashSize = 5) {
    super(game);
    this.game.stage.addChild(this);
    this.dashSize = dashSize;

    var center = { x: this.game.world.centerX, y: this.game.world.centerY };

    this.lineStyle(2, 0xFFFFFF, 1);
    for (let y = 0; y <= gameSettings.height; y += this.dashSize * 2) {
      this.moveTo(center.x, y);
      this.lineTo(center.x, y + this.dashSize);
    }
  }
}

export default Background;
