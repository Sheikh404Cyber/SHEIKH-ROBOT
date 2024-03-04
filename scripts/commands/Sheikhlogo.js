const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "logo",
  version: "1.0.0",
  permssion: 0,
  credits: "Sheikh",
  description: "make name logo",
  category: "gfx",
  prefix: true,
  cooldowns: 2
};

module.exports.run = async function({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length >= 2 && args[0].toLowerCase() === "list") {
    let page = parseInt(args[1]);
    switch (page) {
      case 1:
        return api.sendMessage(
          `━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔰🎨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓 𝐍𝐀𝐌𝐄 𝐋𝐎𝐆𝐎 𝐋𝐈𝐒𝐓 🎨🔰\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🎨 ┈➤》Available Logo\n🎨 ┈➤》logo aglitch {text}\n🎨 ┈➤》logo Business {text}\n🎨 ┈➤》logo blood {text}\n🎨 ┈➤》logo blackpink {text}\n🎨 ┈➤》logo broken {text}\n🎨 ┈➤》logo  christmas {text}\n🎨 ┈➤》logo captainamerica {text}\n🎨 ┈➤》logo carbon {text}\n🎨 ┈➤》logo circuit {text}\n🎨 ┈➤》logo choror {text}\n🎨 ┈➤》logo christmas {text}\n🎨 ┈➤》logo  discovery {text}\n🎨 ┈➤》logo devil {text}\n🎨 ┈➤》logo dropwater {text}\n🎨 ┈➤》logo fiction{text}\n🎨 ┈➤》logo fire {text}\n🎨 ┈➤》logo  glass {text}\n🎨 ┈➤》logo greenhorror {text}\n🎨 ┈➤》logo imglitch {text}\n🎨 ┈➤》logo  layered {text}\n🎨 ┈➤》logo light {text}\n🎨 ┈➤》logo magma {text}\n🎨 ┈➤》logo metallic {text}\n🎨 ┈➤》logo neon {text}\n🎨 ┈➤》logo skeleton {text}\n🎨 ┈➤》logo sketch {text}\n🎨 ┈➤》logo stone {text}\n🎨 ┈➤》logo love {text}\n🎨 ┈➤》logo transformers {text}\n🎨 ┈➤》logo wall {text}\n🎨 ┈➤》logo naruto {text}\n🎨 ┈➤》logo dragonfireavater {text}\n🎨 ┈➤》logo  pubgavater {text} \n🎨 ┈➤》logo nightstars {text}\n🎨 ┈➤》logo sunlight {text}\n🎨 ┈➤》cloud {text}\n🎨 ┈➤》logo pig {text}\n🎨 ┈➤》logo  caper{text}\n🎨 ┈➤》logo {text}\n🎨 ┈➤》logo writestatus {text} \n🎨 ┈➤》logo horror {text}\n🎨 ┈➤》logo teamlogo {text}\n🎨 ┈➤》logo queen {text}\n🎨 ┈➤》logo beach {text}\n🎨 ┈➤》logo fbc3 {text}\n🎨 ┈➤》logo tatto {text}\n🎨 ┈➤》shirt3{text}\n🎨 ┈➤》logo oceansea {text}\n🎨 ┈➤》logo shirt4 {text} \n🎨 ┈➤》logo shirt5 {text}\n🎨 ┈➤》logo shirt6 {text}\n🎨 ┈➤》logo lovemsg {text}\n🎨 ┈➤》logo chstm {text}\n🎨 ┈➤》logo christmas2 {text}\n🎨 ┈➤》logo icetext {text}\n🎨 ┈➤》logo butterfly {text}\n🎨 ┈➤》logo  coffe {text}\n🎨 ┈➤》logo love {text}\n🎨 ┈➤》logo smoke {text} \n\n`,
          threadID,
          messageID
        );
      default:
        return api.sendMessage(
          `logo list available `,
          threadID,
          messageID
        );
    }
  }

  if (args.length < 2) {
    return api.sendMessage(
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nআপনি নাম এডিট এর জন্য .edit list লিখে সব লিস্ট দেখে নিতে পারেন। আবার .logo list 1 লিখে লগো লিস্টের সব লিস্ট দেখে নিতে পারেন। দুইটাই নাম এডিট এর কমান্ড।\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      threadID,
      messageID
    );
  }

  let type = args[0].toLowerCase();
  let text = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${text}.png`;
  let apiUrl, message;

      switch (type) {
        case "glass":
          apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=4&text=${text}`;
          message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫 {𝐆𝐥𝐚𝐬𝐬} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "business":
        apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=5&text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫 {𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
        break;
      case "wall":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/embossed?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫 {𝐖𝐚𝐥𝐥} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
       break;
      case "aglitch":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/aglitch?text=${text}&text2=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫 {𝐀𝐆𝐋𝐈𝐓𝐂𝐇} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺"; 
          break;
      case "berry":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/berry?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫 {𝐁𝐄𝐑𝐑𝐘} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "blackpink":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/blackpink?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑩𝑳𝑨𝑪𝑲𝑷𝑰𝑵𝑲} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "blood":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/blood?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑩𝑳𝑶𝑶𝑫} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "broken":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/broken?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑩𝑹𝑶𝑲𝑬𝑵} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
            break;
      case "smoke":
        apiUrl = `https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=0a637f457396bf3dcc21243b&text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑺𝑴𝑶𝑲𝑬} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";


        break;
      case "captainamerica":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/captainamerica?text=${test}&text2=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑪𝑨𝑷𝑻𝑨𝑰𝑵𝑨𝑴𝑬𝑹𝑰𝑪𝑨} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "carbon":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/carbon?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑪𝑨𝑹𝑩𝑶𝑵} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "choror":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/choror?text=${text}&text2=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑪𝑯𝑶𝑹𝑶𝑹} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "christmas":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/christmas?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑪𝑯𝑹𝑰𝑺𝑻𝑴𝑨𝑺} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "circuit":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/circuit?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑪𝑰𝑹𝑪𝑼𝑰𝑻} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "devil":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/devil?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑫𝑬𝑽𝑰𝑳} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "discovery":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/discovery?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑫𝑰𝑺𝑪𝑶𝑽𝑬𝑹𝒀} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "dropwater":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/dropwater?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑫𝑹𝑶𝑷𝑾𝑨𝑻𝑬𝑹} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "fiction":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/fiction?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑭𝑰𝑪𝑻𝑰𝑶𝑵} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "firework":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/firework?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑭𝑰𝑹𝑬𝑾𝑶𝑹𝑲} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "galaxy":
        apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=173&text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑮𝑨𝑳𝑨𝑿𝒀} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "glossy":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/glossy?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑮𝑳𝑶𝑺𝑺𝒀} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "glue":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/glue?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑮𝑳𝑼𝑬} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "gradient":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/gradient?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑮𝑹𝑨𝑫𝑰𝑬𝑵𝑻} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "greenhorror":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/greenhorror?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑮𝑹𝑬𝑬𝑵𝑯𝑶𝑹𝑹𝑶𝑹} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "spooky":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/spooky?text=${text}&text2=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑺𝑷𝑶𝑶𝑲𝒀} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "imglitch":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/imglitch?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑰𝑴𝑮𝑳𝑰𝑻𝑪𝑯} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "layered":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/layered?text=${text}&text2=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑳𝑨𝒀𝑬𝑹𝑬𝑫} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "light":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/light?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑳𝑰𝑮𝑯𝑻} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "magma":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/magma?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑴𝑨𝑮𝑴𝑨} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
      break;
      case "metallic":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/metallic?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑴𝑬𝑻𝑨𝑳𝑳𝑰𝑪} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
      break;
      case "neon":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/neon?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑵𝑬𝑶𝑵} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "skeleton":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/skeleton?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑺𝑲𝑬𝑳𝑬𝑻𝑶𝑵} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "sketch":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/sketch?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑺𝑲𝑬𝑻𝑪𝑯} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺"; 
          break;
      case "stone":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/stone?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑺𝑻𝑶𝑵𝑬} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";break;
      case "transformer":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/transformer?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑻𝑹𝑨𝑵𝑺𝑭𝑶𝑹𝑴𝑬𝑹} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "fire":
        apiUrl = `https://chards-bot-api.richardretadao1.repl.co/api/photooxy/flaming?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑭𝑰𝑹𝑬} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "naruto":
        apiUrl = `https://rest-api-2.faheem007.repl.co/api/photooxy/naruto?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝑵𝑨𝑹𝑼𝑻𝑶} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "dragonfire":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/dragonfire?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{Pubg} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "avater":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lolnew?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐀𝐕𝐀𝐓𝐀𝐑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "pubgavatar":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pubgavatar?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐏𝐔𝐁𝐆𝐀𝐕𝐀𝐓𝐀𝐑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "nightstars":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/nightstars?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐍𝐈𝐆𝐇𝐓𝐒𝐓𝐀𝐑𝐒} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "sunlight":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/sunlight?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐒𝐔𝐍𝐋𝐈𝐆𝐇𝐓} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "cloud":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cloud?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐂𝐋𝐎𝐔𝐃} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "pig":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pig?text=${text}`;
        message = "here's the [PIG] Logo created:";
          break;
      case "caper":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/caper?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐂𝐀𝐏𝐄𝐑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "horror":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/horror?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐇𝐎𝐑𝐑𝐎𝐑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "writestatus":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/writestatus?text=${text}&text2=Your%20Quotes%20In%20Herm`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐖𝐑𝐈𝐓𝐄𝐒𝐓𝐀𝐓𝐔𝐒} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "teamlogo":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/teamlogo?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐓𝐄𝐀𝐌𝐋𝐎𝐆𝐎} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "beach":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/beach?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐁𝐄𝐀𝐂𝐇} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "queen":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/queen?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐐𝐔𝐄𝐄𝐍} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "fbc3":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover3?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐅𝐁𝐂𝟑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "tatto":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/tatto?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐓𝐀𝐓𝐓𝐎} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "shirt3":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt3?text=${text}&text2=20`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐒𝐇𝐈𝐑𝐓𝟑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "oceansea":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/oceansea?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐒𝐄𝐀} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "shirt4":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt4?text=${text}&text2=20`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐒𝐇𝐈𝐑𝐓𝟒} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "shirt5":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt5?text=${text}&text2=20`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐒𝐇𝐈𝐑𝐓𝟓} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "shirt6":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt6?text=${text}&text2=20`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐒𝐇𝐈𝐑𝐓𝟔} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "lovemsg":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/lovemessage?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐋𝐎𝐕𝐄𝐌𝐒𝐆} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "chstm":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/Chirstmasvideo?text=${text}&type=video/mp4`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐂𝐇𝐈𝐑𝐓𝐌𝐀𝐒} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "christmas2":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/Christmas2?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐂𝐇𝐑𝐈𝐒𝐓𝐌𝐀𝐒} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "icetext":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/icetext?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐈𝐂𝐄𝐓𝐄𝐗𝐓} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "butterfly":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/butterfly?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐁𝐔𝐓𝐓𝐄𝐑𝐅𝐋𝐘} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
          break;
      case "coffe":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/coffecup?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐂𝐎𝐅𝐅𝐄𝐄} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "love":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lovetext?text=${text}`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐋𝐎𝐕𝐄𝐓𝐄𝐗𝐓} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";
           break;
      case "intro2":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/intro2?text=${text}&type=video/mp4`;
        message = "𝐄d𝐢𝐭 𝐘𝐨𝐮𝐫{𝐀𝐕𝐀𝐓𝐄𝐑} 𝐋𝐨𝐠𝐨 𝐒𝐇𝐄𝐈𝐊𝐇-𝐁𝟎𝐓✨🌺";


          break;
        default:
          return api.sendMessage(
            `━━━━━━━━━━━━━━━━━━━━━━━━━━\nআপনি নাম এডিট এর জন্য .edit list লিখে সব লিস্ট দেখে নিতে পারেন। আবার .logo list 1 লিখে লগো লিস্টের সব লিস্ট দেখে নিতে পারেন। দুইটাই নাম এডিট এর কমান্ড।\n━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            threadID,
            messageID
          );
      }

      try {
        let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(pathImg, Buffer.from(response.data, "binary"));

        return api.sendMessage(
          {
            attachment: fs.createReadStream(pathImg),
            body: message
          },
          threadID,
          () => fs.unlinkSync(pathImg)
        );
      } catch (err) {
        console.error(err);
        return api.sendMessage(
          `╭•┄┅════❁🌺❁════┅┄•╮\n\nAn error occurred while generating the logo. Please try again later.\n\n╰•┄┅════❁🌺❁════┅┄•╯`,
          threadID,
          messageID
    );
  }
};
