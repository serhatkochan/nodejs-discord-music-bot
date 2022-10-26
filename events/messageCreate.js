const client = require("../index");



client.on("messageCreate", async (message) => {
    var inMessage = message.content.toLocaleLowerCase();
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    ){
        if(inMessage === "selam" || inMessage === "sa" || inMessage === "selamun aleyküm"){
            if(message.author.username === "Serhat KOÇHAN"){
                return message.channel.send("Aleyküm selam Serhat abi");
            }
            else if(message.author.username === "HFT"){
                return message.channel.send("oo ezik zed aleyküm selam lan");
            }
            return message.channel.send("Aleyküm selam lan " + message.author.username);
        }
        else if(inMessage.startsWith("siü") || inMessage.startsWith("sıü") || message.content.startsWith("SİÜ")){
            if(message.author.bot){
                return;
            }
            return message.channel.send("SİÜÜÜüüüüüüüüÜÜÜüüÜüÜüÜüüÜÜÜÜ");
        }
    }
        return;


    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});
