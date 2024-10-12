//const notif = require("notif.js");

let core = new Module("hrl_core","HRL: Hive Rougelike Core","Enables the Hive Rougelike mode",1);

client.getModuleManager().registerModule(core);

//client.on("click" /* using this event for debugging easily*/, e => {
//    if(game.isInUI()) return;
//    notif.send("Title","Description","assets/friends.png")
//})