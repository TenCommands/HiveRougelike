// prevent paper being used
client.on("click", e => {
    if(e.isDown && e.button == 2){
        if(game.getLocalPlayer().getHoldingItem().item != null){
            if(game.getLocalPlayer().getHoldingItem().item.translateName == `item.paper`){
                e.cancel = true
            }
        }
    }
    
})

// prevent /vote being used
// NOT CURRENTLY POSSIBLE TO CANCEL COMMANDS WITH LATITE
//client.on("send-chat", e => {
//    clientMessage(`message`)
//})