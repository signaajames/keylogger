# Key Detector (wait is this a key logger)

A small Node.js terminal app that toggles a “holding” mode, logs keys while active, and stores them in a file, and sends the file's contents to a Discord webhook after deactivated.

## Features
- Raw key capture in the terminal (no need to press Enter)
- Toggle holding mode with `/`
- Keys logged to `holding.txt` while holding is active
- On deactivation, the log is sent to the configured Discord webhook and the file is cleared
- Colored terminal output via `chalk`

## Requirements
- Node.js 18+
- Dependencies: `chalk`, `discord.js`

## Setup
Install packages:
`npm install`

Configure the webhook (edit `webhook.js` and set your Discord webhook URL):
`const webhook = new WebhookClient({ url: 'https://discord.com/api/webhooks/...' });`

Run it:
node main.js