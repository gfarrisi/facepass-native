import { createWalletClient, hexToBytes, http } from 'viem';
import { HDKey, hdKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

type HexString = `0x${string}`;

const convertFaceData = (data: any): HexString => {
  //@todo: update with data from face scan and convert to hex string
  const len = 128;
  const hex = `0x${new Array(len + 1).join('0')}` as HexString;
  return hex;
};

const getWalletFromFaceData = (hexString: HexString) => {
  const hdKey = HDKey.fromMasterSeed(hexToBytes(hexString));
  //convert face data to usable array
  const account = hdKeyToAccount(hdKey);
  return account;
};

export const signMessage = (faceData: any, message: string) => {
  const hex = convertFaceData(faceData);
  const acccount = getWalletFromFaceData(hex);

  //   acccount.signMessage({ message: message });
};
