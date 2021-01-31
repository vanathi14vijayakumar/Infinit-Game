var gameStage = 0,playerCounter = 0
var player,form,game;
var db,dbref;
var allPlayers
var car1,car2,car3,car4,cars;
var carI,cycleI,truckI,bikeI,ground,track

function preload(){
    carI = loadImage("Images/car.png")
    cycleI = loadImage("Images/cycle.png")
    truckI = loadImage("Images/truck.png")
    bikeI = loadImage("Images/bike.png")
    track= loadImage("Images/road.jpg")
    //ground = loadImage("Images/ground.png")
}
function setup(){
    createCanvas(displayWidth-150,displayHeight-270);
    db=firebase.database();
    game = new Game()
    game.getState()
    game.start()

    
}

function draw(){
    if(playerCounter ==4){
        game.update(1)
        // gameStage =1

    }
    if(gameStage ==1){
        clear ()
       game.play()

    }
    if(gameStage ==2){
        game.end();
    }
}

