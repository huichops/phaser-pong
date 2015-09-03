import {gameSettings, ballAssets, paddleAssets} from '../config';
import Ball from '../objects/Ball';
import Paddle from '../objects/Paddle';
import Background from '../objects/Background';

class MainState extends Phaser.State {

  preload() {

    console.log('preloading');

    this.game.load.image(ballAssets.graphic.ball.name, ballAssets.graphic.ball.url);
    this.game.load.image(paddleAssets.graphic.paddle.name, paddleAssets.graphic.paddle.url);

    this.game.load.audio(ballAssets.sound.bounce.name, [ballAssets.sound.bounce.url + '.ogg', ballAssets.sound.bounce.url + '.m4a']);
    this.game.load.audio(ballAssets.sound.hit.name, [ballAssets.sound.hit.url + '.ogg', ballAssets.sound.hit.url + '.m4a']);
    this.game.load.audio(ballAssets.sound.miss.name, [ballAssets.sound.miss.url + '.ogg', ballAssets.sound.miss.url + '.m4a']);

  }

  create() {
    this.initGraphics();
    this.initPhysics();
    this.initKeyboard();
    this.ball.restart();

  }

  update() {
    this.player1.update();
    this.player2.update();
  }

  initGraphics() {

    var center = { x: this.game.world.centerX, y: this.game.world.centerY };

    this.background = new Background(this.game);

    this.ball = new Ball(this.game, center.x, center.y);
    this.player1 = new Paddle(this.game, gameSettings.player1.x, center.y);
    this.player2 = new Paddle(this.game, gameSettings.player2.x, center.y);

  }

  initPhysics() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.ball.initPhysics();
    this.player1.initPhysics();
    this.player2.initPhysics();
  }

  initKeyboard() {
    this.player1.setKeys(Phaser.Keyboard.A, Phaser.Keyboard.Z);
    this.player2.setKeys(Phaser.Keyboard.UP, Phaser.Keyboard.DOWN);
  }

}

export default MainState;
