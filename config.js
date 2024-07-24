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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
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

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tjeGx1aDlNNFNPODNnVk9DNzhETGZhOWxTWFA2Q043QUp6SmpkaWhXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3k3c1NYbmJiMUhtQ2FRbTVWUGQ1dVU1d2hEeUY2cUdCVWxmTDRxWTVCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ1IzZHkrS0p0U2dUQzRZZ3lnL2tWRFBZaXgvNEtoSkJoc0NxejNzTUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCTHhjaE1SbFc5Sng1RXc2dmtOeXovbXJ1NTYvaTgyNDlGK2g5ZlIwZ0EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOaEk0YlVFbkx6SmczMkd0MXNoZ1NmTWw2eVh2VjNnTzdlNGNOaEJOMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB2WFAydENqem44VzRzaGVYaXZPVGFJSDl6SVQzVWgxWW9GbDIxKzFibHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVOZkFONDg0WTlobXZ4enlsekhjNWRwbU5zRStKK01jcTZ0LzlRVjYwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakpXQVhkUVhvMTlYTUJpR1lrR3hzVHNnT2NaaGY4a05tMk1MQklrUUtHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5HWkhmOG42eU9XTTRJRXVvUktIc2k0N1hncUI3YlNSeW9vZ05mVDNtSEJDdStsc1phNlA1UmdLKzZTTzdNSmxiTFlCUUhNNG1Vc0dQd0pOWVlmcEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6InJ3SCt4U3ZqSE5pSjhKMXpNZXFzaGRwbE4rajRLR2NiMy8xaGdpUTVNSzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3MjA4MDk2NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzQ3MDA5ODRFMkFCRDg5QTk1Njc4RTRDMjEwNzNCOEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTgwMjI1OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3MjA4MDk2NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTIxMzkzQTQ5MUEwODU0MzgzNjJFM0Y1OTYwNDhGMTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTgwMjI1OH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ3REbGd3QTdRVzZ4WWVldFRGNmRDZyIsInBob25lSWQiOiI4MzI3NDRjZS0wOWYwLTRjYmYtOTFlOS01OWI2YWM5ZjNlNmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUG5nQXdDNnprZkhKN0lsT1hxbzRMYzFlTU00PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpSendTblJJUjVnVzBjUHNFWU9kK21icXJrST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZRlE3WktSSiIsIm1lIjp7ImlkIjoiNDA3MjA4MDk2NjU6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBbGJlcnRvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTHl1OWNFRUlLOGdyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpbmJQTHI3dU9Qc1ZIUkhFWDVva3JVWlF6Mm84U0xRb2tHU3NOZS84SEdjPSIsImFjY291bnRTaWduYXR1cmUiOiIzMVpicjdRUDdGRURGL3A2MHdkUUVRNmhCNGxVd1c2QkhUZzJtQmJ5dTZDd3Q1dW8xclhkRjBXcStWNUtESXVUaElKc1MwMHRUQURwblNaVzJzRGRDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUS92QlRUQXZybDBTOFRUWis0QWlsd2VDRyt2VmpGN1FVMzB6UXhnVjN5MzVya0NscHJ2ZnZPUWNVRG52RGI0U1VaS0duSUtERmhNT1VHRVgwOEZuQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDcyMDgwOTY2NTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllwMnp5Nis3amo3RlIwUnhGK2FKSzFHVU05cVBFaTBLSkJrckRYdi9CeG4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4MDIyNTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRnBqIn0=
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
