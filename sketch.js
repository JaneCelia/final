var database;
var background_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var gamepieces;
var gameGroup;
var baseball_img,bat_img;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  background_img = loadImage("background.jpg");
  player_img = loadImage("miten.jpg");
  baseball_img = loadImage("baseball.jpg");
  bat_img = loadImage("bat.png");
  gameGroup = new Group();

  obstacleImage = loadImage("bases.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(background_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}