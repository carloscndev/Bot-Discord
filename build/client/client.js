"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class PoliceClient {
    constructor() {
        this.client = new Discord.Client();
        this.client.on('ready', () => {
            console.log(`Ahora el bot esta conectado como ${this.client.user.tag}`);
        });
        this.client.on('message', this.onMessage.bind(this));
    }
    onMessage(msg) {
        if (msg.content !== '') {
            msg.reply(msg.content);
        }
    }
    login(token) {
        this.client.login(token)
            .then(response => console.log(`Loging exitoso`))
            .catch(e => console.log(`Se ha producido un error ${e}`));
    }
    disconnect() {
        this.client.destroy()
            .then(response => console.log('El bot se ha desconectado satisfactoriamente'))
            .catch(e => console.log('Error al desconectar el bot'));
    }
}
exports.default = PoliceClient;
