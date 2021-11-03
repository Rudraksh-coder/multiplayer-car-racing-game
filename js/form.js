class Form {
    constructor() {
        this.title = createElement("H2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("H3");
    }

    display() {
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2, displayHeight/2);
        this.input.position(displayWidth/2, displayHeight/2-100);
        
        this.button.position(displayWidth/2+100, displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(130, 160);
        })

        

    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

}