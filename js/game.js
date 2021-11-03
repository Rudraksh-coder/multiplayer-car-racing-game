class Game {
    constructor() {}
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function (data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state,
      });
    }
    async start() {
      if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if (playerCountRef.exists()) {
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
      car1 = createSprite(100, 200);
      car1.addImage(car1_i);
      car2 = createSprite(300, 200);
      car1.addImage(car2_i);
      car3 = createSprite(500, 200);
      car1.addImage(car3_i);
      car4 = createSprite(700, 200);
      car1.addImage(car4_i);
    }
    play() {
      form.hide();
      // static functions always called with class names
      // getting all player information in an array to traverse(ek ek karke player car ke paas jana) and display them
      Player.getPlayerInfo();
      image(track_i, 0, -displayHeight*4, displayWidth, displayHeight*5);
      // x, y position of the cars
      var x = 100;
      var y;
      // index of the arrays
      var index = 0;

      if (keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance += 50;
        player.update();
      }
      drawSprites();
    }
  }