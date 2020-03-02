const config = {
  type: Phaser.AUTO, // Which renderer to use
  width: 1920, // Canvas width in pixels
  height: 1080, // Canvas height in pixels
  parent: "game-container", // ID of the DOM element to add the canvas to
  scene: {
    preload: preload,
    create: create,
    update: update
  }
  physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 }, // will affect our player sprite
            debug: false // change if you need
        }
    },
}
var game = new Phaser.Game(config);
 
var map;
var player;
var cursors;
var groundLayer, coinLayer;
var text;

function preload() {
}

function create() {
}

function update(time, delta) {
  // Runs once per frame for the duration of the scene
}
