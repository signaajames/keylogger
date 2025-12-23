import { log } from 'console';
import { EmbedBuilder, WebhookClient } from 'discord.js';
import fs from 'fs';

const webhook = new WebhookClient({
    url: 'https://discord.com/api/webhooks/nuhuh' //replace with your own
});



async function sendWebHook(filename) {
  try {
    const fileContent = fs.readFileSync(filename, 'utf8');

    //Turn file contents into ann array and then a string
    const chars = fileContent.split('\n');
    
    const embed = new EmbedBuilder()
      .setTitle(filename)
      .setDescription(
        '**File Content:** \n' + fileContent + '\n **Put together:** \n' + chars.join('')
      )
      .setColor(0x0099ff)
      .setTimestamp();

    await webhook.send({ embeds: [embed] });
  } catch (error) {
    console.error('Error sending webhook:', error);
  }
}

export default sendWebHook;
