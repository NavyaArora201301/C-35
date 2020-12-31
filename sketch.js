
var database;
var position;
var form, game, player;
var playerCount;
var gameState=0;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
game=new Game();
game.GetState();
game.start() //will help to create objects of the form and the player class
}


function draw(){

}