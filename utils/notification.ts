import { fetchPrimaryENSandXMTP } from './airstack';
import { XMTP } from './xmtp';

const addresses = [
  // "0x53C61cfb8128ad59244E8c1D26109252ACe23d14"
  '0xc0deaf6bd3f0c6574a6a625ef2f22f62a5150eab',
];

export const transactionNotification = async (
  pk: string,
  address: string,
  msg: string,
) => {
  const message =
    'Face Pass signature verfied for ' + address + ' with message ' + msg;
  const xtmpAddresses = await fetchPrimaryENSandXMTP(addresses);
  for (const address of xtmpAddresses) {
    await XMTP.sendXMTPNotification({ pk, toEVMAddress: address, message });
    console.log('sent to ', address);
  }
};
