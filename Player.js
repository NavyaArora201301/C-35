class Player{
    constructor(){

    }

    getCount(){
  var playerCountRef= database.ref("playerCount");
  playerCountRef.on("value",function(data){
      playerCount=data.val(); //"val" will fetch the value from firebase

  })
}

updateCount(Count){
    database.ref("/").update({
        playerCount:Count
    })
}

updateName(Name){
    var playerIndex="player"+playerCount; //will hold the no. of player.
    database.ref(playerIndex).set({
        name: Name
    })
}

}
