// You doesn't use command handler? Ok...
// Delete this Part \/

const discord = require('discord.js');

module.exports = {
  name: "truthordare",
  description: "Truth or dare game command",
  
  async run(client, message, args){

// Here ends ^
    
    
    let retruth = [
        "Are you love playing Minecraft?",
        "Do you love anyone?",
        "Do you have a girlfriend?",
        "You have a friend, and your friend has crime a shop. What do you do?",
        "Do you like Chels-bot?",
        "Have you Patents?",
        "Your friend says, do you have any money for buy candy. What do you do?",
        "Do you have any Problems in your life?",
        "What you were doing in bathroom?",
        "Did you ever see when your mother had s*x with your father?",
      ];
      let truth = (Math.floor(Math.random() * Math.floor(retruth.length)));
        
      let redare = [
        "Go to your mom and tell about your pranks!",
        'Say your friend: "I love you xD"',
        'Start your Computer and say loudly "I DON\'T LIKE YOU..."',
        "Go to your bed, and speak with your self!",
        "You must replace your yet profile to [this](https://imgur.com/gallery/IDc8oMJ)!",
      ];
      let dare = (Math.floor(Math.random() * Math.floor(redare.length)));
    
    // Embeds 
    
    const pagetruth = new discord.MessageEmbed()
    pagetruth.setColor("#EDC201")
    pagetruth.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    pagetruth.setTitle("You chouse: Truth")
    pagetruth.setDescription(`${retruth[truth]}\n☞ *You have spouk the truth, please tell it is!*`)
    pagetruth.setFooter("Chels-bot")
    pagetruth.setTimestamp()
    
    const pagedare = new discord.MessageEmbed()
    pagedare.setColor("#EDC201")
    pagedare.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    pagedare.setTitle("You chouse: Dare")
    pagedare.setDescription(`${redare[dare]}\n☞ *You have spouk the truth, please tell it is!*`)
    pagedare.setFooter("Chels-bot")
    pagedare.setTimestamp()
    
    // Embeds End
        
      try {
        const main = new discord.MessageEmbed()
        main.setColor("#EDC201")
        main.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
        main.setTitle("Truth or Dare game started!")
        main.setDescription("What you want to choice?\n\n**Truth** = 😇\n**Dare** = 👿\n\n*Please react with an emoji to contine!*")
        main.setFooter("Chels-bot")
        main.setTimestamp()
        
  var mainMessage = await message.channel.send(main)
      mainMessage.react("😇");
      mainMessage.react("👿");
      setTimeout(() => {
        mainMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        }, 150000);
    } catch (error) {
      console.error(error);
    }
    
    const filter = (reaction, user) => user.id !== message.client.user.id;
    const collector = mainMessage.createReactionCollector(filter, { time: 150000 });
    
    collector.on('collect', (reaction, reactionCollector) => {

      switch (reaction.emoji.name) {
    case "😇":
      mainMessage.edit(pagetruth)
      mainMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
      break;
      
    case "👿":
      mainMessage.edit(pagedare)
      mainMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
      break;
      
      default:
      break;
      }
    });
  }
}
