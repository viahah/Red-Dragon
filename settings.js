//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan02', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `𝐈 𝐀𝐌 𝐑𝐄𝐃 𝐃𝐑𝐀𝐆𝐎𝐍🔥♡
My Creator is 🅑🅨 🅢🅐🅓🅤🅦🅐` //Costomize Alive Message (type your message in `` )

global.owner = ['+94766358525'] //Owner number in aive msg
global.premium = ['+94765591171'] //Owner Number info
global.ownernomer = '+94766358525' //Owner Number <<<

global.ownername = 'ՏᎪᎠႮᏔᎪ...' //Owner Name
global.botname = ' 𝐑𝐄𝐃 𝐃𝐑𝐀𝐆𝐎𝐍' //Bot Name

global.button = '🤭Youtube📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://youtu.be/E5C-lrl_g9I' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '𝐑𝐄𝐃 𝐃𝐑𝐀𝐆𝐎𝐍' //Bot Pacage Name
global.author = '🅑🅨 🅢🅐🅓🅤🅦🅐' //Author Name
global.prefa = ['''!''','','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '❮❖❯' // Menu emoji
global.footer = '©_🅢🅐🅓🅤🅦🅐.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!',
    botAdmin: 'Bot wants to be an Admin',
    owner: 'Only Owner can use this!',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: '🔰Pleas Wait🔰...',
    error: 'Error!!! Maybe Api Key Is Expired!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
