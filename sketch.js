var form, player, game;
var database, playerCount, gameState = 0;
var allPlayers;
var cars, car1, car2, car3, car4;
var car1_i, car2_i, car3_i, car4_i, track_i, ground_i;

function preload() {
    car1_i = loadImage("images/car1.png");
    car2_i = loadImage("images/car2.png");
    car3_i = loadImage("images/car3.png");
    car4_i = loadImage("images/car4.png");

    track_i = loadImage("images/track.png");
    ground_i = loadImage("images/ground.png");

}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20, displayHeight-125);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4) {
        game.update(1);
    }

    if(gameState === 1) {
        game.play();
    }
}