class Game{
    constructor(){}

   getState(){
       var stateref = db.ref("gamestate")
       stateref.on("value",(data)=>{
           gameStage = data.val()
       })
   }

   update(State){
       db.ref("/").update({
           gamestate:State
       })
   }

   start(){
       if(gameStage ==0){
           player = new Player()
           player.getCount()
           form = new Form ()
           form.display()
       }
        car1 = createSprite(100,displayHeight,60,60)
        car2 = createSprite(100,displayHeight,60,60)
        car3 = createSprite(100,displayHeight,60,60)
        car4 = createSprite(100,displayHeight*2,60,60)
        cars = [car1,car2,car3,car4]
        car1.addImage(truckI)
        car2.addImage(carI)
        car3.addImage(bikeI)
        car4.addImage(cycleI)
        car1.scale=0.2
        car2.scale=0.2
        car3.scale=0.2
        car4.scale=0.15

       
      

   }
   play(){
       form.hide();
       background(track)
       Player.getPlayerinfo()
    //    text ("Game Start",120,100)
      // console.log(allPlayers)
       if(allPlayers!=undefined){
           var positionX 
           var positionY =displayHeight-400
           var index = 0
           for(var i in allPlayers){
              positionX = 70-allPlayers[i].distance
               cars[index].x = positionX
               cars[index].y = positionY
              if(index ==player.index-1){
                  fill ("green")
                ellipse (positionX,positionY,70,70)
                camera .position.x = cars[index].x
                camera.position.y = displayHeight/2-100
              }
               index++
               /*this.bike.mousePressed(() =>{
                cars[index].addImage(bikeI) 
        
            })*/
           }
       }
       if(keyDown(UP_ARROW) && player.index != null){
           player.distance -=25
           player.update()
       }
      
       drawSprites();
   }

   end(){
       console.log("Game has Ended")
   }
    
}