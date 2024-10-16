//client.on("load-script", e => {
//    clientMessage(e.scriptName)
//    //if(client.getModuleManager().getModuleByName("hrl_core").isEnabled()){
//    //    clientMessage("core enabled")
//    //}
//})

var _a, _b;

const playerName = (_a = game.getLocalPlayer()) === null || _a === void 0 ? void 0 : _a.getName();

// chat events
const kill = new RegExp(decodeURI(`^.*${playerName}.*\u00A7c.*$|You killed`));
const finalKill = `FINAL KILL! ${playerName} eliminated`
const selfEliminate = `FINAL KILL! ${playerName} eliminated themselves`
const challenge = new RegExp(decodeURI(`You completed a challenge:`));
const suddenDeath = `Sudden Death! All remaining beds have been destroyed`
// title events
const victory = `Epic Victory!`


// events detected with chat
client.on("receive-chat", e => {
    var _a;
    let msg = e.message.replace(/\u00A7[0-9A-FK-OR]/gi, '')
    if(e.isChat && ((_a = game.getLocalPlayer()) === null || _a === void 0 ? void 0 : _a.isValid())){
        if (msg.match(kill)) {
            clientMessage(`Kill event triggered`)
        }
        if (msg.match(finalKill) && !msg.match(selfEliminate)) {
            clientMessage(`FinalKill event triggered`)
        }
        if (msg.match(challenge)) {
            clientMessage(`Challenge event triggered`)
        }
        if (msg.match(suddenDeath)){
            clientMessage(`SuddenDeath event triggered`)
        }
    }
});
// events detected with title
client.on("title", e => {
    var _a;
    if(e.type != `actionbar` && e.type != `times`){
        if(e.text.match(victory)){
            clientMessage(`Victory event triggered`)
        }
    }
})
// events detected with blocks
//client.on("world-tick", e => {
//    
//})