import { ImmutableX, Config, UnsignedOrderRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('mainnet');
  
  const imxClient = new ImmutableX(Config.PRODUCTION);


  const orderParams: UnsignedOrderRequest = {
    sell: {
      type: 'ETH',
      amount: '1500000000000000',
    },
    buy: {
      type: 'ERC721',
      tokenAddress: '0x0000995e7ab2aa13c5c735484f3b816de7c353f4',
      tokenId: '822',
    },
  };

  try {
    const orderResponse = await imxClient.createOrder(
      walletConnection,
      orderParams,
    );

    console.log('orderResponse', orderResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
