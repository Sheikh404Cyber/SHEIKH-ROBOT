module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "Sheikh",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000546960850") {
    var aid = ["100000546960850"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিও না আমিন_শেখ ভাইয়া এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয় মানুষ খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে 😿💔","আমিন_শেখ ভাইয়াকে এত মেনশন না দিয়ে তোমার বান্ধবি সাথে প্রেমও তো চাইলে করাই দিতে পারো 😼🥱","আমিন_শেখ ভাইয়াকে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরালামু তোমার বান্ধুবির 😩😁","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭","শেখ ভাইয়া এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল শেখ ভাইয়া রে একটা গফ দিতে পারো না। 😒😿","শেখ ভাইয়া কে Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স করোগা যাও 🥱","মেনশন দিসনা পারলে একটা গফ দে","চুমু খাওয়ার বয়সটা আমার শেখ ভাইয়া চকলেট 🍫 খেয়ে উড়িয়ে দিলো 😿💔"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
