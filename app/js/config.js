var settings = {
gameSettings: {
    width: 640,
    height: 480,
    maxAngle: 45,
    player1: {
      x: 40
    },
    player2: {
      x: 600
    }
  },
  assets: {
    ball: {
      sound: {
        bounce: {
          url: 'assets/ballBounce',
          name: 'ballBounceSond'
        },
        hit: {
          url: 'assets/ballHit',
          name: 'ballHitSound'
        },
        miss: {
          url: 'assets/ballMissed',
          name: 'ballMissSound'
        }
      },
      graphic: {
        ball: {
          url: 'assets/ball.png',
          name: 'ballImage'
        }
      }
    },
    paddle: {
      graphic: {
        paddle: {
          url: 'assets/paddle.png',
          name: 'paddleImage'
        }
      }
    }
  }
};

export var gameSettings = settings.gameSettings;
export var ballAssets = settings.assets.ball;
export var paddleAssets = settings.assets.paddle;
export default settings;

