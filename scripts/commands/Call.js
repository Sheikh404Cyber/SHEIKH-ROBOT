module.exports.config = {
    name: "call",
    version: "1.0.0",
    permission: 0,
    credits: "Amin Sheikh",
    prefix: true,
    description: "",
    category: "user",
    usages: "",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    if (!args[0]) return api.sendMessage("Please enter a phone number that start with 01×××××××××", event.threadID, event.messageID);

    // Display "Call Bombing Started.." message
    api.sendMessage("Call Bombing Started..", event.threadID, event.messageID);

    // Making request to the JSON API (assuming you are using Axios)
    const axios = global.nodemodule["axios"];
    let number = args.join(" ");
    await axios.get(`https://our-api.000webhostapp.com/api/call.php?number=${number}`);

    // No need to return any response here
    }
