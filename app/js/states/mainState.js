import {assets} from '../config';
import Ball from '../objects/Ball';

class MainState extends Phaser.State {

  preload() {
    var loadImage = this.game.load.image;
    var loadSound = this.game.load.sound;

    console.log('preloading');

    this.game.load.image(assets.graphic.ball.name, assets.graphic.ball.url);
    this.game.load.image(assets.graphic.paddle.name, assets.graphic.paddle.url);
/*
    loadSound(assets.sound.bounce.name, [ assets.sound.bounce.url + '.ogg', assets.sound.bounce.url + '.m4a' ]);
    loadSound(assets.sound.hit.name, [ assets.sound.hit.url + '.ogg', assets.sound.hit.url + '.m4a' ]);
    loadSound(assets.sound.miss.name, [ assets.sound.miss.url + '.ogg', assets.sound.miss.url + '.m4a' ]);
    */

  }

  create() {
    ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, assets.graphic.ball.name);
    ball.anchor.set(0.5, 0.5);
  }

}

export default MainState;
