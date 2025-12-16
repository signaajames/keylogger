import { EmbedBuilder, WebhookClient } from 'discord.js';
import fs from 'fs';

const webhook = new WebhookClient({
    url: 'https://discord.com/api/webhooks/1450372291115618430/rok-7A2i-V3Uf1LqOMIQUqQqRtIhOfrHwRRtI9JpU-CsbSXo7X0uDINN5SgR7cJ7MVpn' //replace with your own
});

async function sendWebHook(filename) {
  try {
    const fileContent = fs.readFileSync(filename, 'utf8');
    
    const embed = new EmbedBuilder()
      .setTitle(filename)
      .setDescription(fileContent)
      .setColor(0x0099ff)
      .setTimestamp();

    await webhook.send({ embeds: [embed] });
  } catch (error) {
    console.error('Error sending webhook:', error);
  }
}

export default sendWebHook;