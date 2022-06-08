import ccxt from 'ccxt';
import { MartinRobot } from './martin';

console.log('你好，世界');

async function main() {
  const binance = new ccxt.binance({
    // apiKey: Secret.API_KEY,
    // secret: Secret.SECRET_KEY,
    enableRateLimit: true,
    options: {
      defaultType: 'future',
    },
  });


  const robot = new MartinRobot();
  robot.Long(0.001);
}

main();
