import { HDAccount, hexToBytes, stringToHex } from 'viem';
import { HDKey, hdKeyToAccount } from 'viem/accounts';

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
