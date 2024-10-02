let mod = new Module("shop","HRL: Shop","Opens the shop",76);

let radius = mod.addNumberSetting("radius","Radius","",0,10,1,10);
let bgColor = mod.addColorSetting("bgColor","Background Color","Background color of notifications", new Color(0,0,0,0.5));

client.getModuleManager().registerModule(mod);

let screenSize = game.getScreenSize()
const width = screenSize["x"]
const height = screenSize["x"]

let mainRect = new Rect(width * 0.15, height * 0.05, width * 0.85, height * 0.5)

client.on("render2d", () => {
    if(mod.isEnabled()){
        graphics.fillRect(mainRect,bgColor.getValue(),radius.getValue() * 5);
    }
})

cancelKeys = [
    game.getInputBinding("forward"),
    game.getInputBinding("back"),
    game.getInputBinding("left"),
    game.getInputBinding("right"),
    game.getInputBinding("jump"),
    game.getInputBinding("sneak"),
    game.getInputBinding("hotbar.1"),
    game.getInputBinding("hotbar.2"),
    game.getInputBinding("hotbar.3"),
    game.getInputBinding("hotbar.4"),
    game.getInputBinding("hotbar.5"),
    game.getInputBinding("hotbar.6"),
    game.getInputBinding("hotbar.7"),
    game.getInputBinding("hotbar.8"),
    game.getInputBinding("hotbar.9"),
    game.getInputBinding("attack"),
    game.getInputBinding("use"),
    game.getInputBinding("inventory"),
    game.getInputBinding("mobEffects"),
    game.getInputBinding("emote"),
    game.getInputBinding("togglePerspective")
]
exitKeys = [
    game.getInputBinding("menuCancel"),
    //mod.key,
    27
]

client.on("key-press", k => {
    if(game.isInUI || exitKeys.indexOf(k.keyCode) >= 0){
        mod.setEnabled(false)
        k.cancel
        return
    }
    if(mod.isEnabled && cancelKeys.indexOf(k.keyCode) >= 0){
        k.cancel = true
        game.releaseCursor()
        return
    }
    /*if(!game.isInUI() && mod.isEnabled() && cancelKeys.indexOf(k.keyCode) >= 0){
        k.cancel = true
        game.releaseCursor()
        return
    }else if(!game.isInUI() && mod.isEnabled() && exitKeys.indexOf(k.keyCode) >= 0){
        mod.setEnabled(false)
        k.cancel = true
        //game.captureCursor()
    }*/
})