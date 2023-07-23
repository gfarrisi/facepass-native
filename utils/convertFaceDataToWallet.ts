import { ethers } from 'ethers';
import { HDAccount, hexToBytes, stringToHex } from 'viem';
import { HDKey, hdKeyToAccount } from 'viem/accounts';
import Safe, { EthersAdapter } from '@safe-global/protocol-kit';

type HexString = `0x${string}`;

const computeHexString = (data: string): HexString => {
  //@todo: update with data from face scan and convert to hex string
  const len = 64;
  const hex = stringToHex(data, { size: len });
  return hex;
};

const getWalletFromFaceData = (hexString: HexString): HDAccount => {
  const seed = hexToBytes(hexString);
  const hdKey = HDKey.fromMasterSeed(seed);
  //convert face data to usable array
  const account = hdKeyToAccount(hdKey);
  return account;
};

export const connectToWallet = (faceData: string): HDAccount => {
  const hex = computeHexString(faceData);
  const acccount = getWalletFromFaceData(hex);
  return acccount;
};

export const signMessage = async (
  faceData: string,
  message?: string,
): Promise<HexString> => {
  const acccount = connectToWallet(faceData);
  const signedMessage = await acccount.signMessage({ message: message ?? '' });
  return signedMessage;
};

export const createTransaction = async (
  faceData: string,
  params: { to: string; value: string; data: string },
) => {
  try {
    const rpcUrl =
      'https://delicate-solitary-arrow.ethereum-goerli.discover.quiknode.pro/380d1d7b867ca55fc31ef04300580c9fd2ef2e11';

    const wallet = connectToWallet(faceData);

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    // @ts-ignore
    const signer = new ethers.Wallet(wallet.getHdKey()?.privKey, provider);

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeSdk = await Safe.create({
      ethAdapter,
      safeAddress: '0xFf00000000000000000000000000000000042069',
    });

    const safeTransactionData = {
      to: params.to,
      value: params.value,
      data: params.data,
    };

    const safeTransaction = await safeSdk.createTransaction({
      safeTransactionData,
    });

    const sentTx = await safeSdk.signTransaction(safeTransaction);

    return sentTx;
  } catch (err) {
    console.log(
      `❌ Failed to send transaction: ${(err as any)?.message || ''}`,
    );
    return;
  }
};

export const sendTransaction = async (faceData: string) => {
  const acccount = connectToWallet(faceData);
  const signedMessage = await acccount.signMessage({
    // @ts-ignore
    account: acccount.address as any,
    to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    value: 100000n,
  });
  return signedMessage;
};
