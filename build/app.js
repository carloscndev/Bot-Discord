"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client/client");
const config_1 = require("./config");
let client = new client_1.default();
client.login(config_1.DISCORD_TOKEN);
process.once('SIGINT', () => client.disconnect());
