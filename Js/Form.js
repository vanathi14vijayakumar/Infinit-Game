class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h2")
        this.reset = createButton("Reset")
       // this.question = createElement("h9")
       // this.bike = createButton("Bike")
        // this.run = createButton("On foot")
        // this.car = createButton("Car")
        // this.cycle = createButton("Cycle")
    }
     hide(){
         this.title.hide()
         this.input.hide()
         this.button.hide()
         this.greeting.hide()
     }
    display(){
       
        this.title.html("Multiplayer Racing Game")
        this.title.position(displayWidth/2-50,0)
        
        this.input.position (displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+100,displayHeight/2-80)
        this.reset.position(displayWidth-100,50)
        
        this.button.mousePressed(() =>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            this.greeting.html("Hello "+player.name+"!!!")
            this.greeting.position(displayWidth/2-70,displayHeight/4)

          //  this.question.html("Would you like to choose...")
          //  this.question.position(displayWidth/2-100,displayHeight/4+50)

            // this.bike.position(displayWidth/2-100,displayHeight/4+80)
            // this.run.position(displayWidth/2-50,displayHeight/4+80)
            // this.car.position(displayWidth/2+20,displayHeight/4+80)
            // this.cycle.position(displayWidth/2+68,displayHeight/4+80)    

            playerCounter ++
            player.index = playerCounter
            player.updateCount(playerCounter)
            player.update()
        })
        this.reset.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
        })

        
    }
}
