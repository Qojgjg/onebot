import ccxt from 'ccxt';
import { MartinRobot } from './martin';
import secret from './.secret.json';
import fs from 'fs';

console.log('你好，世界');

async function main() {
  const binance = new ccxt.binance({
    apiKey: secret.API_KEY,
    secret: secret.SECRET_KEY,
    enableRateLimit: true,
    options: {
      defaultType: 'future',
      hedgeMode: true,
    },
  });

  const markets = await binance.fetchMarkets();

  markets
    .filter((market) => market.symbol.includes('LINK'))
    .forEach((market) => {
    console.log(market.symbol);
  });

  // await binance.fapiPrivatePostPositionSideDual({
  //   dualSidePosition: 'true',
  // });
  await binance.setLeverage(20, 'LINK/USDT');
  const rsp = await binance.createOrder(
    'LINK/USDT',
    'MARKET',
    'sell',
    2,
    undefined,
    {
      positionSide: 'SHORT',
    },
  );
  console.log(rsp);
  fs.writeFileSync('r.json', JSON.stringify(rsp, null, 2));

  const robot = new MartinRobot();
  robot.Long(0.001);
}

main();
