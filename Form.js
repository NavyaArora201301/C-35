class Form{
    constructor(){

    }

    display(){
    var title=createElement("H1");
    title.html("Car Race Multiplayer Game");
    title.position(330,50);
    var input=createInput("Name");
    var button=createButton("Play");
    input.position(330,160);
    button.position(450,200);
    button.mousePressed(function(){
    input.hide();
    button.hide();
    var name=input.value();
    
    playerCount=playerCount+1;
    player.updateName(name);
    player.updateCount(playerCount)

    var greeting=createElement("H2");
    greeting.html("Hello!"+ name);
    greeting.position(330,160);

    })
    }
}