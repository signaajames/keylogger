import chalk from 'chalk';
import fs from 'fs';
import sendWebHook from './webhook.js'

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

const pressedKeys = new Set();

let holding = false;

// start listening for key presses
process.stdin.on('data', (key) => {
  // ^C to exit
  if (key === '\u0003') {
    process.exit();
  }

  if (key === '/') {
    const wasHolding = holding;
    holding = !holding;
    console.log(holding ? chalk.green('Activated') : chalk.red('Deactivated'));

    if (wasHolding && !holding) {
      sendWebHook('holding.txt');
      fs.writeFileSync('holding.txt', '')
    }
    return;
  }
  
  // detect the key that was pressed down
  if (!holding) {
    console.log(`Key pressed: ${key}`);
    pressedKeys.add(key);
  } else {
    console.log(`Key pressed: ${chalk.blue(key)}`);
    fs.appendFileSync('holding.txt', `${key}\n`);
  }
});