//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: http://www.youtube.com/@techgod143
//Instagram: @techgod143
//Telegram: t.me/techgod143
//GitHub: @techgod143
//WhatsApp: +917466008456
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@techgod143

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "242053893645"
global.ownername = "HADESshadow"
global.ytname = "YT: SASAKI-COMPAGNIE"
global.socialm = "GitHub: HADESshadow"
global.location = "India, UP, rampur"

global.ownernumber = '242053893645'  //creator number
global.ownername = 'Jin SASAKI' //owner name
global.botname = 'ANONYMUS-BUG' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '🦄JinSASAKI\n\nContact: +242053893645'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Anonymous Bug  Inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41'

//custom prefix
global.prefa = ['','!','.']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: '*_Done successfully._*',
    prem: '*_This feature can be used by Jinsasaki or premium user only_*',
    admin: '*_This feature can be used by Jinsasaki or admin only_*',
    botAdmin: '*_This feature can only be used when the bot is a group admin_* ',
    owner: '*_This feature can be used by Jinsasaki or owner only_*',
    group: '*_This feature is only for groups_*',
    private: '*_This feature is only for private chats_*',
    wait: '*_In process bro..._*',    
    error: '*_Error!_*',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb2.gif')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})