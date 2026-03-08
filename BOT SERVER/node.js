const mineflayer = require('mineflayer')

function startBot(){

const bot = mineflayer.createBot({
  host: "moonveilserver.falixsrv.me",
  port: 21938,
  username: "INI_BOT"
})

bot.on('spawn', () => {

console.log("Bot masuk server")

setInterval(() => {

  // lompat
  bot.setControlState('jump', true)
  setTimeout(()=>bot.setControlState('jump', false),500)

  // maju
  bot.setControlState('forward', true)
  setTimeout(()=>bot.setControlState('forward', false),1500)

  // belok random
  const yaw = Math.random()*Math.PI*2
  bot.look(yaw,0)

  // chat random
  const chat = ["halo", "lagi afk", "server bagus", "test"]
  bot.chat(chat[Math.floor(Math.random()*chat.length)])

}, 15000)

})

bot.on('end', () => {
console.log("disconnect, reconnect...")
setTimeout(startBot, 5000)
})

bot.on('error', console.log)

}

startBot()