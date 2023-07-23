import { HDAccount, hexToBytes } from 'viem';
import { HDKey, hdKeyToAccount } from 'viem/accounts';

type HexString = `0x${string}`;

const computeHexString = (data: string): HexString => {
  //@todo: update with data from face scan and convert to hex string
  const len = 128;
  const hex = `0x${new Array(len + 1).join('1')}` as HexString;
  return hex;
};

const getWalletFromFaceData = (hexString: HexString): HDAccount => {
  const hdKey = HDKey.fromMasterSeed(hexToBytes(hexString));
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
