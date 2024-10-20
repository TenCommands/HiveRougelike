"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifTitle = exports.notifDescription = exports.notifImage = exports.notifTime = exports.sendNotif = void 0;

let notifTitle = "Title"
let notifDescription = "Description"
let notifImage = Texture.load("assets/friends.png")
let notifTime = 0

function sendNotif(title, description, image){
    notifTime = title
    notifDescription = description
    notifImage = Texture.load(image)
    notifTime = displayTime.getValue() * 20
}

client.on("world-tick", () => {
    if(notifTime > 0){
        notifTime--
    }
})

exports.notifTitle = notifTitle
exports.notifDescription = notifDescription
exports.notifImage = notifImage
exports.notifTime = notifTime
exports.sendNotif = sendNotif