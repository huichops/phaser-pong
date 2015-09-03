import {gameSettings} from './config';
import mainState from './states/mainState';

class Game extends Phaser.Game {
  constructor() {
    super(gameSettings.width, gameSettings.height, Phaser.AUTO, 'gameContainer');

    this.state.add('main', mainState);
    this.state.start('main');
  }

}

new Game();
