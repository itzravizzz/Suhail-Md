const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_30_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllnK1o2YWtDVHNReHhUT3pCbWo2N3ZYS21HQ25FV3NlaGJhV1hyamhHSjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl94VUxJZ3dGUU5PZmlkX2pYWUh4S1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWVkMGVlOWYtOTU2NS00MWU1LTk0ZGItOTU1ZTdiOTIwNTNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDE5MSxcbiAgICAgIDgsXG4gICAgICAyMDUsXG4gICAgICA1OCxcbiAgICAgIDY1LFxuICAgICAgNyxcbiAgICAgIDExMSxcbiAgICAgIDE0MCxcbiAgICAgIDksXG4gICAgICA5NixcbiAgICAgIDMwLFxuICAgICAgMjYsXG4gICAgICAxNjQsXG4gICAgICAxNzIsXG4gICAgICA5NSxcbiAgICAgIDg5LFxuICAgICAgODgsXG4gICAgICAxNjUsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxNDAsXG4gICAgICAyMDMsXG4gICAgICAxNDIsXG4gICAgICAxODAsXG4gICAgICAyMTQsXG4gICAgICAxODIsXG4gICAgICAyMjYsXG4gICAgICAxMjUsXG4gICAgICAxMTksXG4gICAgICAxNCxcbiAgICAgIDE2NSxcbiAgICAgIDc3LFxuICAgICAgODUsXG4gICAgICA4NSxcbiAgICAgIDE2MSxcbiAgICAgIDIxMyxcbiAgICAgIDE3MyxcbiAgICAgIDEzMixcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AvZm12QUdFTGJWOUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSkdNUEpnTTVFNU8vSXM0OGVmNzF3Q09rczJ1T0Z0eVZwRTk3S1NTM0ZHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJneTR5R3l0dDhYYzZRM3JWbjRKbmhBUmFXWnkwRWc1MHYyT2ZCU2pRazJJNXR6cjdDV1BkSkZmS1JGU3o1UWF0ZENFVnNyazBhME1KcTN5OG9IL0xBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyRVJQZG1KZlg2QlFVbHUrZjdvU1p1NEI1d29FRGxZTzVFKzdSSnZoZ0RVZUh2eEhxZFM2c1Rna1lFM0pjNE9Cc3BUS0VoRVRwbGhOeVVSVnJoRHpDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg2MTgxOTUzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJyYXZpc2hhblwiLFxuICAgIFwibGlkXCI6IFwiMjc2NTE5MDM3NDYwNTQ1OjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NjE4MTk1MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTczODE4MThcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
