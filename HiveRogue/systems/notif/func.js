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

module.exports = {
    sendNotif,
    notifTitle,
    notifDescription,
    notifImage,
    notifTime
};