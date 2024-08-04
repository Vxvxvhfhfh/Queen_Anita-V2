//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Yun:<suhail>@cluster0.0ysskom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Burkina Faso";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/Azerty-07-31";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "63685468";
global.owner = process.env.OWNER_NUMBER || "63685468";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "log";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/PEvrx2K.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "63685468";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlhQURWNWxOd0crajhaU3VRRXFjUGlSY0hkUkloUEx0U20rZUg0ZE5WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmNsT3haczFXVGtFMnJQMU9QVW5mUWZmR3JIalB2TndGMG9QZDlMLzEzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRU1jemVnV0tPdzYyaVpSTWl2VTRnOFd2SmFlLzAvL3lpQ25IMkRjcWtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5TmJOMkN2NlJ2cXJsQk5uOHlMZG5pSzl2Q3Rva2lWWGRjOEVXQ1NtRTBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMRFgrR0Q4dTlCUHJ0NTBqZzRHaVN3eGRnS2VlRlVLaW5MdlRMNnhKSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJJYmV5SWJudEx1cDRNSjhKUW1OcjNYT0pPVlpEdlJGSEswUEUvay8vU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUQvVVpiNlJkZjFBZG1rRWdYTEc4aGo1UTVUeWdyY1c0TDdjeWF6UnIzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUIrdVZhZnI3UnBsWEpOS1R2VGlOdFZlYUo0OWthYzhHWHVTalpVS3BDST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFPWWNiekd2ZzN1MFBBQXMwMUhNMmxIUHJKdFdraWQ1L0pGSmtDN2tEeHQwS2VFWkdnYU9WMmk1OC8weWxoSEVFaGo3T3dkbk1FelBLQ3orSDRMVEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJGRmUvMThmdEsraDJtN0NsTzI3SXgxNnNteDc1OGtqbWtZV1FZZzY0UFpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2UnpHcXFFbFQwR0s5M0RuTFNoQXB3IiwicGhvbmVJZCI6ImQxZDk3MzcxLThkZjQtNDdjZi04ODFmLWJlYzlmN2I2ZTQ1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGY21KZ056c3JhWEk1UHVaUjk0T0VoM2ZUSVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJdnZVOHMrNXNGeE1tRzlSNmp1SzYvc1FWUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPNHlva0hFS2lEd0xVR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRUcEZGbUlGTGRRN1cxYklMdzVubVVHSGlBSlE5YXBLdDF4NjRqTlBJMWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNnNitpYlROOHJUN1pxamlqdWNXOFI1MEV0Zi9ERnN3UDM0eklxWFVsTFJuMHVGd0NDS0JTc1ZKWVY0Z1BtUDluaXhSS29GeGdRTVJlbnhZV3pZekNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvR014YmNFS1UrNjhhdG9UTmVKK09XYXhadkZ6SXF3YTZhUEVBWnVGZWVDTUJ4RG1HbXVMMG41VHlaU2U5RWFyaTB5WWN0dDN1V1Fpd09sS2hQTFhEQT09In0sIm1lIjp7ImlkIjoiMjI2NjM2ODU0Njg6MTZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0ODE5ODU3NjAzODExNjoxNkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI2NjM2ODU0Njg6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUU2UlJaaUJTM1VPMXRXeUM4T1o1bEJoNGdDVVBXcVNyZGNldUl6VHlOWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODEwODA1LCJsYXN0UHJvcEhhc2giOiIyV1VqbVoiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJvMCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "€",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "EOZA",
  author: process.env.PACK_AUTHER || "EOZA",
  packname: process.env.PACK_NAME || "G H E N O",
  botname: process.env.BOT_NAME || "GHENO BOT",
  ownername: process.env.OWNER_NAME || "Gheno",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Gheno").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
