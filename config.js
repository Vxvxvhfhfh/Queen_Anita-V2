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
global.mongodb = process.env.MONGODB_URI || "";
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
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BYV2lpRktESEsxNk5jYWE5dXJyZDBnZy9lWlpaKzRScXdZRjJtUFUwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHQ0R0JJTWNHUzVsSEVYMDVpZ1N4M0F3WDNzV2FYbERERWxvQnJkNkdBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDREcvODFqeC85ZG50c2t2MlI2MWhVWVh0MWhWWjR2TXpPc2p3RXBJbUZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0NjYyTEI4OTd4WndZTHhFb1N4VGhBWjM1YUJJUXJCbzRHcTJZdjk5YzJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLb3FpdWNTbVBiY09FeTdsaEpKUWNEaXhlaTBzeElhdDR0V0dGQ212Rmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzWlFmUmNsYytqL0NzVXgyZ2VWWGphOXhYQ1dBM3VSSTdKaGlyTkhPMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NkWFV0VU9kODk5VGZrRjllTGh3VVpua1Y1cHNpWWJXTktyMjVjQlBWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3B0eXdJZ0FoMnZmQllJY04zL05uSkZoSTB0dG5pYXh3UWc5UjVIZEIzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUyQzEyVXlWbFpaY2FlOUNJZ0ZReWxLbGZrdVF5RkM5UWZKN3RLSjZaK1Q2UkFvQzJKMFRvUnhxRUhraTFZdkp0NDVsOGkza0RwTU41eFlZdHR4K2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJPYXlWQit0RC9pZWVkT1B2SHNzV0JKN1poR3puS0RObHNIZVZyTUt6SUl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvMVJqM0hEOVRiQzlxall0bzJoNEtRIiwicGhvbmVJZCI6IjI0MmNkN2U4LTljYzctNDE5Zi1hZTc1LTFlZGZiZjU0OTk2MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMN2NrTjI2ZDNmc1RYZm02VnE5R1g1L2ZhRVk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZiVk1kSlV5V1VyK1luRFB4Z0lLSnc1anZ0ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPNHlva0hFTVBCcHJVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRUcEZGbUlGTGRRN1cxYklMdzVubVVHSGlBSlE5YXBLdDF4NjRqTlBJMWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InF6dDlPNGZISTRQMG1qZ2FsQy85VzN3TDI0OFJQbHVaNUgzRUxUVTAwTmQ5WUIyZmhmSE9mcmJjYjNXSlYvTjlpNy9FL3J6RDRvUlVyRFpVc2V0T0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrNnVjQVlJbTlmUkdpSmtvYVUra1JJelF1Uzh1T3VZUG9lWGlRZ1RBS204aVdCYzdaQnRvZTFKRXA2cVFPVnp3S3NVdlRkcDJ4M0xmTVlVcGt6anRpdz09In0sIm1lIjp7ImlkIjoiMjI2NjM2ODU0Njg6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0ODE5ODU3NjAzODExNjoxNUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI2NjM2ODU0Njg6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUU2UlJaaUJTM1VPMXRXeUM4T1o1bEJoNGdDVVBXcVNyZGNldUl6VHlOWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzkyNzg1LCJsYXN0UHJvcEhhc2giOiIyV1VqbVoiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJvMCJ9"
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
