global.you = ['6285850539404'] 
//Developer Bot
global.namebot = '「 ©Saxia˘Botz 」'
global.rowner = ['6285641142178', '6283805685278'] // Real Owner Bot
global.owner = ['6285641142178'] // Owner Bot
global.police = ['6283805685278'] // Police Bot
global.mods = ['6285641142178']  // Want some help?
global.prems = ['6283805685278'] // Premium user has unlimited limit

global.helper = ['6283805685278']
global.api = '45083080630f3830a5bed882'
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  males : 'https://malesin.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': 'pelitbetsihluwh',
}

global.socket = {
	qr: true,
	version: false,
	logger: true,
	retryMap: false,
	pendingMessage: false,
}

global.useMulti = false

global.media = 'https://telegra.ph/file/0cdbd37b45b1bc370463f.jpg'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/0cdbd37b45b1bc370463f.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

//global sosialmedia oscar Jangan Di Ganti Kalo Bisa!!
global.sc = "⻝ Nyari Sc? Cari Di YT coy Mau Buy Sc yg udah di fix? .owner"
global.sgc = 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
global.gc = '⻝ Nih Wajib Join GC Xia ^0^ https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
global.instagram = '⻝ Nih Mampir Yah https://bit.ly/SaxiaShop'
global.ytowner = '⻝ Nih Mampir Yah https://bit.ly/SaxiaShop'
global.gc2 = '⻝ Nih GC Random Xia^0^ https://chat.whatsapp.com/EUexY1yhxAB6wjD9ZP6MOU'
// Sticker WM
global.packname = 'wa.me/6283111136642'
global.author = '©Saxia˘Botz'
global.wm = '「 ©Saxia˘Botz 」'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
