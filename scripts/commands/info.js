module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "Sheikh",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
𝐍𝐚𝐦𝐞       : 𝐀𝐦𝐢𝐧 𝐒𝐡𝐞𝐢𝐤𝐡
𝐀𝐠𝐞           : 𝟏𝟖+
𝐆𝐞𝐧𝐝𝐞𝐫   : 𝐌𝐚𝐥𝐞
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐆𝐦𝐚𝐢𝐥       : 𝐦𝐝𝐚𝐦𝐢𝐧𝐬𝐡𝐞𝐤𝐡𝟎𝟏@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐆𝐚𝐳𝐢𝐩𝐮𝐫, 𝐃𝐡𝐚𝐤𝐚
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐍𝐞𝐭𝐫𝐨𝐤𝐨𝐧𝐚, 𝐏𝐮𝐫𝐛𝐚𝐝𝐡𝐚𝐥𝐚`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000546960850/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
