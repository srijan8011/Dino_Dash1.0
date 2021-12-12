var PLAY = 1;
var END = 0;
var WIN = 2;
var dino, dino_running, dino_jumping, dino_collided;
var jungle, invisjungle, jungleImg;
var boulder, boulderGroup, coin, coinGroup;
var score = 0;
var gameover, gameoverImg, restart, restartImg;
var eatingSound, jumpSound;
var gameState = PLAY;

function preload() {
    dino_running = loadAnimation("png/run1.png", "png/run2.png", "png/run3.png", "png/run4.png", "png/run5.png", "png/run6.png", "png/run7.png", "png/run8.png");
    dino_jumping = loadAnimation("png/jump1.png", "png/jump2.png", "png/jump3.png", "png/jump4.png", "png/jump5.png", "png/jump6.png", "png/jump7.png", "png/jump8.png", "png/jump9.png", "png/jump10.png", "png/jump11.png",);
    dino_collided = loadAnimation("png/dead.png");
    boulder = loadImage("png/boulder.png");
    coin = loadImage("png/coin.png");
    gameoverImg = loadImage("png/gameOver.png");
    restartImg = loadImage("png/restart.png");
    eatingSound = loadSound("png/eating.mp3");
    jumpSound = loadSound("png/jump.wav");
    jungleImg = loadImage("png/jungle.png");
}

function setup() {
    createCanvas(1200, 600);

    jungle = createSprite(600, 200, 600, 30);
    jungle.addImage("jungle", jungleImg);
    jungle.scale=0.5;
    jungle.x=width/2;

    dino = createSprite(90, 120, 30, 70);
    dino.addAnimation("running", dino_running);
    dino.addAnimation("jumping", dino_jumping);
    dino.addAnimation("collided", dino_collided);
    dino.scale = 0.2;
    dino.setCollider("circle", 0, 0, 350)

    invisibleGround = createSprite(600, 500, 2400, 30);
    invisibleGround.visible = false;

    coinGroup = new Group();
    obstacleGroup = new Group();
}

function draw() {

}
