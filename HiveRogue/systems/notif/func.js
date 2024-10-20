"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifTitle = exports.notifDescription = exports.notifImage = exports.notifTime = exports.sendNotif = void 0;

exports.notifTitle = "Title"
exports.notifDescription = "Description"
exports.notifImage = Texture.load("assets/friends.png")
exports.notifTime = 0

function sendNotif(title, description, image){
    exports.notifTime = title
    exports.notifDescription = description
    exports.notifImage = Texture.load(image)
    exports.notifTime = client.getModuleManager().getModuleByName("hrl_notif").displayTime.getValue() * 20
}

exports.sendNotif = sendNotif

client.on("world-tick", () => {
    if(exports.notifTime > 0){
        exports.notifTime--
    }
})