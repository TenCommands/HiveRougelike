const { sendNotif, notifTitle, notifDescription, notifImage, notifTime } = require("./func");

let mod = new HudModule("hrl_notif","HRL: Notification","Notifications for the Hive Roguelike",0,true);

let bgColor = mod.addColorSetting("bgColor","Background Color","Background color of notifications", new Color(0,0,0,0.5));
let displayTime = mod.addNumberSetting("displayTime","Display Time","How long the notification stays on screen for",0.2,10,0.1,1);
let radius = mod.addNumberSetting("radius","Radius","",0,10,1,0);

client.getModuleManager().registerModule(mod);

let mainRect = new Rect(0,0,300,80);
let descriptionRect = new Rect(80,29,300,80)
let titlePos = new Vector2(80, 2)
let descriptionPos = new Vector2(10, 10)

mod.setRect(mainRect);

mod.on("render", (isPreview, isEditor) => {
    if(notifTime > 0){
        graphics.fillRect(mainRect,bgColor.getValue(),radius.getValue() * 5);
        graphics.drawText(titlePos, notifTitle, 24, Color.WHITE);
        graphics.drawTextFull(descriptionRect, notifDescription, 14, Color.WHITE, 0, 0);
        graphics.drawTexture(notifImage, descriptionPos, 60, 60, Color.WHITE)
    }
});