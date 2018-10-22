import * as Discord from 'discord.js'

class PoliceClient {

  private client: Discord.Client

  constructor(){
    this.client = new Discord.Client()
    this.client.on('ready', () => {
      console.log(`Ahora el bot esta conectado como ${this.client.user.tag}`)
    })
  }

  public login(token: string){
    this.client.login(token)
      .then(response => console.log(`Loging exitoso`))
      .catch(e => console.log(`Se ha producido un error ${e}`))
  }

  public disconnect(){
    this.client.destroy()
      .then(response => console.log('El bot se ha desconectado satisfactoriamente'))
      .catch(e => console.log('Error al desconectar el bot'))
  }
}

export default PoliceClient
