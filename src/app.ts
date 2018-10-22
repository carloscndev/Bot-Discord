import PoliceClient from './client/client'
import { DISCORD_TOKEN } from './config'

let client = new PoliceClient()
client.login(DISCORD_TOKEN)
process.once('SIGINT', () => client.disconnect())
