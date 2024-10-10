let mod = new Module("hrl_shop","HRL: Shop","Opens the shop",1);

let openKey = mod.addKeySetting("openKey","Enable Key","",76)
let closeKey = mod.addKeySetting("closeKey","Disable Key","",79)
let radius = mod.addNumberSetting("radius","Radius","",0,10,1,10);
let bgColor = mod.addColorSetting("bgColor","Background Color","Background color of notifications", new Color(0,0,0,0.5));

client.getModuleManager().registerModule(mod);

let screenSize = game.getScreenSize()
const width = screenSize["x"]
const height = screenSize["x"]

let mainRect = new Rect(width * 0.15, height * 0.05, width * 0.85, height * 0.5)
let backRect = new Rect(width * 0.15-5, height * 0.05-5, width * 0.85+5, height * 0.5+5)

client.on("render2d", () => {
    if(mod.isEnabled()){
        graphics.fillRect(backRect,bgColor.getValue(),radius.getValue() * 5);
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

client.on("key-press", k => {
    if(mod.isEnabled() && [game.getInputBinding("menuCancel"),closeKey.getValue(),27].indexOf(k.keyCode) >= 0){
        k.cancel = true
        mod.setEnabled(false)
        game.captureCursor()
        return
    }
    if(mod.isEnabled() && cancelKeys.indexOf(k.keyCode) >= 0){
        k.cancel = true
        return
    }
    if(!game.isInUI() && !mod.isEnabled() && k.keyCode == openKey.getValue()){
        k.cancel = true
        mod.setEnabled(true)
        game.releaseCursor()
        return
    }
})

client.on("click", e => {
    if(mod.isEnabled()){
        e.cancel = true
    }
})