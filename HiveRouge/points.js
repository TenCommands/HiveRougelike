var _a, _b;

const playerName = (_a = game.getLocalPlayer()) === null || _a === void 0 ? void 0 : _a.getName();

const kill = new RegExp(decodeURI(`^.*${playerName}.*\u00A7c.*$|You killed`));
const finalKill = new RegExp(decodeURI(`^.*${playerName}.*\u00A7c.*$|eliminated`));

// events detected with chat
client.on("receive-chat", e => {
    var _a;
    if(e.isChat && ((_a = game.getLocalPlayer()) === null || _a === void 0 ? void 0 : _a.isValid())){
        if (e.message.match(kill)) {
            clientMessage(`Kill event triggered`)
        }
        if (e.message.match(finalKill)) {
            clientMessage(`FinalKill event triggered`)
        }
    }
});