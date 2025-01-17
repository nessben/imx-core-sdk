import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { ImmutableX, Config, CreateCollectionRequest } from '@imtbl/core-sdk';
import { requireEnvironmentVariable } from './libs/utils';

(async () => {
  const privateKey = requireEnvironmentVariable('PRIVATE_KEY');
  const alchemyKey = requireEnvironmentVariable('ALCHEMY_API_KEY');
  const wallet = new Wallet(privateKey);
  const provider = new AlchemyProvider('goerli', alchemyKey);
  const signer = wallet.connect(provider);

  const imxClient = new ImmutableX(Config.SANDBOX);

  const createCollectionParams: CreateCollectionRequest = {
    contract_address: '',
    name: '',
    owner_public_key: wallet.publicKey,
    project_id: 0,
  };

  try {
    const createCollectionResponse = await imxClient.createCollection(
      signer,
      createCollectionParams,
    );

    console.log(
      'createCollectionResponse',
      JSON.stringify(createCollectionResponse),
    );

    const getCollectionResponse = await imxClient.getCollection({
      address: createCollectionResponse.address,
    });

    console.log('getCollectionResponse', JSON.stringify(getCollectionResponse));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
